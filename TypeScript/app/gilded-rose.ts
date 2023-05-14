enum ItemNames {
  SULFURAS = "Sulfuras, Hand of Ragnaros",
  AGED_BRIE = "Aged Brie",
  BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert",
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
      update(item);
    });

    return this.items;
  }
}

const update = (item: Item) => {
  if (item.name === ItemNames.SULFURAS) {
    updateSulfuras(item);
    return;
  }

  if (item.name === ItemNames.AGED_BRIE) {
    updateAgedBrie(item);
    return;
  }

  if (item.name === ItemNames.BACKSTAGE) {
    updateBackstage(item);
    return;
  }

  // Item común

  decreaseSellIn(item);

  decreaseQuality(item);

  if (hasSellInExpired(item)) {
    decreaseQuality(item);
  }

  if (isLowerThanMinQuality(item)) {
    setMinQuality(item);
  }
};

const updateSulfuras = (item: Item) => {
  return;
};

const updateAgedBrie = (item: Item) => {
  decreaseSellIn(item);

  increaseQuality(item);

  if (hasSellInExpired(item)) {
    increaseQuality(item);
  }

  if (isHigherThenMaxQuality(item)) {
    setMaxQuality(item);
  }
};

const updateBackstage = (item: Item) => {
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
};

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
