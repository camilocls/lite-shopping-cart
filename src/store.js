import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    cart: []
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_CAR(state, products) {
      state.cart = products;
    }
  },
  actions: {
    setProducts({ commit }) {
      fetch("./data/products.json")
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Oops! This data can not be found.");
          }
        })
        .then(data => {
          commit("SET_PRODUCTS", data.products);
        });
    },
    setCategories({ commit }) {
      fetch("./data/categories.json")
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Oops! This data can not be found.");
          }
        })
        .then(data => {
          commit("SET_CATEGORIES", data.categories);
        });
    }
  }
});
