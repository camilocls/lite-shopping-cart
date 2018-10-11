<template>
  <div class="product">
    <div class="product__image">
      <img src="https://picsum.photos/150/90/?random">
    </div>
    <div class="product__details">
      <h3 class="product__title product__detail">{{product.name}}</h3>
      <div class="product__price product__detail">{{product.price}}</div>
      <div class="product__quantity product__detail"><span>Stock:</span> {{product.quantity}}</div>
      <div v-if="!product.available" class="product__sold-out product__detail">Sold Out</div>
    </div>
    <div class="product__actions">
      <button class="product__btn">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product {
  margin-bottom: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.product__details {
  padding: 20px;
}
.product__image {
  border-radius: 4px 4px 0 0;
  overflow: hidden;
}
.product__image img {
  width: 100%;
}
.product__title {
  margin: 0 0 6px;
  font-size: 18px;
  word-break: break-all;
}
.product__price {
}
.product__quantity span {
  font-weight: 700;
}
.product__detail {
  margin-bottom: 6px;
}
.product__sold-out {
  background-color: #f94a4a;
  border-radius: 4px;
  line-height: 1;
  padding: 4px;
  color: #fff;
  font-size: 12px;
  display: inline-block;
}
.product__btn {
  border: 0;
  background-color: #f94a4a;
  border-radius: 4px;
  line-height: 1;
  padding: 4px;
  color: #fff;
  font-size: 12px;
  display: inline-block;
}
</style>
