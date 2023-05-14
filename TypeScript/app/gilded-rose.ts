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
    });

    return this.items;
  }
}

const update = (item: Item) => {
  if (item.name === ItemNames.SULFURAS) {
    return;
  }

  if (item.name === ItemNames.AGED_BRIE) {
    item.sellIn = item.sellIn - 1;

    increaseQuality(item);

    if (item.sellIn < 0) {
      increaseQuality(item);
    }

    if (item.quality > 50) {
      item.quality = 50;
    }

    return;
  }

  if (item.name === ItemNames.BACKSTAGE) {
    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      item.quality = 0;
      return;
    }

    increaseQuality(item);

    if (item.sellIn < 10) {
      increaseQuality(item);
    }

    if (item.sellIn < 5) {
      increaseQuality(item);
    }

    if (item.quality > 50) {
      item.quality = 50;
    }

    return;
  }

  // Item común

  item.sellIn = item.sellIn - 1;

  decreaseQuality(item);

  if (item.sellIn < 0) {
    decreaseQuality(item);
  }

  if (item.quality < 0) {
    item.quality = 0;
  }
};

const increaseQuality = (item: Item) => {
  item.quality++;
};

const decreaseQuality = (item: Item) => {
  item.quality--;
};
