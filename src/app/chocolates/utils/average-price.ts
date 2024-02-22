// Calculate and return the average price for available shops.

import { ChocolatePrice } from "../models";

export const getAveragePrice = (prices: ChocolatePrice[]) => {
    if (prices.length <= 0) {
        return null;
      }
    return (prices.reduce((total: number, next: ChocolatePrice) => total + next.price, 0) / prices.length);
}