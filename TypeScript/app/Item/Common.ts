import { Item } from '@/gilded-rose'
import { AbstractItem } from '@/Item/AbstractItem'

export class CommonItem extends AbstractItem {
  constructor(item: Item) {
    super(item)
  }

  update() {
    this.decreaseSellInDate()

    this.decreaseQuality()

    if (this.hasExpiredSellInDate()) {
      this.decreaseQuality()
    }

    this.forceQualityIntoValidRange()
  }
}
