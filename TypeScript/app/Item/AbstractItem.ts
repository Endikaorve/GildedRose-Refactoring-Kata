import { Item } from '../gilded-rose'

const MIN_QUALITY = 0
const MAX_QUALITY = 50

export abstract class AbstractItem {
  protected constructor(public item: Item) {}

  protected decreaseSellInDate() {
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

  protected hasExpiredSellInDate() {
    return this.item.sellIn < 0
  }

  abstract update(): void
}
