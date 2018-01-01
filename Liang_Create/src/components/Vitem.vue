<template>
  <div style="float:left;margin-right:30px;margin-bottom:30px;cursor:pointer" @click="to">
    <div class="item-head">
      <img :src= "info.titleimg" alt="">
    </div>
    <div class="item-info">
      <div class="title">{{info.title}}</div>
      <div class="subtitle">{{info.subtitle}}</div>
      <div class="show-list">
       <div>
        <span class="view-record">
          <img src="../assets/ic-browse.png" alt="">
        </span>
        <span class="num">{{info.viewnum}}</span>
        <span class="view-record">
          <img src="../assets/ic-comment.png" alt="">
        </span>
         <span class="num">{{info.conmentnum}}</span>
        <span class="view-record">
          <img src="../assets/ic-praise.png" alt="">
        </span>
         <span class="num">{{info.goodnum}}</span>
       </div>
         <span class="view-record num author">
            by Billy
         </span>
      </div>
    </div>
  </div>
</template>

<script>
import helper from '../js/helper'
export default {
  data(){
    return{
      mes:123
    }
  },
  methods:{
     to:function(){
        helper.toRouter('/showArticle',{
           id:this.info.articleid
        })
     }
  },
  created () {
  },
  props:[
    'info',
    // 'title',
    // 'subtitle',
    // 'imgurl'
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
  height: 45px;
  overflow:hidden;
  text-overflow: ellipsis;
  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  font-size: 18px;
  color:#202020;
  padding-top:20px;
}
.subtitle{
  width: 100%;
  color:#757779;
  padding-top:15px;
  overflow: hidden;/*超出部分隐藏*/
  white-space: nowrap;/*不换行*/
  text-overflow:ellipsis;/*超出部分文字以...显示*/
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
