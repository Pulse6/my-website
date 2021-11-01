<template>
  <div id="app">
    <div id="nav" ref="navBar">
      <router-link class="btn-3" to="/"><span>Me</span></router-link>
      <!-- <router-link to="/about">Contact</router-link> -->
      <router-link class="btn-3" to="/random"><span>Random</span></router-link>
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
  min-height: 100vh;
}

#nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  column-gap: 2rem;
  padding: 1rem 0;
  margin-bottom: 2em;
}

#nav a {
  position: relative;
  font-size: 1.25rem;
  /* padding: 0.5rem 1.2rem; */
  /* border-radius: 0.25rem; */
  font-weight: bold;
  text-decoration: none;
  color: #FFFFFF;
  /* transition: all 0.5s ease-in-out; */
}

#nav a.router-link-exact-active {
  color: #ff7f82;
}

/* apply :hover only on pointer */
@media (hover: hover) and (pointer: fine) {
  /* #nav a:hover {
    background: #ffffff7e;
  } */

  /* From Yuhomyan */
  .btn-3 {
    /* background: rgb(0,172,238); */
    /* background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%); */
    width: 130px;
    height: 40px;
    line-height: 42px;
    padding: 0;
    border: none;
  }

  .btn-3 span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  .btn-3:before,
  .btn-3:after {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    background: rgba(2,126,251,1);
    transition: all 0.3s ease;
  }

  .btn-3:before {
    height: 0%;
    width: 2px;
  }

  .btn-3:after {
    width: 0%;
    height: 2px;
  }

  .btn-3:hover{
    background: transparent;
    box-shadow: none;
  }

  .btn-3:hover:before {
    height: 100%;
  }

  .btn-3:hover:after {
    width: 100%;
  }

  .btn-3 span:hover{
    color: rgba(2,126,251,1);
  }
  
  .btn-3 span:before,
  .btn-3 span:after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    background: rgba(2,126,251,1);
    transition: all 0.3s ease;
  }

  .btn-3 span:before {
    width: 2px;
    height: 0%;
  }

  .btn-3 span:after {
    width: 0%;
    height: 2px;
  }

  .btn-3 span:hover:before {
    height: 100%;
  }

  .btn-3 span:hover:after {
    width: 100%;
  }

}
</style>
