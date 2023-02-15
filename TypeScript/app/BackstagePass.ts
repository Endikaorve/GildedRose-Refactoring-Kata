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
      this.increaseQuality()
      this.increaseQuality()
      this.increaseQuality()
      return
    }

    if (this.item.sellIn < 11) {
      this.increaseQuality()
      this.increaseQuality()
      return
    }

    this.increaseQuality()
  }
}
