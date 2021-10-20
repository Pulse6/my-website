<template>
  <div id="app">
    <div class="max-zone">
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">Contact</router-link>
        <router-link to="/random">Random</router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<style>
 @import '~normalize.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFFFF;
  background: #101723;

  min-height: 100vh;
  min-width: 100vw;
}

.max-zone{
  max-width: 1014px;
  margin: 0 auto;
}

#nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  column-gap: 2rem;
  padding: 1rem 0;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: #FFFFFF;
}

#nav a.router-link-exact-active {
  color: #ff7f82;
}
</style>
