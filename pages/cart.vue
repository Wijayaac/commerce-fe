<template>
  <div>
    <h1>Cart</h1>
    <Carts :carts="carts" v-if="carts.length" />
  </div>
</template>

<script setup>
const client = useSupabaseClient();
const carts = ref([]);

await useAsyncData("carts", async () => {
  const response = await client.from("carts").select(`id, products (name), users (name), quantity`);

  if (response.error) {
    console.log(response.error);
  } else {
    carts.value = response.data || [];
  }
});
</script>
