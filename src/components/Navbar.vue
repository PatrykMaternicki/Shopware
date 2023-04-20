<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid col-10 p-0">
      <a class="navbar-brand fw-bold" href="#">Shopware</a>

      <div class="d-flex col-4">
        <select
          @change="handleSelect"
          class="form-select bg-dark text-white"
          aria-label="Wybierz sortowanie"
        >
          <option :value="SORT_PARAMETER.PRICE_ASC">Najtańsze</option>
          <option :value="SORT_PARAMETER.PRICE_DESC">Najdrozsze</option>
        </select>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { useProductsStore } from "@/store/products";
import { SORT_PARAMETER } from "@/dictionaries/parameters";
import type { typeOfSort } from '@/types/requestHeader';

const productsStore = useProductsStore();
const handleSelect = (event: Event) => {
  const selectedOption = (event.target as HTMLSelectElement)
    .value as typeOfSort;
  productsStore.sortBy(selectedOption);
};
</script>
