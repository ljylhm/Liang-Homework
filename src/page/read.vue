<template>
  <div class="container">
    <div class="read-container">
      <div class="read-topic">
        <div>大艺术</div>
      </div>
      <div class="read-title">
        <h2>{{getData.title}}</h2>
      </div>
      <div class="read-tag">
        <div v-for="item in tagArr" :key="item">{{item}}</div>
      </div>
      <div v-html=getData.content class="read-content"></div>
      <v-comment :img=headimg :infoId="postData.id" :add="'http://10.15.89.81:3000/comment/queryCommentArt'"></v-comment>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import helper from "@/helper";
import config from "@/config";
let queryArticleById = config.Api.localAddress + "article/queryArticleById";
let queryComment = config.Api.localAddress + "comment/queryCommentArt"
export default {
  data() {
    return {
      topic: "好广告",
      title: "用铺天盖地的大字报和纽约人谈心",
      mes: "欢迎来到read.vue",
      tagArr: [123, 333, 3, "fdafs"],
      getData: {},
      postData: {
        id: 1,
        type: 1
      }
    };
  },
  computed:{
    headimg:function(){
        return this.$store.state.userInfo.info.headimg;
    }
  },
  created: function() {
    this.postData = this.$route.query || this.postData;
    helper.httpGet(queryArticleById, this.postData).then(data => {
      if (!data.result) return;
      this.getData = data.result;
    });
  }
};
</script>
<style lang="less">
h2 {
  margin: 0px;
  padding: 0px;
}
.read-container {
  width: 900px;
  height: auto;
  margin: 0px auto;
}
.read-topic {
  width: 100%;
  height: 120px;
  color: #757779;
  font-size: 16px;
  position: relative;
  text-align: center;
}
.read-topic div {
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: 0 auto;
  padding-bottom: 20px;
  border-bottom: 1px solid #979797;
}
.read-title {
  width: 100%;
  text-align: center;
}
.read-content {
  margin: 40px auto;
  font-size: 16px;
  color: #4a4a4a;
  & p iframe {
    width: 100%;
    margin: 15px 0px;
  }
  & p img {
    width: 100%;
    margin: 15px 0px;
  }
}
#mod_player embed {
  display: block;
}
.read-tag {
  text-align: center;
  margin-top: 20px;
  width: 100%;
}
.read-tag div {
  display: inline;
  margin: 0 auto;
  padding: 0 5px;
  color: #4a4a4a;
  cursor: pointer;
}
.read-text {
  width: 100%;
  margin-top: 30px;
  min-height: 600px;
  height: auto;
}
</style>