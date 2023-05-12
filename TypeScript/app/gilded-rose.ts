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
        const sulfuras = new SulfurasItem(item);
        sulfuras.upgrade();
        return;
      }

      if (item.name === "Aged Brie") {
        const agedBrie = new AgedBrieItem(item);
        agedBrie.upgrade();
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

abstract class InventoryItem {
  constructor(public item: Item) {}

  abstract upgrade();
}

class SulfurasItem extends InventoryItem {
  constructor(item: Item) {
    super(item);
  }

  upgrade() {
    return;
  }
}

class AgedBrieItem extends InventoryItem {
  constructor(item: Item) {
    super(item);
  }

  upgrade() {
    this.item.sellIn = this.item.sellIn - 1;

    this.item.quality = this.item.quality + 1;

    if (this.item.sellIn < 0) {
      this.item.quality = this.item.quality + 1;
    }

    if (this.item.quality > 50) {
      this.item.quality = 50;
    }
  }
}
