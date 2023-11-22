import {
  Updater,
  updaterAgedBrie,
  updaterBackstage,
  updaterCommon,
  updaterConjured,
  updaterSulfuras,
} from "./Updater";
import { Item } from "./gilded-rose";

export const getUpdater = ({ name }: Item): Updater => {
  if (name === "Sulfuras, Hand of Ragnaros") {
    return updaterSulfuras;
  }

  if (name === "Aged Brie") {
    return updaterAgedBrie;
  }

  if (name === "Backstage passes to a TAFKAL80ETC concert") {
    return updaterBackstage;
  }

  if (name.startsWith("Conjured")) {
    return updaterConjured;
  }

  return updaterCommon;
};
