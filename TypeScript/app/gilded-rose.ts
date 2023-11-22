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
  constructor(public items: Array<Item> = []) {}

  updateQuality() {
    this.items.forEach((item) => {
      getUpdater(item)(item);
    });

    return this.items;
  }
}

const getUpdater = ({ name }: Item) => {
  if (name === "Sulfuras, Hand of Ragnaros") {
    return updateSulfuras;
  }

  if (name === "Aged Brie") {
    return updateAgedBrie;
  }

  if (name === "Backstage passes to a TAFKAL80ETC concert") {
    return updateBackstage;
  }

  return updateCommon;
};

const updateSulfuras = (_: Item) => {
  return;
};

const updateAgedBrie = (item: Item) => {
  item.sellIn = item.sellIn - 1;

  if (item.quality >= 50) {
    return;
  }

  item.quality = item.quality + 1;

  if (item.sellIn < 0) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }
};

const updateBackstage = (item: Item) => {
  item.sellIn = item.sellIn - 1;

  if (item.quality >= 50) {
    return;
  }

  item.quality = item.quality + 1;

  if (item.sellIn < 10) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  if (item.sellIn < 5) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  if (item.sellIn < 0) {
    item.quality = 0;
  }
};

const updateCommon = (item: Item) => {
  item.sellIn = item.sellIn - 1;

  if (item.quality > 0) {
    item.quality = item.quality - 1;
  }

  if (item.sellIn < 0) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
  }
};
