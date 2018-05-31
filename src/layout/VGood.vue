<template>
    <div class="good-container">
        <div class="good-center" @click="getGood">
            <img src="../../assest/img/good1.png" alt="" v-if="isShowGood">
            <img src="../../assest/img/good.png" alt="" v-else>
            <span>已经有<b>{{num}}</b>人点赞</span>
        </div>
    </div>
</template>

<script>
import helper from "@/helper";
import config from "@/config";
export default {
  data() {
    return {
      message: "这是v-good.vue",
      isShowGood: false,
      postAdd: "",
      queryGoodArtByItem: "",
      queryAllGoodArtByArtId: "",
      num: 0
    };
  },
  methods: {
    getGood: function() {
      if (this.isShowGood) {
        helper.showMessage("你已经点赞过了喔，不能再点赞了", "warning");
        return;
      }
      let para = Object.assign({}, this.info);
      helper.httpPost(this.postAdd, para).then(data => {
        this.isShowGood = true;
        this.num++
      });
    }
  },
  created: function() {
    this.isShowGood = this.isGood;
    if (this.type == 1) {
      this.postAdd = config.Api.localAddress + "good/addNewGoodArt";
      this.queryGoodArtByItem = config.Api.localAddress + "good/queryGoodArtByItem";
      this.queryAllGoodArtByArtId = config.Api.localAddress + "good/queryAllGoodArtByArtId";
    }
    helper.httpGet(this.queryGoodArtByItem, this.info).then(data => {
      if (!data.result) {
        helper.showMessage("发生了异常", "warning");
        return;
      }
      let result = data.result;
      this.isShowGood = result.isGood;
    });
    helper.httpPost(this.queryAllGoodArtByArtId,{
        artid: this.info.artid
    }).then(data =>{
        let result = data.result;
        this.num = result.length; 
    })
  },
  props: ["isGood", "type", "info"]
};
</script>
<style lang='less' scoped>
.good-container {
  width: 100%;
  height: 120px;
  margin-bottom: 50px;
  position: relative;
}
.common-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.good-center {
  width: 80px;
  height: 80px;
  cursor: pointer;
  .common-center;
  border-radius: 50%;
  border: 1px solid #ddd;
  & img {
    .common-center;
  }
  & span {
    display: inline-block;
    width: 120px;
    position: absolute;
    bottom: -34px;
    left: -18px;
    text-align: center;
    font-size: 14px;
  }
  & b {
    color: red;
  }
}
</style>