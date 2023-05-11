import { Item } from '@/gilded-rose'
import { InventoryItem } from '@/Items/InventoryItem'

export class ConjuredItem extends InventoryItem {
  constructor(item: Item) {
    super(item)
  }

  upgrade() {
    this.decreaseSellInDate()

    if (this.item.quality === 1) {
      this.item.quality = 0
    }

    if (this.item.quality > 0) {
      if (this.hasExpiredSellInDate()) {
        this.decreaseQualityBy(2)
      }

      this.decreaseQualityBy(2)
    }
  }
}
