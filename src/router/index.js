import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import GuestLayout from "../layouts/GuestLayout.vue";
import Home from "../views/Home.vue";
import Middle from "../components/Middle.vue";
import Destination from "../components/Destination.vue";
import Portifolio from "../components/Portifolio.vue";
import Reviews from "../components/Reviews.vue";
import Questions from "../components/Questions.vue";
import Subscribe from "../components/Subscribe.vue";
import Footer from "../components/Footer.vue";

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
