import { Item } from '@/gilded-rose'
import { AbstractItem } from '@/Item/AbstractItem'

export class AgedBrieItem extends AbstractItem {
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
