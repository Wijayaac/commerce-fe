import { acceptHMRUpdate, defineStore } from "pinia";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0";
const supabaseUrl = "http://localhost:54321";

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
        const data = await $fetch(`${supabaseUrl}/rest/v1/carts?select=id`);
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
