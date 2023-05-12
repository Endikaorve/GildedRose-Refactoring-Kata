import { Item } from '@/gilded-rose'
import { InventoryItem } from '@/Items/InventoryItem'

export class BackstagePassItem extends InventoryItem {
  constructor(item: Item) {
    super(item)
  }

  upgrade() {
    this.decreaseSellInDate()

    if (this.hasExpiredSellInDate()) {
      this.setMinQuality()
      return
    }

    this.increaseQualityBy(1)

    if (this.isTheConcertDueInLessThan(10)) {
      this.increaseQualityBy(1)
    }

    if (this.isTheConcertDueInLessThan(6)) {
      this.increaseQualityBy(1)
    }

    if (this.hasExceededMaxQuality()) {
      this.setMaxQuality()
    }
  }

  private isTheConcertDueInLessThan(days: number) {
    return this.item.sellIn < days
  }
}
