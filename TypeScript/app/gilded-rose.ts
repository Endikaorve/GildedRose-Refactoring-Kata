enum ItemNames {
  SULFURAS = "Sulfuras, Hand of Ragnaros",
  AGED_BRIE = "Aged Brie",
  BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert",
}

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
      update(item);
      updateQuality2(item);
    });

    return this.items;
  }
}

const update = (item: Item) => {
  if (item.name === ItemNames.SULFURAS) {
    return;
  }

  if (item.name === ItemNames.AGED_BRIE) {
    if (item.quality >= 50) {
      return;
    }

    item.quality = item.quality + 1;

    item.sellIn = item.sellIn - 1;

    return;
  }

  if (item.name === ItemNames.BACKSTAGE) {
    if (item.quality >= 50) {
      return;
    }

    item.quality = item.quality + 1;

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

    item.sellIn = item.sellIn - 1;

    return;
  }

  // Item común

  if (item.quality > 0) {
    item.quality = item.quality - 1;
  }

  item.sellIn = item.sellIn - 1;
};

const updateQuality2 = (item: Item) => {
  if (item.name === ItemNames.SULFURAS) {
    return;
  }

  if (item.name === ItemNames.AGED_BRIE) {
    if (item.sellIn >= 0) {
      return;
    }

    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }

    return;
  }

  if (item.name === ItemNames.BACKSTAGE) {
    if (item.sellIn >= 0) {
      return;
    }

    item.quality = item.quality - item.quality;

    return;
  }

  // Item común
  if (item.sellIn >= 0) {
    return;
  }

  if (item.quality > 0) {
    item.quality = item.quality - 1;
  }
};
