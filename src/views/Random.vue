<template>
  <div class="random">
    <article class="card gradient-shadow poke-time">
      <div class="time-left">{{timeLeft}}</div>
      <div class="poke-info" v-if="pokeData != null">
        <img :src="pokeData.sprites.other['official-artwork'].front_default" alt="picutre of pokemon">
        <div>{{pokeData.name}}</div>
      </div>
      <button @click="getPoke">Get Random Pokemon</button>
  </article>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Random',
  data () {
    return {
      timeLeft: null,
      pokeData: null,
    }
  },
  beforeMount () {
    setInterval(() => {
      this.timeLeft = this.GetSec()
    }, 1000),
    this.getPoke()
  },
  methods: {
    GetSec() {
      let now = new Date();
      let hour = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;

      let date0 = new Date(now.toString().slice(11, 15), 0, 1);
      let date1 = new Date();
      let numberOfDays = Math.ceil((date1 - date0) / 8.64e7);

      let temp = ((numberOfDays - 1) * 86400) + totalSecondsToday
      let secondLeft = 31622400 - temp
      return secondLeft
    },
    getPoke() {
      axios.get('https://pokeapi.co/api/v2/pokemon/' + String(Math.floor(Math.random() * 898)))
      .then(response => {
        this.pokeData = response.data
      })
    }
  }
}
</script>

<style scoped>

.random {
  display: grid;
  justify-items: center;
  align-items: center;
}

/* card gradient got it form  Kevin Powell */
.card {
  display: flex;
  flex-direction: column;
  /* margin: 2rem; */
  padding: 2rem;
  max-width: 35ch;
  border-radius: 0.25em;
  color: white;
  box-shadow: 0 0 3rem hsl(0 0 0 / 0.2);
}

.gradient-shadow {
  background: linear-gradient(
    45deg,
    hsl(7 100% 63%),
    hsl(239 100% 50%)
  );
  box-shadow: 0;
  position: relative;
  isolation: isolate;
}

.gradient-shadow::before,
.gradient-shadow::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: inherit;
}

.gradient-shadow::before {
  filter: blur(0.75em);
}

.gradient-shadow::after {
  opacity: 0.5;
  filter: blur(2em);
}

.time-left {
  font-size: max(2.5rem, 4vmin);
}

.poke-time {
  display: grid;
  justify-items: center;
  align-items: center;
  text-shadow: 0px 0px 20px black;
}

.poke-time img {
  max-width: 250px;
}

.poke-info {
  margin: 2rem 0;
}

.poke-info div{
  font-size: max(2rem, 4vmin);
}

.poke-time button{
  color: aliceblue;
  background: transparent;
  padding: 1rem;
  border: 2px solid aliceblue;
  border-radius: 50px;
  cursor: pointer;
}

.poke-time button:focus-visible {
  transform: scale(1.2);
  background: rgba(255, 255, 255, 0.2);
}

/* apply :hover only on pointer */
@media (hover: hover) and (pointer: fine) {
  .poke-time button:hover{
    background: rgba(255, 255, 255, 0.2);
  }
}

</style>