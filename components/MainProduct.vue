<template>
  <div class="main-product row">
    <div class="col-12 col-md-6">
      <div class="main-product-image">
        <Image />
      </div>
    </div>
    <div class="main-product-content col-12 col-md-6">
      <h1>{{ product.name }}</h1>
      <p>Price : {{ product.price }}</p>
      <p>{{ product.description }}</p>
      <div class="main-product-cta">
        <!-- <button @click="addToCart">Add to Cart</button> -->
        <UiButton @click="addToCart">Add to Cart</UiButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Product {
  id?: number;
  name?: string;
  category_id?: number;
  description?: string;
  // image_path?: string;
  price?: string;
}

const props = defineProps<{
  product: Product;
}>();

const client = useSupabaseClient();

// GET current user and find the id
// might using state management for this
const { data: user } = useAsyncData("user", async () => {
  const { data } = await client.from("users").select("id").single();
  return data;
});

interface Cart {
  id: number;
  user_id: number | undefined;
  product_id: number | undefined;
  quantity: number;
  created_at: Date;
}

const addToCart = async () => {
  const cartData: Cart = {
    id: Math.floor(Math.random() * 10000),
    user_id: user.value?.id,
    product_id: props.product.id,
    quantity: 1,
    created_at: new Date(),
  };

  try {
    const { data } = await client.from("carts").insert([cartData]);
    console.log("Cart inserted:", data);
    // Handle success, update UI, etc.
  } catch (error) {
    console.error("Error inserting cart:", error);
    // Handle error, show error message, etc.
  }
};
</script>

<style lang="scss">
.main-product {
  margin-top: 60px;

  &-image {
    position: relative;
    width: 100%;
    height: 450px;

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
