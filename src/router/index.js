import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/pages/home/home.vue'
import ListCards from '../components/pages/programs/ListCards.vue'


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
      path:"/programs",
      name:"programs",
      component: ListCards,
      props:{api:"http://localhost:3000/programs"}
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;