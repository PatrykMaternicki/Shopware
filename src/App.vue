<template>
  <div>
    <Navbar />
    <div class="mt-4 container-fluid col-10">
      <div class="d-flex flex-gap flex-wrap">
        <Card class="item" :product="product" v-for="(product, index) in products" />
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import { useProductsStore } from "@/store/products";
import { storeToRefs } from "pinia";
import Card from "@/components/Card.vue";

const productsStore = useProductsStore();
productsStore.getProducts();
const { products } = storeToRefs(productsStore);
</script>
<style lang="scss">
.flex-gap {
  gap: 1rem;
}

.item {
  width: 30%;
}

</style>
