<template>
  <div class="col-12 col-md-3 mb-4">
    <div class="card card--product">
      <div class="card-image">
        <!-- <img :src="product?.image_path" :alt="product?.name" /> -->
      </div>
      <nuxt-link :to="'/product/' + product?.id">{{ product?.name }}</nuxt-link>
      <p>{{ product?.price }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Product {
  id?: number;
  name?: string;
  category_id?: number;
  // image_path?: string;
  price?: string;
}

const props = defineProps<{
  product: Product;
}>();
const slug = computed(() => props.product?.name?.replace(/\//g, "").replace(/\s+/g, "-").toLowerCase());
</script>

<style lang="scss">
.card {
  height: 100%;
  padding-bottom: 40px;
  &-image {
    position: relative;
    width: 100%;
    padding-bottom: 250px;

    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
