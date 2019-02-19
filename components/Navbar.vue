<template>
  <b-navbar toggleable="lg" type="light" fixed="top">
    <b-navbar-brand to="/">nuxt-universal</b-navbar-brand>
    <b-navbar-toggle target="navCollapse"></b-navbar-toggle>
    <b-collapse is-nav id="navCollapse">
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style scoped lang="scss">
.navbar {
  background: #eee;
}
</style>
