<template>
  <div class="head">
    <div class="head-content">
      <div class="head-content-list">
        <ul>
          <li @click="toUrl('./')">发现</li>
          <li @click="toUrl('./haveChat')">有聊</li>
        </ul>
      </div>
      <div class="head-content-logo">
         <img src="../../assets/icion.png" alt="">
      </div>
      <div class="head-content-icon">
        <ul>
          <li class="icon-person"  @mouseenter="enter" @mouseleave="leave" @click="intoUser()">
            <div class="show-table" v-if="showList" style="z-index:10000">
              <div class="show-table-item" @click="publishArt('/editInfo')">个人中心</div>
              <div class="show-table-item" @click="publishArt('/publish')">发布文章</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <el-dialog :title="isLogin?'请登录':'请注册'" width="50%" :visible.sync="showLoginDialog" :modal-append-to-body="false" @close='dialogClose()'>
        
        <el-form :model="loginForm" :label-position="right" ref="loginForm" :rules="loginRules" label-width="215px" v-if="isLogin">
            <el-form-item label="用户名" prop="userName">
                <el-input v-model="loginForm.userName" class="input"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="loginForm.password" class="input"></el-input>
            </el-form-item>
            <el-form-item>
               <el-button type="primary" class="button" style="margin-left:90px" @click="login()">登陆</el-button>
            </el-form-item>
        </el-form>

        <el-form :model="registerForm" :label-position="right" ref="registerForm" label-width="215px" v-if="!isLogin">
            <el-form-item label="用户名">
                <el-input v-model="registerForm.userName1" class="input"></el-input>
            </el-form-item>
            <el-form-item label="电子邮箱">
                <el-input v-model="registerForm.email" class="input"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="registerForm.password1" class="input"></el-input>
            </el-form-item>
            <el-form-item label="电话号码">
                <el-input v-model="registerForm.phone" class="input"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
                <el-input v-model="registerForm.age" class="input"></el-input>
            </el-form-item>
            <el-form-item>
               <el-button type="primary" class="button" style="margin-left:90px" @click="register()">注册</el-button>
            </el-form-item>
        </el-form>

        <div slot="footer" style="text-align:center;position:relative;top:-40px">
            <el-button type="text" style="margin-left:-13px" @click="showRegister" v-if="isLogin">没有账号？请点击注册</el-button>
            <el-button type="text" style="margin-left:-13px" @click="showLogin" v-if="!isLogin">点击登陆</el-button>
       </div>
    </el-dialog>
  </div>
</template>

<script>
import helper from '../../js/helper'
export default {
  name:'Vhead',
  data(){ 
      return{
          showList:false,
          showLoginDialog:false,
          loginForm:{ 
            userName:'',
            password:''
          },
          registerForm:{
            userName1:'',
            password1:'',
            email:'',
            phone:'',
            age:''
          },
          isLogin:true,
          loginRules:{
            userName:[
              { required: true, message: '请输入用户名', trigger: 'change' },
            ],
            password:[
              { required: true, message: '请输入密码 ', trigger: 'change' },
            ]
          },
      }
  },
  methods:{  
    publishArt:function(name){
      var user = helper.getLocalStorage('user');
      if(!user){
        this.showLoginDialog = true;
      }else{
        this.toUrl(name)
      }
    },
    login:function(){
       this.$refs.loginForm.validate((valid) => {
          if(valid){
              helper.httpGet('http://192.168.43.246:3000/users/login',{
                username:"'"+this.loginForm.userName+"'",
                password:this.loginForm.password
              }).then((res)=>{
                helper.hiddenLoading();
                let data = res.data.postData.data;
                let personData = res.data.postData.postData;
                if(data){
                  helper.showToast('登陆成功','success');
                  this.showLoginDialog = false;
                  personData = JSON.stringify(personData);
                  helper.setLocalStorage('user',personData);
                }else{
                  helper.showToast('登陆失败','warning');
                }
              })
          }
       })
    },
    register(){
      let data = this.registerForm;
      for(let i in data){
        if( data[i] == '' ) {
          helper.showToast('请完整填写信息','warning');
          return
        };
        if( i == 'phone' && !(/^1[34578]\d{9}$/.test(data[i]))){
           helper.showToast('电话号码不符合格式','warning');
           return
        }
        if( i == 'email' && !( /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(data[i]))){
           helper.showToast('电子邮箱不符合格式','warning');
           return
        }
      
        if( i == 'age' &&parseInt(data[i])!=data[i]){
           helper.showToast('年龄只能为数字','warning');
           return
        }
      } 
      helper.httpPost('http://192.168.43.246:3000/users/register',this.registerForm)
        .then((res)=>{
          helper.hiddenLoading();
          let data = res.data.data;
          if(data){
                  helper.showToast('注册成功','success');
                  this.isLogin = true;
                }else{
                  helper.showToast('注册失败','warning');
          }
      })  
    },
    dialogClose:function(){
    if(this.isLogin) this.$refs['loginForm'].resetFields();
    else{
        let data = this.registerForm;
      console.log(data);
      for(let i in data){
         data[i] = ''; 
      }
    }
    },
    toUrl:function(name){
        helper.toRouter(name)
    },
    enter:function(){
      this.showList = true 
    },
    leave:function(){
      this.showList = false; 
    },
    intoUser:function(){
      var user = helper.getLocalStorage('user');
      if(!user){
        this.showLoginDialog = true;
      }
    },

    showRegister(){
      this.isLogin = false
    },

    showLogin(){
      this.isLogin = true
    }
  
  },
  created:function(){
    //  helper.setLocalStorage('user','123');
  },
  mounted:function(){ 
    helper.init(this) 
  }
}
</script>

<style>
.show-table{
  width:120%;
  padding: 0px;
  position: absolute;
  left:-10%;
  top:66px;
  background: #ffffff;
}
.show-table-item{
  width:100%;
  font-size: 14px;
  border-top: 1px solid #e2e2e2;
  height: 40px;
  line-height: 40px;
  color: #757779;
  text-align: center;
}
.show-table-item:hover{
    color:#000
}
.input{
  width: 300px;
}
.button{
  width:100px;
}
</style>


