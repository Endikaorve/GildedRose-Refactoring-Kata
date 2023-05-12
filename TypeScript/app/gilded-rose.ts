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
        this.updateSulfuras(item);
        return;
      }

      if (item.name === "Aged Brie") {
        this.updateAgedBrie(item);
        return;
      }

      if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        this.updateBackstage(item);
        return;
      }

      this.updateCommon(item);
    });

    return this.items;
  }

  private updateSulfuras(item: Item) {}

  private updateAgedBrie(item: Item) {
    item.sellIn = item.sellIn - 1;

    item.quality = item.quality + 1;

    if (item.sellIn < 0) {
      item.quality = item.quality + 1;
    }

    if (item.quality > 50) {
      item.quality = 50;
    }
  }

  private updateBackstage(item: Item) {
    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      item.quality = 0;

      return;
    }

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
  }

  private updateCommon(item: Item) {
    item.sellIn = item.sellIn - 1;

    item.quality = item.quality - 1;

    if (item.sellIn < 0) {
      item.quality = item.quality - 1;
    }

    if (item.quality < 0) {
      item.quality = 0;
    }
  }
}
