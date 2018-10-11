<template>
  <div class="shopping-cart">
    <h2 class="shopping-cart__title">Shopping Cart</h2>
    <div class="items">
      <ProductCart
        v-for="product in products"
        :key="product.id"
        v-bind="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCart from "./ProductCart.vue";
const locaStorageProducts = JSON.parse(localStorage.getItem("shoppingCart"));

export default {
  name: "ShoppingCart",
  data() {
    return {
      products: locaStorageProducts
    };
  },
  components: {
    ProductCart
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shopping-cart__title {
  margin: 0 0 26px;
  line-height: 1.2;
}
.items__item {
  display: flex;
}
</style>
