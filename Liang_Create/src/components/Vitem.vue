<template>
  <div style="float:left;margin-right:30px;margin-bottom:30px;cursor:pointer">
    <div class="item-head">
      <img src="http://pic.topys.cn/uploads/20171225/1397993506.png?x-oss-process=style/article_list" alt=""> 
    </div>
    <div class="item-info">
      <div class="title">这块遭雷劈的广告牌，火了!</div>
      <div class="subtitle">{{title}}</div>
      <div class="show-list">
       <div> 
        <span class="view-record">
          <img src="../assets/ic-browse.png" alt="">
        </span>
        <span class="num">1234</span>
        <span class="view-record">
          <img src="../assets/ic-comment.png" alt="">
        </span>
         <span class="num">25</span>
        <span class="view-record">
          <img src="../assets/ic-praise.png" alt="">
        </span>
         <span class="num">12</span>
       </div>  
         <span class="view-record num author">
            by Billy
         </span>
      </div>
    </div>
  </div>   
</template>

<script>
export default {
  data(){
    return{
      mes:123  
    }
  },
  methods(){

  },
  created () {
   console.log(this.title) // 空值
  },
  props:[
    'title'
  ]
}
</script>

<style>
p{
 margin: 0px;
 padding: 0px; 
}
.item-head{
  width: 342px;
  height: 264px;
}
.item-head img{
  width: 100%;
  height: 100%;
}
.item-info{
  width: 342px;
  height: 150px;
}
.title{
  width: 100%;
  font-size: 18px;
  color:#202020;
  padding-top:20px;
}
.subtitle{
  width: 100%;
  color:#757779;
  padding-top:15px;
  font-size: 12px;
}
.show-list{
  border-top:#edeeee;
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  padding-top: 14px;
  margin-top: 32px;
}
.show-list img{
  width: 100%;
  height: 100%;
}
.show-list div{
  display:inline-block;
  position:relative;
  left:-10px
}
.item-info p{
   border: 1px solid black
}
.num{
   width: 20px;
   height: 20px;
   position: relative;
   top: -3px;
   font-size: 12px;
   color: #a5a7aa;
   display: inline-block;
}
.view-record{
  width: 25px;
  height: 25px;
  margin-left: 10px;
  display:inline-block;
}
.view-record.num.author{
  float:right;
  width: 100px;
  box-sizing: border-box;
  padding-top:10px;
  position: relative;
  text-align: right;
}

</style>
