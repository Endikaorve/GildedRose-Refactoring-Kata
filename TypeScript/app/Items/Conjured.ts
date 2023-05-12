import { Item } from '@/gilded-rose'
import { InventoryItem } from '@/Items/InventoryItem'

export class ConjuredItem extends InventoryItem {
  constructor(item: Item) {
    super(item)
  }

  update() {
    this.decreaseSellInDate()

    this.decreaseQualityBy(2)

    if (this.hasExpiredSellInDate()) {
      this.decreaseQualityBy(2)
    }

    this.forceQualityIntoValidRange()
  }
}
