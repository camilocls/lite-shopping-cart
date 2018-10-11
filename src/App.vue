<template>
  <div id="app">
    <Header/>
    <div class="container">
      <div class="side-left box-shadow">
        <Categories :categories="categories" />
        <ProductList :products="getProducts" />
      </div>
      <div class="side-right box-shadow">
        <ShoppingCart />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";
import ProductList from "./components/ProductList";
import Categories from "./components/Categories";

export default {
  name: "app",
  components: {
    Header,
    ProductList,
    ShoppingCart,
    Categories
  },
  mounted() {
    this.$store.dispatch("setProducts");
    this.$store.dispatch("setCategories");
  },
  computed: {
    ...mapState(["categories", "currentCategorie"]),
    getProducts() {
      if (this.currentCategorie) {
        return this.$store.getters.productsByCategorie(this.currentCategorie);
      } else {
        return this.$store.state.products;
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.side-right {
  flex: 0 0 30%;
}
.side-left {
  flex: 0 0 68%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.categories {
  flex: 0 0 30%;
}
.product-list {
  flex: 0 0 67%;
}
.box-shadow {
  box-shadow: 0 2px 14px 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 30px;
}
</style>
