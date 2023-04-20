<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid col-10">
      <a class="navbar-brand fw-bold" href="#">Shopware</a>

      <div class="d-flex col-4">
        <select
          @change="handleSelect"
          class="form-select bg-dark text-white"
          aria-label="Wybierz sortowanie"
        >
          <option value="price-desc">Najtańsze</option>
          <option value="price-asc">Najdrozsze</option>
        </select>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { useProductsStore } from "@/store/products";

const productsStore = useProductsStore();
const handleSelect = (event: Event) => {
  const selectedOption = (event.target as HTMLSelectElement).value;
  productsStore.sortBy(selectedOption);
};
</script>
