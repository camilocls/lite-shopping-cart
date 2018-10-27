<template>
  <div class="tree-list">
    <TreeItem
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
import TreeItem from "./TreeItem.vue";

export default {
  name: "TreeCategory",
  data() {
    return {
      activeItem: 0
    };
  },
  props: {
    categories: Array
  },
  components: {
    TreeItem
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
