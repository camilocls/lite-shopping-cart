<template>
  <div class="counter">
    <button @click="decrement" class="counter__button counter__minus counter__item">-</button>
    <span class="counter__total counter__item">{{counter}}</span>
    <button @click="increment" class="counter__button counter__plus counter__item">+</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    id: String,
    counter: Number
  },
  methods: {
    decrement() {
      if (this.counter === 1) return false;
      this.$store.dispatch({
        type: "decrementProductCart",
        id: this.id,
        quantity: 1
      });
    },
    increment() {
      this.$store.dispatch({
        type: "incrementProductCart",
        id: this.id,
        quantity: 1
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.counter {
  display: flex;
}
.counter__item {
  flex: 1 0 30%;
  border: 1px solid #ccc;
  padding: 6px 10px;
  line-height: 1;
  background-color: transparent;
}
.counter__button {
  font-size: 20px;
  cursor: pointer;
  line-height: 0;
}
.counter__minus {
  border-radius: 3px 0 0 3px;
  border-right: 0;
}
.counter__plus {
  border-radius: 0 3px 3px 0;
  border-left: 0;
}
.counter__total {
  cursor: default;
}
</style>
