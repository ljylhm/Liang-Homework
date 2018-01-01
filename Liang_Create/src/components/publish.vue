<template>
  <div>
   <v-head></v-head>
   <div class="slogan">
        <div class="slogan-content">
           <div class="slogan-content left">编辑文章</div>
           <div class="slogan-content right">
               <div class="slogan-content right button" @click="publish()">
                   发布
               </div>
           </div>
        </div>
     </div>
   <div class="content-publish">
     <div class="title">
         <div class="input-container">
            <input v-model="articleFrom.bigtitle" type="text" name="" id="title" placeholder='在这里输入标题'>
         </div>
     </div>
     <div class="edit-content">
        <div style="border:1px solid #d9d9d9;overflow:hidden">
            <div class="edit-content-left">
                <el-upload class="avatar-uploader" style="border:1px solid #d9d9d9" action="http://localhost:3000/upload/" :show-file-list="false" :on-success="handleAvatarSuccess">
                    <img v-if="articleFrom.titleimg" :src="articleFrom.titleimg" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
             <div style='width=200px;height:100px'>
                 <input class='input-2' v-model="articleFrom.subtitle" type="text" name="" placeholder='在这里输入副标题'>
             </div>   
            </div>
            <div class="edit-content-right">
               <div id = 'div1' class="toolbar"></div>
               <div style="padding: 5px 0; color: #ccc"></div>
               <div id = 'div2' class="text"></div>
            </div>
        </div> 
     </div> 
   </div>
   <v-foot></v-foot> 
 </div>
</template>

<script>
import helper from '../js/helper'
import E from 'wangeditor'
export default {
  data(){
      return{
          imageUrl:'',
          editorContent:'',
          articleFrom:{
              subtitle:'',
              bigtitle:'',
              content:'',
              authorid:'',
              titleimg:'',
          },
      }
  },
  methods:{
      publish:function(){
         console.log(this.articleFrom);
         heler.httpPost('http://localhost:3000/article/publishArticle',this.articleFrom).then((res)=>{
             helper.hiddenLoading();
             let data = res.data.data;
             if(data){
                  helper.showToast('发布成功','success');
                }else{
                helper.showToast('发布失败','warning');
          }
         })
      },
      handleAvatarSuccess:function(res, file){
         var url = res.data.imgurl;
         this.articleFrom.titleimg = url;
         console.log(this.articleFrom.titleimg);
      }
  },
  created(){
     var user = JSON.parse(helper.getLocalStorage('user'));
     this.articleFrom.authorid = user.userid 
  },
  mounted(){
    var editor = new E('#div1','#div2');
    editor.customConfig.uploadImgServer = 'http://localhost:3000/upload/uploadImg';
    editor.customConfig.uploadImgHooks = {
       success: function (xhr, editor, result) {
        // 图片上传并返回结果，图片插入成功之后触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
       },
       customInsert: function (insertImg, result, editor) {
        // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
        // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果

        // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
        var url = result.data.imgurl;
        insertImg(url)

        // result 必须是一个 JSON 格式字符串！！！否则报错
       }
    };
    editor.customConfig.onchange = (html) => {
          this.editorContent = html
          this.articleFrom.content = html;
          console.log(this.editorContent);
    }
    editor.create()
  }
}
</script>

<style scoped>
.content-publish{
    margin-top: 186px;
    width: 100%;
    height: 1000px;
}
.slogan{
    width: 100%;
    height: 120px;
    position: fixed;
    top:66px;
    padding:0px 260px 0px 260px;
    box-sizing: border-box;
    background: #FAFAFA;
    opacity: 1;
    z-index: 10002
}
.slogan-content{
    width: 100%;
    height: 100%;
}
.slogan .left{
    width: 50%;
    height: 120px;
    float: left;
    font-size: 20px;
    line-height: 120px;
}
.slogan-content .right{
    width: 50%;
    height: 100%;
    position: relative;
    float: left;
}
.slogan-content .right .button{
   width: 168px;
   height: 40px;
   text-align: center;
   line-height: 40px;
   color: #ffffff;
   position: absolute;
   top:50%;
   background: #1d2129;
   right: 0px;
   cursor: pointer;
   margin-top:-20px;
}
.title{
    width: 100%;
    height: 50px;
}
.input-container{
    width: 200px;
    height: 100%;
    margin: auto;
    position: relative;
    left:20px;
}
#title:focus{
  outline: none
}
#title::placeholder{
  color:#000;
  font-size:22px;
}
#title{
    height:43px;
    width:196px;
    font-size:22px;
    border:none
}
.edit-content{
  width: 100%;
  height: 500px;
  box-sizing: border-box;
  padding:0px 180px 0px 180px;
}
.edit-content-left{
    width: 180px;
    height: 280px;
    float: left;
}
.edit-content-right{
    width: 850px;
    height: 500px;
    margin-left: 20px;
    float: left;
}

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 100%;
    height: 100%;
    display: block;
    border: 1px solid #d9d9d9;
}

.toolbar{
    width: 100%;
    height: 40px;
    border: 1px solid #d9d9d9;
}
.text{
    width: 100%;
    height: 500px;
    border: 1px solid #d9d9d9;
}

.input-2{
    width: 174px;
    height:50px
}
</style>


