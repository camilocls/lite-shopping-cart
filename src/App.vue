<template>
  <div id="app">
    <div class="container">
      <div class="side-left box-shadow">
        <div class="container-filters">
          <Categories :categories="categories" />
          <FilterProducts />
        </div>
        <ProductList :products="getProducts" />
      </div>
      <div class="side-right box-shadow">
        <Header/>
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
import FilterProducts from "./components/FilterProducts";

export default {
  name: "app",
  components: {
    Header,
    ProductList,
    ShoppingCart,
    Categories,
    FilterProducts
  },
  mounted() {
    this.$store.dispatch("setCategories");
    this.$store.dispatch("setProducts").then(() => {
      this.$store.dispatch("setProductsIncartLocalStorage");
    });
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
  flex-flow: row wrap;
}
.container-filters {
  flex: 0 0 30%;
}
.product-list {
  flex: 0 0 67%;
}
.filter {
  width: 100%;
  flex: 1 0 100%;
  margin: 0 0 40px;
}
.box-shadow {
  box-shadow: 0 2px 14px 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 30px;
}
</style>
