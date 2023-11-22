import { createUpdater } from "./createUpdater";

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
      createUpdater(item)(item);
    });

    return this.items;
  }
}

const MIN_QUALITY = 0;
const MAX_QUALITY = 50;

export const decreaseSellIn = (item: Item) => {
  item.sellIn -= 1;
};

export const increaseQuality = (item: Item) => {
  item.quality += 1;
};

export const decreaseQuality = (item: Item) => {
  item.quality -= 1;
};

export const limitQualityIntoValidRange = (item: Item) => {
  if (item.quality > MAX_QUALITY) {
    item.quality = MAX_QUALITY;
  }

  if (item.quality < MIN_QUALITY) {
    setMinQuality(item);
  }
};

export const setMinQuality = (item: Item) => {
  item.quality = MIN_QUALITY;
};

export const hasExpired = (item: Item) => {
  return item.sellIn < 0;
};
