<template>
  <div class="comment-container">
    <el-row>
       <el-col :span="2">
          <div class="com-common">
               <div class="head-img">
                  <img src="http://www.topys.cn/Public/home/img/pic/no-image-138.png" alt="">
               </div>
          </div>
       </el-col>
       <el-col :span="22">
          <div class="com-common com-body">
             <el-input type="textarea" :rows="8" placeholder="请输入内容" v-model="textarea"></el-input>
          </div>
       </el-col>     
    </el-row>
    <el-row>
       <el-col :span="24">
          <div class="com-btn">
             评论
          </div>
       </el-col>   
    </el-row>
    <div class="latest-com">
      最新评论
    </div>
    <el-row class="com-item">
       <el-col :span="2">
          <div class="com-common">
              <div class="head-img">
                <img src="http://www.topys.cn/Public/home/img/pic/no-image-138.png" alt="">
              </div>
          </div>
       </el-col>
       <el-col :span="22">
          <div class="com-common com-item-body">
               <div class="com-item-name">
                   <span>呵呵______</span>
                   <span class="com-time">5小时前</span>   
               </div> 
               <div class="com-item-content">
                213321
               </div>
               <div class="com-icon" @click="showComment">
                 <div class="icon-common icon-com"></div>
                 <div class="icon-common icon-good"></div>
               </div>
          </div>
          
          <div class="com-common com-item-body" v-show="showTail" >
              <el-input type="textarea" :rows="8" placeholder="请输入内容" v-model="textarea"></el-input>
              <div class="btn-row">
                  <div class="rc-btn-common rc-comment-btn">回复</div>
                  <div class="rc-btn-common rc-cancel-btn">取消</div>
              </div>
          </div>
       </el-col>     
    </el-row> 
    <el-row >
       <el-col :span="24">
         <div class="pageMation">
            <el-pagination background layout="prev, pager, next" :total="500"></el-pagination>
         </div>
       </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
        message:"欢迎来到评论区域",
        textarea: "",
        showTail:false
    }
    props:[""]
  },
  methods:{
    showComment:function(){
      this.showTail = !this.showTail;
    }
  }
}

</script>
<style scoped>
/**** 动画css ****/

.comment-container{
    width: 100%;
    height: auto;
}
.com-common{
    width: 100%;
    height: auto;
}
.com-head{
    box-sizing: border-box;
    padding: 20px 0px;
}
.head-img{
    width: 50px;
    height: 50px;
    margin: 0 auto;
    border-radius: 50%;
}
.head-img img{
    width: 100%;
    height: 100%;
}
/* .com-body{
    
} */
.latest-com{
  box-sizing: border-box;
  padding: 10px 10px;
}
.com-btn{
    width: 160px;
    height: 40px;
    cursor: pointer;
    margin: 15px 0px 100px 0px;
    float: right;
    color: #757779;
    line-height: 40px;
    text-align: center;
    border: 1px solid #000;
}
.com-btn:hover{
    background-color: #000;
    color: #fff;
}
.com-item{
   box-sizing: border-box;
   padding: 30px 0px;
}
.com-item-body{
   width: 100%;
   min-height: 100px; 
}
.com-item-name{
   width: 100%;
   height: 20px;
}
.com-time{
   margin-left: 10px;
   color: #B9A7AA;
   font-size: 12px;
}
.com-item-content{
   width: 100%;
   height: auto;
   box-sizing: border-box;
   padding-top: 10px;
}

.com-icon{
   width: 100%;
   height: 30px;
   margin: 10px 0px 0px 0px;
}
.icon-common{
   width: 30px;
   height: 100%;
   margin-right: 10px;
   float: left;
   cursor: pointer;
}
.icon-com{
  position: relative;
  left: -4px;
  background: url("http://www.topys.cn/Public/home/img/icon/ic-comment.png") no-repeat center center;
  background-size: 100% 100%;
}
.icon-good{
  background: url("http://www.topys.cn/Public/home/img/icon/ic-praise.png") no-repeat center center;
  background-size: 100% 100%;
}
.repeat-comment{
  width: 100%;
  height: 38px;
}
.rc-btn-common{
  width: 118px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  float: right;
  cursor: pointer;
  border: 1px solid #000; 
}
.btn-row{
  overflow: hidden;
  margin-top: 15px;
}
.rc-cancel-btn{
  border: none;
  font-size: 12px; 
}
.rc-comment-btn{
  font-size: 14px; 
}
.rc-comment-btn:hover{
  background-color: #000;
  color: #fff; 
}
</style>