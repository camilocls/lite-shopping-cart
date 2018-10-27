<template>
  <div class="tree-category" v-bind:class="{ 'tree-category__opened': open }">
    <div
      class="tree-category__head"
      @click="toggleTree"
      :class="{ 'tree-category__head--active': active === level.id || open }"
    >
      <h3 @click="setCategory(level.id)" class="tree-category__title">{{level.name}}</h3>
      <button
        v-if="levels && levels.length"
        :class="{ 'tree-category__toggle--open': open }"
        class="tree-category__toggle">
          <i class="tree-category__toggle-icon tree-category__toggle-plus">+</i>
          <i class="tree-category__toggle-icon tree-category__toggle-minus">-</i>
      </button>
    </div>
    <div v-if="levels" class="tree-category__sub-items" v-bind:class="{ 'tree-category__hide': !open }">
      <TreeItem
        @set-active-item="setActiveItem"
        v-for="level in levels"
        :key="level.id"
        :active="active"
        :level="level"
        :levels="level.sublevels"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TreeItem",
  data() {
    return {
      open: false
    };
  },
  props: {
    level: Object,
    levels: Array,
    active: Number
  },
  methods: {
    setCategory(id) {
      this.$store.dispatch({
        type: "setCurrentCategory",
        id: id
      });
    },
    setActiveItem: function(id) {
      this.$emit("set-active-item", id);
    },
    toggleTree() {
      this.$emit("set-active-item", this.level.id);
      if (!this.levels) return false;
      this.open = !this.open;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tree-category {
  padding: 0 0 10px;
}
.tree-category:not(:last-child) {
  border-bottom: 1px solid #ddd;
}
.tree-category__hide {
  display: none;
}
.tree-category__sub-items {
  padding-left: 15px;
}
.tree-category__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
}
.tree-category__title {
  font-size: 16px;
  margin: 0;
  padding: 10px 0;
  line-height: 1;
  cursor: pointer;
}
.tree-category__head--active .tree-category__title {
  color: #f94a4a;
}
.tree-category__toggle {
  border: 0;
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
  line-height: 0;
}
.tree-category__toggle-icon {
  font-size: 20px;
  font-style: normal;
}
.tree-category__toggle-minus {
  display: none;
}
.tree-category__toggle--open .tree-category__toggle-plus {
  display: none;
}
.tree-category__toggle--open .tree-category__toggle-minus {
  display: block;
}
</style>
