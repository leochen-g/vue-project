<template>
  <!--footer-->
  <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="影片">
      <img slot="icon" src="../assets/logo.png">
      影片
    </mt-tab-item>
    <mt-tab-item id="影院">
      <img slot="icon" src="../assets/logo.png">
      影院
    </mt-tab-item>
    <mt-tab-item id="我的">
      <img slot="icon" src="../assets/logo.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  export default{
    props: ['id'],
    components: {},
    data () {
      return {
        selected: '影片',
        lists: []
      }
    }
  }
</script>
