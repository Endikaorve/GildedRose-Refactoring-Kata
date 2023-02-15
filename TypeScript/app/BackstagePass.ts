import { Item } from '@/gilded-rose'
import { InventoryItem } from '@/InventoryItem'

export class BackstagePass extends InventoryItem {
  constructor(item: Item) {
    super(item)
  }

  upgrade() {
    this.decreaseSellInDate()

    if (this.hasMaxQuality()) {
      return
    }

    if (this.hasExpiredSellInDate()) {
      this.item.quality = 0
      return
    }

    if (this.item.sellIn < 6) {
      this.increaseQualityBy(3)
      return
    }

    if (this.item.sellIn < 11) {
      this.increaseQualityBy(2)
      return
    }

    this.increaseQualityBy(1)
  }
}
