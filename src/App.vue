<template>
  <div id="app">
    <Header/>
    <div class="container">
      <div class="side-left box-shadow">
        <ProductList :products="products" />
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

export default {
  name: "app",
  components: {
    Header,
    ProductList,
    ShoppingCart
  },
  mounted() {
    this.$store.dispatch("setProducts");
  },
  computed: mapState(["products", "categories"])
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
.side-left {
  flex: 0 0 62%;
}
.side-right {
  flex: 0 0 35%;
}
.box-shadow {
  box-shadow: 0 2px 14px 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 30px;
}
</style>
