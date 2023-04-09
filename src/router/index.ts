import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '@/pages/AboutPage.vue'
import HomePage from '@/pages/HomePage.vue'
import ProductsPage from '@/pages/ProductsPage.vue'
import ProductsItemPage from '@/pages/ProductsItemPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import PageNotFound from '@/pages/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsPage
    },
    {
      path: '/products/:id',
      name: 'product',
      component: ProductsItemPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: PageNotFound
    }
  ]
})

export default router
