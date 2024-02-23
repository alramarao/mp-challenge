import { ChocolatePrice } from '../models';

/**
 * Finding the shop which has the lowest price based on 100g price
 * @param prices ChocolatePrice (shop)
 * @returns direct link of the shop which has lowest price
 */
export const getLowestPriceLink = (prices: ChocolatePrice[]) => {
  return (
    prices.reduce((prev, curr) =>
      prev && prev.pricePer100g < curr.pricePer100g ? prev : curr
    ).link || null
  );
};
