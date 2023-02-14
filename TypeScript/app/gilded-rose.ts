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
    this.items.forEach(item => {
      const productName = item.name

      switch (productName) {
        case 'Sulfuras, Hand of Ragnaros':
          break
        case 'Aged Brie':
          this.upgradeAgedBrieQuality(item)
          break
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.upgradeBackStagePassQuality(item)
          break
        default:
          this.upgradeOtherItemsQuality(item)
      }
    })

    return this.items
  }

  private increaseQuality(item: Item) {
    item.quality += 1
  }

  private decreaseQuality(item: Item) {
    item.quality -= 1
  }

  private decreaseSellInDate(item: Item) {
    item.sellIn -= 1
  }

  private hasMaxQuality(item: Item) {
    return item.quality === 50
  }

  private hasExpiredSellInDate(item: Item) {
    return item.sellIn < 0
  }

  private upgradeBackStagePassQuality(item: Item) {
    this.decreaseSellInDate(item)

    if (this.hasMaxQuality(item)) {
      return
    }

    if (this.hasExpiredSellInDate(item)) {
      item.quality = 0
      return
    }

    if (this.items[0].sellIn < 6) {
      this.increaseQuality(item)
      this.increaseQuality(item)
      this.increaseQuality(item)
      return
    }

    if (this.items[0].sellIn < 11) {
      this.increaseQuality(item)
      this.increaseQuality(item)
      return
    }

    this.increaseQuality(item)
  }

  private upgradeAgedBrieQuality(item: Item) {
    this.decreaseSellInDate(item)

    if (this.hasMaxQuality(item)) {
      return
    }

    if (this.hasExpiredSellInDate(item)) {
      this.increaseQuality(item)
      this.increaseQuality(item)
      return
    }

    this.increaseQuality(item)
  }

  private upgradeOtherItemsQuality(item: Item) {
    this.decreaseSellInDate(item)

    if (this.hasMaxQuality(item)) {
      return
    }

    if (item.quality > 0) {
      if (this.hasExpiredSellInDate(item)) {
        this.decreaseQuality(item)
      }

      this.decreaseQuality(item)
    }
  }
}
