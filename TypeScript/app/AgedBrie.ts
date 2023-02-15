import { Item } from '@/gilded-rose'
import { InventoryItem } from '@/InventoryItem'

export class AgedBrie extends InventoryItem {
  constructor(item: Item) {
    super(item)
  }

  upgrade() {
    this.decreaseSellInDate()

    if (this.hasMaxQuality()) {
      return
    }

    if (this.hasExpiredSellInDate()) {
      this.increaseQualityBy(2)
      return
    }

    this.increaseQualityBy(1)
  }
}
