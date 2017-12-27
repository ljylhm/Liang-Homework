<template>
  <div class="hello">
    <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
   <div class="swiper"> 
    <el-carousel :interval="5000" arrow="always" height="580px">
      <el-carousel-item v-for="item in 4" :key="item">
        <span class="swiper-font">这个幽默广告，可能不太好笑</span>
        <img src="http://pic.topys.cn/uploads/20171206/656466968.png" alt="">
      </el-carousel-item>
    </el-carousel>
   </div> 
  <div class="content">
    <div class="content-all">
      <v-item :title='msg'></v-item>
      <v-item :title='msg'></v-item>
      <v-item :title='msg'></v-item>
      <v-item :title='msg'></v-item>
      <v-item :title='msg'></v-item>

    </div>
  </div>   
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "算是我见过的最酷的汽车广告牌了！",
      input:"123"
    };
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
    padding:0px 200px 0px 195px;
    margin-top: 0px;
  }
  .content-all{
    overflow: hidden;
    border: 1px solid black
  }
</style>
