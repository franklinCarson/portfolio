import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Skills from "../views/Skills";
import About from "../views/About"
import WhyApple from "../views/WhyApple";
import Experience from "../views/Experience";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  // {
  //   path: '/skills',
  //   name: 'Skills',
  //   component: Skills
  // },
  {
    path: '/whyapple',
    name: 'WhyApple',
    component: WhyApple
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
