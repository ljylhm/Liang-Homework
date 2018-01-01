<template>
<div class="hello">
    <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
   <v-head></v-head> 
   <div class="swiper"> 
    <el-carousel :interval="5000" arrow="always" height="580px">
      <el-carousel-item v-for="item in 4" :key="item">
        <span class="swiper-font">这个幽默广告，可能不太好笑</span>
        <img src="http://pic.topys.cn/uploads/20171206/656466968.png" alt="">
      </el-carousel-item>
    </el-carousel>
   </div> 
  <div class="content">
    <div class="latest-get">{{msg}}</div>
    <div class="content-all">
      <v-item :info='item' v-for="item in arrArticle" :key="item" @click="abc"></v-item>
    </div>
    <div class="loading-logo-container">
      <div class="loading-logo" @click="loading">
         浏览更多
      </div>
    </div>
  </div>
  <v-foot></v-foot>
</div>
</template>

<script>
import helper from '../js/helper'
let index = 1;
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "最新精选",
      input:"123",
      arrArticle:[],
      loadMore:true
    };
  },
  methods:{
     loading:function(){
        index = index + 1;
        helper.httpGet('http://192.168.43.246:3000/article/getMoreArticle',{
          num:12+index*6
        },'.loading-logo-container').then((res)=>{
           helper.hiddenLoading();
           let getData = res.data;
           this.arrArticle = getData.data
        })
     } 
  },
  created:function(){
    helper.httpGet('http://192.168.43.246:3000/article/getAllArticle').then((res)=>{
       helper.hiddenLoading();
       let getData = res.data;
       this.arrArticle = getData.data;
    })
  },
  mounted:function(){
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  min-height: 500px;
  margin-top: 66px;
}
.swiper{
  width: 100%;
  height: 580px;
}
.swiper-font{
  width: 300px;
  height: 50px;
  color: #ffffff;
  font-size: 32px;
  position: absolute;
  top: 70px;
  left: 218px;
}
.latest-get{
  width: 100%;
  height: 154px;
  text-align: center;
  font-size: 22px;
  line-height: 154px;
}
.loading-logo-container{
  width: 100%;
  height: 160px;
  position: relative;
}
.loading-logo{
   width: 100px;
   height: 100px;
   position: absolute;
   top:50%;
   left: 50%;
   margin-top: -50px;
   margin-left: -50px;
   text-align: center;
   line-height: 100px;
   border-radius: 50%;
   color:#757779;
   font-size:14px;
   cursor: pointer;
   border: 1px solid #a5a7aa;
}
.loading-logo:hover{
  color: #000;
  border: 1px solid #000;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .content{
    width:100%;
    min-height: 500px;
    box-sizing: border-box;
    padding:0px 190px 0px 190px;
    margin-top: 0px;
  }
  .content-all{
    overflow: hidden;
  }
</style>
