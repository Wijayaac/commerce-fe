<template>
  <div class="products container">
    <div class="products-wrapper row">
      <ProductCard v-for="(product, key) in products" :key="key" :product="product" />
    </div>
  </div>
</template>
<script setup lang="ts">
const limit = ref(10);
const config = useRuntimeConfig();

// const {
//   data: products,
//   pending,
//   error,
// } = await useAsyncData(
//   "products",
//   () =>
//     $fetch(`${config.public.apiBase}/products`, {
//       params: {
//         limit: limit.value,
//       },
//     }),
//   {
//     watch: [limit],
//   }
// );

const client = useSupabaseClient();

const { data: products } = await useAsyncData("product", async () => {
  const { data } = await client.from("products").select("*");
  return data;
});
</script>
<style scoped></style>
