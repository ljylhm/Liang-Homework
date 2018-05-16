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
                  <div data-index="1"  :class="{ 'select-choose':index == 1,'pl-main-list-item':true }">账号信息</div>
                  <div data-index="2"  :class="{ 'select-choose':index == 2,'pl-main-list-item':true }">更改密码</div>
              </div>
              <div class="pl-main-do">
                  <toggle-label name="账号信息" v-show="index==1">
                      <el-form ref="form-count" :model="countForm" label-width="70px" :inline=true>
                           <el-form-item label="昵称：">
                                <el-input v-model="countForm.nickname" ></el-input>
                           </el-form-item>
                           <el-form-item label="年龄：">
                                <el-select v-model="countForm.age" placeholder="请选择" class="common-input-inline">
                                    <el-option
                                      v-for="item in ageArr"
                                      :key="item"
                                      :label="item"
                                      :value="item">
                                    </el-option>
                                </el-select>
                           </el-form-item>
                           <el-form-item label="电话：">
                                <el-input v-model="countForm.phone" ></el-input>
                           </el-form-item>
                           <el-form-item label="邮箱：">
                                <el-input v-model="countForm.email" ></el-input>
                           </el-form-item>
                          <el-form-item label="性别：">
                                <el-radio v-model="countForm.sex" label="1">我是男的</el-radio>
                                <el-radio v-model="countForm.sex" label="2">我是女的</el-radio>
                          </el-form-item>
                          </br>
                          <el-form-item label="头像：">
                              <el-upload action="http://192.168.1.115:3000/user/upLoadImg" :show-file-list="false" :before-upload="beforeAvatarUpload" :on-success="handleAvatarSuccess">
                                  <div class="head-img">
                                     <img :src="countForm.headimg">
                                  </div>
                              </el-upload> 
                          </el-form-item>
                          </br>
                          <el-form-item label=" ">
                            <el-button>保存</el-button> 
                          </el-form-item>
                       </el-form>   
                  </toggle-label>

                  <toggle-label name="更改密码" v-show="index==2">
                      <el-form ref="form-count" :model="passwordForm" label-width="100px">
                           <el-form-item label="旧密码：">
                                <el-input type="password" v-model="passwordForm.oldPas" ></el-input>
                           </el-form-item>
                           <el-form-item label="新密码：">
                                <el-input type="password" v-model="passwordForm.newPas" ></el-input>
                           </el-form-item>
                           <el-form-item label="重复新密码：">
                                <el-input type="password" v-model="passwordForm.repeatePas" ></el-input>
                           </el-form-item>
                          <el-form-item label=" ">
                            <el-button>保存</el-button> 
                          </el-form-item>
                      </el-form>   
                  </toggle-label>
              </div>
            </div>
            <v-footer></v-footer>
      </div>
</template>

<script>
import toggleLabel from "../components/toggleLabel.vue"
import helper from "../js/helper"
var uploadAddress = "user/upLoadImg"
export default {
  data () {
    return {
      userInfo: null,
      index: 1,
      ageArr:[],
      passwordForm:{
        oldPas:11111,
        newPas:22222,
        repeatePas:333333
      },
      countForm:{
        name: "Billy",
        age: 22,
        phone: "15850225218",
        email: "948021695@qq.com",
        sex: "男"
      }
    };
  },
  methods:{
    toIndex:function(){ // 返回首页
       helper.routerGo("/index"); 
    },
    choose:function(e){
      var index = e.target.getAttribute("data-index");
      this.index = index || 1;
    },
    handleAvatarSuccess:function(res, file){ // 图片上传成功以后的回调
      console.log(res);
      console.log(file);
      this.countForm.headimg = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload:function(file){
       console.log(file);
    }
  },
  components:{
    toggleLabel
  },
  created:function(){
    for(var i = 10;i<=99;i++){
      this.ageArr.push(i+"岁");
    }
  },
  mounted:function(){
    this.countForm = this.$store.state.userInfo.info;
    console.log(this.$store.state.userInfo.info);
  }
}

</script>
<style scoped lang="less">
@front-color:#fafafa; /* 上部背景颜色 */
@font-common: 18px; /* 字体大小 */
.red{
  color:red;
}
.personal-container{
  width: auto;
  height: auto;
}
.common-border{
    border:1px solid #000000;
}
.transfrom(@row,@col){
    -webkit-transform: translate(@row,@col);
    transform: translate(@row,@col);
}
.common-flex(@dirction){
  display: flex;
  flex-direction: @dirction;
}
.common-row-center{
  position: absolute;
  left: 50%;
  .transfrom(-50%, 0%);
}
.common-col-center{
  position: absolute;
  top: 50%;
  .transfrom(0%, -50%);
}
.common-center{
  .common-row-center;
  .common-col-center;
}
.common-border-box(@top,@right,@down,@left){
  box-sizing: border-box;
  padding:@top @right @down @left;
}
.front{
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
.front-content{
  min-width:600px;
  height:100%;
  position: relative;
}
.front-show-box(@pos){
  width: 130px;
  height: 40px;
  float: @pos;
  text-align: center;
  font-size: @font-common;
  line-height: 40px;
  .common-col-center;
}
.front-show-box-1{
  .front-show-box(left)
}
.front-show-box-2{
  .front-show-box(right);
  right: 0;
  width: 80px;
  font-size: 14px;
  color: #757779;
  .common-border;
  &:hover{
     background-color: #000000;
     color: #ffffff;
     cursor: pointer;
  }
}
.pl-main{
   width: 800px;
   height: auto;
   margin: 90px auto;
   .common-flex(row);
   justify-content: flex-start;
}
.select-choose{
  color: #000 !important;
  &::before{
    content: "|";
    position: absolute;
    color: #000;
    font-size: 20px;
    left: 0px;
  }
}
.pl-main-list{
   width: 180px;
   height: 600px;
   border-right: 1px solid #ddd;
   &-item{
        height: 35px;
        .common-border-box(0px,20px,0px,20px);
        line-height: 35px;
        font-size: 14px;
        cursor: pointer;
        position: relative;
        color: #a5a7aa;
        &:hover{
          .select-choose;
        };
   }
}
.pl-main-do{
   flex: 1;
   .common-border-box(0px,0px,0px,30px);
}
.common-input-inline{
  width: 200px;
}
.head-img{
  width: 100px;
  height: 100px;
  cursor: pointer;
}
.head-img img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>