import { Item } from '@/gilded-rose'
import { AbstractItem } from '@/Item/AbstractItem'

export class ConjuredItem extends AbstractItem {
  constructor(item: Item) {
    super(item)
  }

  update() {
    this.decreaseSellInDate()

    this.decreaseQuality(2)

    if (this.hasExpired()) {
      this.decreaseQuality(2)
    }

    this.forceQualityIntoValidRange()
  }
}
