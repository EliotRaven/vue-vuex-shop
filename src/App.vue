<template>
  <div id="app">
    <div id="nav">
      <md-content class="md-primary">
        <router-link class="md-button md-primary" to="/">Products</router-link>
        <router-link class="md-button md-primary" to="/cart">Cart</router-link>
      </md-content>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2b2b2b;
}
#nav {
  padding: 20px 40px;
  text-align: right;
  background: #2b2b2b;
  a {
    font-weight: bold;
    color: #bec8b5;
    padding: 10px 20px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.content {
  padding: 2em;
}
</style>
