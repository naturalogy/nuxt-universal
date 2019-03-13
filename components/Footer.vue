<template>
  <footer id="site-footer" role="contentinfo">
    <div class="container">
      <div class="copyright">&copy; <time>{{ new Date().getFullYear() }}</time> nuxt-universal</div>
      <a href="#" class="pageTop" :class="{'d-none': scrollY < 256}">Page Top</a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {this.scrollY = window.pageYOffset},
    getPosition () {
      if (this.$el) {
        return this.$el.getBoundingClientRect().top + this.scrollY
      }
      else {
        return 0
      }
    }
  }
 }
</script>

<style scoped lang="scss">
#site-footer {
  background: #eee;
  padding: 1rem;
  .copyright {
    font-size: .875rem;
    text-align: center;
  }
  .pageTop {
    background: rgba(black,.8);
    font-size: .75rem;
    color: white;
    line-height: 1.1;
    position: fixed;
    right: .5rem;
    bottom: .5rem;
    padding: .5rem 1rem;
  }
}
</style>
