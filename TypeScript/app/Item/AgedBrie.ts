import { Item } from '@/gilded-rose'
import { ItemStrategy } from './ItemStrategy'

export class AgedBrieItem extends ItemStrategy {
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
