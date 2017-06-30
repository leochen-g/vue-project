<template>
  <!--影院-->
      <div id="cinema">
        <mt-header fixed v-bind:title="title" >
          <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="cinema_content">
          <div class="cinema_content_list" v-for="(item,index) in list" :key="index">
              <div class="cinema_content_list_item">
                <div class="item_cinema_name">{{item.cinema_name}}</div>
              </div>
          </div>
        </div>
      </div>
</template>
<script>
  export default{
    name: 'cinema',
    components: {},
    data () {
      return {
        title: '在线选座影院',
        list: ''
      }
    },
    mounted: function () {
      this.axios({
        method: 'get',
        baseURL: '/api',
        url: '/cinemas/cities/82',
        params: {
          pageNum: 1,
          pageSize: 20,
          channelId: 3
        }
      })
        .then(response => {
          this.list = response.data.data.list
        })
    }
  }
</script>
