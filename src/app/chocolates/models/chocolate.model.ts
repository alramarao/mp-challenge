import { PaginatedResponse } from "./paginated-response.model";

export type ChocolatesTableList = PaginatedResponse<Chocolate>;

export interface Chocolate {
    id: string;
    name: string;
    brand: string;
    currency: string;
    prices: ChocolatePrice[];
    nutrition: Nutrition;
    // custom fileds
    lowestPrice: number | null;
    averagePrice: number| null;
    directLink: string| null;
}

export interface ChocolatePrice {
    price: number;
    shop: string;
    link: string;
    unit: string;
    amount: number;
}

export interface Nutrition {
    fat: Fat;
    carbohydrates: Carbohydrates;
    protein: number;
    salt: number;
}

export interface Fat {
    total: number;
    saturated: number;
}

export interface Carbohydrates {
    total: number;
    saturated: number;
}