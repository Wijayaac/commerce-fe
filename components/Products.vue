<template>
  <div class="products container">
    <div class="products-wrapper row">
      <ProductCard v-for="(product, key) in products" :key="key" :product="product" />
    </div>
  </div>
</template>
<script setup lang="ts">
interface Product {
  id?: number;
  name?: string;
  category_id?: number;
  image_url?: string;
  price?: string;
}
const props = defineProps<{
  products: Product[];
}>();
</script>
<style scoped></style>
