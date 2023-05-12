import { Item } from '@/gilded-rose'
import { InventoryItem } from '@/Items/InventoryItem'

export class CommonItem extends InventoryItem {
  constructor(item: Item) {
    super(item)
  }

  upgrade() {
    this.decreaseSellInDate()

    this.decreaseQualityBy(1)

    if (this.hasExpiredSellInDate()) {
      this.decreaseQualityBy(1)
    }

    this.forceQualityIntoValidRange()
  }
}
