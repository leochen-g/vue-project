<template>
  <!--影院-->
  <div id="cinema">
    <div class="cinema_content">
      <ul class=" cinema-list" >
        <li v-for="item in list">
          <a data-login-required="true" class="cinema-item" href="">
            <div class="sched-info">
              <aside class="left-info">
                <h3 class="cinema-name">{{item.cinema_name}}</h3>
                <p class="cinema-address">{{item.area_name}} {{item.addr}}</p>
                <div class="cinema-label">
                  <p class="cinema-label-tags" >
                    <span class="Label Label--secondary"v-for="tag in item.special">{{tag.text}}</span>
                  </p>
                  <p class="cinema-label-hui">
                    <span class="Label special-hui">惠</span>
                    <span>{{item.discount_des_all}}</span>
                  </p>
                </div>
              </aside>
              <aside class="right-info">
                <span class="dis-sale">
                  <span class="price">{{item.mem_price}}</span>
                  <span class="grey">起</span>
                </span>
              </aside>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'cinema',
    components: {},
    data () {
      return {
        list: ''
      }
    },
    mounted: function () {
      this.axios({
        method: 'get',
        baseURL: 'https://bird.ioliu.cn/v1?url=http://wx-api.wepiao.com/v2',
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
