import { Item } from '../gilded-rose'

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

  protected hasMaxQuality() {
    return this.item.quality === 50
  }

  protected hasExpiredSellInDate() {
    return this.item.sellIn < 0
  }

  abstract upgrade(): void
}
