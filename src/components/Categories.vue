<template>
  <div class="categories">
    <TreeCategory :categories="categories" />
  </div>
</template>

<script>
import TreeCategory from "./TreeCategory/index.vue";

export default {
  name: "Categories",
  props: {
    categories: Array
  },
  components: {
    TreeCategory
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.categories {
  margin: 0 0 30px;
}
</style>
