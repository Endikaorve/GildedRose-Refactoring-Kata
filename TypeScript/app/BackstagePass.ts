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

    if (this.isTheConcertDueInLessThan(6)) {
      this.increaseQualityBy(3)
      return
    }

    if (this.isTheConcertDueInLessThan(10)) {
      this.increaseQualityBy(2)
      return
    }

    this.increaseQualityBy(1)
  }

  private isTheConcertDueInLessThan(days: number) {
    return this.item.sellIn < days
  }
}
