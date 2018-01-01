<template>
<div>
    <v-head></v-head>
    <div class="content-container">
       <div class="content-text">
          <h2 style="text-align:center">{{allData.title}}</h2>  
          <h4 style="text-align:center">{{allData.subtitle}}</h4>
          <div class="show-post-html">
              <div v-html="allData.content">
              </div>

          </div>  
       </div>     
    </div>
    <v-foot style="margin-top:30px"></v-foot>
</div>
</template>

<script>
import helper from '../js/helper'
export default {
   data(){
       return{
          html:'',
          allData:''
       }
   },
   created(){ 
     var id =  this.$route.query.id
     helper.httpGet('http://localhost:3000/article/getArticleById',{
         id:id
     }).then((res)=>{
         helper.hiddenLoading();
         this.allData = res.data.data[0];
     })
   }
}
</script>

<style scoped>
.content-container{
   width: 100%;
   min-height: 500px;
   margin-top: 66px;
   box-sizing: border-box;
   padding:0px 380px 0px 380px; 
}
.content-text{
    width: 100%;
}
.show-post-html{
    width: 100%;
}
</style>

