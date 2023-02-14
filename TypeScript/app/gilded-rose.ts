export class Item {
  name: string
  sellIn: number
  quality: number

  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

export class GildedRose {
  items: Array<Item>

  constructor(items = [] as Array<Item>) {
    this.items = items
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const itemName = this.items[i].name
      let itemQuality = this.items[i].quality
      let itemSellInDate = this.items[i].sellIn

      // objeto Sulfuras
      if (itemName === 'Sulfuras, Hand of Ragnaros') {
        break
      }

      itemSellInDate = itemSellInDate - 1

      // Calidad mayor de 50 de cualquier objeto
      if (itemQuality >= 50) {
        break
      }

      // Item concreto Aged Brie
      if (itemName === 'Aged Brie') {
        if (itemSellInDate < 0) {
          itemQuality = itemQuality + 1
        }

        itemQuality = itemQuality + 1

        this.items[i].quality = itemQuality
        this.items[i].sellIn = itemSellInDate
        break
      }

      // Item concreto Backstage passes to a TAFKAL80ETC concert
      if (itemName === 'Backstage passes to a TAFKAL80ETC concert') {
        itemQuality = itemQuality + 1
        if (itemSellInDate < 11) {
          itemQuality = itemQuality + 1
        }
        if (itemSellInDate < 6) {
          itemQuality = itemQuality + 1
        }

        if (itemSellInDate <= 0) {
          itemQuality = 0
        }

        this.items[i].quality = itemQuality
        this.items[i].sellIn = itemSellInDate
        break
      }

      if (itemQuality > 0) {
        if (itemSellInDate < 0) {
          itemQuality = itemQuality - 1
        }

        itemQuality = itemQuality - 1
        this.items[i].quality = itemQuality
        this.items[i].sellIn = itemSellInDate
      }
    }

    return this.items
  }
}
