<template>
  <div class="shopping-cart">
    <h2 class="shopping-cart__title">Shopping Cart</h2>
    <div class="items">
      <ProductCart
        v-for="product in productsInCart"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="shopping-cart__total">
      Total: <strong>${{totalPriceCart|setCurrency}}</strong>
    </div>
    <div v-if="!checkout&&productsInCart.length" class="shopping-cart__checkout">
      <button @click="setheckout()" class="shopping-cart__buy">Buy</button>
    </div>
    <div v-if="checkout" class="shopping-cart__checkout-success">
      Your order has been sent.
    </div>
  </div>
</template>

<script>
import ProductCart from "./ProductCart.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "ShoppingCart",
  components: {
    ProductCart
  },
  computed: {
    ...mapState(["checkout"]),
    ...mapGetters(["productsInCart", "totalPriceCart"])
  },
  methods: {
    setheckout() {
      return this.$store.dispatch("setCheckout", true);
    }
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
.shopping-cart__total {
  font-size: 24px;
  margin-bottom: 30px;
}
.shopping-cart__buy {
  width: 100%;
  display: block;
  background-color: #2dc560;
  border: 0;
  border-radius: 4px;
  color: #fff;
  padding: 10px 20px;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  transition: background-color ease 0.3s;
}
.shopping-cart__buy:hover {
  background-color: #06a73c;
}
.shopping-cart__checkout-success {
  font-size: 24px;
}
</style>
