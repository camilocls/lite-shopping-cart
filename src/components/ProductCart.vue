<template>
  <div class="product-cart">
    <div class="product-cart__image">
      <img :src="product.image">
    </div>
    <div class="product-cart__details">
      <h3 class="product-cart__title">{{product.name}}</h3>
      <span class="product-cart__price">{{product.price}}</span>
      <button @click="deleteProduct(product.id)" class="product-cart__delete">Delete</button>
    </div>
    <div class="product-cart__amount">
      <Counter :id="product.quantity" />
    </div>
  </div>
</template>

<script>
import Counter from "./Counter.vue";

export default {
  name: "ProductCart",
  props: {
    product: Object
  },
  components: {
    Counter
  },
  methods: {
    deleteProduct(id) {
      this.$store.dispatch({
        type: "deleteProduct",
        id
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-cart {
  display: flex;
  margin: 0 0 20px;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px;
  font-size: 12px;
}
.product-cart__image {
  width: 50px;
  flex: 0 0 50px;
}
.product-cart__image img {
  border-radius: 4px;
}
.product-cart__details {
  padding: 0 20px 0;
}
.product-cart__title {
  margin: 0 0 4px;
  padding: 0;
  font-size: 14px;
}
.product-cart__price {
  margin: 0 0 8px;
  display: block;
}
.product-cart__delete {
  border: 0;
  padding: 5px 8px;
  line-height: 1;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ec4848;
  transition: background-color ease 0.3s;
}
.product-cart__delete:hover {
  background-color: #ff0000;
}
.product-cart__amount {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
}
</style>
