import { Item, GildedRose } from '@/gilded-rose'

describe('Gilded Rose', () => {
  describe('Common Item', () => {
    describe('SellIn', () => {
      it('it downgrades 1 point per day', () => {
        const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', 1, 1)])
        const items = gildedRose.updateQuality()
        expect(items[0].sellIn).toBe(0)
      })
    })

    describe('Quality', () => {
      it('it downgrades 1 point per day', () => {
        const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', 1, 1)])
        const items = gildedRose.updateQuality()
        expect(items[0].quality).toBe(0)
      })

      it('if sellIn date has expired it downgrades 2 points per day (twice)', () => {
        const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', 0, 12)])
        const items = gildedRose.updateQuality()
        expect(items[0].quality).toBe(10)
      })

      it('it can never be negative', () => {
        const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', 0, 0)])
        const items = gildedRose.updateQuality()
        expect(items[0].quality).toBe(0)
      })
    })
  })

  describe('Aged Brie', () => {
    describe('SellIn', () => {
      it('it downgrades 1 point per day', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 1, 1)])
        const items = gildedRose.updateQuality()
        expect(items[0].sellIn).toBe(0)
      })
    })

    describe('Quality', () => {
      it('it upgrades 1 point per day', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 1, 1)])
        const items = gildedRose.updateQuality()
        expect(items[0].quality).toBe(2)
      })

      it('if sellIn date has expired it upgrades 2 points per day (twice)', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 1)])
        const items = gildedRose.updateQuality()
        expect(items[0].quality).toBe(3)
      })

      it('it has limit of 50 points', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 1, 50)])
        const items = gildedRose.updateQuality()
        expect(items[0].quality).toBe(50)
      })
    })
  })

  describe('Sulfuras, Hand of Ragnaros', () => {
    it('it does not modify its quality over time', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 1, 80)])
      const items = gildedRose.updateQuality()
      expect(items[0].quality).toBe(80)
    })

    it('it does not modify its sellIn over time', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 1, 80)])
      const items = gildedRose.updateQuality()
      expect(items[0].sellIn).toBe(1)
    })
  })

  describe('Backstage passes to a TAFKAL80ETC concert', () => {
    describe('SellIn', () => {
      it('it downgrades 1 point per day', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 1)])
        const items = gildedRose.updateQuality()
        expect(items[0].sellIn).toBe(0)
      })
    })

    describe('Quality', () => {
      it('it upgrades 1 point per day', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 20, 1)])
        const items = gildedRose.updateQuality()
        expect(items[0].quality).toBe(2)
      })

      it('it upgrades 2 points if sellIn date is between 10 and 6 days', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 1)])
        const items = gildedRose.updateQuality()
        expect(items[0].quality).toBe(3)
      })

      it('it upgrades 3 points if sellIn date is between 5 and 1 days', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 1)])
        const items = gildedRose.updateQuality()
        expect(items[0].quality).toBe(4)
      })

      it('it drops to 0 points if sellIn date has expired', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)])
        const items = gildedRose.updateQuality()
        expect(items[0].quality).toBe(0)
      })

      it('it has limit of 50 points', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50)])
        const items = gildedRose.updateQuality()
        expect(items[0].quality).toBe(50)
      })
    })
  })

  describe('Conjured', () => {
    const itemName = 'Conjured'

    describe('SellIn', () => {
      it('it downgrades 1 point per day', () => {
        const gildedRose = new GildedRose([new Item(itemName, 1, 1)])
        const items = gildedRose.updateQuality()
        expect(items[0].sellIn).toBe(0)
      })
    })

    describe('Quality', () => {
      it('it downgrades 2 point per day', () => {
        const gildedRose = new GildedRose([new Item(itemName, 1, 2)])
        const items = gildedRose.updateQuality()
        expect(items[0].quality).toBe(0)
      })

      it('if sellIn date has expired it downgrades 4 points per day (twice)', () => {
        const gildedRose = new GildedRose([new Item(itemName, 0, 12)])
        const items = gildedRose.updateQuality()
        expect(items[0].quality).toBe(8)
      })

      it('it can never be negative', () => {
        const gildedRose = new GildedRose([new Item(itemName, 1, 0)])
        const items = gildedRose.updateQuality()
        expect(items[0].quality).toBe(0)

        const gildedRose2 = new GildedRose([new Item(itemName, 0, 0)])
        const items2 = gildedRose2.updateQuality()
        expect(items2[0].quality).toBe(0)
      })
    })
  })
})
