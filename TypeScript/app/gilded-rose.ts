enum ItemNames {
  SULFURAS = "Sulfuras, Hand of Ragnaros",
  AGED_BRIE = "Aged Brie",
  BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert",
  CONJURED = "Conjured",
}

const MIN_QUALITY = 0;
const MAX_QUALITY = 50;

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  constructor(public items: Item[] = []) {}

  updateQuality() {
    this.items.forEach((item) => {
      getUpdater(item)(item);
    });

    return this.items;
  }
}

function getUpdater(item: Item) {
  if (item.name === ItemNames.SULFURAS) {
    return updateSulfuras;
  }
  if (item.name === ItemNames.AGED_BRIE) {
    return updateAgedBrie;
  }
  if (item.name === ItemNames.BACKSTAGE) {
    return updateBackstage;
  }
  if (item.name.includes(ItemNames.CONJURED)) {
    return updateConjured;
  }

  return updateCommon;
}

function updateSulfuras(item: Item) {
  return;
}

function updateAgedBrie(item: Item) {
  decreaseSellIn(item);

  increaseQuality(item);

  if (hasSellInExpired(item)) {
    increaseQuality(item);
  }

  if (isHigherThenMaxQuality(item)) {
    setMaxQuality(item);
  }
}

function updateBackstage(item: Item) {
  decreaseSellIn(item);

  if (hasSellInExpired(item)) {
    setMinQuality(item);
    return;
  }

  increaseQuality(item);

  if (item.sellIn < 10) {
    increaseQuality(item);
  }

  if (item.sellIn < 5) {
    increaseQuality(item);
  }

  if (isHigherThenMaxQuality(item)) {
    setMaxQuality(item);
  }
}

function updateCommon(item: Item) {
  decreaseSellIn(item);

  decreaseQuality(item);

  if (hasSellInExpired(item)) {
    decreaseQuality(item);
  }

  if (isLowerThanMinQuality(item)) {
    setMinQuality(item);
  }
}

function updateConjured(item: Item) {
  decreaseSellIn(item);

  decreaseQuality(item);
  decreaseQuality(item);

  if (hasSellInExpired(item)) {
    decreaseQuality(item);
    decreaseQuality(item);
  }

  if (isLowerThanMinQuality(item)) {
    setMinQuality(item);
  }
}

abstract class InventoryItem {
  constructor(public item: Item) {}

  protected decreaseSellIn = () => {
    this.item.sellIn--;
  };

  protected increaseQuality = () => {
    this.item.quality++;
  };

  protected decreaseQuality = () => {
    this.item.quality--;
  };

  protected hasSellInExpired = () => {
    return this.item.sellIn < 0;
  };

  protected isLowerThanMinQuality = () => {
    return this.item.quality < MIN_QUALITY;
  };

  protected setMinQuality = () => {
    this.item.quality = MIN_QUALITY;
  };

  protected isHigherThenMaxQuality = () => {
    return this.item.quality > MAX_QUALITY;
  };

  protected setMaxQuality = () => {
    this.item.quality = MAX_QUALITY;
  };

  abstract update();
}

class AgedBrieItem extends InventoryItem {
  constructor(public item: Item) {
    super(item);
  }

  update() {
    this.decreaseSellIn();

    this.increaseQuality();

    if (this.hasSellInExpired()) {
      this.increaseQuality();
    }

    if (this.isHigherThenMaxQuality()) {
      this.setMaxQuality();
    }
  }
}

// UTILIDADES

const decreaseSellIn = (item: Item) => {
  item.sellIn--;
};

const increaseQuality = (item: Item) => {
  item.quality++;
};

const decreaseQuality = (item: Item) => {
  item.quality--;
};

const hasSellInExpired = (item: Item) => {
  return item.sellIn < 0;
};

const isLowerThanMinQuality = (item: Item) => {
  return item.quality < MIN_QUALITY;
};

const setMinQuality = (item: Item) => {
  item.quality = MIN_QUALITY;
};

const isHigherThenMaxQuality = (item: Item) => {
  return item.quality > MAX_QUALITY;
};

const setMaxQuality = (item: Item) => {
  item.quality = MAX_QUALITY;
};
