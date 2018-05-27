<template>
  <div class="container">
    <div class="pub-ban">
      <div class="pub-ban-content">
        <div class="pub-ban-left">编辑文章</div>
        <div class="pub-ban-right">
          <div class="pub-ban-item">预览</div>
          <div class="pub-ban-item">保存草稿</div>
          <div class="pub-ban-item pub" @click="publish">发布</div>
        </div>
      </div>
    </div>

    <div class="pub-title">
      <div class="down-list">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <div class="list-name">{{formList.theme}}</div>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in listArr" :key="item" :command="item">{{item}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="input-title">
        <input type="text" placeholder="在这里输入标题" @focus="focuPlaceholder" @blur="blurPlaceholder" v-model="formList.title">
      </div>
      <div class="input-title input-sub-title">
        <input type="text" placeholder="添加关键词：如多一个以空格隔开" @focus="focuPlaceholder" @blur="blurPlaceholderCode" v-model="formList.tag">
      </div>
    </div>

    <div class="write-area">
      <div class="write-area-pic">
        <div class="write-area-choose">
          <div class="write-area-bg">
            <el-upload action="http://10.15.89.81:3000/user/upLoadImg" class="no-img" :show-file-list="false" :on-success="handleAvatarSuccess">
              <img src="../../assest/img/addPic.png" v-show="!formList.titleimg">
              <img :src=formList.titleimg alt="" v-show="formList.titleimg">
            </el-upload>
          </div>
        </div>
        <div class="write-area-intrd">
          <textarea rows="3" cols="20" placeholder="此处摘要选填，如果不填写会默认抓取正文前50个字。" class="input-common" v-model="formList.subtitle">
          </textarea>
        </div>
      </div>
      <div ref="editor" class="editor-area-toolbar"></div>

      <!-- <div ref="editor" class="editor-area-toolbar" id="editor1">

      </div>
      <div class="editor-area-text" id="editor2">

      </div> -->
    </div>
    <div class="pub-footer">
      <v-footer :width="1300"></v-footer>
    </div>
  </div>
</template>

<script>
import helper from "@/helper";
import config from "@/config"
import E from "wangEditor";
let mateObj = {
  title: "请输入题目",
  subtitle: "请输入描述",
  titleimg: "请选择封面图片",
  theme: "请选择主题",
  content: "请输入内容",
  tag: "请添加关键词"
}
let addArticle = config.Api.localAddress + "article/addArticle";
export default {
  data() {
    return {
      downName: "选择主题站",
      isTitleImg: null,
      editor : null,
      formList: {
        title: "",
        subtitle: "",
        tag: "",
        theme: "选择主题站",
        titleimg: "",
        content: ""
      },
      listArr1: [
        {
          name: "billy",
          age: 23
        },
        {
          name: "bill",
          age: 24
        },
        {
          name: "tom",
          age: 25
        }
      ],
      editorContent: "",
      listArr: ["创意名人站", "独家合辑 ", "方法论", "创意越过界", "轻艺术"]
    };
  },
  methods: {
    handleCommand: function(command) {
      this.formList.theme = command;
    },
    focuPlaceholder: function(e) {
      e.target.setAttribute("placeholder", "");
    },
    blurPlaceholder: function(e) {
      e.target.setAttribute("placeholder", "在这里输入标题");
    },
    blurPlaceholderCode: function(e) {
      e.target.setAttribute("placeholder", "添加关键词：如多一个以空格隔开");
    },
    handleAvatarSuccess: function(res, file) {
      // 图片上传成功以后的回调
      this.formList.titleimg = res.result.imgUrl;
    },
    publish: function(){
       let html = this.editor.txt.html();
       if(html == "<p><br></p>") html = "";
       this.formList.content = html;
       let obj = helper.detectEmptyObj(this.formList);
       if(!obj.flag){
         helper.showMessage(mateObj[obj.emptyItem],"warning");
         return;
       }
       let para = Object.assign({},this.formList);
       para["userid"] = this.$store.state.userInfo.info.userid;
       helper.httpPost(addArticle,para)
       .then((data)=>{
         if(data.code == 2000) helper.showMessage("上传文章成功","success")
       })
    }
  },
  mounted: function() {
    var editor = new E(this.$refs.editor);
    this.editor = editor;
    // var editor = new E("#editor1", "#editor2");
    editor.customConfig.zIndex = 100;
    editor.customConfig.pasteFilterStyle = false;
    editor.customConfig.uploadImgServer = "http://10.15.89.81:3000/user/upLoadImg"; // 上传图片到服务器
    editor.customConfig.uploadFileName = "file";
    editor.customConfig.uploadImgMaxLength = 1;

    editor.customConfig.uploadImgHooks = {
      customInsert: (insertImg, result, editor) => {
        let str = `<img src=${result.result.imgUrl}>`
        editor.txt.append(str);
      }
    }

    editor.create();
    console.log(this.$store.state.userInfo.info);
  }
};
</script>
<style lang="less" scoped>
.pub-ban {
  width: 100%;
  height: 90px;
  position: fixed;
  top: 84px;
  left: 0px;
  z-index: 1001;
  background-color: #fafafa;
  box-sizing: border-box;
  padding: 0px 100px;
}

.pub-ban-content {
  width: 100%;
  height: 100%;
}

.pub-ban-left {
  width: 200px;
  float: left;
  height: 100%;
  font-size: 20px;
  line-height: 90px;
  text-align: center;
}

.pub-ban-right {
  width: 330px;
  height: 100%;
  float: right;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.pub-ban-item {
  width: 80px;
  height: 45px;
  cursor: pointer;
  font-size: 14px;
  color: #757779;
  text-align: center;
  line-height: 45px;
  border: 1px solid #000;
}

.pub-ban-item:hover {
  color: #ffffff;
  background-color: #000000;
}

.pub {
  width: 120px;
  background-color: #000000;
  color: #ffffff;
}

.pub-title {
  width: 100%;
  height: 160px;
  margin-top: 90px;
}

.down-list {
  width: 100px;
  height: 20px;
  margin: 0 auto;
}

.list-name {
  width: 70px;
  display: inline-block;
  text-align: center;
}

.input-title {
  width: 400px;
  height: 40px;
  margin: 10px auto;
}

.input-title input {
  width: 100%;
  height: 100%;
  font-size: 26px;
  border: none;
  outline: none;
  line-height: 60px;
  text-align: center;
}

.input-title input::-webkit-input-placeholder {
  font-size: 26px;
  color: #000;
  line-height: 60px;
}

.input-sub-title {
  height: 40px;
}

.input-sub-title input {
  font-size: 14px;
}

.input-sub-title input::-webkit-input-placeholder {
  color: #4a4a4a;
  font-size: 14px;
}

.write-area {
  width: 1300px;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
  border: 1px solid #edeeee;
}

.write-area-pic {
  width: 280px;
  height: 380px;
  float: left;
  border: 1px solid #edeeee;
}

.write-area-choose {
  width: 100%;
  height: 220px;
  box-sizing: border-box;
  padding: 10px;
}

.write-area-choose div:first-child {
  width: 100%;
  height: 100%;
  background-color: #edeeee;
}
.write-area-bg {
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
  /* background: url("../../assest/img/addPic.png") no-repeat center center; */
}
.write-area-bg img {
  width: 100%;
  height: 100%;
}

.write-area-intrd {
  width: 100%;
  height: 154px;
  box-sizing: border-box;
  padding: 0px 10px;
  overflow: hidden;
}

.input-common {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
}

.editor-area-toolbar {
  width: 1016px;
  height: 40px;
  float: left;
  background-color: #fafafa;
  border: 1px solid #edeeee;
}

.editor-area-text {
  width: 1016px;
  height: 600px;
  float: left;
  border: 1px solid #edeeee;
}

.pub-footer {
  margin: 30px auto 0px;
}

.transfrom(@row,@col) {
  -webkit-transform: translate(@row, @col);
  transform: translate(@row, @col);
}
.common-flex(@dirction) {
  display: flex;
  flex-direction: @dirction;
}
.common-row-center {
  position: absolute;
  left: 50%;
  .transfrom(-50%,0%);
}
.common-col-center {
  position: absolute;
  top: 50%;
  .transfrom(0%,-50%);
}
.common-center {
  .common-row-center;
  .common-col-center;
}

.no-img {
  position: relative;
  & img:first-child {
    width: 60px;
    height: 60px;
    margin-left: -30px;
    .common-center;
  }
  & img:nth-child(2) {
    width: 100%;
    height: 200px;
  }
}
</style>