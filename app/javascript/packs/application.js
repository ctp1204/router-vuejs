import Vue from 'vue'
import App from '../app.vue'
import VueRouter from 'vue-router'
import { routes } from '../src/routes/routes'

Vue.filter('currency', function(value) {
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });
  return formatter.format(value)
});

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(App),
    router: router
  }).$mount()
  document.body.appendChild(app.$el)

  console.log(app)
})
