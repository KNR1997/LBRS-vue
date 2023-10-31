import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import Home from "../views/Home.vue";
import Beach from "../views/Beach.vue";
import Restaurant from "../views/Restaurant.vue";
import WildLife from "../views/WildLife.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/beach",
        name: "beach",
        component: Beach,
      },
      {
        path: "/restaurant",
        name: "restaurant",
        component: Restaurant,
      },
      {
        path: "/wildlife",
        name: "wildlife",
        component: WildLife,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
