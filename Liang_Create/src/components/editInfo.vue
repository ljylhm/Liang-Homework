<!-- 个人中心  信息编辑 -->
<template>
  <div class="editinfo-warp">
      <v-head></v-head>
      <div class="editinfo-header">
         <div class="editinfo-title">编辑信息</div>
         <a class="editinfo-back">返回主页</a>
      </div>
      <div class="editinfo-box" >
        <div class="editinfo-left">
          <div class="edititem" @click="checkout(1)">帐号信息</div>
          <div class="edititem" @click="checkout(2)">修改密码</div>
        </div>
        <div class="editinfo-right" v-if="isShow==1">
          <div class="content-title">
            帐号信息
          </div>
          <div class="content-item">
             <div class="item-left">手机号码</div>
             <div class="item-right">
              <el-input size="small" v-model="userInfo.telphone" placeholder="13123141212" style=" color:#000;"></el-input>
             </div>
          </div>

          <div class="content-item">
             <div class="item-left">邮箱</div>
             <div class="item-right">
              <el-input size="small" v-model="userInfo.email" placeholder="123455656@qq.com"></el-input>
             </div>
          </div>

          <div class="content-item" style="height:100px;">
             <div class="item-left">头像</div>
             <div class="item-right" style="width: 70px;height:70px;overflow: hidden;border-radius: 100%;border: solid 1px darkgrey;">
              <el-upload
                class="avatar-uploader"
                action="http://localhost:3000/upload/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="userInfo.userimg" style="width: 100%;height:100%" :src="userInfo.userimg" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
             </div>
          </div>

          <div class="content-title">
            第三方帐号
          </div>

          <div class="content-item">
             <div class="item-left">QQ</div>
             <div class="item-right">
              <el-input size="small" v-model="input" placeholder="13123141212"></el-input>
             </div>
          </div>

          <div class="content-item">
             <div class="item-left">微博</div>
             <div class="item-right">
              <el-input size="small" v-model="input" placeholder="123455656@qq.com"></el-input>
             </div>
          </div>

         <div class="content-item">
             <div class="item-left">微信</div>
             <div class="item-right">
              <el-input size="small" v-model="input" placeholder="123455656@qq.com"></el-input>
             </div>
          </div>

          <div class="content-title">
            社交帐号
          </div>

          <div class="content-item">
             <div class="item-left">Facebook</div>
             <div class="item-right">
              <el-input size="small" v-model="input" placeholder="13123141212"></el-input>
             </div>
          </div>

          <div class="content-item">
             <div class="item-left">Weibo</div>
             <div class="item-right">
              <el-input size="small" v-model="input" placeholder="123455656@qq.com"></el-input>
             </div>
          </div>

         <div class="content-item">
             <div class="item-left">Behance</div>
             <div class="item-right">
              <el-input size="small" v-model="input" placeholder="123455656@qq.com"></el-input>
             </div>
          </div>

          <div class="content-item">
             <div class="item-left">Dribbble</div>
             <div class="item-right">
              <el-input size="small" v-model="input" placeholder="13123141212"></el-input>
             </div>
          </div>

          <div class="content-item">
             <div class="item-left">Pinterest</div>
             <div class="item-right">
              <el-input size="small" v-model="input" placeholder="123455656@qq.com"></el-input>
             </div>
          </div>

         <div class="content-item">
             <div class="item-left">个人主页</div>
             <div class="item-right">
              <el-input size="small" v-model="input" placeholder="123455656@qq.com"></el-input>
             </div>
          </div>

          <div class="content-item" style="text-align: right;">
              <el-button type="primary" @click="updateInfo()">保存</el-button>
          </div>
        
        </div>


        <div class="editinfo-right" v-if="isShow==2">
            <div class="content-title">
                修改密码
            </div>
            <div class="content-item">
                <div class="item-left">旧密码</div>
                <div class="item-right">
                  <el-input size="small" type="password" v-model="password.oldPas" placeholder="123455656@qq.com"></el-input>
                </div>
            </div>
            <div class="content-item">
                <div class="item-left">新密码</div>
                <div class="item-right">
                  <el-input size="small" type="password" v-model="password.newPas" placeholder="123455656@qq.com"></el-input>
                </div>
            </div>

            <div class="content-item">
                <div class="item-left">重复新密码</div>
                <div class="item-right">
                  <el-input size="small" type="password" v-model="password.repeatPas" placeholder="123455656@qq.com"></el-input>
                </div>
            </div>
            <div class="content-item" style="text-align: right;" @click='updatePass()'>
              <el-button type="primary">保存</el-button>
          </div>
         </div>
      </div>
      <v-foot></v-foot>
  </div>
</template>

<script>
import helper from '../js/helper'
export default {
  data() {
    return {
      searchContent: "",
      isShow:1,
      input:'',
      imageUrl: '',
      userInfo:{},
      password:{
        oldPas:'',
        newPas:'',
        repeatPas:'',
      }
    };
  },
  methods: {

    updateInfo(){
      let data = this.userInfo; 
      for(let i in data){
         if(data[i] == ''){
           helper.showToast('请完整填写信息','warning');
           return;
          }
          if( i == 'telphone' && !(/^1[34578]\d{9}$/.test(data[i]))){
           helper.showToast('电话号码不符合格式','warning');
           return
        }
        if( i == 'email' && !( /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(data[i]))){
           helper.showToast('电子邮箱不符合格式','warning');
           return
         }
      } 

      helper.httpPost('http://localhost:3000/users/updateInfo',{
        userInfo:this.userInfo
      }).then((res)=>{
        helper.hiddenLoading();
        if(res.data.data){
            helper.showToast('修改完成','success')
            helper.setLocalStorage('user',JSON.stringify(this.userInfo));
          }
      })
    },

    updatePass(){
      let data = this.password;
       for(var i in this.password){
         if(data[i] == ''){
           helper.showToast('请完整填写信息','warning');
           return;
         }
       }
       if(data['oldPas']!=this.userInfo.password){
          helper.showToast('原密码有误','warning');
          return;
       }
       if(data['newPas'] != data['repeatPas']){
          helper.showToast('两次密码填写不一致','warning');
          return;
       }

       helper.httpPost('http://localhost:3000/users/updatePas',{
          newPas:data.newPas,
          id:this.userInfo.userid  
       }).then((res)=>{
          helper.hiddenLoading();
          if(res.data.data){
            helper.showToast('修改完成','success')
            this.userInfo.password = data.newPas;
            helper.setLocalStorage('user',JSON.stringify(this.userInfo));
            for(let i in data){
               data[i] = '';
            }
          }
       })
       
    },

    checkout(type){
      this.isShow = type
    },

    handleAvatarSuccess(res, file) {
        var url = res.data.imgurl;
        this.userInfo.userimg = url;
      },

    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  },
  mounted: function() {  
     var user = helper.getLocalStorage('user');
     this.userInfo = JSON.parse(user);
     console.log(this.userInfo.userimg)
  }
};

</script>


<style scoped>
.editinfo-warp{
    width: 100%;
    padding-top: 66px;
}

.editinfo-header{
  padding-top: 20px;
  box-sizing: border-box;
  width: 80%;
  margin-left: 10%;
  position: relative;
  height: 100px;
  /* background-color: blueviolet; */
  overflow: hidden;
  /* color: white; */
}
.editinfo-title{
  position: absolute;
  left: 0px;
  top: 20px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  /* background-color: rgb(214, 214, 58); */
}
.editinfo-back{
  display: block;
  position: absolute;
  right: 0px;
  top: 0xp;
  height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 50px;
  border: solid 1px grey;
  cursor: pointer;
  /* background-color: aliceblue; */
 
}
.editinfo-header a :hover{
  background-color: black;
  color: white;
}

.editinfo-box{
    width: 80%;
    /* height: 500px; */
    margin-left: 10%;
    overflow: hidden;
    padding-bottom: 30px;
    min-height: 400px;
    /* background-color: green; */
}

.editinfo-left{
  float: left;
  width: 30%;
  /* padding-right: 5%; */
  /* border-right: solid 1px gainsboro; */
  
}
.editinfo-right{
  float: left;
  width: 70%;
  box-sizing: border-box;
  padding-left: 5%;
  border-left: solid 1px gainsboro;
}
.edititem{
  text-align: right;
  height: 40px;
  cursor: pointer;
  line-height: 40px;
  padding-right: 50px;
}
.content-title{
  height: 30px;
  border-bottom: solid 1px gainsboro;
}
.content-item{
  height: 50px;
  line-height: 50px;
  overflow: hidden;
}
.item-left{
  float: left;
  width: 20%;
  text-align: right;
  padding-right: 5%;
}
.item-right{
  float: left;
  width: 50%;
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
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
