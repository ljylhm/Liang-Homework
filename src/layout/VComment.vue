<template>
  <div class="comment-container">
    <el-row>
      <el-col :span="2">
        <div class="com-common">
          <div class="head-img">
            <img :src=img alt="">
          </div>
        </div>
      </el-col>
      <el-col :span="22">
        <div class="com-common com-body">
          <el-input type="textarea" :rows="8" placeholder="请输入内容" v-model="myPubComment"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="com-btn" @click="publishCom">
          评论
        </div>
      </el-col>
    </el-row>
    <div class="latest-com">
      最新评论
    </div>
    <el-row v-show="showCommentData.length <= 0">
      <el-col :span="24">
        <div class="no-com">
          暂无评论，快来抢沙发吧~~~~
        </div>
      </el-col>
    </el-row>  
    <el-row class="com-item" v-for="(item,index) in showCommentData" :key=index>
      <el-col :span="2">
        <div class="com-common">
          <div class="head-img">
            <img :src=item.headimg alt="">
          </div>
        </div>
      </el-col>
      <el-col :span="22">
        <div class="com-common com-item-body">
          <div class="com-item-name">
            <span v-if="item.morename">
              {{item.nickname+ '  对  ' +item.morename + '的回复'}}
            </span>
            <span v-else>{{item.morename? item.nickname+ '对' +item.morename + '的回复' : item.nickname}}</span>
            <span class="com-time">5小时前</span>
          </div>
          <div class="com-item-content">
            {{item.content}}
          </div>
          <div class="com-icon">
            <div class="icon-common icon-com" @click="showComment(index)"></div>
            <!-- <div class="icon-common icon-good"></div>
            <span>{{item.goodnum}}</span> -->
          </div>
        </div>

        <div class="com-common com-item-body" v-show="nowIndex == index">
          <el-input type="textarea" :rows="8" :placeholder="'请输入对'+item.nickname+'的回复'" v-model="moreInfo"></el-input>
          <div class="btn-row">
            <div class="rc-btn-common rc-comment-btn" @click="morePubish">回复</div>
            <div class="rc-btn-common rc-cancel-btn" @click="cancel(index)">取消</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="pageMation">
          <el-pagination background layout="prev, pager, next" :total="totalnum" :page-size=5 @current-change="pageChange"></el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import helper from "@/helper";
import config from "@/config";

export default {
  data() {
    return {
      message: "欢迎来到评论区域",
      moreInfo: "",
      showTail: false,
      commentData: [],
      showCommentData: [],
      totalnum: 0,
      nowIndex: -1,
      myPubComment: ""
    };
  },
  props: ["img", "infoId", "add", "type"],
  methods: {
    showComment: function(currentIndex) {
      this.nowIndex = currentIndex;
    },
    cancel: function() {
      this.nowIndex = -1;
      this.moreInfo = "";
    },
    pageChange: function(currentPage) {
      let pageSize = 5; // 默认每页的评论数量
      let start = (currentPage - 1) * pageSize,
        end = pageSize * currentPage;
      this.showCommentData = this.commentData.slice(start, end);
    },
    search: function() {
      helper.httpGet(this.add, {
          artid: this.infoId
        }).then(data => {
          if (!data.result) return;
          this.commentData = data.result;
          this.totalnum = this.commentData.length;
          this.showCommentData = this.commentData.slice(0, 5);
        });
    },
    publishCom: function() {
      if (!this.myPubComment) {
        helper.showMessage("评论不能为空", "warning");
        return;
      }
      let para = {
        artid: this.infoId,
        userid: this.$store.state.userInfo.info.userid,
        content: this.myPubComment,
        refid: this.infoId,
        isMore: 0
      };
      helper.httpPost(this.addComment, para).then(data => {
        if (data.code != 2000) {
           helper.showMessage("评论失败", "error");
           return;
        }
        helper.showMessage("评论成功", "success");
        this.myPubComment = "";
        this.search();
      });
    },
    morePubish: function(){
      if (!this.moreInfo) {
        helper.showMessage("评论不能为空", "warning");
        return;
      }
      let para = {
        artid: this.infoId,
        userid: this.$store.state.userInfo.info.userid,
        content: this.moreInfo,
        refid: this.infoId,
        isMore: 1
      };
      helper.httpPost(this.addComment, para).then(data => {
        if (data.code != 2000) {
           helper.showMessage("评论失败", "error");
           return;
        }
        helper.showMessage("评论成功", "success");
        this.myPubComment = "";
        this.cancel();
        this.search();
      });
    }
  },
  created: function() {
    this.search();
    if (this.type == 1) {
      this.addComment = "http://10.15.89.81:3000/comment/addCommentAct";
    } else if (this.type == 2) {
      this.addComment = "http://10.15.89.81:3000/comment/addCommentAct2";
    } else if (this.type == 3) {
      this.addComment = "http://10.15.89.81:3000/comment/addCommentAct";
    }
  }
};
</script>
<style lang="less" scoped>
/**** 动画css ****/

.comment-container {
  width: 100%;
  height: auto;
}
.com-common {
  width: 100%;
  height: auto;
}
.com-head {
  box-sizing: border-box;
  padding: 20px 0px;
}
.head-img {
  width: 50px;
  height: 50px;
  margin: 0 auto;
}
.head-img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
/* .com-body{
    
} */
.latest-com {
  box-sizing: border-box;
  padding: 10px 10px;
}
.com-btn {
  width: 160px;
  height: 40px;
  cursor: pointer;
  margin: 15px 0px 100px 0px;
  float: right;
  color: #757779;
  line-height: 40px;
  text-align: center;
  border: 1px solid #000;
}
.com-btn:hover {
  background-color: #000;
  color: #fff;
}
.com-item {
  box-sizing: border-box;
  padding: 30px 0px;
}
.com-item-body {
  width: 100%;
  min-height: 100px;
}
.com-item-name {
  width: 100%;
  height: 20px;
}
.com-time {
  margin-left: 10px;
  color: #b9a7aa;
  font-size: 12px;
}
.com-item-content {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding-top: 10px;
}

.com-icon {
  width: 100%;
  height: 30px;
  margin: 10px 0px 0px 0px;
  & span {
    font-size: 12px;
    position: relative;
    top: 6px;
    left: -6px;
    width: 20px;
    height: 10px;
  }
}
.icon-common {
  width: 30px;
  height: 100%;
  margin-right: 10px;
  float: left;
  cursor: pointer;
}
.icon-com {
  position: relative;
  left: -4px;
  background: url("http://www.topys.cn/Public/home/img/icon/ic-comment.png")
    no-repeat center center;
  background-size: 100% 100%;
}
.icon-good {
  background: url("http://www.topys.cn/Public/home/img/icon/ic-praise.png")
    no-repeat center center;
  background-size: 100% 100%;
}
.repeat-comment {
  width: 100%;
  height: 38px;
}
.rc-btn-common {
  width: 118px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  float: right;
  cursor: pointer;
  border: 1px solid #000;
}
.btn-row {
  overflow: hidden;
  margin-top: 15px;
}
.rc-cancel-btn {
  border: none;
  font-size: 12px;
}
.rc-comment-btn {
  font-size: 14px;
}
.rc-comment-btn:hover {
  background-color: #000;
  color: #fff;
}
.no-com{
  text-align: center;
  color: #ddd;
}
</style>