<template>
  <div class="filter">
    <h3>Order by:</h3>
    <select v-model="filter" @change="filterProducts" class="field__select" id="field-price">
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value">
      {{option.label}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "FilterProducts",
  data() {
    return {
      filter: "",
      options: [
        { label: "Select a option", value: "" },
        { label: "Price: Low to High", value: "priceLowHigh" },
        { label: "Price: High to Low", value: "priceHighLow" },
        { label: "Quantity", value: "quantity" },
        { label: "Available", value: "available" }
      ]
    };
  },
  props: {},
  methods: {
    filterProducts() {
      this.$store.commit({
        type: "SET_FILTER",
        filter: this.filter
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.filter {
  margin-bottom: 18px;
  display: flex;
  align-items: center;
}
.field__select {
  border: 0;
  background-color: #eee;
  border-radius: 4px;
  padding: 8px 12px;
  margin-left: 20px;
}
</style>
