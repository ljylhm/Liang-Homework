<template>
    <div class="chat-container">
        <div class="chat-main-container">
            <div class="header">
                <h2>{{getData.title}}</h2>
                <div class="common-font">By{{" "+getData.nickname}}</div>
                <div class="common-font">{{getData.creatAt}}</div>
                <div class="common-font">
                    <span class="img-container">
                        <img class="view-img" src="http://www.topys.cn/Public/home/img/icon/ic-browse.png" alt="">
                    </span>
                    <span class="view-font">{{getData.comnum}}</span>
                </div>
                <div class="common-font">{{getData.tag}}</div>
                <div class="headimg">
                    <img :src=getData.headimg alt="">
                </div>
            </div>
        </div>
        <div class="html-container" v-html="getData.content">

        </div>
        <div class="center-com">
             <v-comment :img=headimg :infoId="postData.id" :add="'http://10.15.89.81:3000/comment/queryCommentArt3'" :type=3></v-comment>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import helper from "@/helper";
import config from "@/config";
let queryChatItem = config.Api.localAddress + "chat/queryChatItem";
export default {
  data() {
    return {
      message: "welcome to showChat.vue",
      postData: {
        id: 1,
        type: 1
      },
      getData:{},
      headimg: this.$store.state.userInfo.info.headimg,
    };
  },
  created: function() {
    this.postData = this.$route.query || this.postData;
    let para = {
        chatid: this.postData.id
    }
    helper.httpPost(queryChatItem, para).then(data => {
      if (!data.result) return;
      this.getData = data.result;
    });
  }
};
</script>
<style lang='less' scoped>
.chat-container {
  width: 100%;
  height: auto;
}
.chat-main-container {
  width: 900px;
  height: auto;
  margin: 0 auto;
}
.header {
  width: 100%;
  height: 85px;
  margin-top: 50px;
  border-bottom: 1px solid #ddd;
}
.common-font {
  float: left;
  font-size: 14px;
  margin: 20px 20px 0px 0px;
}
.img-container {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.view-img {
  width: 100%;
  height: 100%;
  position: relative;
}
.view-font {
  position: relative;
  top: -4px;
}

.headimg {
  width: 60px;
  height: 60px;
  margin: -30px 10px 0px 0px;
  float: right;
  & img{
      border-radius: 50%;
      width: 100%;
      height: 100%;
  }
}

.html-container {
  width: 900px;
  margin: 0 auto;
  & img{
      width: 100%;  
  }
}

.center-com{
  width: 900px;
  margin: 0 auto; 
}
</style>