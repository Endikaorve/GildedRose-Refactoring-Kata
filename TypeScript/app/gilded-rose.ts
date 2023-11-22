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

type Updater = (item: Item) => void;

const getUpdater = ({ name }: Item): Updater => {
  if (name === "Sulfuras, Hand of Ragnaros") {
    return updaterSulfuras;
  }

  if (name === "Aged Brie") {
    return updaterAgedBrie;
  }

  if (name === "Backstage passes to a TAFKAL80ETC concert") {
    return updaterBackstage;
  }

  return updaterCommon;
};

const updaterSulfuras: Updater = (_: Item) => {
  return;
};

const updaterAgedBrie: Updater = (item: Item) => {
  decreaseSellIn(item);

  increaseQuality(item);

  if (hasExpired(item)) {
    increaseQuality(item);
  }

  limitQualityIntoValidRange(item);
};

const updaterBackstage: Updater = (item: Item) => {
  decreaseSellIn(item);

  if (hasExpired(item)) {
    item.quality = 0;
    return;
  }

  increaseQuality(item);

  if (item.sellIn < 10) {
    increaseQuality(item);
  }

  if (item.sellIn < 5) {
    increaseQuality(item);
  }

  limitQualityIntoValidRange(item);
};

const updaterCommon: Updater = (item: Item) => {
  decreaseSellIn(item);

  decreaseQuality(item);

  if (hasExpired(item)) {
    decreaseQuality(item);
  }

  limitQualityIntoValidRange(item);
};

const decreaseSellIn = (item: Item) => {
  item.sellIn = item.sellIn - 1;
};

const increaseQuality = (item: Item) => {
  item.quality = item.quality + 1;
};

const decreaseQuality = (item: Item) => {
  item.quality = item.quality - 1;
};

const limitQualityIntoValidRange = (item: Item) => {
  if (item.quality > 50) {
    item.quality = 50;
  }

  if (item.quality < 0) {
    item.quality = 0;
  }
};

const hasExpired = (item: Item) => {
  return item.sellIn < 0;
};
