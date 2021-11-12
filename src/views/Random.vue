<template>
  <div class="random" :style="{minHeight: `calc( 100vh - ${navBarHeight}px)`}">
    <article class="card gradient-shadow poke-time">
      <div class="time-left">{{ timeLeft }}</div>
      <div class="poke-info" v-if="pokeData != null">
        <img
          :src="pokeData.sprites.other['official-artwork'].front_default"
          alt="picutre of pokemon"
        />
        <div>{{ pokeData.name }}</div>
      </div>
      <button @click="getPoke">Get Random Pokemon</button>
    </article>
    <div class="group">
      <input
        type="tel"
        @keyup="checkNumber"
        v-model="number"
        :class="[
          check === 'good'
            ? 'background-good'
            : check === 'bad'
            ? 'background-bad'
            : check === 'okay'
            ? 'background-okay'
            : '',
        ]"
      />
      <span class="bar"></span>
      <label>Number Check</label>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from "axios";
export default {
  name: "Random",
  data() {
    return {
      timeLeft: null,
      pokeData: null,
      number: null,
      check: null,
    };
  },
  beforeMount() {
    setInterval(() => {
      this.timeLeft = this.GetSec();
    }, 1000),
      this.getPoke();
  },
  computed: {
    ...mapState(['navBarHeight'])
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

      let temp = (numberOfDays - 1) * 86400 + totalSecondsToday;
      let secondLeft = 31622400 - temp;
      return secondLeft;
    },
    checkNumber() {
      let goodOrBad = {
        1: "good",
        2: "bad",
        3: "good",
        4: "bad",
        5: "good",
        6: "good",
        7: "good",
        8: "good",
        9: "bad",
        10: "bad",
        11: "good",
        12: "bad",
        13: "good",
        14: "bad",
        15: "good",
        16: "good",
        17: "good",
        18: "good",
        19: "bad",
        20: "bad",
        21: "good",
        22: "bad",
        23: "good",
        24: "good",
        25: "good",
        26: "okay",
        27: "okay",
        28: "bad",
        29: "good",
        30: "okay",
        31: "good",
        32: "good",
        33: "good",
        34: "bad",
        35: "good",
        36: "bad",
        37: "good",
        38: "okay",
        39: "good",
        40: "okay",
        41: "good",
        42: "unknow",
        43: "okay",
        44: "bad",
        45: "good",
        46: "bad",
        47: "good",
        48: "good",
        49: "bad",
        50: "okay",
        51: "okay",
        52: "good",
        53: "okay",
        54: "bad",
        55: "okay",
        56: "bad",
        57: "okay",
        58: "okay",
        59: "bad",
        60: "bad",
        61: "okay",
        62: "bad",
        63: "good",
        64: "bad",
        65: "good",
        66: "bad",
        67: "good",
        68: "good",
        69: "bad",
        70: "bad",
        71: "okay",
        72: "bad",
        73: "good",
        74: "bad",
        75: "okay",
        76: "bad",
        77: "okay",
        78: "okay",
        79: "bad",
        80: "okay",
      };
      let formatNumber;
      if (this.number > 80) {
        formatNumber = (this.number / 80 + "").split(".");
        formatNumber = Number("." + formatNumber[1]) * 80;
        this.check = goodOrBad[formatNumber];
      } else {
        this.check = goodOrBad[this.number];
      }
    },
    getPoke() {
      axios
        .get(
          "https://pokeapi.co/api/v2/pokemon/" +
            String(Math.floor(Math.random() * 898))
        )
        .then((response) => {
          this.pokeData = response.data;
        });
    },
  },
};
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
  background: linear-gradient(45deg, hsl(7 100% 63%), hsl(239 100% 50%));
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

.poke-info div {
  font-size: max(2rem, 4vmin);
}

.poke-time button {
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
/* 7CEBC8 */
.background-good {
  border-left: 2px solid rgb(110, 255, 110);
  border-right: 2px solid rgb(110, 255, 110);
}
/* 00354C */
.background-okay {
  border-left: 2px solid rgb(255, 255, 110);
  border-right: 2px solid rgb(255, 255, 110);
}
/* 164B5C */
.background-bad {
  border-left: 2px solid rgb(255, 0, 0);
  border-right: 2px solid rgb(255, 0, 0);
}

/* input */
/* form starting stylings ------------------------------- */
.group {
  position: relative;
  margin: 1.8rem 0;
}
/* Chrome, Safari, Edge, Opera */
.group input::-webkit-outer-spin-button,
.group input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.group input[type="number"] {
  -moz-appearance: textfield;
}
input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  /* border-bottom: 1px solid #757575; */
  background: #101723;
  border-bottom: 1px solid #fff;
  border-left: 2px solid #101723;
  border-right: 2px solid #101723;
  color: #fff;
}

input:focus {
  outline: none;
}

/* LABEL ======================================= */
label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label,
input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #ffffff;
}

/* BOTTOM BARS ================================= */
.bar {
  position: relative;
  display: block;
  width: 100%;
}

.bar:before,
.bar:after {
  content: "";
  height: 1px;
  width: 0;
  bottom: 0px;
  position: absolute;
  background: #ff7f82;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.bar:before {
  left: 50%;
}

.bar:after {
  right: 50%;
}

/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}

/* apply :hover only on pointer */
@media (hover: hover) and (pointer: fine) {
  .poke-time button:hover {
    background: rgba(255, 255, 255, 0.2);
  }
}
</style>