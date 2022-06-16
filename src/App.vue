<template>
  <div>
    <Header></Header>
    <router-view>hello</router-view>
    <!-- <Footer v-show="$route.path == '/home' || $route.path == '/search'"></Footer> -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
// 引入
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "",
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 获取全部商品分类
    this.$store.dispatch("categoryList");
  },
};
</script>

<style scoped>
</style>