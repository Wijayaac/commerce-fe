<template>
  <div>
    <Hero />
    <Products :products="products" />
  </div>
</template>
<script setup>
const client = useSupabaseClient();

const { data: products } = await useAsyncData("product", async () => {
  const { data } = await client.from("products").select("*");
  return data;
});
</script>
