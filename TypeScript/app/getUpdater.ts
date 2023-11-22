import { updaterAgedBrie } from "./Updater/AgedBrie";
import { updaterBackstage } from "./Updater/Backstage";
import { updaterCommon } from "./Updater/Common";
import { updaterConjured } from "./Updater/Conjured";
import { updaterSulfuras } from "./Updater/Sulfuras";
import { Updater } from "./Updater/Updater.models";
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
