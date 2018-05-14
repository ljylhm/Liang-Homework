<template>
<div>
  <el-form :model="ruleForm2" status-icon :rules="rules2"  label-width="100px" class="demo-ruleForm">
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input v-model.number="ruleForm2.age"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
      <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
  </el-form>

  <el-form :model="loginForm" ref="loginForm" :rules="loginRules" :inline-message="true" label-width="100px">
      <el-form-item label="手机号" prop="phonenum">
          <el-input v-model="loginForm.phonenum"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="pas">
          <el-input type="password" v-model="loginForm.pas"></el-input>
      </el-form-item>

      <el-button type="primary" @click="login">登录</el-button>
      <div class="register-btn">注册新账号</div>
  </el-form>
</div>
</template>

<script>
import helper from "@/helper";
  export default {
    data() {
      var validatePhone = (rule, value, callback) => {
           console.log(value);
           console.log("here》》》》》》》");
      };
      var checkAge = (rule, value, callback) => {
        console.log(value);
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        
        loginForm:{
          phonenum: "",
          pas: ""
        },

        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        // 登录规则
        loginRules: {
          phonenum: [
            { validator: validatePhone, trigger: 'blur'}
          ]
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      open2() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      login(){
        helper.showAlertCommon('123','warning',(flag)=>{
            console.log(flag)
        })
        //  this.open2();
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
</style>