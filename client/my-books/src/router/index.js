import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WishlistView from "../views/WishlistView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/wishlist",
      name: "wishlist",
      component: WishlistView,
    },
  ],
});

export default router;
