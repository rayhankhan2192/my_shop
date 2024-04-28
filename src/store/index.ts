import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: {
      items: [],
    },
    isAuthenticated: false,
    token: '',
    isLoading: false
  },
  mutations: {
    initializeStore(state) {
      const storedCart = localStorage.getItem('cart');
      if (storedCart !== null) {
        state.cart = JSON.parse(storedCart);
      } else {
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
     addToCart(state, item) {
      //const exists = state.cart.items.filter(i => i.product.id === item.product.id)
     }
  },
  getters: {},
  actions: {},
  modules: {}
});
