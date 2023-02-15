import { Item } from '@/gilded-rose'
import { InventoryItem } from '@/InventoryItem'

export class CommonItem extends InventoryItem {
  constructor(item: Item) {
    super(item)
  }

  upgrade() {
    this.decreaseSellInDate()

    if (this.hasMaxQuality()) {
      return
    }

    if (this.item.quality > 0) {
      if (this.hasExpiredSellInDate()) {
        this.decreaseQuality()
      }

      this.decreaseQuality()
    }
  }
}
