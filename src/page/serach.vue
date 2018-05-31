<template>
  <div>
      <div class="list-show-container">
      <div class="show-serach">查询的重点</div>
      <div class="list-item" v-for="(item,index) in latestList" :key="index">
        <div class="list-up">
          <div class="list-img" @click="getDetail(1,item.artid)">
            <div class="list-img-float"></div>
            <img :src=item.titleimg alt="">
          </div>
          <div class="list-type">好广告</div>
          <div class="list-title">{{item.title}}</div>
          <div class="list-desc">{{item.subtitle}}</div>
        </div>
        <div class="list-down">
          <div class="list-count view"></div>
          <div class="list-count-font">{{item.viewnum}}</div>
          <div class="list-count comment"></div>
          <div class="list-count-font">{{item.comnum}}</div>
          <div class="list-count praise"></div>
          <div class="list-count-font">{{item.goodnum}}</div>
          <div class="list-author list-count-font">by
            <span>{{item.nickname}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import helper from "@/helper";
import config from "@/config";
let queryArticle = config.Api.localAddress + "article/queryArticle";
export default {
  data () {
    return {
      latestList: [],
      hotestList: [],
      message: 'welcome to vue'
    };
  },
  created: function(){
      let para = {
      page: 1,
      limit: 10
    };
    helper.httpGet(queryArticle, para).then(data => {
      if (data.code != 2000) return;
      this.latestList = data.result.slice(0, 6);
      this.hotestList = data.result.slice(6);
      console.log(this.latestList);
    });
  }
}
</script>
<style lang='less' scoped>
.show-serach{
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-weight: 600;
}
</style>