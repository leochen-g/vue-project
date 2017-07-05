<template>
  <!--个人中心-->
  <div id="home">
    <mt-header fixed v-bind:title="title">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="home_bg">
      <div class="user-img">
        <img src="http://image.bloggeng.com/gitblog/git.png" alt="">
        <p class="user_name">{{user_name}}</p>
      </div>
    </div>
    <div class="home_content">
      <div class="home_tips">
        <div class="home_discount">
          <img src="http://image.bloggeng.com/gitblog/zhe.png" width="24px" height="24px"
               alt="">
          <span class="mint-cell-text">折扣卡</span> <!---->
        </div>
        <div class="home_red">
          <img src="http://image.bloggeng.com/gitblog/red.png" width="24px" height="24px"
               alt="">
          <span class="mint-cell-text">折扣卡</span> <!---->
        </div>
      </div>
      <div class="home_main_content">
        <ul class="content_list">
          <li class="list-item" v-for="item in movie_list">
            <div class="list-item-content">
              <div class="item-title">
                <span class="left movie-name">{{item.movie_name}}</span>
                <span class="right">
                  <img src="http://image.bloggeng.com/gitblog/right.png" width="20px"height="20px" alt="">
                </span>
              </div>
              <div style="clear: both"></div>
              <div class="movie-address">{{item.movie_address}}</div>
              <div class="movie-time">
                <span class="left movie-time">{{item.movie_time}}</span>
                <span class="right saw movie-see" v-if="item.flag === 1">已放映</span>
                <span class="right see movie-see" v-else="item.flag === 0">待取票</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'home',
    components: {},
    data () {
      return {
        title: '我的',
        user_name: '小K前端',
        movie_list: [
          { movie_name: '新木乃伊',
            movie_address: '金谊华夏影城',
            movie_time: '2017-06-16 18:50:00',
            flag: 1
          },
          { movie_name: '变形金刚5',
            movie_address: '金谊华夏影城',
            movie_time: '2017-07-16 15:50:00',
            flag: 0
          }
        ]
      }
    }
  }
</script>
