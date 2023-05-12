import { Item } from '../gilded-rose'

const MAX_QUALITY = 50
const MIN_QUALITY = 0

export abstract class InventoryItem {
  item: Item

  protected constructor(item: Item) {
    this.item = item
  }

  protected increaseQualityBy(quantity: number) {
    this.item.quality += quantity
  }

  protected decreaseQualityBy(quantity: number) {
    this.item.quality -= quantity
  }

  protected decreaseSellInDate() {
    this.item.sellIn -= 1
  }

  protected hasExceededMinQuality() {
    return this.item.quality < MIN_QUALITY
  }

  protected setMinQuality() {
    this.item.quality = MIN_QUALITY
  }

  protected hasExceededMaxQuality() {
    return this.item.quality > MAX_QUALITY
  }

  protected setMaxQuality() {
    this.item.quality = MAX_QUALITY
  }

  protected hasExpiredSellInDate() {
    return this.item.sellIn < 0
  }

  abstract upgrade(): void
}
