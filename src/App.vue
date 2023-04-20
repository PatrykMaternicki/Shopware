<template>
  <div>
    <Navbar />
    <div class="container col-5 mt-5 mb-5">
      <Searchbox />
    </div>
    <div class="container-fluid pa-0 bg-light">
        <div class="pt-4 pb-4 col-10 mx-auto">
          <div class="d-flex flex-gap flex-wrap">
            <Card :key="index" class="item" :product="product" v-for="(product, index) in products" />
          </div>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import { useProductsStore } from "@/store/products";
import { storeToRefs } from "pinia";
import Card from "@/components/Card.vue";
import Searchbox from '@/components/Searchbox.vue';
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
