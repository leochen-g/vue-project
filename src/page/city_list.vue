<template>
  <!--城市列表-->
  <div id="city_list">
    <div class="City">

      <mt-index-list :height='545' >
        <div class="mint-searchbar">
          <div class="mint-searchbar-inner">
            <i class="mintui mintui-search"></i>
            <input type="search" placeholder="搜索" class="mint-searchbar-core">
          </div>
          <a class="mint-searchbar-cancel" style="display: none;">取消</a>
        </div>
        <mt-index-section v-for="(item,index) in Object.keys(obj)" :key="index" :index="item">
          <mt-cell v-for="(cell,index) in obj[item]" :key="index" :title="cell.city_name"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>

</template>

<script>
  export default{
    name: 'city_list',
    components: {},
    data () {
      return {
        title: '娱票儿-电影票',
        alphabet: [],
        obj: ''
      }
    },
    created() {
      this.axios.get('/pub/@cities', {
        params: {
          filter: true
        }
      })
        .then(response => {
          this.obj = response.data.all_cities
        })
    }
  }
</script>

