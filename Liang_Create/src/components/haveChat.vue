<template>
<div>
  <v-head></v-head>
  <div style="position: relative;top: 65px;padding-bottom:50px">
      <div class="">
        <div class="container-fluid topic-banner">
          <div style="background-image: url(http://pic.topys.cn/uploads/20171211/35522769.png)" class="pic">
              <div class="topic-top">
                  今天聊什么？
                  <div class="line"></div>
              </div>
              <h3>迷失东京2.0，新故事正在发生</h3>
              <a href="" target="_blank" class="join-topic">点击参与</a>
          </div>
        </div>
        <div class="search">
          <el-input v-model="searchContent" placeholder="" style="width:80%" class="inputCss">
             <template slot="prepend"><i class="fa fa-search" aria-hidden="true" style="font-size:16px;"></i></template>
            <el-button slot="append" class="searchButton">搜索</el-button>
          </el-input>
        </div>
<div id="topic-list" class="topic-list c">
<div class="item">
    <div class="cover" style="background-image: url(http://pic.topys.cn/uploads/20171211/1170726950.jpeg?x-oss-process=style/topic_cover);">
     <div class="topic-mask"></div>
     <a target="_blank" href="/topic/detail/id/551" class="tit">来吧，告诉我你心中必打卡的东京好去处</a>
     <p class="count">3</p>
    </div>
   </div>
   <div class="item">
    <div class="cover" style="background-image: url(http://pic.topys.cn/uploads/20171120/1390026924.png?x-oss-process=style/topic_cover);">
     <div class="topic-mask"></div>
     <a target="_blank" href="/topic/detail/id/548" class="tit">还有哪些品牌色令你印象深刻？ 你知道它们背后的小秘密吗？</a>
     <p class="count">1</p>
    </div>
   </div>
   <div class="item">
    <div class="cover" style="background-image: url(http://pic.topys.cn/uploads/20171127/49911765.gif?x-oss-process=style/topic_cover);">
     <div class="topic-mask"></div>
     <a target="_blank" href="/topic/detail/id/549" class="tit">还有哪些软文常用词逃不过你的法眼？</a>
     <p class="count">7</p>
    </div>
   </div>
   <div class="item">
    <div class="cover" style="background-image: url(http://pic.topys.cn/uploads/20171204/1908372565.gif?x-oss-process=style/topic_cover);">
     <div class="topic-mask"></div>
     <a target="_blank" href="/topic/detail/id/550" class="tit">说说你在公共场合收获的奇闻奇遇、奇葩八卦</a>
     <p class="count">1</p>
    </div>
   </div>
   <div class="item">
    <div class="cover" style="background-image: url(http://pic.topys.cn/uploads/20171113/846344012.png?x-oss-process=style/topic_cover);">
     <div class="topic-mask"></div>
     <a target="_blank" href="/topic/detail/id/547" class="tit">不好意思，你的手可能白剁了 </a>
     <p class="count">4</p>
    </div>
   </div>
   <div class="item">
    <div class="cover" style="background-image: url(http://pic.topys.cn/uploads/20171106/775998615.jpg?x-oss-process=style/topic_cover);">
     <div class="topic-mask"></div>
     <a target="_blank" href="/topic/detail/id/545" class="tit">你知道哪些别人可能还不知道的常识？</a>
     <p class="count">15</p>
    </div>
   </div>
   <div class="item">
    <div class="cover" style="background-image: url(http://pic.topys.cn/uploads/20171023/700598104.png?x-oss-process=style/topic_cover);">
     <div class="topic-mask"></div>
     <a target="_blank" href="/topic/detail/id/544" class="tit">聊聊旅行中那些防不胜防踩到的大坑</a>
     <p class="count">14</p>
    </div>
   </div>
   <div class="item">
    <div class="cover" style="background-image: url(http://pic.topys.cn/Uploads/image/20171009/jpG66pZJXN.jpg?x-oss-process=style/topic_cover);">
     <div class="topic-mask"></div>
     <a target="_blank" href="/topic/detail/id/543" class="tit">安利一发你最期待的品牌联名款</a>
     <p class="count">5</p>
    </div>
   </div>
   <div class="item">
    <div class="cover" style="background-image: url(http://pic.topys.cn/Uploads/image/20170925/rc5afSwi7i.jpg?x-oss-process=style/topic_cover);">
     <div class="topic-mask"></div>
     <a target="_blank" href="/topic/detail/id/542" class="tit">还有哪些「设计中的刻板印象」让你觉得不能忍？</a>
     <p class="count">25</p>
    </div>
   </div>
   <div class="item">
    <div class="cover" style="background-image: url(http://pic.topys.cn/Uploads/image/20170911/wSr2hiMwD5.jpeg?x-oss-process=style/topic_cover);">
     <div class="topic-mask"></div>
     <a target="_blank" href="/topic/detail/id/541" class="tit">来吧，告诉我哪句台词对你有特别的意义。</a>
     <p class="count">102</p>
    </div>
   </div>
   <div class="item">
    <div class="cover" style="background-image: url(http://pic.topys.cn/Uploads/image/20170904/R4xdd7TcCj.png?x-oss-process=style/topic_cover);">
     <div class="topic-mask"></div>
     <a target="_blank" href="/topic/detail/id/540" class="tit">告诉我一个让你瞬间拥有主角光环的隐藏技能</a>
     <p class="count">23</p>
    </div>
   </div>
   <div class="item">
    <div class="cover" style="background-image: url(http://pic.topys.cn/Uploads/image/20170816/BQCaJ4MZTE.jpg?x-oss-process=style/topic_cover);">
     <div class="topic-mask"></div>
     <a target="_blank" href="/topic/detail/id/539" class="tit">生活中有哪些你忍无可忍的反人类设计？</a>
     <p class="count">39</p>
    </div>
   </div>
   <div class="item">
    <div class="cover" style="background-image: url(http://pic.topys.cn/test/apG7XxTe37.png?x-oss-process=style/topic_cover);">
     <div class="topic-mask"></div>
     <a target="_blank" href="/topic/detail/id/538" class="tit">我说句实话，你可别哭 </a>
     <p class="count">119</p>
    </div>
   </div>
   <div class="item">
    <div class="cover" style="background-image: url(http://pic.topys.cn/test/hMmZFRar5B.jpg?x-oss-process=style/topic_cover);">
     <div class="topic-mask"></div>
     <a target="_blank" href="/topic/detail/id/495" class="tit">恋爱中那些蠢事</a>
     <p class="count">77</p>
    </div>
   </div>
   <div class="item">
    <div class="cover" style="background-image: url(http://pic.topys.cn/test/WZchQMPBM2.jpeg?x-oss-process=style/topic_cover);">
     <div class="topic-mask"></div>
     <a target="_blank" href="/topic/detail/id/472" class="tit">你反应慢慢慢到什么程度？</a>
     <p class="count">92</p>
    </div>
   </div>
   <div class="item">
    <div class="cover" style="background-image: url(http://pic.topys.cn/test/csRzQMwt35.jpg?x-oss-process=style/topic_cover);">
     <div class="topic-mask"></div>
     <a target="_blank" href="/topic/detail/id/468" class="tit">你都在双11跟风买过哪些商品？</a>
     <p class="count">28</p>
    </div>
   </div>
   <div class="item">
    <div class="cover" style="background-image: url(http://pic.topys.cn/test/psa35NrDkn.jpg?x-oss-process=style/topic_cover);">
     <div class="topic-mask"></div>
     <a target="_blank" href="/topic/detail/id/466" class="tit">坐车时遇到手机外放的人怎么办</a>
     <p class="count">24</p>
    </div>
   </div>
   <div class="item">
    <div class="cover" style="background-image: url(http://pic.topys.cn/test/Bb7t4JZSpz.jpg?x-oss-process=style/topic_cover);">
     <div class="topic-mask"></div>
     <a target="_blank" href="/topic/detail/id/464" class="tit">因为明星代言，你买过哪些东西？</a>
     <p class="count">47</p>
    </div>
   </div>
   <div class="item">
    <div class="cover" style="background-image: url(http://pic.topys.cn/test/rDHTcyFYcd.png?x-oss-process=style/topic_cover);">
     <div class="topic-mask"></div>
     <a target="_blank" href="/topic/detail/id/460" class="tit">朋友的婚恋，该不该给意见？</a>
     <p class="count">18</p>
    </div>
   </div>
   <div class="item">
    <div class="cover" style="background-image: url(http://pic.topys.cn/test/mizDA3SMWA.png?x-oss-process=style/topic_cover);">
     <div class="topic-mask"></div>
     <a target="_blank" href="/topic/detail/id/459" class="tit">什么样的行为让你觉得很low？</a>
     <p class="count">51</p>
    </div>
   </div>
  </div>
  <div id="load-data" class="load-data" style="">
     <a href="javascript:;" class="load-more f-weight">浏览更多</a>
    </div>
      </div>
      <page-foot></page-foot>
  </div>
</div> 
</template>

<script>
export default {
  data() {
    return {
      searchContent: ""
    };
  },
  methods: {},
  mounted: function() {}
};
</script>

<style scoped>
.topic-banner .pic {
  display: block;
  width: 100%;
  height: 320px;
  background-repeat: no-repeat;
  background-position: center;
}
.topic-banner h3 {
  margin: 45px auto;
  text-align: center;
  font-size: 30px;
  line-height: 30px;
  color: #fff;
  font-weight: 700;
}
.topic-banner .topic-top {
  line-height: 20px;
  white-space: nowrap;
  padding: 15px;
  color: #fff;
  text-align: center;
  padding-top: 45px;
}
.topic-banner .join-topic {
  display: block;
  margin: 0 auto;
  height: 40px;
  width: 160px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  border: 1px solid #fff;
}
.search {
  margin: 0 auto;
  text-align: center;
  margin-top: 50px;
  margin-right: 50px;
}
.inputCss {
  border: 1px solid #979797;
}
.searchButton {
  background-color: #1d2129;
  color: #fff;
  width: 100px;
  text-align: center;
}
.topic-list .item {
  width: 248px;
  height: 248px;
  float: left;
  margin-left: 30px;
  margin-bottom: 45px;
  margin-right: 30px;
}
.topic-list .item .cover {
  display: block;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
  padding: 15px;
  color: #fff;
  position: relative;
}
.topic-list .item .cover .topic-mask {
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.topic-list .item .cover .tit {
  display: block;
  font-size: 22px;
  width: 150px;
  height: 100%;
  line-height: 30px;
  overflow: hidden;
  color: #fff;
  position: absolute;
  z-index: 20;
}
.topic-list .item .count {
  height: 25px;
  background-repeat: no-repeat;
  -webkit-background-size: 24px 25px;
  background-size: 24px 25px;
  background-image: url(/Public/home/img/icon/ic-topic-us.png);
  display: block;
  position: absolute;
  left: 15px;
  bottom: 15px;
  font-size: 34px;
  line-height: 25px;
  padding-left: 28px;
  color: #fff;
  z-index: 21;
}
.topic-list .item .tags {
  position: absolute;
  right: 15px;
  bottom: 15px;
  display: block;
  height: 12px;
  font-size: 12px;
  line-height: 12px;
  z-index: 10;
}
.topic-list {
  width: 85%;
  height: 1465px;
  margin: 50px auto 0px auto;
}
.load-data {
  padding: 50px 0 80px 0;
  height: 300px;
  text-align: center;
}
.load-more {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #a5a7aa;
  line-height: 100px;
  text-align: center;
  margin: 0 auto;
}

.f-weight {
  font-weight: 500;
}
a {
  color: #757779;
  outline: 0;
  text-decoration: none;
}
</style>
