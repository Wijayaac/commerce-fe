<template>
  <div class="container">
    <MainProduct :product="product" />
  </div>
</template>
<script setup>
const route = useRoute();
const client = useSupabaseClient();

const { data: product } = await useAsyncData("product", async () => {
  const { data } = await client.from("products").select("*").eq("id", route.params.id).single();
  return data;
});
</script>
