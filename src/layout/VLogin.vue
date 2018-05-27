<template>
  <div class="container-lr" id="lr">
    <el-dialog style="margin-top:-8vh"  v-loading="loading" :visible="dialogVisiable" :show-close="true" @close="dialogClose" :close-on-click-modal="false" width="600px" >
      
            <div slot="title" class="dialog-title">
                {{titleName}}
            </div>

            <div class="diglog-middle" id="middle">
                
                <el-form :model="LoginForm" v-show="isLogin" ref="LoginForm" :rules="loginRules" :inline-message="true">
                    <el-form-item label="手机号" prop="phonenum">
                        <el-input v-model="LoginForm.phonenum"></el-input>
                    </el-form-item>

                    <el-form-item label="密码" prop="pas">
                        <el-input type="password" v-model="LoginForm.pas"></el-input>
                    </el-form-item>

                    <el-button type="primary" @click="login">登录</el-button>
                    <div class="register-btn" @click="switchAccount()">注册新账号</div>
                </el-form>

                <el-form :model="registerForm" v-show="!isLogin" ref="registerForm" :rules="registerRules" :inline-message="true">
                    <el-form-item label="你的手机号" prop="phone"> 
                        <el-input v-model="registerForm.phone" placeholder="请输入你的手机号码"></el-input>
                    </el-form-item>

                    <el-form-item label="你的email" prop="email">
                        <el-input v-model="registerForm.email" placeholder="请输入你的电子邮箱"></el-input>
                    </el-form-item>

                    <el-form-item label="你的密码" prop="pas">
                        <el-input type="password" v-model="registerForm.pas" placeholder="请输入密码"></el-input>
                    </el-form-item>

                    <el-form-item label="重输你的密码" prop="pasagain">
                        <el-input type="password" v-model="registerForm.pasagain" placeholder="请重新输入密码"></el-input>
                    </el-form-item>
                    <el-button type="primary" @click="registerUser">注册</el-button>

                    <div class="register-btn" @click="switchAccount()">已有账号登录</div>  
                </el-form>

            </div>

    </el-dialog>

  </div>    
</template>

<script>
import helper from "@/helper";
import config from "@/config";

let userLogin = config.Api.localAddress + "user/userLogin",
    isNew = config.Api.localAddress + "user/isNew",
    addUser = config.Api.localAddress + "user/addUser";
let lastPhone = {
   value: "",
   isValidate: false
};
export default {
  // 登陆框和注册框的组件
  data: function() {
    var checkLoginName = (rule, value, callback) => {
        if (!value) callback(new Error('请输入手机号码'));
        else callback();
    };
    var checkLoginPas = (rule, value, callback) => {
        if (!value) callback(new Error('请输入密码'));
        else callback();
    };
    var checkRegisterName = (rule, value, callback) => {
        if(value == lastPhone.value && lastPhone.isValidate) callback()
        lastPhone.value = value;
        if (!value) {
          lastPhone.isValidate = false;
          callback(new Error('请输入手机号码'));
        } else {
          if(!config.RegularList.phone.test(value)) {
            lastPhone.isValidate = false;
            callback(new Error('输入不符合电话格式'));
            return;
          };
          var para = {
            phone: value
          }
          helper.httpGet(isNew, para)
          .then((data)=>{
             if(data.result.isNew) {
               lastPhone.isValidate = true;
               callback();
             }
             else {
               lastPhone.isValidate = false;
               callback(new Error('手机号码已存在'));
             }
          })  
        }
    };
    var checkRegisterEmail = (rule, value, callback) => {
       if (!value) callback(new Error('请输入你的邮箱'));
       else {
         if(!config.RegularList.email.test(value)) {
            callback(new Error('输入不符合邮箱格式'));
            return;
         }
         callback();
       }
    };
    var checkRegisterPas = (rule, value, callback) => {
      if (!value) callback(new Error('请输入密码'));
      else {
         if(value.length < 6) {
            callback(new Error('密码长度不低于6位'));
            return;
         }
         callback();
       }     
    };
    var checkRegisterPasAgain = (rule, value, callback) => {
      if (!value) callback(new Error('请输入密码'));
      else {
         if(value.length < 6) {
            callback(new Error('密码长度不低于6位'));
            return;
         }
         if(value != this.registerForm.pas){
            callback(new Error('两次密码输入不一样'));
            return;
         }
         callback();
       }     
    };
    return {
      message: "this is a message from v-lr component",
      LoginForm: { // 登陆表单
        phonenum:"",
        pas:""
      }, 
      registerForm:{ // 注册表单
        phone:"",
        email: "",
        pas: "",
        pasagain: "",
      }, 
      titleName: "登录", // 弹出框名字
      isLogin: true, // 当前的
      loginRules: {
        phonenum:[
          { validator: checkLoginName, trigger: 'blur' },
        ],
        pas:[
          { validator: checkLoginPas, trigger: 'blur' },
        ]
      },
      registerRules: {
        phone:[
          { validator: checkRegisterName, trigger: 'blur' },
        ],
        email:[
          { validator: checkRegisterEmail, trigger: 'blur'}
        ],
        pas:[
          { validator: checkRegisterPas, trigger: 'blur'}
        ],
        pasagain:[
          { validator: checkRegisterPasAgain, trigger: 'blur'}
        ]
      },
      loading: false
    };
  },
  methods: {
    dialogClose: function() {
      this.$refs["LoginForm"].resetFields();
      this.$store.commit("loginDialogClose");
    },
    switchAccount:function(){
      this.isLogin = !this.isLogin; 
      this.titleName = this.isLogin ? "登录" : "注册";
      this.$refs["LoginForm"].clearValidate();
    },
    login:function(){
      this.$refs["LoginForm"].validate((valid) => {
        if(!valid) return;
        var para = Object.assign({},this.LoginForm);
        helper.httpPost(userLogin,para,{})
        .then((data)=>{
           let code = data.code,
               result = data.result;
           if(code == 2000){ // 成功
                this.dialogClose();
                this.$store.commit("changeStatus");
                this.$store.commit("changeUserInfo",result.userInfo); 
                helper.localStroageSet("user",JSON.stringify(result.userInfo));
                helper.showMessage("登录成功","success");
           }
        })
      })
    },
    registerUser:function(){
      this.$refs["registerForm"].validate((valid) => {
           if(!valid) return;
           var para = Object.assign({},this.registerForm);
           helper.httpPost(addUser,para,{}).
           then((data)=>{
              if(data.code == 2000){
                 helper.showMessage("注册成功","success");
                 this.isLogin = true;
                 this.$refs["LoginForm"].resetFields();
                 this.$refs["registerForm"].resetFields();
              }
           })
       })
    }
  },
  computed:{
    dialogVisiable:function(){
      return this.$store.state.showLoginDialog;
    }
  },
  mounted:function(){
    console.log();
  }
};
</script>

<style>
.dialog-title {
  width: 100%;
  height: 60px;
  line-height: 60px;
  box-sizing: border-box;
  padding-left: 15px;
  font-size: 18px;
  border-bottom: 1px solid #e5e5e5;
  background-color: #f3f3f3;
}

.diglog-middle {
  width: 325px;
  margin: 0 auto;
}

#middle .el-form-item {
  margin-bottom: 0px;
}
/* #006741 */
#middle .el-button--primary {
  width: 100%;
  height: 34px;
  background-color: #009a61;
  border-color: #008151;
  margin-top: 18px;
  padding: 0px;
}

#middle .el-button--primary:hover {
  background-color: #006741;
}

.diglog-middle input {
  background-color: #faffbd;
  height: 34px;
}

.diglog-middle .el-form-item__label {
  color: #000;
  font-weight: 600;
}

.container-lr .el-dialog__header {
  padding: 0px;
}

.register-btn {
  width: 100%;
  height: 34px;
  margin-top: 18px;
  text-align: center;
  line-height: 34px;
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  border: 1px solid #ccc;
}

.register-btn:hover {
  background-color: #dddddd;
}
</style>
