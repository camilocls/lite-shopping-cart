<template>
  <header class="container header">
    <div class="header__logo">
      <img class="header__logo-image" alt="Lite Ecommerce" src="../assets/logo.png">
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  padding: 30px 0;
  text-align: center;
  display: flex;
  justify-content: center;
}
.header__logo {
  max-width: 250px;
}
</style>
