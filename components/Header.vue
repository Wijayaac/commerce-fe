<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav>
    <div class="icon">
      <div v-if="user" class="user">{{ user.name }}</div>
    </div>
  </header>
</template>
<script setup>
const client = useSupabaseClient();

const { data: user } = await useAsyncData("user", async () => {
  const { data } = await client.from("users").select("*").single();
  return data;
});
</script>
