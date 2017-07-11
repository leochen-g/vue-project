<template>
  <div id="app">
    <mt-header fixed v-bind:title="title">
        <mt-button @click="goBack"  icon="back" slot="left">返回</mt-button>
      <mt-button icon="more"  @click.native="sheetVisible = true" size="large" slot="right"></mt-button>
    </mt-header>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"  cancel-text=""></mt-actionsheet>
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
        selected: 'movie',
        sheetVisible: false,
        actions: [],
        title: '娱票儿-电影票'
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
          this.title = '娱票儿-电影票'
        } else if (val === 'cinema') {
          localStorage.selected = val
          this.$router.push('/cinema')
          this.title = '在线选座影院'
        } else if (val === 'home') {
          localStorage.selected = val
          this.$router.push('/home')
          this.title = '我的'
        } else {
          localStorage.selected = 'movie'
          this.$router.push('/')
          this.title = '娱票儿-电影票'
        }
      }
    },
    methods: {
      about: function() {
        alert('这是基于VUE的项目')
      },
      topView: function () {
        console.log('this is top')
      },
      openAlbum() {
        console.log('opening album')
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
        method: this.takePhoto
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
