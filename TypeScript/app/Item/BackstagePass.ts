import { Item } from '@/gilded-rose'
import { AbstractItem } from '@/Item/AbstractItem'

export class BackstagePassItem extends AbstractItem {
  constructor(item: Item) {
    super(item)
  }

  update() {
    this.decreaseSellIn()

    if (this.hasExpired()) {
      this.setMinQuality()
      return
    }

    this.increaseQuality()

    if (this.isTheConcertDueInLessThan(10)) {
      this.increaseQuality()
    }

    if (this.isTheConcertDueInLessThan(5)) {
      this.increaseQuality()
    }

    this.forceQualityIntoValidRange()
  }

  private isTheConcertDueInLessThan(days: number) {
    return this.item.sellIn < days
  }
}
