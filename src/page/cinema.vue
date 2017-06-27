<template>
  <!--影院-->
      <div id="cinema">
        <mt-header fixed v-bind:title="title" >
          <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
      </div>
</template>
<style>
    body {
        background-color: #ffffff;
    }
</style>
<script>
  export default{
    name: 'cinema',
    components: {},
    data () {
      return {
        title: '在线选座影院'
      }
    }
  }
</script>
