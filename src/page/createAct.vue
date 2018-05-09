<template>
<div>
  <div class="ca-container">
      <div class="act-main-info">
           <div class="act-main-img">
               <img src="http://pic.topys.cn/uploads/20180428/431285395.jpg?x-oss-process=style/event_cover" alt="">
           </div>
           <div class="act-main-pro">
               <h2>克里斯蒂安·波尔坦斯基：忆所</h2>
               <div class="amp-item">
                   <div class="amp-item-icon icon-add"></div>
                   <div class="amp-item-common amp-item-title">地点</div>
                   <div class="amp-item-common amp-item-font">上海、黄浦区 花园港路200号上海当代艺术博物馆</div>
               </div>
               <div class="amp-item">
                   <div class="amp-item-icon icon-time"></div>
                   <div class="amp-item-common amp-item-title">时间</div>
                   <div class="amp-item-common amp-item-font">2018-04-25 至 2018-07-08</div>
               </div>
               <div class="amp-item">
                   <div class="amp-item-icon icon-money"></div>
                   <div class="amp-item-common amp-item-title">费用</div>
                   <div class="amp-item-common amp-item-font">0元</div>
               </div>
               <div class="amp-item">
                   <div class="amp-item-icon icon-type"></div>
                   <div class="amp-item-common amp-item-title">类别</div>
                   <div class="amp-item-common amp-item-font">展览</div>
               </div>
               <div class="amp-item" style="border-bottom:1px solid #E2E2E2">
                   <div class="amp-item-icon icon-publish"></div>
                   <div class="amp-item-common amp-item-title">主办</div>
                   <div class="amp-item-common amp-item-font">上海当代艺术博物馆</div>
               </div>
               <div class="amp-btn">
                   <div class="main-btn main-btn-1">我想参与</div>
                   <div class="main-btn-2">0人想参与</div>
               </div>
           </div>
      </div>
      <div class="act-detail-title">活动详情</div>
      <div class="act-detail-title act-detail-pro">
          借助装置、影像、声音、影子剧场，引发参观者从视觉、听觉到心理的情感联系，对个体在日常和历史事件中不可预测的际遇进行追问。
      </div>
      <div class="detail-list">
          <div class="detail-list-title">【活动简介】</div>
          <div class="detail-html">
              <p>上海当代艺术博物馆将于2018年4月25日至7月8日举办法国艺术家克里斯蒂安·波尔坦斯基（Christian Boltanski）在中国的首次大型个展——“忆所”。<br><br>克里斯蒂安·波尔坦斯基，出生于1944年，是欧洲二战后重要艺术家，对欧洲乃至亚洲当代艺术的发展影响深远，2011年为威尼斯双年展法国馆艺术家。在波尔坦斯基看来，每一个人的记忆虽微不足道却饱含真实独特的价值，他经常选取日常物件作为主要创作材料以试图建立一座人类档案馆。<br><br>本次展览将借助装置、影像、声音、影子剧场，引发参观者从视觉、听觉到心理的情感联系，对个体在日常和历史事件中不可预测的际遇进行追问。展厅中将出现的近十吨衣服、上百个婴儿和老人的面部照片以及回响着的成千上万人的心跳频率，都是承载个人生活经验和群体历史的一方“忆所”。<br><br>这个对艺术家本人来说带有“回顾”意味的展览，不仅将展出艺术家历年代表之作，还将展现艺术家为PSA高达165米的烟囱特别创作的新委任作品。特别项目《心之档案》邀请观众参与，刻录下自己的心跳之声。</p>
          </div>
      </div>
      <v-comment></v-comment>
  </div>
  <v-footer></v-footer>
</div>
</template>

<script>
export default {
  data () {
    return {
       message:"welcome to createAct.vue"
    }
  }
}

</script>
<style scoped>
.icon-add{
    background: url("http://www.topys.cn/Public/home/img/icon/ic-d1.png") no-repeat center center;
}
.icon-time{
    background: url("http://www.topys.cn/Public/home/img/icon/ic-d2.png") no-repeat center center;
}
.icon-money{
    background: url("http://www.topys.cn/Public/home/img/icon/ic-d3.png") no-repeat center center;
}
.icon-type{
    background: url("http://www.topys.cn/Public/home/img/icon/ic-d4.png") no-repeat center center;   
}
.icon-publish{
    background: url("http://www.topys.cn/Public/home/img/icon/ic-d5.png") no-repeat center center;    
}
h2{
    margin: 0px;
    padding: 0px;
}
.ca-container{
    width: 790px;
    height: auto;
    margin: 0 auto;
}
.act-main-info{
    width: 100%;
    height: 450px;
    box-sizing: border-box;
    padding-top: 20px;
}
.act-main-img{
    width: 266px;
    height: 400px;
    float: left;
}
.act-main-img img{
    width: 100%;
    height: 100%;
}
.act-main-pro{
    width: 520px;
    height: 400px;
    float: left;
    box-sizing: border-box;
    padding-left: 20px;
}
.act-main-pro h2{
    margin-bottom: 20px;
}
.amp-item{
    width: 496px;
    height: 50px;
    margin-top: 0px;
    box-sizing: border-box;
    padding-top: 15px;
    font-size: 14px;
    border-top: 1px solid #E2E2E2;
}
.amp-item-common{
    height: 20px;
    line-height: 20px;
}
.amp-item-icon{
    width: 20px;
    height: 20px;
    float: left;
    background-size: 100% 100%; 
}
.amp-item-title{
    width: 50px;
    margin-left: 10px;
    float: left;
    font-weight: 600;
}
.amp-item-font{
    width: auto; 
}
.amp-btn{
    width: 100%;
    height: 40px;
    margin-top: 57px;
}
.main-btn-1{
    width: 130px;
    float: left;
    font-size: 14px;
}
.main-btn-2{
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    margin-left: 10px;
    float: left;
}
.act-detail-title{
    width: 100%;
    height: 86px;
    line-height: 86px;
    font-size: 22px;
    border-top: 1px solid #E2E2E2;
    border-bottom: 1px solid #E2E2E2;
}
.act-detail-pro{
    color: #9B9B9B;
    height: auto;
    box-sizing: border-box;
    padding: 20px 0px;
    line-height: 20px;
    font-size: 16px;
}
.detail-list{
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 40px 0px;
}
.detail-list-title{
    font-weight: 600;
    margin-bottom: 20px;
}
.detail-html{
    color: #757779;
    font-size: 14px;
}
</style>