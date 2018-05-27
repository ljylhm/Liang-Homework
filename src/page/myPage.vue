<template>
  <div class="container">
      <div class="front">
          <div class="front-content">
             <img class="front-headimg" :src="'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526562537453&di=885ef687cfd6494627b856ad03eb20e6&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01655a595aec51a8012193a3e131d0.jpg'">
             <div class="front-info">
                梁钧元的主页
             </div>
          </div>
      </div>
      <div class="active" @click="activeChoose">
          <span data-index=1 :class="{ 'addActive' : index == 1 }">我的文章</span>
          <span data-index=2 :class="{ 'addActive' : index == 2 }">我的评论</span>
          <span data-index=3 :class="{ 'addActive' : index == 3 }">我的活动</span>
      </div>

      <div class="jx-activity my-page-title">
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
    <v-loading :isLoad="isLoading" @pageChange = "pageChange" ref="load"></v-loading>   
  </div>
</template>

<script>
export default {
  data () {
    return {
        message: "welcome to myPage.vue",
        index: 1,
        curpage: 1,
        isLoading: false
    };
  },
  methods: {
    pageChange:function(page){
       this.curpage = page || 1;
    },
    activeChoose:function(e){
        this.index = e.target.getAttribute("data-index") || 1;
    },
    test:function(){
      this.$refs["load"].close(); 
    }
  },
  mounted:function(){
    console.log(this.$refs["load"]);
  }
}

</script>
<style lang='less' scoped>
@front-color:#fafafa; /* 上部背景颜色 */
@span-color: #1d2129; /* span颜色 */
.common-border{
    border:1px solid #000000;
}
.common-row-center{
  position: absolute;
  left: 50%;
  .transfrom(-50%, 0%);
}
.common-col-center{
  position: absolute;
  top: 50%;
  .transfrom(0%, -50%);
}
.common-center{
  .common-row-center;
  .common-col-center;
}
.container{
    width: 100%;
    height: auto;
}
.transfrom(@row,@col){
    -webkit-transform: translate(@row,@col);
    transform: translate(@row,@col);
}
.common-border-box(@top,@right,@down,@left){
  box-sizing: border-box;
  padding:@top @right @down @left;
}
.front{
    width: 100%;
    height: 120px;
    box-sizing: border-box;
    padding: 0px 220px 0px 150px;
    background-color: @front-color;
}
.front-content{
  min-width:600px;
  height:100%;
  position: relative;
  .common-border-box(0px,40px,0px,20px);
}
.front-headimg{
    width: 90px;
    height: 90px;
    border-radius: 50%;
    .common-col-center;
}
.front-info{
    width: auto;
    .common-col-center;
    left: 130px;
    font-size: 26px;
}
.active{
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #edeeee;
    margin-top: 20px;
    line-height: 20px;
    text-align: center;
    & span{
      display: inline-block;
      color: @span-color;
      margin: -3px; 
      padding: 0px 15px;
      height: 30px;
      cursor: pointer;
    }
}
.addActive{
   border-bottom: 2px solid #000000;
}
.my-page-content{
   width: 100%;
   height: auto; 
}
.my-page-title{
   margin-top: 40px;
}
</style>