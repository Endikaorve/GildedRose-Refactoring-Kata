import { Item } from './gilded-rose'
import { SulfurasItem, AgedBrieItem, BackstagePassItem, CommonItem, ConjuredItem } from './Item'

export const createInventoryItem = (item: Item) => {
  return new (getItemClass(item.name))(item)
}

const getItemClass = (itemName: string) => {
  if (itemName === 'Sulfuras, Hand of Ragnaros') {
    return SulfurasItem
  }

  if (itemName === 'Aged Brie') {
    return AgedBrieItem
  }

  if (itemName === 'Backstage passes to a TAFKAL80ETC concert') {
    return BackstagePassItem
  }

  if (itemName.startsWith('Conjured')) {
    return ConjuredItem
  }

  return CommonItem
}
