import { Item } from './gilded-rose'
import { SulfurasItem, AgedBrieItem, BackstagePassItem, CommonItem, ConjuredItem, InventoryItem } from './Items'

const itemsDictionary = {
  'Sulfuras, Hand of Ragnaros': SulfurasItem,
  'Aged Brie': AgedBrieItem,
  'Backstage passes to a TAFKAL80ETC concert': BackstagePassItem
}

export const createInventoryItem = (item: Item) => {
  return new (getItemClass(item.name))(item)
}

const getItemClass = (itemName: string) => {
  if (itemsDictionary[itemName]) {
    return itemsDictionary[itemName]
  }

  if (itemName.startsWith('Conjured')) {
    return ConjuredItem
  }

  return CommonItem
}
