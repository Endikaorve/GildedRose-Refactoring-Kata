import { Item } from '@/gilded-rose'
import { AbstractItem } from '@/Item/AbstractItem'

export class AgedBrieItem extends AbstractItem {
  constructor(item: Item) {
    super(item)
  }

  update() {
    this.decreaseSellInDate()

    this.increaseQuality()

    if (this.hasExpiredSellInDate()) {
      this.increaseQuality()
    }

    this.forceQualityIntoValidRange()
  }
}
