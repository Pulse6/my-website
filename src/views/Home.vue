<template>
  <div class="home">
    <div class="about">
      <img src="@/assets/me.jpeg" alt="">
      <h1>Nice to meet you <span role="img" aria-label="sheep">🐑</span></h1>
      <p>My name is Hok Lun Siu, You may call me Marco. I am passionate about web development. I enjoy learning and sharing my own knowledge with my colleagues to hone our coding abilities, and problem solving. I am always looking forward to the new challenges of the ever changing technological world we live in. I am excited to be given the opportunity to be apart of a coding team.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped>
.about {
  display: grid;
  align-items: center;
  justify-items: center;
  /* grid-template-rows: repeat(3, 1fr); */
  margin: 0.5rem;
}

h1 {
  font-size: max(2.5rem, 4vmin);
  /* font-size: 5vmin; */
  background-color: #FFE53B;
  background: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font-size: max(1.5rem, 2vmin);
  /* font-size: 4.5vw; */
  /* font-size: clamp(1rem, 20vw, 1.5rem); */
}

img {
  max-width: 250px;
  border-radius: 5%;
}
</style>
