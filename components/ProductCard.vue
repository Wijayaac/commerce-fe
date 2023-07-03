<template>
  <div class="col-12 col-md-3 mb-4">
    <div class="card card--product">
      <div class="card-image">
        <img :src="product?.image" :alt="product?.title" />
      </div>
      <nuxt-link :to="'/product/' + product?.id">{{ product?.title }}</nuxt-link>
      <p>{{ product?.price }}</p>
      <div class="rating">
        <span>Review : {{ product?.rating?.rate }}, </span>
        <span>Total : {{ product?.rating?.count }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Product {
  id?: number;
  title?: string;
  image?: string;
  price?: string;
  rating?: {
    rate?: number;
    count?: number;
  };
}

const props = defineProps<{
  product: Product;
}>();
const slug = computed(() => props.product?.title?.replace(/\//g, "").replace(/\s+/g, "-").toLowerCase());
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
