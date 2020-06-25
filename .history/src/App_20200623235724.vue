<template>
  <div id="app">
    <Nav msg="Welcome to Your Vue.js App" />
    <Home />
    <Contact />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Home from "./components/Home.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "App",
  components: {
    Nav,
    Home,
    Contact,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
