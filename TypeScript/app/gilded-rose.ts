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
      update(item);
    });

    return this.items;
  }
}

const updateSulfuras = (_: Item) => {
  return;
};

const updateAgedBrie = (item: Item) => {
  item.sellIn = item.sellIn - 1;

  if (item.quality >= 50) {
    return;
  }

  item.quality = item.quality + 1;

  if (item.sellIn < 0) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }
};

const updateBackstage = (item: Item) => {
  item.sellIn = item.sellIn - 1;

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
};

const update = (item: Item) => {
  if (item.name === "Sulfuras, Hand of Ragnaros") {
    updateSulfuras(item);
    return;
  }

  if (item.name === "Aged Brie") {
    updateAgedBrie(item);
    return;
  }

  if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
    updateBackstage(item);
    return;
  }

  // Item común
  item.sellIn = item.sellIn - 1;

  if (item.quality > 0) {
    item.quality = item.quality - 1;
  }

  if (item.sellIn < 0) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
  }
};
