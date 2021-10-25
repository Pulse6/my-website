<template>
  <div class="random">
    <!-- <h1>This is an random page</h1> -->
    <div class="time-left">{{timeLeft}}</div>
  </div>
</template>

<script>

export default {
  name: 'Random',
  data () {
    return {
      timeLeft: null,
    }
  },
  beforeMount () {
    setInterval(() => {
      this.timeLeft = this.GetSec()
    }, 1000)
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
    }
  }
}
</script>

<style scoped>
.time-left {
  font-size: max(2.5rem, 4vmin);
}
</style>