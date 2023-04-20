import { defineStore } from "pinia";
import ShopwareService from "@/services/shopware";
const shopwareService = new ShopwareService();

type typeOfSort = "price-asc" | "price-desc";

export const useProductsStore = defineStore("productsStore", {
  state: () => ({
    typeOfSort: "price-desc" as typeOfSort,
    categoryOfProduct: "e435c9763b0d44fcab67ea1c0fdb3fa0",
    products: [],
    body: {
      page: 1,
      limit: 10,
    },
  }),

  actions: {
    sortBy(sortType: typeOfSort) {
      this.typeOfSort = sortType;
    },

    async getProducts() {
      this.products = await shopwareService.getProducts(
        this.typeOfSort,
        this.body,
        this.categoryOfProduct
      );
    },

    async searchBy(value: string) {
      if (value) {
        this.products = await shopwareService.searchBy(
          this.typeOfSort,
          this.body,
          value
        );
      } else {
        this.getProducts();
      }
    },
  },
});
