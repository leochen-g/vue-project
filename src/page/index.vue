<template>
  <mt-tab-container-item id="影片">
    <div class="navbar-page">
      <mt-navbar v-model="selected">
        <mt-tab-item id="first">正在上映</mt-tab-item>
        <mt-tab-item id="second">即将上映</mt-tab-item>
      </mt-navbar>
    </div>
  </mt-tab-container-item>
  <!--tab-container-->

</template>
<script>

  export default{
    name: 'navbar-page',
    data () {
      return {
        selected: 'first',
        lists: []
      }
    },
    watch: {
    },
    created () {
      this.getData()
    },
    methods: {
      getData: function () {
      }
    }
  }
</script>
