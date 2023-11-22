import { Item } from '@/gilded-rose'
import { InventoryItem } from '@/Item/InventoryItem'

export class CommonItem extends InventoryItem {
  constructor(item: Item) {
    super(item)
  }

  update() {
    this.decreaseSellInDate()

    this.decreaseQualityBy(1)

    if (this.hasExpiredSellInDate()) {
      this.decreaseQualityBy(1)
    }

    this.forceQualityIntoValidRange()
  }
}
