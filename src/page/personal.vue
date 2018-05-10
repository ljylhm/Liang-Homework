<template>
  <div class="personal-container">
       <!-- 前部 -->
       <div class="front">
            <div class="front-content">
                <div class="front-show-box-1">编辑资料</div>
                <div class="front-show-box-2">返回主页</div>
            </div>
       </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        message:"welcome to personal.vue"
    };
  }
}

</script>
<style scoped lang="less">
@front-color:#fafafa; /* 上部背景颜色 */
@font-common: 18px; /* 字体大小 */
.common-border{
  border:1px solid #000000;
}
.personal-container{
  width: auto;
  height: auto;
}
.transfrom(@row,@col){
    -webkit-transform: translate(@row,@col);
    transform: translate(@row,@col);
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
.front{
    width: 100%;
    height: 90px;
    position: fixed;
    top: 84px;
    left: 0px;
    z-index: 1001;
    box-sizing: border-box;
    padding: 0px 220px 0px 150px;
    background-color: @front-color;
}
.front-content{
  min-width:600px;
  height:100%;
  position: relative;
}
.front-show-box(@pos){
  width: 130px;
  height: 40px;
  float: @pos;
  text-align: center;
  font-size: @font-common;
  line-height: 40px;
  .common-col-center;
}
.front-show-box-1{
  .front-show-box(left)
}
.front-show-box-2{
  .front-show-box(right);
  right: 0;
  width: 80px;
  font-size: 14px;
  color: #757779;
  .common-border;
  &:hover{
     background-color: #000000;
     color: #ffffff;
     cursor: pointer;
  }
}
</style>