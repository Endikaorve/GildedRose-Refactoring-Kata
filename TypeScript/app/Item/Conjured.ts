import { Item } from '@/gilded-rose'
import { AbstractItem } from '@/Item/AbstractItem'

export class ConjuredItem extends AbstractItem {
  constructor(item: Item) {
    super(item)
  }

  update() {
    this.decreaseSellInDate()

    this.decreaseQualityBy(2)

    if (this.hasExpiredSellInDate()) {
      this.decreaseQualityBy(2)
    }

    this.forceQualityIntoValidRange()
  }
}
