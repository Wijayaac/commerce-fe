import { acceptHMRUpdate, defineStore } from "pinia";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6am53ZmJpZ3l4aWVobWd0eWxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0Njk1MzksImV4cCI6MjAwNDA0NTUzOX0.BtAi7CpWyQk1GpiRAiFKGgk3DX04QntbzkjOvulJWms";
const supabaseUrl = "https://yzjnwfbigyxiehmgtyld.supabase.co";

export const useCartCounter = defineStore("cart", {
  state: () => ({
    total: 0,
  }),
  actions: {
    increment(amount = 1) {
      this.total += amount;
    },
    async syncData() {
      try {
        const data = await $fetch(`${supabaseUrl}/rest/v1/carts?select=id`, {
          headers: {
            apiKey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
          },
        });
        this.total = data.length;
      } catch (error) {
        console.error(error);
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartCounter, import.meta.hot));
}
