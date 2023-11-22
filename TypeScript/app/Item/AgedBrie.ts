import { Item } from '@/gilded-rose'
import { AbstractItem } from '@/Item/AbstractItem'

export class AgedBrieItem extends AbstractItem {
  constructor(item: Item) {
    super(item)
  }

  update() {
    this.decreaseSellIn()

    this.increaseQuality()

    if (this.hasExpired()) {
      this.increaseQuality()
    }

    this.forceQualityIntoValidRange()
  }
}
