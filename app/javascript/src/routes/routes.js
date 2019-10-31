import Product from '../components/Product.vue';
import ViewProduct from '../components/ViewProduct.vue';
import ProductReviews from '../components/ProductReviews.vue';
import ProductList from '../components/ProductList.vue';
import Cart from '../components/Cart.vue';


export const routes = [
  // LEGACY ROUTES
  { path: '/products/:productId/view', redirect: { name: 'viewProduct' } },
  // LEGACY ROUTES

  { path: '', component: ProductList },
  { path: '/products/:productId', name: 'product', props: true, component: Product, children: [
      { path: 'details', name: "viewProduct", props: true, component: ViewProduct },
      { path: 'reviews', name: "productReviews", props: true, component: ProductReviews }
  ] },
  { path: '/cart', component: Cart, alias: '/shopping-cart' },
  { path: '*', component: { template: '<h1>Page Not Found!</h1>' } }
];
