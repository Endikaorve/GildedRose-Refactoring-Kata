import { Item } from '@/gilded-rose'
import { AbstractItem } from '@/Item/AbstractItem'

export class CommonItem extends AbstractItem {
  constructor(item: Item) {
    super(item)
  }

  update() {
    this.decreaseSellIn()

    this.decreaseQuality()

    if (this.hasExpired()) {
      this.decreaseQuality()
    }

    this.forceQualityIntoValidRange()
  }
}
