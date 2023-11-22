import { Item } from '@/gilded-rose'
import { InventoryItem } from '@/Item/InventoryItem'

export class AgedBrieItem extends InventoryItem {
  constructor(item: Item) {
    super(item)
  }

  update() {
    this.decreaseSellInDate()

    this.increaseQualityBy(1)

    if (this.hasExpiredSellInDate()) {
      this.increaseQualityBy(1)
    }

    this.forceQualityIntoValidRange()
  }
}
