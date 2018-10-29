<template>
  <div class="categories">
    <TreeCategories :categories="categories" />
  </div>
</template>

<script>
import TreeCategories from "./TreeCategories/index.vue";

export default {
  name: "Categories",
  props: {
    categories: Array
  },
  components: {
    TreeCategories
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.categories {
  margin: 0 0 30px;
}
</style>
