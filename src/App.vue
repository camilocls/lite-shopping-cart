<template>
  <div id="app">
    <div class="container">
      <div class="side-left box-shadow">
        <Categories :categories="categories" />
        <div class="container-products">
          <FilterProducts />
          <ProductList :products="getFilterProducts" />
        </div>
      </div>
      <div class="side-right box-shadow">
        <Header/>
        <ShoppingCart />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
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
      this.$store.dispatch("setProductsIncart");
    });
  },
  computed: {
    ...mapState(["categories"]),
    ...mapGetters(["getFilterProducts"])
  }
};
</script>

<style scoped>
.side-left {
  margin-bottom: 30px;
  flex: 0 0 68%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-flow: row wrap;
}
.categories {
  width: 100%;
}
.container-products {
  width: 100%;
}
.filter {
  margin: 0 0 20px;
}
.box-shadow {
  box-shadow: 0 2px 14px 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 30px;
}
@media (min-width: 992px) {
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
    margin: 0;
  }
}
@media (min-width: 768px) {
  .categories {
    flex: 0 0 30%;
  }
  .container-products {
    flex: 0 0 67%;
  }
}
</style>
