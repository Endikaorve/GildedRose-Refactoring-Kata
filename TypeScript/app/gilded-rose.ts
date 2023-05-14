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
      updateQuality1(item);
      updateSellIn(item);
      updateQuality2(item);
    });

    return this.items;
  }
}

const updateQuality1 = (item: Item) => {
  if (item.name === "Sulfuras, Hand of Ragnaros") {
    return;
  }

  if (
    item.name !== "Aged Brie" &&
    item.name !== "Backstage passes to a TAFKAL80ETC concert"
  ) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
    return;
  }

  if (item.quality < 50) {
    item.quality = item.quality + 1;
    if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
      if (item.sellIn < 11) {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
      if (item.sellIn < 6) {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }
  }
};

const updateSellIn = (item: Item) => {
  if (item.name != "Sulfuras, Hand of Ragnaros") {
    item.sellIn = item.sellIn - 1;
  }
};

const updateQuality2 = (item: Item) => {
  if (item.sellIn < 0) {
    if (item.name != "Aged Brie") {
      if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality > 0) {
          if (item.name != "Sulfuras, Hand of Ragnaros") {
            item.quality = item.quality - 1;
          }
        }
      } else {
        item.quality = item.quality - item.quality;
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
  }
};
