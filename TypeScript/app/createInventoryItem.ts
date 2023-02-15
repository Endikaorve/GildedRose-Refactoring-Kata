import { Item } from './gilded-rose'
import { Sulfuras } from './Sulfuras'
import { AgedBrie } from './AgedBrie'
import { BackstagePass } from './BackstagePass'
import { CommonItem } from './CommonItem'

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
