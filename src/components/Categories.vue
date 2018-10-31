<template>
  <div class="categories">
    <TreeCategory
      v-for="category in categories"
      :key="category.id"
      :id="category.id"
      :levels="category.sublevels"
      :label="category.name"
    />
  </div>
</template>

<script>
import TreeCategory from "./TreeCategory.vue";

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
