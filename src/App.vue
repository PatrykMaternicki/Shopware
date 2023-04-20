<template>
  <div>
    <Navbar />
    <div class="container col-5 mt-5 mb-5">
      <Searchbox />
    </div>
    <div class="container-fluid pa-0 bg-light">
      <div class="pt-5 pb-5 col-10 mx-auto">
        <div class="grid">
          <div v-for="(product, index) in products">
            <Card
              :key="index"
              :product="product"
            />
          </div>
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
import Searchbox from "@/components/Searchbox.vue";
const productsStore = useProductsStore();
productsStore.getProducts();
const { products } = storeToRefs(productsStore);
</script>
<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 1rem;
}
</style>
