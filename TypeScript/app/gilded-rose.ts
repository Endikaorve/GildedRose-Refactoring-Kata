import { createInventoryItem } from './createInventoryItem'

export class Item {
  constructor(public name: string, public sellIn: number, public quality: number) {}
}

export class GildedRose {
  constructor(public items: Item[]) {}

  updateQuality() {
    this.items.forEach(item => createInventoryItem(item).upgrade())

    return this.items
  }
}
