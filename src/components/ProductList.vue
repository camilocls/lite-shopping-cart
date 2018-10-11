<template>
  <div class="product-list">
    <Product v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import Product from "./Product";

export default {
  name: "ProductList",
  props: {
    products: Array
  },
  components: {
    Product
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-list {
  width: auto;
  display: flex;
  flex-flow: row wrap;
}
.product {
  flex: 0 0 46%;
}
.product:nth-child(2n) {
  margin-left: 8%;
}
</style>
