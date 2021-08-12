<template>
  <HelloWorld msg="Onde tomar minha segunda dose contra COVID-19?" />
  <div id="app">
    <GMap />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import GMap from "./components/GMap.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    GMap,
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
}
</style>
