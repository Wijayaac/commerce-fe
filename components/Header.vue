<template>
  <header class="header">
    <div class="header-wrapper d-flex">
      <div class="header-logo">
        <Image />
      </div>
      <nav>
        <ul class="header-links d-flex">
          <li><NuxtLink class="header-link" to="/">Home</NuxtLink></li>
          <li><NuxtLink class="header-link" to="/about">About</NuxtLink></li>
          <li>
            <NuxtLink class="header-link" to="/cart">Cart : <span class="counter"></span></NuxtLink>
          </li>
          <li>
            <div class="user">
              <span v-if="user">
                {{ user.name }}
              </span>
              <span v-else> login </span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script setup>
// TODO Get current user
// current user based on login / no user if not login
const client = useSupabaseClient();
const { data: user } = await useAsyncData("user", async () => {
  const { data } = await client.from("users").select("*").single();
  return data;
});
</script>

<style scoped lang="scss">
.header {
  position: sticky;
  width: 100%;
  height: 65px;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: #eee;
  &-wrapper {
    padding-left: 40px;
    padding-right: 40px;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
  &-logo {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;

    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  &-links {
    list-style: none;
    margin-bottom: 0;
    li {
      margin-right: 20px;

      a {
        color: black;
        font-size: 18px;
        text-decoration: none;
        font-weight: 500;
      }
    }
  }
}
</style>
