<template>
  <!--header-->
  <mt-header fixed v-bind:title="title" >
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</template>
<style lang="scss">
  @import "../style/style.scss";
</style>
<script>
  export default {
    components: {},
    props: {
      title: {
        type: String,
        default: '娱票-电影票'
      }
    },
    data () {
      return {
      }
    }
  }
</script>

