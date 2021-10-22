<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">Contact</router-link>
      <router-link to="/random">Random</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="css">
 @import '~normalize.css';

html {
  background: #101723;
  color: #FFFFFF;
  min-height: 100vh;
  min-width: 100vw;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#app{
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
  font-size: 1.25rem;
  padding: 0.5rem 1.2rem;
  border-radius: 0.25rem;
  font-weight: bold;
  text-decoration: none;
  color: #FFFFFF;
  transition: all 0.5s ease-in-out;
}

#nav a:hover {
  background: #ffffff7e;
}

#nav a.router-link-exact-active {
  color: #ff7f82;
}
</style>
