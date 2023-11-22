import {
  Item,
  decreaseSellIn,
  hasExpired,
  increaseQuality,
  limitQualityIntoValidRange,
  setMinQuality,
} from "@/gilded-rose";
import { Updater } from "./Updater.models";

export const updaterBackstage: Updater = (item: Item) => {
  decreaseSellIn(item);

  if (hasExpired(item)) {
    setMinQuality(item);
    return;
  }

  increaseQuality(item);

  if (item.sellIn < 10) {
    increaseQuality(item);
  }

  if (item.sellIn < 5) {
    increaseQuality(item);
  }

  limitQualityIntoValidRange(item);
};
