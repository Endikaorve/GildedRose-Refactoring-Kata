import { Item } from './gilded-rose'
import { SulfurasItem, AgedBrieItem, BackstagePassItem, CommonItem, ConjuredItem } from './Items'

const itemsDictionary = {
  'Sulfuras, Hand of Ragnaros': SulfurasItem,
  'Aged Brie': AgedBrieItem,
  'Backstage passes to a TAFKAL80ETC concert': BackstagePassItem,
  Conjured: ConjuredItem
}

export const createInventoryItem = (item: Item) => new (itemsDictionary[item.name] ?? CommonItem)(item)
