import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  describe("Common Item", () => {
    const itemName = "Elixir of the Mongoose";

    describe("SellIn", () => {
      it("it downgrades 1 point per day", () => {
        const item = updateGildedRoseWithOneItem(itemName, 1, 1);
        expect(item.sellIn).toBe(0);
      });
    });

    describe("Quality", () => {
      it("it downgrades 1 point per day", () => {
        const item = updateGildedRoseWithOneItem(itemName, 1, 1);
        expect(item.quality).toBe(0);

        const item2 = updateGildedRoseWithOneItem(itemName, 1, 50);
        expect(item2.quality).toBe(49);
      });

      it("if sellIn date has expired it downgrades 2 points per day (twice)", () => {
        const item = updateGildedRoseWithOneItem(itemName, 0, 12);
        expect(item.quality).toBe(10);
      });

      it("it can never be negative", () => {
        const item = updateGildedRoseWithOneItem(itemName, 0, 0);
        expect(item.quality).toBe(0);
      });
    });
  });

  describe("Aged Brie", () => {
    const itemName = "Aged Brie";

    describe("SellIn", () => {
      it("it downgrades 1 point per day", () => {
        const item = updateGildedRoseWithOneItem(itemName, 1, 1);
        expect(item.sellIn).toBe(0);
      });
    });

    describe("Quality", () => {
      it("it upgrades 1 point per day", () => {
        const item = updateGildedRoseWithOneItem(itemName, 1, 1);
        expect(item.quality).toBe(2);
      });

      it("if sellIn date has expired it upgrades 2 points per day (twice)", () => {
        const item = updateGildedRoseWithOneItem(itemName, 0, 1);
        expect(item.quality).toBe(3);
      });

      it("it has limit of 50 points", () => {
        const item = updateGildedRoseWithOneItem(itemName, 1, 50);
        expect(item.quality).toBe(50);
      });
    });
  });

  describe("Sulfuras, Hand of Ragnaros", () => {
    const itemName = "Sulfuras, Hand of Ragnaros";

    it("it does not modify its quality over time", () => {
      const item = updateGildedRoseWithOneItem(itemName, 1, 80);
      expect(item.quality).toBe(80);
    });

    it("it does not modify its sellIn over time", () => {
      const item = updateGildedRoseWithOneItem(itemName, 1, 80);
      expect(item.sellIn).toBe(1);
    });
  });

  describe("Backstage passes to a TAFKAL80ETC concert", () => {
    const itemName = "Backstage passes to a TAFKAL80ETC concert";

    describe("SellIn", () => {
      it("it downgrades 1 point per day", () => {
        const item = updateGildedRoseWithOneItem(itemName, 1, 1);
        expect(item.sellIn).toBe(0);
      });
    });

    describe("Quality", () => {
      it("it upgrades 1 point per day", () => {
        const item = updateGildedRoseWithOneItem(itemName, 20, 1);
        expect(item.quality).toBe(2);
      });

      it("it upgrades 2 points if sellIn date is between 10 and 6 days", () => {
        const item = updateGildedRoseWithOneItem(itemName, 10, 1);
        expect(item.quality).toBe(3);
      });

      it("it upgrades 3 points if sellIn date is between 5 and 1 days", () => {
        const item = updateGildedRoseWithOneItem(itemName, 5, 1);
        expect(item.quality).toBe(4);
      });

      it("it drops to 0 points if sellIn date has expired", () => {
        const item = updateGildedRoseWithOneItem(itemName, 0, 10);
        expect(item.quality).toBe(0);
      });

      it("it has limit of 50 points", () => {
        const item = updateGildedRoseWithOneItem(itemName, 15, 50);
        expect(item.quality).toBe(50);

        const item2 = updateGildedRoseWithOneItem(itemName, 1, 49);
        expect(item2.quality).toBe(50);

        const item3 = updateGildedRoseWithOneItem(itemName, 1, 48);
        expect(item3.quality).toBe(50);
      });
    });
  });

  describe.skip("Conjured", () => {
    const itemName = "Conjured Sword";

    describe("SellIn", () => {
      it("it downgrades 1 point per day", () => {
        const item = updateGildedRoseWithOneItem(itemName, 1, 1);
        expect(item.sellIn).toBe(0);
      });
    });

    describe("Quality", () => {
      it("it downgrades 2 point per day", () => {
        const item = updateGildedRoseWithOneItem(itemName, 1, 2);
        expect(item.quality).toBe(0);
      });

      it("if sellIn date has expired it downgrades 4 points per day (twice)", () => {
        const item = updateGildedRoseWithOneItem(itemName, 0, 12);
        expect(item.quality).toBe(8);
      });

      it("it can never be negative", () => {
        const item1 = updateGildedRoseWithOneItem(itemName, 1, 0);
        expect(item1.quality).toBe(0);

        const item2 = updateGildedRoseWithOneItem(itemName, 1, 1);
        expect(item2.quality).toBe(0);

        const item3 = updateGildedRoseWithOneItem(itemName, 0, 3);
        expect(item3.quality).toBe(0);
      });
    });
  });
});

const updateGildedRoseWithOneItem = (
  name: string,
  sellIn: number,
  quality: number
) => {
  const gildedRose = new GildedRose([new Item(name, sellIn, quality)]);
  const items = gildedRose.updateQuality();

  return items[0];
};
