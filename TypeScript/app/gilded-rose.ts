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
      const itemQuality = this.items[i].quality

      // objeto Sulfuras
      if (itemName === 'Sulfuras, Hand of Ragnaros') {
        break
      }

      this.decreaseSellInDate(i)

      // Calidad mayor de 50 de cualquier objeto
      if (itemQuality >= 50) {
        break
      }

      // Item concreto Aged Brie
      if (itemName === 'Aged Brie') {
        if (this.items[0].sellIn < 0) {
          this.increaseQuality(i)
        }

        this.increaseQuality(i)
        break
      }

      // Item concreto Backstage passes to a TAFKAL80ETC concert
      if (itemName === 'Backstage passes to a TAFKAL80ETC concert') {
        this.increaseQuality(i)
        if (this.items[0].sellIn < 11) {
          this.increaseQuality(i)
        }
        if (this.items[0].sellIn < 6) {
          this.increaseQuality(i)
        }

        if (this.items[0].sellIn <= 0) {
          this.items[i].quality = 0
        }

        break
      }

      // Resto de items
      if (itemQuality > 0) {
        if (this.items[0].sellIn < 0) {
          this.decreaseQuality(i)
        }

        this.decreaseQuality(i)
      }
    }

    return this.items
  }

  private increaseQuality(i: number) {
    this.items[i].quality += 1
  }

  private decreaseQuality(i: number) {
    this.items[i].quality -= 1
  }

  private

  private decreaseSellInDate(i: number) {
    this.items[i].sellIn -= 1
  }
}
