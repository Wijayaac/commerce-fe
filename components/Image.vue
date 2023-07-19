<template>
  <picture>
    <!-- make reusable image component, with different image ratio option -->
    <source media="(min-width: 992px)" :srcset="url ? url : '/images/placeholder.svg'" />
    <nuxt-img class="img-fluid" :src="url ? url : '/images/placeholder.svg'"></nuxt-img>
  </picture>
</template>
<script setup lang="ts">
defineProps<{
  url?: string;
}>();
</script>
