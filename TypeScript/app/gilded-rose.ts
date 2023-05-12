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
      this.getItemClass(item).upgrade();
    });

    return this.items;
  }

  private getItemClass(item: Item) {
    if (item.name === "Sulfuras, Hand of Ragnaros") {
      return new SulfurasItem(item);
    }

    if (item.name === "Aged Brie") {
      return new AgedBrieItem(item);
    }

    if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      return new BackstageItem(item);
    }

    if (item.name.includes("Conjured")) {
      return new ConjuredItem(item);
    }

    return new CommonItem(item);
  }
}

abstract class InventoryItem {
  private MIN_QUALITY = 0;
  private MAX_QUALITY = 50;

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
    this.item.quality = this.MIN_QUALITY;
  }

  protected forceQualityIntoValidRange() {
    this.item.quality = Math.max(
      this.MIN_QUALITY,
      Math.min(this.MAX_QUALITY, this.item.quality)
    );
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

    this.forceQualityIntoValidRange();
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

    this.forceQualityIntoValidRange();
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

    this.forceQualityIntoValidRange();
  }
}

class ConjuredItem extends InventoryItem {
  constructor(item: Item) {
    super(item);
  }

  upgrade() {
    this.decreaseSellIn();

    this.decreaseQualityBy(2);

    if (this.isAfterDeadline()) {
      this.decreaseQualityBy(2);
    }

    this.forceQualityIntoValidRange();
  }
}
