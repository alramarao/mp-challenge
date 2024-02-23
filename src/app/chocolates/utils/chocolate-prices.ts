import { ChocolatePrice } from '../models';
import { getAveragePrice } from './average-price';
import { getLowestPriceShop } from './cheapest-shop';

/**
 * Calculating custom properties (lowestPrice, averagePrice, directLink) and returning them.
 * @param prices ChocolatePrice (shop)
 * @returns custom properties along with prices
 */
export const getChocolatePrices = (prices: ChocolatePrice[]) => {
  if (prices.length <= 0) {
    return [];
  }
  const _prices = prices.map((price) => {
    return {
      ...price,
      pricePer100g: getPricePer100g(price, PriceUnitTypes),
    };
  });
  // Finding the shop which has the lowest price by 100g
  const lowestPriceShop = getLowestPriceShop(_prices);

  return {
    lowestPrice: lowestPriceShop.pricePer100g,
    averagePrice: getAveragePrice(_prices),
    directLink: lowestPriceShop.link,
    prices: _prices
  };
};

/**
 * Calculating the price for 100g for each shop (ChocolatePrice)
 * @param price ChocolatePrice (shop)
 * @param unitTypes PriceUnitTypes [g, kg]
 * @returns price for 100g
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getPricePer100g = (price: ChocolatePrice, unitTypes: any) => {
    // Converting amount into grams
  const amount = unitTypes[price.unit](price.amount);
  return (100 * price.price) / amount;
};

// Returning the shop amount in grams
const PriceUnitTypes = {
  g: (amount: number) => {
    return amount;
  },
  kg: (amount: number) => {
    return amount * 1000;
  },
};
