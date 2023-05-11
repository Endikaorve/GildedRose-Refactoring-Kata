import { Item } from './gilded-rose'
import { SulfurasItem } from './Items/Sulfuras'
import { AgedBrieItem } from './Items/AgedBrie'
import { BackstagePassItem } from './Items/BackstagePass'
import { CommonItem } from './Items/Common'

const itemsDictionary = {
  'Sulfuras, Hand of Ragnaros': SulfurasItem,
  'Aged Brie': AgedBrieItem,
  'Backstage passes to a TAFKAL80ETC concert': BackstagePassItem
}

export const createInventoryItem = (item: Item) => new (itemsDictionary[item.name] ?? CommonItem)(item)
