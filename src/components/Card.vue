<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ product.translated.name }}</h5>
      <p class="card-text">{{ product.translated.description }}</p>
      <p>
        <b>Cena: </b>
        <span class="">
          {{ product.calculatedPrice.totalPrice }}
        </span>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ product: any }>();
</script>
