import { Item } from '../gilded-rose'

const MIN_QUALITY = 0
const MAX_QUALITY = 50

export abstract class InventoryItem {
  protected constructor(public item: Item) {}

  protected increaseQualityBy(quantity: number) {
    this.item.quality += quantity
  }

  protected decreaseQualityBy(quantity: number) {
    this.item.quality -= quantity
  }

  protected decreaseSellInDate() {
    this.item.sellIn -= 1
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

  abstract upgrade(): void
}
