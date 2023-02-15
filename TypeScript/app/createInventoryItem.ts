import { Item } from './gilded-rose'
import { Sulfuras } from './Items/Sulfuras'
import { AgedBrie } from './Items/AgedBrie'
import { BackstagePass } from './Items/BackstagePass'
import { CommonItem } from './Items/CommonItem'

export const createInventoryItem = (item: Item) => {
  if (item.name === 'Sulfuras, Hand of Ragnaros') {
    return new Sulfuras(item)
  }

  if (item.name === 'Aged Brie') {
    return new AgedBrie(item)
  }

  if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
    return new BackstagePass(item)
  }

  return new CommonItem(item)
}
