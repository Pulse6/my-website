<template>
  <div class="home">
    <div class="about">
      <img src="@/assets/me.jpeg" alt="">
      <div class="media-link">
        <a href="https://www.linkedin.com/in/marco-siu-790802162/" target="_blank" rel="noopener noreferrer" aria-label="linkedIn"><img src="../assets/linkedin.png" alt="linkedin logo"></a>
        <a href="https://github.com/Pulse6" target="_blank" rel="noopener noreferrer" aria-label="Github"><img src="../assets/GitHub-Mark-Light-120px-plus.png" alt="github logo"></a>
        <a href="https://twitter.com/SiuHok" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><img src="../assets/twitter.png" alt="twitter logo"></a>
        <a href="https://www.canva.com/design/DAD5ca8VaMA/ebM48TwW5I4CTXurvfjnSg/view?utm_content=DAD5ca8VaMA&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" aria-label="Resume"><img src="../assets/cv.png" alt="resume icon"></a>
      </div>
      <h1>Nice to meet you <span role="img" aria-label="sheep">🐑</span></h1>
      <p>My name is Hok Lun Siu, You may call me Marco. I am passionate about web development. I enjoy learning and sharing my own knowledge with my colleagues to hone our coding abilities, and problem solving. I am always looking forward to the new challenges of the ever changing technological world we live in. I am excited to be given the opportunity to be apart of a coding team.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
    GetSec() {
     
    }
  }
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
  background-color: #FFE53B;
  background: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font-size: max(1.1rem, 2vmin);
  /* font-size: 4.5vw; */
  /* font-size: clamp(1rem, 20vw, 1.5rem); */
}

img {
  max-width: 250px;
  border-radius: 10px;
}

.media-link {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  margin: 1rem;
  padding: 0.5rem;
  max-width: 250px;
  width: 100%;
  /* border-radius: 10px; */
}

.media-link a img{
  max-width: 40px;
}

</style>
