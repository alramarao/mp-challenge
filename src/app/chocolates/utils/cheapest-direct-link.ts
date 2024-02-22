// return the direct link for cheapest shop

import { ChocolatePrice } from '../models';

export const getLowestPriceLink = (prices: ChocolatePrice[]) => {
  if (prices.length <= 0) {
    return null;
  }
  return (
    prices.reduce((prev, curr) =>
      prev && prev.price < curr.price ? prev : curr
    ).link || null
  );
};
