import {
  Item,
  decreaseQuality,
  decreaseSellIn,
  hasExpired,
  limitQualityIntoValidRange,
} from "@/gilded-rose";
import { Updater } from "./Updater.models";

export const updaterCommon: Updater = (item: Item) => {
  decreaseSellIn(item);

  decreaseQuality(item);

  if (hasExpired(item)) {
    decreaseQuality(item);
  }

  limitQualityIntoValidRange(item);
};
