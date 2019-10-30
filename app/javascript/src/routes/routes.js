import ProductList from '../components/ProductList.vue'
import Cart from '../components/Cart.vue'

export const routes = [
  { path: '', component: ProductList },
  { path: '/cart', component: Cart },
  { path: '*', component: { template: '<h1>Page Not Found!</h1>' } }
];
