<template>
  <li>
    <p>Cart : {{ cart.id }}</p>
    <p v-if="user">Cart : {{ (user as User).name }}</p>
    <p v-if="product">Cart : {{ (product as Product).name }}</p>
    <p>Cart : {{ cart.quantity }}</p>
  </li>
</template>
<script setup lang="ts">
interface User {
  name: string;
  // Add other properties of the User type here
}

interface Product {
  name: string;
  // Add other properties of the Product type here
}

const props = defineProps<{
  cart: {
    id: number;
    user_id: number;
    product_id: number;
    quantity: number;
  };
}>();

const client = useSupabaseClient();
const { data: product } = await useAsyncData("product", async () => {
  const { data } = await client.from("products").select("*").eq("id", props.cart.product_id).single();
  return data;
});

const { data: user } = await useAsyncData("user", async () => {
  const { data } = await client.from("users").select("*").eq("id", props.cart.user_id).single();
  return data;
});
</script>
