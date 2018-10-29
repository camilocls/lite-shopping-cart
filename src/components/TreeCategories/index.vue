<template>
  <div class="tree-categories">
    <TreeCategory
      @set-active-item="setActiveItem"
      v-for="category in categories"
      :key="category.id"
      :active="activeItem"
      :levels="category.sublevels"
      :level="category"
    />
  </div>
</template>

<script>
import TreeCategory from "./TreeCategory.vue";

export default {
  name: "TreeCategories",
  data() {
    return {
      activeItem: 0
    };
  },
  props: {
    categories: Array
  },
  components: {
    TreeCategory
  },
  methods: {
    setActiveItem: function(id) {
      this.activeItem = id;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
