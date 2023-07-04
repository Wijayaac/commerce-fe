<template>
  <picture>
    <!-- make reusable image component, with different image ratio option -->
    <source media="(min-width: 992px)" srcset="/images/placeholder.svg" />
    <nuxt-img class="img-fluid" src="/images/placeholder.svg"></nuxt-img>
  </picture>
</template>
