<template>
  <div class="personal-container">
    <!-- 前部 -->

    <div class="front">
      <div class="front-content">
        <div class="front-show-box-1">编辑资料</div>
        <div class="front-show-box-2" @click="toIndex">返回主页</div>
      </div>
    </div>

    <div class="pl-main">
      <!-- 菜单栏 -->

      <div class="pl-main-list" @click="choose">
        <div data-index="1" :class="{ 'select-choose':index == 1,'pl-main-list-item':true }">账号信息</div>
        <div data-index="2" :class="{ 'select-choose':index == 2,'pl-main-list-item':true }">更改密码</div>
      </div>
      <div class="pl-main-do">
        <toggle-label name="账号信息" v-show="index==1">
          <el-form ref="FormCount" :model="countForm" :rules="updateInfoRules" label-width="70px" :inline=true>
            <el-form-item label="昵称：" prop="nickname">
              <el-input v-model="countForm.nickname"></el-input>
            </el-form-item>
            <el-form-item label="年龄：">
              <el-select v-model="countForm.age" placeholder="请选择" class="common-input-inline">
                <el-option v-for="item in ageArr" :key="item" :label="item" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="电话：">
              <el-input v-model="countForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱：" prop="email">
              <el-input v-model="countForm.email"></el-input>
            </el-form-item>
            <el-form-item label="性别：">
              <el-radio v-model="countForm.sex" label="1">我是男的</el-radio>
              <el-radio v-model="countForm.sex" label="2">我是女的</el-radio>
            </el-form-item>
            </br>
            <el-form-item label="头像：">
              <el-upload action="http://10.15.89.81:3000/user/upLoadImg" :show-file-list="false" :before-upload="beforeAvatarUpload" :on-success="handleAvatarSuccess">
                <div class="head-img">
                  <img :src="countForm.headimg">
                </div>
              </el-upload>
            </el-form-item>
            </br>
            <el-form-item label=" ">
              <el-button @click="saveInfo">保存</el-button>
            </el-form-item>
          </el-form>
        </toggle-label>

        <toggle-label name="更改密码" v-show="index==2">
          <el-form ref="pasCheck" :model="passwordForm" label-width="100px" :rules="passwordRules">
            <el-form-item label="旧密码：" prop="oldPas">
              <el-input type="password" v-model="passwordForm.oldPas"></el-input>
            </el-form-item>
            <el-form-item label="新密码：" prop="newPas">
              <el-input type="password" v-model="passwordForm.newPas"></el-input>
            </el-form-item>
            <el-form-item label="重复新密码：" prop="repeatePas">
              <el-input type="password" v-model="passwordForm.repeatePas"></el-input>
            </el-form-item>
            <el-form-item label=" ">
              <el-button @click="savePas">保存</el-button>
            </el-form-item>
          </el-form>
        </toggle-label>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import toggleLabel from "../components/toggleLabel.vue";
import helper from "../js/helper";
import config from "@/config";
var uploadAddress = "user/upLoadImg";
var uploadUserInfo = config.Api.localAddress + "user/upDateUserInfo";
var queryUserInfo = config.Api.localAddress + "user/queryUserInfo";
export default {
  data() {
    let checkNickName = (rule, value, callback) => {
      if (!value) callback(new Error("请输入你的昵称"));
      else callback();
    };
    let checkEmail = (rule, value, callback) => {
      if (!value) callback(new Error("请输入你的邮箱"));
      else {
        if (!config.RegularList.email.test(value)) {
          callback(new Error("输入不符合邮箱格式"));
          return;
        }
        callback();
      }
    };
    let checkOldPas = (rule, value, callback) => {
      if (!value) callback(new Error("请输入你现在的密码"));
      else {
        if (value.length < 6) {
          callback(new Error("密码长度不低于6位"));
          return;
        }
        console.log("store.password",this.$store.state.userInfo.info.password);
        if (value != this.$store.state.userInfo.info.password) {
          callback(new Error("原密码不正确，请再次输入"));
          return;
        }
        callback();
      }
    };
    let checkNewPas = (rule, value, callback) => {
        if (!value) callback(new Error("请输入新的密码"));
        else {
          if (value.length < 6) {
            callback(new Error("密码长度不低于6位"));
            return;
          }
          if (value == this.passwordForm.oldPas) {
            callback(new Error("新密码不能与原密码一致"));
            return;
          }
          callback();
        }
      },
      checkNewPasAgain = (rule, value, callback) => {
        if (!value) callback(new Error("请再次输入新的密码"));
        else {
          if (value.length < 6) {
            callback(new Error("密码长度不低于6位"));
            return;
          }
          if (value != this.passwordForm.newPas) {
            callback(new Error("两次输入不一样,请再次输入"));
            return;
          }
          callback();
        }
      };
    return {
      userInfo: null,
      index: 1,
      ageArr: [],
      passwordForm: {
        oldPas: "",
        newPas: "",
        repeatePas: ""
      },
      countForm: {
        name: "Billy",
        age: 22,
        phone: "15850225218",
        email: "948021695@qq.com",
        sex: "男"
      },
      updateInfoRules: {
        nickname: [{ validator: checkNickName, trigger: "blur" }],
        email: [{ validator: checkEmail, trigger: "blur" }]
      },
      passwordRules: {
        oldPas: [{ validator: checkOldPas, trigger: "blur" }],
        newPas: [{ validator: checkNewPas, trigger: "blur" }],
        repeatePas: [{ validator: checkNewPasAgain, trigger: "blur" }]
      }
    };
  },
  methods: {
    toIndex: function() {
      // 返回首页
      helper.routerGo("/index");
    },
    choose: function(e) {
      var index = e.target.getAttribute("data-index");
      this.index = index || 1;
    },
    handleAvatarSuccess: function(res, file) {
      // 图片上传成功以后的回调
      this.countForm.headimg = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload: function(file) {
      console.log(file);
    },
    serach: function() {
      helper.httpGet("");
    },
    saveInfo: function() {
      // 保存信息
      this.$refs["FormCount"].validate(valid => {
        if (!valid) return;
        helper.showAlertCommon("是否要保存", "warning", flag => {
          if (!flag) return;
          let para = Object.assign({}, this.countForm);
          helper.httpPost(uploadUserInfo, para).then(data => {
            if (data.code != 2000) return;
            let userInfo = Object.assign({}, this.countForm);
            helper.localStroageSet("user", JSON.stringify(userInfo));
          });
        });
      });
    },
    savePas: function() {
      this.$refs["pasCheck"].validate(valid => {
        if (!valid) return;
        helper.showAlertCommon("是否要更改？", "warning", flag => {
          if (!flag) return;
          this.countForm["password"] = this.passwordForm.newPas;
          let para = Object.assign({}, this.countForm);
          helper.httpPost(uploadUserInfo, para).then(data => {
            if (data.code != 2000) return;
            let userInfo = Object.assign({}, this.countForm);
            helper.localStroageSet("user", JSON.stringify(userInfo));
            this.$store.commit("changeUserInfo",userInfo);
            this.$refs["pasCheck"].resetFields();
            helper.showMessage("更改成功,请重新登录", "success");
            helper.out(this);
          });
        });
      });
    }
  },
  components: {
    toggleLabel
  },
  created: function() {
    for (var i = 10; i <= 99; i++) {
      this.ageArr.push(i);
    }
  },
  mounted: function() {
    this.countForm = this.$store.state.userInfo.info;
  }
};
</script>
<style scoped lang="less">
@front-color: #fafafa; /* 上部背景颜色 */
@font-common: 18px; /* 字体大小 */
.red {
  color: red;
}
.personal-container {
  width: auto;
  height: auto;
}
.common-border {
  border: 1px solid #000000;
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
  .transfrom(-50%, 0%);
}
.common-col-center {
  position: absolute;
  top: 50%;
  .transfrom(0%, -50%);
}
.common-center {
  .common-row-center;
  .common-col-center;
}
.common-border-box(@top,@right,@down,@left) {
  box-sizing: border-box;
  padding: @top @right @down @left;
}
.front {
  width: 100%;
  height: 90px;
  position: fixed;
  top: 84px;
  left: 0px;
  z-index: 1001;
  box-sizing: border-box;
  padding: 0px 220px 0px 150px;
  background-color: @front-color;
}
.front-content {
  min-width: 600px;
  height: 100%;
  position: relative;
}
.front-show-box(@pos) {
  width: 130px;
  height: 40px;
  float: @pos;
  text-align: center;
  font-size: @font-common;
  line-height: 40px;
  .common-col-center;
}
.front-show-box-1 {
  .front-show-box(left);
}
.front-show-box-2 {
  .front-show-box(right);
  right: 0;
  width: 80px;
  font-size: 14px;
  color: #757779;
  .common-border;
  &:hover {
    background-color: #000000;
    color: #ffffff;
    cursor: pointer;
  }
}
.pl-main {
  width: 800px;
  height: auto;
  margin: 90px auto;
  .common-flex(row);
  justify-content: flex-start;
}
.select-choose {
  color: #000 !important;
  &::before {
    content: "|";
    position: absolute;
    color: #000;
    font-size: 20px;
    left: 0px;
  }
}
.pl-main-list {
  width: 180px;
  height: 600px;
  border-right: 1px solid #ddd;
  &-item {
    height: 35px;
    .common-border-box(0px,20px,0px,20px);
    line-height: 35px;
    font-size: 14px;
    cursor: pointer;
    position: relative;
    color: #a5a7aa;
    &:hover {
      .select-choose;
    }
  }
}
.pl-main-do {
  flex: 1;
  .common-border-box(0px,0px,0px,30px);
}
.common-input-inline {
  width: 200px;
}
.head-img {
  width: 100px;
  height: 100px;
  cursor: pointer;
}
.head-img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>