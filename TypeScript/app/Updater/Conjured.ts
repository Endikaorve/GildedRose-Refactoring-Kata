import {
  Item,
  decreaseQuality,
  decreaseSellIn,
  hasExpired,
  limitQualityIntoValidRange,
} from "@/gilded-rose";
import { Updater } from "./Updater.models";

export const updaterConjured: Updater = (item: Item) => {
  decreaseSellIn(item);

  decreaseQuality(item);
  decreaseQuality(item);

  if (hasExpired(item)) {
    decreaseQuality(item);
    decreaseQuality(item);
  }

  limitQualityIntoValidRange(item);
};
