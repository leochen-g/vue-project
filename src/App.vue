<template>
  <div id="app">
    <mt-header fixed v-bind:title="this.$store.state.title">
      <mt-button @click="goBack" icon="back" slot="left">返回</mt-button>
      <mt-button icon="more" @click.native="sheetVisible = true" size="large" slot="right"></mt-button>
    </mt-header>
    <mt-actionsheet :actions="actions" v-model="sheetVisible" cancel-text=""></mt-actionsheet>
    <!--content-->

    <router-view></router-view>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="movie">
        <img slot="icon" src="./assets/movie.png">
        影片
      </mt-tab-item>
      <mt-tab-item id="cinema">
        <img slot="icon" src="./assets/cinema.png">
        影院
      </mt-tab-item>
      <mt-tab-item id="home">
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
        selected: 'movie',
        sheetVisible: false,
        actions: [],
        // title: '娱票儿-电影票'
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
          this.$store.commit('new_title', '娱票儿-电影票')
//          this.title = '娱票儿-电影票'
          // this.title = this.$store.state.title
        } else if (val === 'cinema') {
          localStorage.selected = val
          this.$router.push('/cinema')
          // this.title = '在线选座影院'
          this.$store.commit('new_title', '在线选座影院')
        } else if (val === 'home') {
          localStorage.selected = val
          this.$router.push('/home')
         // this.title = '我的'
          this.$store.commit('new_title', '我的')
        } else {
          localStorage.selected = 'movie'
          this.$router.push('/')
         // this.title = '娱票儿-电影票'
          this.$store.commit('new_title', '娱票儿-电影票')
        }
      }
    },
    methods: {
      about: function () {
        this.$msgbox('关于', '这是一个高仿娱票小程序的VUE项目')
      },
      topView: function () {
        this.$msgbox('置顶', '暂时还不能置顶呢！')
      },
      openAlbum() {
        this.$msgbox('桌面', '添加桌面还没开始呢！')
      },
      send() {
        this.$msgbox('转发', '你想转到哪呢？')
      },
      goBack() {
        this.$router.push('/')
        localStorage.selected = 'movie'
        this.title = '娱票儿-电影票'
        this.$router.go(0)
      }
    },
    mounted: function () {
      this.actions = [{
        name: '转发',
        method: this.send
      }, {
        name: '显示在俩天顶部',
        method: this.topView
      }, {
        name: '添加到桌面',
        method: this.openAlbum
      }, {
        name: '关于娱票',
        method: this.about
      }
      ]
    }
  }
</script>

<style lang="scss">
  @import "style/style.scss";
</style>
