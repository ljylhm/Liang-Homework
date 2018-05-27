<template>
  <div class="index-container">
    <!-- swiper部分 -->
    <div class="swiper">
      <el-carousel trigger="click" height="560px" class="swiper-img">
        <el-carousel-item v-for="item in scrollImg" :key="item">
          <div class="swiper-img">
            <img :src=item alt="">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 导航条部分 -->

    <div class="show-area-til">
      最新精选
    </div>

    <!-- 列表展示 -->
    <div class="list-show-container">
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

    <div class="topic">
      <div class="topic-title">今日话题</div>
      <p>哪些品牌story让你觉得“哇！”或“切！”</p>
      <div class="topic-btn">点击参与</div>
    </div>

    <div class="show-area-til">
      精选活动
    </div>

    <div class="jx-activity">
      <div class="list-show-container">
        <div class="act-item" v-for="item in 4" :key="item">
          <div class="act-up">
            <div class="act-img">
              <div class="act-type">展览</div>
              <img src="http://pic.topys.cn/uploads/20180403/1333385608.jpg?x-oss-process=style/event_cover" alt="">
            </div>
            <p class="act-item-title">可爱的哲学－小林 麻衣子个展</p>
            <p class="act-item-sub">可爱如我</p>
          </div>
          <div class="act-down">
            上海 | 2018/04/15
          </div>
        </div>
      </div>
      <div class="more-activity">更多活动</div>
    </div>

    <div class="show-area-til">
      热门精选
    </div>

    <div class="jx-activity">
      <div class="list-show-container">
        <div class="list-item" v-for="item in 6" :key="item">
          <div class="list-up">
            <div class="list-img">
              <img src="http://pic.topys.cn/uploads/20180331/1781977170.jpg?x-oss-process=style/article_list" alt="">
            </div>
            <div class="list-type">好广告</div>
            <div class="list-title">咋办！一向被我们嘲笑的日韩人民英语讲得都比咱好了</div>
            <div class="list-desc">这样的Chinglish不被吊打才怪。</div>
          </div>
          <div class="list-down">
            <div class="list-count view"></div>
            <div class="list-count-font">123</div>
            <div class="list-count comment"></div>
            <div class="list-count-font">123</div>
            <div class="list-count praise"></div>
            <div class="list-count-font">123</div>
            <div class="list-author list-count-font">by
              <span>秋小叶</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-loading index-loading">
      <div class="pos-center">
        <div class="loading-no-tab loading pos-center" @click="showLoading" v-if="!isLoading">
          浏览更多
        </div>
        <div class="loading-tab loading pos-center" v-else></div>
        <!-- <img src="/assest/img/loading.gif" alt=""> -->
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import helper from "@/helper";
import config from "@/config";
// 首页的vue
let queryArticle = config.Api.localAddress + "article/queryArticle";
export default {
  data() {
    return {
      isLoading: false,
      latestList: [],
      hotestList: [],
      message: "welcome to index.vue",
      scrollImg: [
        "http://pic.topys.cn/uploads/20180227/1483325017.png",
        "http://pic.topys.cn/uploads/20180123/220215725.png",
        "http://pic.topys.cn/uploads/20180327/1355392551.png",
        "http://pic.topys.cn/uploads/20180326/739536397.png"
      ]
    };
  },
  methods: {
    testFun: function() {},
    showLoading() {
      this.isLoading = true;
    },
    getDetail(type,artid){
      type = type || 1;
      switch(type){
        case 1: helper.routerGo("read",{
          type:1,
          id:artid
        })
      }
    }
  },
  created: function() {
    // 这个时候进入组件 已经具有data属性
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
};
</script>
<style lang="less" scoped>
.index-container {
  width: 100%;
  height: 1000px;
}
.show-area-til {
  width: 100%;
  height: 125px;
  line-height: 125px;
  color: #202020;
  font-size: 22px;
  text-align: center;
}

.list-item {
  width: 335px;
  height: 444px;
  margin-bottom: 50px;
}

.list-up {
  width: 100%;
  height: 410px;
  border-bottom: 1px solid #edeeee;
}

.list-down {
  width: 100%;
  height: 40px;
}

.list-img {
  width: 100%;
  height: 260px;
  position: relative;
  & div {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    &:hover {
      background: #3333334a;
      cursor: pointer;
    }
  }
}
// .list-img:hover{
//     cursor: pointer;

//     opacity: 0.5;
// }

.list-img img {
  width: 100%;
  height: 100%;
}

.list-type {
  width: 100%;
  height: 34px;
  font-size: 12px;
  color: #828686;
  line-height: 34px;
}

.list-title {
  width: 100%;
  height: auto;
  font-size: 18px;
  line-height: 24px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.list-desc {
  width: 100%;
  box-sizing: border-box;
  padding-top: 10px;
  font-size: 12px;
  color: #828686;
}

.list-count {
  width: 40px;
  height: 100%;
  float: left;
}

.list-count-font {
  width: 20px;
  height: 100%;
  line-height: 38px;
  font-size: 12px;
  float: left;
  color: #a5a7aa;
}

.list-author {
  width: auto;
  height: 100%;
  text-align: right;
  float: right;
}
.index-loading {
  margin-top: -30px;
}
</style>