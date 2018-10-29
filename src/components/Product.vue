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

      <div v-if="product.available" class="product__actions">
        <button @click="addProduct(product.id)" class="product__btn">
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
  font-size: 16px;
}
.product__image {
  position: relative;
  border-radius: 6px 6px 0 0;
  overflow: hidden;
}
.product__image-img {
  width: 100%;
  display: block;
}
.product__title {
  margin: 0 0 6px;
  word-break: break-all;
  text-transform: capitalize;
}
.product__quantity-label {
  font-weight: 700;
}
.product__detail {
  margin-bottom: 6px;
  text-align: center;
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
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.product__btn {
  border: 0;
  border-radius: 50px;
  line-height: 1;
  width: 80%;
  padding: 8px 14px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color ease 0.3s;
  background: rgb(19, 126, 208);
}
.product__btn:hover {
  background: rgba(85, 88, 218, 1);
}
.product__btn-add {
  line-height: 1;
  font-size: 20px;
  margin-left: 10px;
  font-style: normal;
  font-weight: 300;
}
</style>
