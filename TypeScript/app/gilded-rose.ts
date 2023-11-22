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
      updateSellIn(item);
      updateQuality(item);
    });

    return this.items;
  }
}

const updateSellIn = (item: Item) => {
  if (item.name === "Sulfuras, Hand of Ragnaros") {
    return;
  }

  item.sellIn = item.sellIn - 1;
};

const updateQuality = (item: Item) => {
  if (item.name === "Sulfuras, Hand of Ragnaros") {
    return;
  }

  if (item.name === "Aged Brie") {
    if (item.quality >= 50) {
      return;
    }

    item.quality = item.quality + 1;

    if (item.sellIn < 0) {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }

    return;
  }

  if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
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

    return;
  }

  // Item común
  if (item.quality > 0) {
    item.quality = item.quality - 1;
  }

  if (item.sellIn < 0) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
  }
};
