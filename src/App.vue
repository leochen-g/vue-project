<template>
  <div id="app">
    <!--content-->
    <router-view></router-view>
    <mt-tabbar v-model="selected" fixed >
      <mt-tab-item id="movie" isRouter>
        <img slot="icon" src="./assets/movie.png">
        影片
      </mt-tab-item>
      <mt-tab-item id="cinema" isRouter>
        <img slot="icon" src="./assets/cinema.png">
        影院
      </mt-tab-item>
      <mt-tab-item id="home" isRouter>
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
    watch: {
      selected: function (val, oldval) {
        if (val === 'movie') {
          this.$router.push('/')
        } else if (val === 'cinema') {
          this.$router.push('/cinema')
        } else {
          this.$router.push('/home')
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "style/style.scss";
</style>
