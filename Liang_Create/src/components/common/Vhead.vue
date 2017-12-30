<template>
  <div class="head">
    <div class="head-content">
      <div class="head-content-list">
        <ul>
          <li @click="toUrl('./')">发现</li>
          <li @click="toUrl('./haveChat')">有聊</li>
          <li>活动</li>
        </ul>
      </div>
      <div class="head-content-logo">
         <img src="../../assets/icion.png" alt="">
      </div>
      <div class="head-content-icon">
        <ul>
          <li class="icon-person">
            <!-- <img src="./src/assets/personal.png" alt=""> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import helper from '../../js/helper'
export default {
  name:'Vhead',
  data(){
      return{

      }
  },
  methods:{
    toUrl:function(name){
        helper.toRouter(name)
    }
  },
  created:function(){
  
  },
  mounted:function(){ 
    helper.init(this) 
  }
}
</script>

