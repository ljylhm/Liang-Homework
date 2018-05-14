<template>
  <div class="label-contanier">
      <div class="label-header">
         {{name}}      
      </div>
      <div class="label-worker">
         <slot></slot>  
      </div>   
  </div>
</template>

<script>
/* 个人中心切换面板 */
export default {
  props:[
    'name'
  ],  
  data () {
    return {
        message:"欢迎来到切换模板"
    };
  },
}

</script>
<style lang='less' scoped>
.common-border{
    border:1px solid #000000;
}
.common-line-center(@height){
    line-height:@height;
    height:@height
}
.label-contanier{
    width:100%;
    height:auto;
    font-size:14px;
}
.label-header{
    width: 100%;
    .common-line-center(40px);
    border-bottom:1px solid #ddd;
}
.common-border-box(@top,@right,@down,@left){
  box-sizing: border-box;
  padding:@top @right @down @left;
}
.label-worker{
    width:100%;
    .common-border-box(20px,0px,0px,0px)
}
</style>