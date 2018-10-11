<template>
  <div class="tree-categorie" v-bind:class="{ 'tree-categorie__sub-level': isSubLevel }">
    <div
      class="tree-categorie__head"
      @click="toggleTree"
      :class="{ 'tree-categorie__head--active': levels && open }"
    >
      <h3 @click="setCategorie(id)" class="tree-categorie__title">{{label}}</h3>
      <button
        v-if="levels && levels.length"
        :class="{ 'tree-categorie__toggle--open': open }"
        class="tree-categorie__toggle">
          <i class="tree-categorie__toggle__icon tree-categorie__toggle__plus">+</i>
          <i class="tree-categorie__toggle__icon tree-categorie__toggle__minus">-</i>
      </button>
    </div>
    <div v-bind:class="{ 'tree-categorie__hide': !open }">
      <TreeCategorie
        v-for="level in levels"
        :key="level.id"
        :id="level.id"
        :isSubLevel="true"
        :levels="level.sublevels"
        :label="level.name"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TreeCategorie",
  data() {
    return {
      open: false
    };
  },
  props: {
    id: Number,
    label: String,
    isSubLevel: Boolean,
    levels: Array
  },
  methods: {
    setCategorie(id) {
      this.$store.dispatch({
        type: "setCategorie",
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
.tree-categorie:not(.tree-categorie__sub-level) {
  padding: 10px 0;
}
.tree-categorie:not(:last-child) {
  border-bottom: 1px solid #ddd;
}
.tree-categorie__hide {
  display: none;
}
.tree-categorie__sub-level {
  padding-left: 15px;
}
.tree-categorie__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tree-categorie__title {
  font-size: 16px;
  margin: 0;
  padding: 10px 0;
  line-height: 1;
  cursor: pointer;
}
.tree-categorie__head--active .tree-categorie__title {
  color: #f94a4a;
}
.tree-categorie__toggle {
  border: 0;
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
  line-height: 0;
}
.tree-categorie__toggle__icon {
  font-size: 20px;
  font-style: normal;
}
.tree-categorie__toggle__minus {
  display: none;
}
.tree-categorie__toggle--open .tree-categorie__toggle__plus {
  display: none;
}
.tree-categorie__toggle--open .tree-categorie__toggle__minus {
  display: block;
}
</style>
