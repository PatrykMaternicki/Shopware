import { defineStore } from "pinia";
import { ref } from "vue";

type typeOfSort = "asc" | "desc";

export const useProductsStore = defineStore("productsStore", {
  state: () => ({
    typeOfSort: "asc",
    defaultOfCategory: "e435c9763b0d44fcab67ea1c0fdb3fa0",
    products: [],
  }),

  actions: {
    sortBy(sortType: typeOfSort) {
      this.typeOfSort = sortType;
    },

    async getProducts() {
      const products: Response = await fetch(
        `https://demo.crehler.dev/store-api/product-listing/${this.defaultOfCategory}`,
        {
          method: "POST",
          headers: {
            "sw-access-key": "SWSCMDV3N2DIOUNZTKNNCTBBCW",
          },
          body: JSON.stringify({
            sort: [{ field: "createdAt", order: "ASC", naturalSorting: true }],
          }),
        }
      );
      const { elements } = await products.json();
      console.log(elements)
      this.products = elements;
    },
  },
});
