<template>
  <div class="product">
    <div class="product__image">
      <img class="product__image-img" :src="product.image">
      <div v-if="!product.available" class="product__sold-out product__detail">Sold Out</div>
    </div>
    <div class="product__details">
      <h3 class="product__title product__detail">{{product.name}}</h3>
      <div class="product__price product__detail">${{product.price|setCurrency}}</div>
      <div class="product__quantity product__detail">
        <span class="product__quantity-label">Stock:</span> {{product.quantity}}
      </div>

      <div class="product__actions">
        <button v-if="product.available" @click="addProduct(product.id)" class="product__btn">
          <span class="product__btn-label">Add</span>
          <span class="product__btn-add">+</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: Object
  },
  methods: {
    addProduct(id) {
      this.$store.dispatch({
        type: "addProductCart",
        id: id
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product {
  margin-bottom: 40px;
  box-shadow: 0 4px 14px -1px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}
.product:hover {
  box-shadow: 0 4px 14px -1px rgba(0, 0, 0, 0.1);
}
.product__details {
  padding: 20px;
}
.product__image {
  position: relative;
}
.product__image-img {
  width: 100%;
  display: block;
}
.product__title {
  margin: 0 0 6px;
  font-size: 18px;
  word-break: break-all;
}
.product__quantity-label {
  font-weight: 700;
}
.product__detail {
  margin-bottom: 6px;
}
.product__sold-out {
  background-color: #f94a4a;
  border-radius: 4px;
  line-height: 1;
  padding: 5px 12px;
  color: #fff;
  font-size: 12px;
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 10px;
  user-select: none;
}
.product__actions {
  margin-top: 30px;
}
.product__btn {
  border: 0;
  background-color: #ec701c;
  border-radius: 4px;
  line-height: 1;
  padding: 5px 14px;
  color: #fff;
  font-size: 14px;
  display: inline-block;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color ease 0.3s;
}
.product__btn:hover {
  background-color: #f79e03;
}
.product__btn-add {
  line-height: 1;
  font-size: 24px;
  margin-left: 10px;
  font-style: normal;
}
</style>
