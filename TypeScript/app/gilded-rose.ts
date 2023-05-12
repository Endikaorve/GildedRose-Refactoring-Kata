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
        const backstage = new BackstageItem(item);
        backstage.upgrade();
        return;
      }

      const common = new CommonItem(item);
      common.upgrade();
    });

    return this.items;
  }
}

abstract class InventoryItem {
  constructor(public item: Item) {}

  protected decreaseSellIn() {
    this.item.sellIn -= 1;
  }

  protected isAfterDeadline() {
    return this.item.sellIn < 0;
  }

  protected increaseQualityBy(quantity: number) {
    this.item.quality += quantity;
  }

  protected decreaseQualityBy(quantity: number) {
    this.item.quality -= quantity;
  }

  protected setMinQuality() {
    this.item.quality = 0;
  }

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
    this.decreaseSellIn();

    this.increaseQualityBy(1);

    if (this.isAfterDeadline()) {
      this.increaseQualityBy(1);
    }

    if (this.item.quality > 50) {
      this.item.quality = 50;
    }
  }
}

class BackstageItem extends InventoryItem {
  constructor(item: Item) {
    super(item);
  }

  upgrade() {
    this.decreaseSellIn();

    if (this.isAfterDeadline()) {
      this.setMinQuality();

      return;
    }

    this.increaseQualityBy(1);

    if (this.areDaysUntilSellInLessThan(11)) {
      this.increaseQualityBy(1);
    }

    if (this.areDaysUntilSellInLessThan(6)) {
      this.increaseQualityBy(1);
    }

    if (this.item.quality > 50) {
      this.item.quality = 50;
    }
  }

  private areDaysUntilSellInLessThan(days: number) {
    return this.item.sellIn < days;
  }
}

class CommonItem extends InventoryItem {
  constructor(item: Item) {
    super(item);
  }

  upgrade() {
    this.decreaseSellIn();

    this.decreaseQualityBy(1);

    if (this.isAfterDeadline()) {
      this.decreaseQualityBy(1);
    }

    if (this.item.quality < 0) {
      this.item.quality = 0;
    }
  }
}
