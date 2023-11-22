import { Item } from '@/gilded-rose'
import { AbstractItem } from '@/Item/AbstractItem'

export class BackstagePassItem extends AbstractItem {
  constructor(item: Item) {
    super(item)
  }

  update() {
    this.decreaseSellInDate()

    if (this.hasExpiredSellInDate()) {
      this.setMinQuality()
      return
    }

    this.increaseQualityBy(1)

    if (this.isTheConcertDueInLessThan(10)) {
      this.increaseQualityBy(1)
    }

    if (this.isTheConcertDueInLessThan(5)) {
      this.increaseQualityBy(1)
    }

    this.forceQualityIntoValidRange()
  }

  private isTheConcertDueInLessThan(days: number) {
    return this.item.sellIn < days
  }
}
