import { Item } from './gilded-rose'
import { InventoryItem } from './InventoryItem'

export class Sulfuras extends InventoryItem {
  constructor(item: Item) {
    super(item)
  }

  upgrade() {
    return
  }
}
