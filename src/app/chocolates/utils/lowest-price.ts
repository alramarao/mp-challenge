import { ChocolatePrice } from "../models";

/**
 * Finding the shop which has the Lowest price based on 100g price
 * @param prices ChocolatePrice (shop)
 * @returns Lowest price of the shop
 */
export const getLowestPrice = (prices: ChocolatePrice[]) => {
  return Math.min(...prices.map((price: ChocolatePrice) => price.pricePer100g));
};