import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    productsInCart: [],
    currentCategorie: null
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
    },
    SET_CURRENT_CATEGORIE(state, id) {
      state.currentCategorie = id;
    },
    INCREMENT_QUANTITY_PRODUCT_CART(state, id) {
      const product = state.productsInCart.find(item => item.id === id);
      product.quantity++;
    },
    ADD_PRODUCT_CART(state, id) {
      state.productsInCart.push({ id, quantity: 1 });
    },
    DECREMENT_STOCK(state, id) {
      const product = state.products.find(item => item.id === id);
      if (product.quantity < 1) return false;
      product.quantity--;
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
    },
    setCategorie({ commit }, categorie) {
      commit("SET_CURRENT_CATEGORIE", categorie.id);
    },
    addProductCart({ state, commit, dispatch }, { id }) {
      const productInCart = state.productsInCart.find(
        productCart => productCart.id === id
      );
      if (productInCart) {
        commit("INCREMENT_QUANTITY_PRODUCT_CART", id);
      } else {
        commit("ADD_PRODUCT_CART", id);
      }

      dispatch({
        type: "saveShoppingCartOnClient",
        products: state.productsInCart
      });
      commit("DECREMENT_STOCK", id);
    },
    saveShoppingCartOnClient(storage, { products }) {
      localStorage.setItem("shoppingCart", JSON.stringify(products));
    }
  },
  getters: {
    productsByCategorie: state => categorieId => {
      return state.products.filter(
        product => product.sublevel_id === categorieId
      );
    }
  }
});
