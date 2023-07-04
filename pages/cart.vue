<template>
  <div>
    <h1>Cart</h1>
    <Carts :carts="carts" />
  </div>
</template>

<script setup>
const client = useSupabaseClient();
const { data: carts } = await useAsyncData("carts", async () => {
  const { data } = await client.from("carts").select("*").eq("user_id", 1);
  return data;
});
</script>
