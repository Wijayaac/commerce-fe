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

<template>
  <li class="card card-cart">
    <div class="card-image">
      <Image />
    </div>
    <p v-if="product">Item : {{ (product as Product).name }}</p>
    <p>Cart : {{ cart.id }}</p>
    <p v-if="user">Cart : {{ (user as User).name }}</p>
    <p>Cart : {{ cart.quantity }}</p>
  </li>
</template>

<style lang="scss" scoped>
.card {
  padding-bottom: 0;
  margin-bottom: 24px;
  &-cart {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 40px;
    gap: 20px;
  }

  &-image {
    position: relative;
    width: 100px;
    padding-bottom: 100px;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
    }
  }
}
</style>
