import { Item } from '@/gilded-rose'
import { InventoryItem } from '@/Items/InventoryItem'

export class ConjuredItem extends InventoryItem {
  constructor(item: Item) {
    super(item)
  }

  upgrade() {
    this.decreaseSellInDate()

    this.decreaseQualityBy(2)

    if (this.hasExpiredSellInDate()) {
      this.decreaseQualityBy(2)
    }

    if (this.hasExceededMinQuality()) {
      this.setMinQuality()
    }
  }
}
