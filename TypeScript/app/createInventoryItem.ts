import { Item } from './gilded-rose'
import { SulfurasItem, AgedBrieItem, BackstagePassItem, CommonItem, ConjuredItem, ItemStrategy } from './Item'

// Patrón Factory
export const createInventoryItem = (item: Item): ItemStrategy => new (getItemClass(item))(item)

const getItemClass = ({ name }: Item) => {
  if (name === 'Sulfuras, Hand of Ragnaros') {
    return SulfurasItem
  }

  if (name === 'Aged Brie') {
    return AgedBrieItem
  }

  if (name === 'Backstage passes to a TAFKAL80ETC concert') {
    return BackstagePassItem
  }

  if (name.startsWith('Conjured')) {
    return ConjuredItem
  }

  return CommonItem
}
