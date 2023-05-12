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

  // CHAT-GPT One Liner GOD mode
  // updateQuality() {
  //   this.items.forEach(
  //     item =>
  //       item.name !== 'Sulfuras, Hand of Ragnaros' &&
  //       ((item.sellIn -= 1),
  //       (item.quality = Math.max(
  //         0,
  //         Math.min(
  //           50,
  //           item.name === 'Aged Brie'
  //             ? item.sellIn < 0
  //               ? item.quality + 2
  //               : item.quality + 1
  //             : item.name === 'Backstage passes to a TAFKAL80ETC concert'
  //             ? item.sellIn < 0
  //               ? 0
  //               : item.sellIn < 5
  //               ? item.quality + 3
  //               : item.sellIn < 10
  //               ? item.quality + 2
  //               : item.quality + 1
  //             : item.name.startsWith('Conjured')
  //             ? item.sellIn < 0
  //               ? item.quality - 4
  //               : item.quality - 2
  //             : item.sellIn < 0
  //             ? item.quality - 2
  //             : item.quality - 1
  //         )
  //       )))
  //   )
  //   return this.items
  // }
}
