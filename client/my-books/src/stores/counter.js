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
      return axios.get(
        `https://neo-my-books.herokuapp.com/books?keyword=${keyword}`
      );
    },
    axiosAddWishlist(data) {
      return axios.post(`https://neo-my-books.herokuapp.com/wishlist`, data);
    },
    axiosGetWishlist() {
      return axios.get(`https://neo-my-books.herokuapp.com/wishlist`);
    },
  },
});
