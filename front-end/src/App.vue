<template>
  <div id="app">
    <router-link to="/" class="header-link"><h1 class="header">The Forum</h1></router-link>
    <div class="content">
      <router-view />
    </div>
    <div class="footer">
      <div> ~ </div>
      <a class="footer-link" href="https://github.com/jaspeterson/creative-project-4">github</a>
      <div> ~ </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.header-link {
  text-decoration: none;
  color: black;
  height: 5vh;
  /* left: 50%;
  transform: translate(-50%, 0); */
}

.content {
  min-height: 84vh;
}

.footer {
  height: 5vh;
  padding: 20px 100px 0px 100px;
  display: flex;
  justify-content: center;
}
.footer a {
  color: #000;
  margin: 0 20px 0 20px;
  text-decoration: none;
}
</style>
