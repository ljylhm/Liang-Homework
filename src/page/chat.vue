<template>
    <div class="chat-container">
        <div class="topic chat-topic">
            <div class="topic-title">今日话题</div>
            <p>哪些品牌story让你觉得“哇！”或“切！”</p>
            <div class="topic-btn">点击参与</div>
        </div>

        <div class="serach">
            <el-input class="serach-input" prefix-icon="el-icon-search">
                <el-button slot="append" class="serach-btn">搜索</el-button>
            </el-input>
        </div>

        <div class="list-show-container">
            <div class="list-item-chat" style="cursor: pointer" v-for="(item,index) in arrList" :key="index" @click="getDetail(2,item.id)" >
                <div class="item-title">{{item.title}}</div>
                <div class="item-bottom">
                    <div class="item-bottom-icon"></div>
                    <div class="item-bottom-font">{{item.comnum}}</div>
                    <div class="item-bottom-type">
                        <span>{{item.tag}}</span>
                    </div>
                </div>
                <img :src=item.titleimg alt="">
            </div>
        </div>

        <div class="main-loading">
            <div class="pos-center">
                <div class="loading-no-tab loading pos-center" @click="showLoading" v-if="!isLoading">
                    浏览更多
                </div>
                <div class="loading-tab loading pos-center" v-else></div>
                <!-- <img src="/assest/img/loading.gif" alt=""> -->
            </div>
        </div>
        
        <v-footer></v-footer>
    </div>
</template>

<script>
import helper from "@/helper";
import config from "@/config";
let queryChat = config.Api.localAddress + "chat/queryChat";
export default {
  data() {
    return {
      message: "welcome to chat.vue",
      isLoading: false,
      indexPara: {
        page: 1,
        limit: 16
      },
      arrList: []
    };
  },
  methods: {
    showLoading() {
      this.isLoading = true;
    },
    getDetail(type,artid){
      type = type || 3;
      switch(type){
        case 1: helper.routerGo("read",{
          type:1,
          id:artid
        })
        break;
        case 3: helper.routerGo("createAct",{
          type:3,
          id:artid
        })
        break;
        case 2: helper.routerGo("showChat",{
          type:2,
          id:artid
        })
        break;
      }
    }
  },
  created: function() {
    let para = Object.assign({},this.indexPara);  
    helper.httpPost(queryChat, para).then(data=>{
        if(data.code != 2000) return;
        console.log(data.result);
        this.arrList = data.result;
    })
  }
};
</script>
<style>
.chat-container {
  width: 100%;
  height: auto;
}

.serach {
  width: 1100px;
  height: 50px;
  margin: 20px auto;
}

.serach-input .el-input__inner {
  width: 100%;
  height: 50px;
  font-size: 16px;
}

.serach-input .el-input-group__append {
  background-color: #1d2129;
  color: #ffffff;
  border: 0px;
}

.list-show-container {
  width: 1110px;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
}

.list-item-chat {
  width: 240px;
  height: 240px;
  position: relative;
  margin-bottom: 40px;
}

.list-item-chat img {
  width: 100%;
  height: 100%;
}

.item-title {
  width: 130px;
  height: auto;
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 20px;
  color: #fff;
}

.item-bottom {
  width: 200px;
  height: 34px;
  position: absolute;
  bottom: 10px;
  left: 20px;
}

.item-bottom-icon {
  width: 34px;
  height: 100%;
  float: left;
  background: url("/assest/img/ic-topic-us.png") no-repeat center center;
  background-size: 100% 100%;
}

.item-bottom-font {
  float: left;
  height: 100%;
  padding-left: 5px;
  line-height: 34px;
  font-size: 26px;
  color: #fff;
}

.item-bottom-type {
  height: 100%;
  font-size: 12px;
  float: right;
  color: #fff;
  text-align: right;
  line-height: 52px;
}
</style>