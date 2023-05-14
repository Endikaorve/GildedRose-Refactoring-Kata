enum ItemNames {
  SULFURAS = "Sulfuras, Hand of Ragnaros",
  AGED_BRIE = "Aged Brie",
  BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert",
  CONJURED = "Conjured",
}

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
  return item.quality < 0;
};

const setMinQuality = (item: Item) => {
  item.quality = 0;
};

const isHigherThenMaxQuality = (item: Item) => {
  return item.quality > 50;
};

const setMaxQuality = (item: Item) => {
  item.quality = 50;
};
