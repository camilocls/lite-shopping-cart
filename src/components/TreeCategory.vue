<template>
  <div class="tree-category" v-bind:class="{ 'tree-category__sub-level': isSubLevel }">
    <div
      class="tree-category__head"
      @click="toggleTree"
      :class="{ 'tree-category__head--active': open }"
    >
      <h3 @click="setCategory(id)" :class="[{'tree-category__active': activeItem === id, }, 'tree-category__title']">{{label}}</h3>
      <button
        v-if="levels && levels.length"
        :class="{ 'tree-category__toggle--open': open }"
        class="tree-category__toggle">
          <i class="tree-category__toggle__icon tree-category__toggle__plus">+</i>
          <i class="tree-category__toggle__icon tree-category__toggle__minus">-</i>
      </button>
    </div>
    <div v-if="levels" v-bind:class="{ 'tree-category__hide': !open }">
      <TreeCategory
        v-for="level in levels"
        :key="level.id"
        :id="level.id"
        :activeItem="id"
        :isSubLevel="true"
        :levels="level.sublevels"
        :label="level.name"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TreeCategory",
  data() {
    return {
      open: false
    };
  },
  props: {
    id: Number,
    label: String,
    isSubLevel: Boolean,
    levels: Array,
    activeItem: Number
  },
  methods: {
    setCategory(id) {
      this.$store.dispatch({
        type: "setCurrentCategory",
        id: id
      });
    },
    toggleTree() {
      this.open = !this.open;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tree-category:not(.tree-category__sub-level) {
  padding: 10px 0;
}
.tree-category:not(:last-child) {
  border-bottom: 1px solid #ddd;
}
.tree-category__hide {
  display: none;
}
.tree-category__sub-level {
  padding-left: 15px;
}
.tree-category__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
.tree-category__toggle__icon {
  font-size: 20px;
  font-style: normal;
}
.tree-category__toggle__minus {
  display: none;
}
.tree-category__toggle--open .tree-category__toggle__plus {
  display: none;
}
.tree-category__toggle--open .tree-category__toggle__minus {
  display: block;
}
</style>
