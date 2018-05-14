<template>
  <div class="container-lr" id="lr">
    <el-dialog style="margin-top:-8vh"  v-loading="loading" :visible="dialogVisiable" :show-close="true" @close="dialogClose" :close-on-click-modal="false" width="600px" >
      
            <div slot="title" class="dialog-title">
                {{titleName}}
            </div>

            <div class="diglog-middle" id="middle">
                
                <el-form :model="LoginForm" v-if="isLogin" ref="LoginForm" :rules="loginRules" :inline-message="true">
                    <el-form-item label="手机号" prop="phonenum">
                        <el-input v-model="LoginForm.phonenum"></el-input>
                    </el-form-item>

                    <el-form-item label="密码" prop="pas">
                        <el-input type="password" v-model="LoginForm.pas"></el-input>
                    </el-form-item>

                    <el-button type="primary" @click="login">登录</el-button>
                    <div class="register-btn" @click="switchAccount()">注册新账号</div>
                </el-form>

                <el-form :model="registerForm" v-if="!isLogin">
                    <el-form-item label="你的手机号">
                        <el-input ></el-input>
                    </el-form-item>

                    <el-form-item label="你的email">
                        <el-input></el-input>
                    </el-form-item>

                    <el-form-item label="你的密码">
                        <el-input type="password"></el-input>
                    </el-form-item>

                    <el-form-item label="重输你的密码">
                        <el-input type="password"></el-input>
                    </el-form-item>
                    <el-button type="primary">注册</el-button>

                    <div class="register-btn" @click="switchAccount()">已有账号登录</div>  
                </el-form>

            </div>

    </el-dialog>

  </div>    
</template>

<script>
import helper from "@/helper";
var userLogin = helper.config.localAddress + "user/userLogin"
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
    }
    return {
      message: "this is a message from v-lr component",
      LoginForm: { // 登陆表单
        phonenum:"",
        pas:""
      }, 
      registerForm:{ // 注册表单
        name:"",
        pas:""
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
    },
    login:function(){
      this.$refs["LoginForm"].validate((valid) => {
        if(!valid) return;
        var para = Object.assign({},this.LoginForm);
        console.log(userLogin);
        helper.httpPost(userLogin,para,{})
        .then((data)=>{
           let code = data.code,
               result = data.result;
               console.log(result);
           if(code == 2000){ // 成功
                this.dialogClose();
                this.$store.commit("changeStatus");
                this.$store.commit("changeUserInfo",result.userInfo); 
                helper.localStroageSet("user",JSON.stringify(result.userInfo));
                helper.showMessage("登录成功","success");
                console.log(this.$store.userInfo);
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
