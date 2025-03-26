import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import GalleryView from '../views/GalleryView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import DonateView from '../views/DonateView.vue'
import ContactUs from '../views/ContactUs.vue'
import AboutView from '../views/AboutView.vue'
import VolunteerView from '../views/VolunteerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/donate',
      name: 'donate',
      component: DonateView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactUs,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/volunteer',
      name: 'volunteer',
      component: VolunteerView,
    },
  ],
})

export default router
