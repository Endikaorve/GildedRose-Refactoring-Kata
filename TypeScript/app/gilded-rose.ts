import { Updater } from "./Updater/Updater.models";
import { getUpdater } from "./getUpdater";

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

export const updaterBackstage: Updater = (item: Item) => {
  decreaseSellIn(item);

  if (hasExpired(item)) {
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

  limitQualityIntoValidRange(item);
};

export const updaterCommon: Updater = (item: Item) => {
  decreaseSellIn(item);

  decreaseQuality(item);

  if (hasExpired(item)) {
    decreaseQuality(item);
  }

  limitQualityIntoValidRange(item);
};

export const updaterConjured: Updater = (item: Item) => {
  decreaseSellIn(item);

  decreaseQuality(item);
  decreaseQuality(item);

  if (hasExpired(item)) {
    decreaseQuality(item);
    decreaseQuality(item);
  }

  limitQualityIntoValidRange(item);
};

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
