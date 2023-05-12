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
  constructor(public items = [] as Array<Item>) {}

  updateQuality() {
    this.items.forEach((item) => {
      if (item.name === "Sulfuras, Hand of Ragnaros") {
        return;
      }

      updateSellIn(item);
      updateQuality1(item);
      updateQuality2(item);
    });

    return this.items;
  }
}

const updateSellIn = (item: Item) => {
  item.sellIn = item.sellIn - 1;
};

const updateQuality1 = (item: Item) => {
  if (item.name === "Aged Brie") {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }

    return;
  }

  if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
    item.quality = item.quality + 1;

    if (item.sellIn < 11) {
      item.quality = item.quality + 1;
    }
    if (item.sellIn < 6) {
      item.quality = item.quality + 1;
    }

    if (item.quality > 50) {
      item.quality = 50;
    }

    return;
  }

  // Item común
  if (item.quality > 0) {
    item.quality = item.quality - 1;
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
