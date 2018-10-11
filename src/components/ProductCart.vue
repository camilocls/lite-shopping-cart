<template>
  <div class="product">
    <div class="product__image">
      <img src="https://picsum.photos/50/?random">
    </div>
    <div class="product__details">
      <h3 class="product__title">Lorem ipsum</h3>
      <span class="product__price">$100.000</span>
      <button class="product__delete">Delete</button>
    </div>
    <div class="product__amount">
      <Counter :id="100" />
    </div>
  </div>
</template>

<script>
import Counter from "./Counter.vue";

export default {
  name: "ProductCart",
  props: {},
  components: {
    Counter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product {
  display: flex;
  margin: 0 0 20px;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px;
  font-size: 12px;
}
.product__image {
  width: 50px;
  flex: 0 0 50px;
}
.product__image img {
  border-radius: 4px;
}
.product__details {
  padding: 0 20px 0;
}
.product__title {
  margin: 0 0 4px;
  padding: 0;
  font-size: 14px;
}
.product__price {
  margin: 0 0 8px;
  display: block;
}
.product__delete {
  border: 0;
  padding: 5px 8px;
  line-height: 1;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ec4848;
  transition: background-color ease 0.3s;
}
.product__delete:hover {
  background-color: #ff0000;
}
.product__amount {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
}
</style>
