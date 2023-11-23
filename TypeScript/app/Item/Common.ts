import { Item } from '@/gilded-rose'
import { ItemStrategy } from './ItemStrategy'

export class CommonItem extends ItemStrategy {
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
