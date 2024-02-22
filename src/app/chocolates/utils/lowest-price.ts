// return the price for cheapest shop

import { ChocolatePrice } from "../models";

export const getLowestPrice = (prices: ChocolatePrice[]) => {
    if (prices.length <= 0) {
        return null;
      }
    return Math.min(...prices.map((price: ChocolatePrice) => price.price))
}