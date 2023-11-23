import { Item } from '../gilded-rose'

const MIN_QUALITY = 0
const MAX_QUALITY = 50

// Patrón Strategy
export abstract class ItemStrategy {
  protected constructor(public item: Item) {}

  protected decreaseSellIn() {
    this.item.sellIn -= 1
  }

  protected increaseQuality() {
    this.item.quality += 1
  }

  protected decreaseQuality(quality: number = 1) {
    this.item.quality -= quality
  }

  protected setMinQuality() {
    this.item.quality = MIN_QUALITY
  }

  protected forceQualityIntoValidRange() {
    this.item.quality = Math.max(MIN_QUALITY, Math.min(MAX_QUALITY, this.item.quality))
  }

  protected hasExpired() {
    return this.item.sellIn < 0
  }

  abstract update(): void
}
