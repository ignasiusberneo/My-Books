import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    title: "",
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    axiosGetBooks(keyword) {
      return axios.get(`http://localhost:4001/books?keyword=${keyword}`);
    },
    axiosAddWishlist(data) {
      return axios.post(`http://localhost:4001/wishlist`, data);
    },
    axiosGetWishlist() {
      return axios.get(`http://localhost:4001/wishlist`);
    },
  },
});
