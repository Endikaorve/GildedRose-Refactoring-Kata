import { createInventoryItem } from './createInventoryItem'

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
  constructor(public items: Item[]) {}

  updateQuality() {
    this.items.forEach(item => createInventoryItem(item).upgrade())

    return this.items
  }
}
