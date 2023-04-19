import { defineStore } from "pinia";
import { ref } from "vue";

type typeOfSort = "asc" | "desc";

export const useProductsStore = defineStore("productsStore", {
  state: () => ({
    typeOfSort: "asc",
  }),

  actions: {
    sortBy(sortType: typeOfSort) {
      this.typeOfSort = sortType;
    },
  },
});
