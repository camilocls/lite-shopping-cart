import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    productsInCart: [],
    filterBy: null,
    checkout: false,
    currentCategory: null
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_CURRENT_CATEGORY(state, id) {
      state.currentCategory = id;
    },
    INCREMENT_QUANTITY_PRODUCT_CART(state, { id, quantity }) {
      const product = state.productsInCart.find(item => item.id === id);
      product.quantity += quantity;
    },
    DECREMENT_QUANTITY_PRODUCT_CART(state, { id, quantity }) {
      const product = state.productsInCart.find(item => item.id === id);
      product.quantity -= quantity;
    },
    ADD_PRODUCT_CART(state, id) {
      state.productsInCart.push({ id, quantity: 1 });
    },
    DECREMENT_STOCK_ITEM(state, { id, quantity }) {
      const product = state.products.find(item => item.id === id);
      if (product.quantity < 1) return false;
      product.quantity -= quantity;
    },
    INCREMENT_STOCK_ITEM(state, { id, quantity }) {
      const product = state.products.find(item => item.id === id);
      product.quantity += quantity;
    },
    SET_PRODUCTS_IN_CAR(state, products) {
      state.productsInCart = products;
    },
    SET_CHECKOUT(state, checkout) {
      state.checkout = checkout;
    },
    SET_FILTER(state, { filter }) {
      state.filterBy = filter;
    }
  },
  actions: {
    setProducts({ commit }) {
      return new Promise(resolve => {
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
            resolve();
          });
      });
    },
    setCategories({ commit }) {
      return new Promise(resolve => {
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
            resolve();
          });
      });
    },
    setProductsIncart({ state, commit }) {
      const localProducts = localStorage.getItem("shoppingCart")
        ? JSON.parse(localStorage.getItem("shoppingCart"))
        : [];
      const products = [...state.products];

      if (!localStorage.length) return false;

      localProducts.forEach(localProduct => {
        products.find((product, index) => {
          if (product.id === localProduct.id) {
            products[index].quantity -= localProduct.quantity;
          }
        });
      });
      commit("SET_PRODUCTS_IN_CAR", localProducts);
    },
    setCurrentCategory({ commit }, category) {
      commit("SET_CURRENT_CATEGORY", category.id);
    },
    addProductCart({ state, commit, dispatch }, { id }) {
      const productInCart = state.productsInCart.find(
        productCart => productCart.id === id
      );
      if (productInCart) {
        commit("INCREMENT_QUANTITY_PRODUCT_CART", { id, quantity: 1 });
      } else {
        commit("ADD_PRODUCT_CART", id);
      }

      commit("SET_CHECKOUT", false);
      dispatch("saveShoppingCartOnClient", state.productsInCart);
      commit("DECREMENT_STOCK_ITEM", { id, quantity: 1 });
    },
    decrementProductCart({ state, commit, dispatch }, { id, quantity }) {
      commit("DECREMENT_QUANTITY_PRODUCT_CART", { id, quantity });
      commit("INCREMENT_STOCK_ITEM", { id, quantity });
      dispatch("saveShoppingCartOnClient", state.productsInCart);
    },
    incrementProductCart({ state, commit, dispatch }, { id, quantity }) {
      commit("INCREMENT_QUANTITY_PRODUCT_CART", { id, quantity });
      commit("DECREMENT_STOCK_ITEM", { id, quantity });
      dispatch("saveShoppingCartOnClient", state.productsInCart);
    },
    deleteProduct({ state, commit, dispatch }, { id }) {
      const productCart = state.productsInCart.find(
        product => product.id === id
      );
      const productsInCart = state.productsInCart.filter(
        product => product.id != id
      );

      commit("INCREMENT_STOCK_ITEM", {
        id: productCart.id,
        quantity: productCart.quantity
      });
      commit("SET_PRODUCTS_IN_CAR", productsInCart);
      dispatch("saveShoppingCartOnClient", productsInCart);
    },
    saveShoppingCartOnClient(storage, products) {
      const data = JSON.stringify(products);
      localStorage.setItem("shoppingCart", data);
    },
    setCheckout({ commit, dispatch }, checkout) {
      dispatch("saveShoppingCartOnClient", []);
      commit("SET_PRODUCTS_IN_CAR", []);
      commit("SET_CHECKOUT", checkout);
    }
  },
  getters: {
    getProducts: state => {
      let products = state.products;

      if (state.currentCategory) {
        products = products.filter(
          product => product.sublevel_id === state.currentCategory
        );
      }

      return products;
    },
    getFilterProducts: (state, getters) => {
      let products = [...getters.getProducts];

      if (!state.filterBy) return products;

      const filters = {
        available: () =>
          (products = products.filter(product => product.available === true)),
        quantity: () => products.sort((a, b) => b.quantity - a.quantity),
        priceLowHigh: () => products.sort((a, b) => a.price - b.price),
        priceHighLow: () => products.sort((a, b) => b.price - a.price)
      };

      filters[state.filterBy]();

      return products;
    },
    productsInCart: state => {
      return state.productsInCart.map(productCart => {
        const product = state.products.find(
          product => product.id === productCart.id
        );

        return {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: productCart.quantity,
          image: product.image
        };
      });
    },
    totalPriceCart: state => {
      return state.productsInCart.reduce((total, productCart) => {
        const product = state.products.find(
          product => product.id === productCart.id
        );
        const totalProduct = product.price * productCart.quantity;
        return total + totalProduct;
      }, 0);
    }
  }
});
