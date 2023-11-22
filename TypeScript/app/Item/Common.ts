import { Item } from '@/gilded-rose'
import { AbstractItem } from '@/Item/AbstractItem'

export class CommonItem extends AbstractItem {
  constructor(item: Item) {
    super(item)
  }

  update() {
    this.decreaseSellInDate()

    this.decreaseQualityBy(1)

    if (this.hasExpiredSellInDate()) {
      this.decreaseQualityBy(1)
    }

    this.forceQualityIntoValidRange()
  }
}
