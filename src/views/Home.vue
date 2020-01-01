<template>
  <div class>
    <p>Home</p>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      isCollapsed: false
    };
  },
  created() {
    console.log(this.$store.getters.menuList);
  }
};
</script>
<style scoped></style>
