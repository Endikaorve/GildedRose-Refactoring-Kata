import { Item, GildedRose } from '@/gilded-rose'

describe('Gilded Rose', () => {
  describe('Item quality', () => {
    it('the quality of an item can never be negative', () => {
      const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', 0, 0)])
      const items = gildedRose.updateQuality()
      expect(items[0].quality).toBe(0)
    })

    it('the quality of an item downgrade 1 point per day', () => {
      const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', 1, 1)])
      const items = gildedRose.updateQuality()
      expect(items[0].quality).toBe(0)
    })

    it('the quality of an item downgrade 1 point per day', () => {
      const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', 1, 1)])
      const items = gildedRose.updateQuality()
      expect(items[0].quality).toBe(0)
    })

    it('if sellIn date has expired the quality of an item downgrade 2 points per day', () => {
      const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', 0, 12)])
      const items = gildedRose.updateQuality()
      expect(items[0].quality).toBe(10)
    })

    it('Item quality has limit of 50 points', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 1, 50)])
      const items = gildedRose.updateQuality()
      expect(items[0].quality).toBe(50)
    })
  })

  describe('Aged Brie', () => {
    it('Item Aged Brie upgrade its quality 1 point per day', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 1, 1)])
      const items = gildedRose.updateQuality()
      expect(items[0].quality).toBe(2)
    })

    it('Item Aged Brie upgrade its quality 2 point per day if sellIn date has expired', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 0, 1)])
      const items = gildedRose.updateQuality()
      expect(items[0].quality).toBe(3)
    })
  })

  describe('Sulfuras, Hand of Ragnaros', () => {
    it('Item Sulfuras, Hand of Ragnaros does not modify its quality over time', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 1, 80)])
      const items = gildedRose.updateQuality()
      expect(items[0].quality).toBe(80)
    })

    it('Item Sulfuras, Hand of Ragnaros does not modify its sellIn over time', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 1, 80)])
      const items = gildedRose.updateQuality()
      expect(items[0].sellIn).toBe(1)
    })
  })

  describe('Backstage passes to a TAFKAL80ETC concert', () => {
    it('Item Backstage passes to a TAFKAL80ETC concert, upgrade its quality 1 point per day', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 20, 1)])
      const items = gildedRose.updateQuality()
      expect(items[0].quality).toBe(2)
    })

    it('Item Backstage passes to a TAFKAL80ETC concert, upgrade its quality 2 points if sellIn date is below 10 days', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 1)])
      const items = gildedRose.updateQuality()
      expect(items[0].quality).toBe(3)
    })

    it('Item Backstage passes to a TAFKAL80ETC concert, upgrade its quality 3 points if sellIn date is below 5 days', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 1)])
      const items = gildedRose.updateQuality()
      expect(items[0].quality).toBe(4)
    })

    it('Item Backstage passes to a TAFKAL80ETC concert, drops its quality to 0 points if sellIn date has expired', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)])
      const items = gildedRose.updateQuality()
      expect(items[0].quality).toBe(0)
    })
  })
})
