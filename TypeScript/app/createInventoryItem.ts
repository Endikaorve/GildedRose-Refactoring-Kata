import { Item } from './gilded-rose'
import { Sulfuras } from './Items/Sulfuras'
import { AgedBrie } from './Items/AgedBrie'
import { BackstagePass } from './Items/BackstagePass'
import { CommonItem } from './Items/Common'

const itemsDictionary = {
  'Sulfuras, Hand of Ragnaros': Sulfuras,
  'Aged Brie': AgedBrie,
  'Backstage passes to a TAFKAL80ETC concert': BackstagePass
}

export const createInventoryItem = (item: Item) => new (itemsDictionary[item.name] ?? CommonItem)(item)
