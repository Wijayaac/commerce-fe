// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/supabase", "@nuxt/image", "@pinia/nuxt"],
  imports: {
    dirs: ["./stores"],
  },
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      suapabaseAPI: process.env.SUPABASE_URL,
    },
  },
});
