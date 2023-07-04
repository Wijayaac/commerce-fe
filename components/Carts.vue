<template>
  <div class="cart-items">
    <ul>
      <CartItem v-for="cart in carts" :key="cart.id" :cart="cart" />
    </ul>
  </div>
</template>
<script setup lang="ts">
interface Carts {
  carts: {
    id: number;
    user_id: number;
    product_id: number;
    quantity: number;
  };
}

const props = defineProps<{
  carts: Carts;
}>();
</script>
