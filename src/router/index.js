import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieDetailsView from '../views/MovieDetailsView.vue'
import FavoritesView from '../views/FavoritesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/details/:id',
    name: 'movie-details',
    component: MovieDetailsView
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
