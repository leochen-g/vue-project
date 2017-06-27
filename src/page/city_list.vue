<template>
  <!--城市列表-->
      <div id="city_list">
        <mt-header fixed v-bind:title="title" >
          <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <div class="City">
          <mt-index-list>
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

