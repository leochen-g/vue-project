<template>
  <!--个人中心-->
      <div id="home">
        <mt-header fixed v-bind:title="title" >
          <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
      </div>
</template>
<script>
  export default{
    name: 'home',
    components: {},
    data () {
      return {
        title: '我的'
      }
    }
  }
</script>
