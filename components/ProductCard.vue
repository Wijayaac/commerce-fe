<template>
  <div class="col-12 col-md-3">
    <div class="card card--product">
      <div class="card-image">
        <img :src="product?.image" :alt="product?.title" />
      </div>
      <h2>{{ product?.title }}</h2>
      <p>{{ product?.price }}</p>
      <div class="rating">
        <span>Review : {{ product?.rating?.rate }}, </span>
        <span>Total : {{ product?.rating?.count }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  product?: {
    title?: string;
    image?: string;
    price?: string;
    rating?: {
      rate?: number;
      count?: number;
    };
  };
}>();
</script>

<style lang="scss">
.card {
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
