<template>
  <div class="random">
    <div class="poke-time">
      <div class="time-left">{{timeLeft}}</div>
      <div class="poke-info" v-if="pokeData != null">
        <img :src="pokeData.sprites.other['official-artwork'].front_default" alt="picutre of pokemon">
        <div>{{pokeData.name}}</div>
      </div>
      <button @click="getPoke">Get Random Pokemon</button>
    </div>
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
.time-left {
  font-size: max(2.5rem, 4vmin);
}

.poke-time {
  display: grid;
  justify-items: center;
  align-items: center;
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

/* apply :hover only on pointer */
@media (hover: hover) and (pointer: fine) {
  .poke-time button:hover{
    background: rgba(255, 255, 255, 0.2);
  }
}

</style>