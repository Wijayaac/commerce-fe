<template>
  <div class="products container">
    <div class="products-wrapper row">
      <ProductCard v-for="(product, key) in products" :key="key" :product="product" />
    </div>
  </div>
</template>
<script setup lang="ts">
const client = useSupabaseClient();

const { data: products } = await useAsyncData("product", async () => {
  const { data } = await client.from("products").select("*");
  return data;
});
</script>
<style scoped></style>
