import { Item } from '@/gilded-rose'
import { ItemStrategy } from './ItemStrategy'

export class ConjuredItem extends ItemStrategy {
  constructor(item: Item) {
    super(item)
  }

  update() {
    this.decreaseSellIn()

    this.decreaseQuality(2)

    if (this.hasExpired()) {
      this.decreaseQuality(2)
    }

    this.forceQualityIntoValidRange()
  }
}
