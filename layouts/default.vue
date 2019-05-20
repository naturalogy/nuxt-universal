<template>
  <div id="page">
    <Navbar/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
}
body {
  font: 400 16px/1.75 "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック体, YuGothic, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif;
}
#page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 4rem;
  #content {
    flex-grow: 1;
    section {
      margin-bottom: 4rem;
    }
  }
}
</style>
