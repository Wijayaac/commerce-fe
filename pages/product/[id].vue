<template>
  <div class="container">
    <div class="main-product row">
      <div class="col-12 col-md-6">
        <div class="main-product-image">
          <img :src="product.image" :alt="product.title" class="img-fluid" />
        </div>
      </div>
      <div class="main-product-content col-12 col-md-6">
        <h1>{{ product.title }}</h1>
        <p>{{ product.price }}</p>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const config = useRuntimeConfig();

const { data: product, pending, error } = await useAsyncData("product", () => $fetch(`${config.public.apiBase}/products/${route.params.id}`));
</script>
