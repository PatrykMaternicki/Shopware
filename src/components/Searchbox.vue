
import type { useProductsStore } from '@/store/products';

<template>
    <input class="form-control" type="search" placeholder="Szukaj..." aria-label="Search" @input="handleSearch">
</template>
<script setup lang="ts">
  import { useProductsStore } from '@/store/products';
  const productsStore = useProductsStore();
  const handleSearch = (event: Event) => {
    const value = (event.target as HTMLSelectElement).value;
    productsStore.searchBy(value);
  }

</script>