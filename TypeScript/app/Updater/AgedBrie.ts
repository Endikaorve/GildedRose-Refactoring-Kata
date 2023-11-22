import {
  Item,
  decreaseSellIn,
  hasExpired,
  increaseQuality,
  limitQualityIntoValidRange,
} from "@/gilded-rose";
import { Updater } from "./Updater.models";

export const updaterAgedBrie: Updater = (item: Item) => {
  decreaseSellIn(item);

  increaseQuality(item);

  if (hasExpired(item)) {
    increaseQuality(item);
  }

  limitQualityIntoValidRange(item);
};
