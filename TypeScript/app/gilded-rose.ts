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
      const productName = this.items[i].name
      // Calidad mayor de 50 de cualquier objeto
      if (this.hasMaxQuality(i)) {
        break
      }

      // objeto Sulfuras
      if (productName === 'Sulfuras, Hand of Ragnaros') {
        break
      }

      this.decreaseSellInDate(i)

      // Item concreto Aged Brie
      if (productName === 'Aged Brie') {
        this.upgradeAgedBrieQuality(i)
        break
      }

      // Item concreto Backstage passes to a TAFKAL80ETC concert
      if (productName === 'Backstage passes to a TAFKAL80ETC concert') {
        this.upgradeBackStagePassQuality(i)
        break
      }

      // Resto de items
      this.upgradeOtherItemsQuality(i)
    }

    return this.items
  }

  private increaseQuality(i: number) {
    this.items[i].quality += 1
  }

  private decreaseQuality(i: number) {
    this.items[i].quality -= 1
  }

  private decreaseSellInDate(i: number) {
    this.items[i].sellIn -= 1
  }

  private hasMaxQuality(i: number) {
    return this.items[i].quality === 50
  }

  private hasExpiredSellInDate(i: number) {
    return this.items[i].sellIn < 0
  }

  private upgradeBackStagePassQuality(i: number) {
    if (this.hasExpiredSellInDate(i)) {
      this.items[i].quality = 0
      return
    }

    if (this.items[0].sellIn < 6) {
      this.increaseQuality(i)
      this.increaseQuality(i)
      this.increaseQuality(i)
      return
    }

    if (this.items[0].sellIn < 11) {
      this.increaseQuality(i)
      this.increaseQuality(i)
      return
    }

    this.increaseQuality(i)
  }

  private upgradeAgedBrieQuality(i: number) {
    if (this.hasExpiredSellInDate(i)) {
      this.increaseQuality(i)
      this.increaseQuality(i)
      return
    }

    this.increaseQuality(i)
  }

  private upgradeOtherItemsQuality(i: number) {
    if (this.items[i].quality > 0) {
      if (this.hasExpiredSellInDate(i)) {
        this.decreaseQuality(i)
      }

      this.decreaseQuality(i)
    }
  }
}
