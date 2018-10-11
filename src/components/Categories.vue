<template>
  <div class="categories">
    <TreeCategorie
      v-for="categorie in categories"
      :key="categorie.id"
      :id="categorie.id"
      :levels="categorie.sublevels"
      :label="categorie.name"
    />
  </div>
</template>

<script>
import TreeCategorie from "./TreeCategorie.vue";

export default {
  name: "Categories",
  props: {
    categories: Array
  },
  components: {
    TreeCategorie
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.categories {
  margin: 0 0 30px;
}
</style>
