<script setup lang="ts">
defineProps<{
  cart: {
    id: number;
    products: {
      name: string;
    };
    users: {
      name: string;
    };
    quantity: number;
  };
}>();
</script>

<template>
  <li class="card card-cart">
    <div class="card-image">
      <Image />
    </div>
    <p v-if="cart.products">Item : {{ cart.products.name }}</p>
    <p>Cart : {{ cart.id }}</p>
    <p v-if="cart.users">Cart : {{ cart.users.name }}</p>
    <p>Quantity : {{ cart.quantity }}</p>
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
