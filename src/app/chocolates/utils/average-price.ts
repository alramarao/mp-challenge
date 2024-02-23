import { ChocolatePrice } from "../models";

/**
 * Calculating average price for each chocolate from the available shops based on 100g price
 * @param prices ChocolatePrice (shop)
 * @returns average price for respective chocolate
 */
export const getAveragePrice = (prices: ChocolatePrice[]) => {
  return (
    prices.reduce(
      (total: number, next: ChocolatePrice) => total + next.pricePer100g,
      0
    ) / prices.length
  );
};