<template>
  <div id="app">
    <!--content-->
    <router-view></router-view>
    <mt-tabbar v-model="selected" fixed >
      <mt-tab-item id="movie" >
        <img slot="icon" src="./assets/movie.png">
        影片
      </mt-tab-item>
      <mt-tab-item id="cinema" >
        <img slot="icon" src="./assets/cinema.png">
        影院
      </mt-tab-item>
      <mt-tab-item id="home" >
        <img slot="icon" src="./assets/home.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
    </div>
</template>

<script>
  export default {
    name: 'app',
    components: {},
    data () {
      return {
        selected: 'movie'
      }
    },
    created: function () {
      if (localStorage.selected) {
        this.selected = localStorage.selected
      }
    },
    watch: {
      selected: function (val, oldval) {
        if (val === 'movie') {
          localStorage.selected = val
          this.$router.push('/')
        } else if (val === 'cinema') {
          localStorage.selected = val
          this.$router.push('/cinema')
        } else if (val === 'home') {
          localStorage.selected = val
          this.$router.push('/home')
        } else {
          localStorage.selected = 'movie'
          this.$router.push('/')
        }
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "style/style.scss";
</style>
