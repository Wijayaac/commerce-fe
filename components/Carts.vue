<template>
  <div class="cart-items">
    <ul class="d-flex">
      <CartItem v-for="cart in carts" :key="cart.id" :cart="cart" />
    </ul>
  </div>
</template>
<script setup lang="ts">
interface Cart {
  id: number;
  user_id: number;
  product_id: number;
  quantity: number;
}

const props = defineProps<{
  carts: Cart[];
}>();
</script>

<style scoped lang="scss">
.cart {
  &-items {
    margin-top: 48px;
    ul {
      flex-direction: column;
      list-style: none;
      margin-bottom: 0;
      padding: 0;
    }
  }
}
</style>
