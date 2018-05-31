<template>
    <div class="activity-container">
        <div class="swiper swiper-activity">
            <el-carousel trigger="click" height="400px" class="swiper-img">
                <el-carousel-item v-for="item in scrollImg" :key="item">
                    <div class="swiper-img">
                        <img :src=item alt="">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>

        <!-- <div class="serach-select-input">
            <div style="float:left">
                <el-select v-model="testValue" class="select-address" placeholder="请选择活动">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                <el-select v-model="testValue" class="select-address" placeholder="请选择活动">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                <el-select v-model="testValue" class="select-address" placeholder="请选择活动">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>

            <div class="serach-btn">搜索</div>
        </div> -->

        <div class="jx-activity" style="margin-top:40px">
            <div class="list-show-container">
                <div class="act-item" v-for="item in getData" :key="item.id" style="margin-bottom:80px;cursor:pointer" @click="getDetail(3,item.id)">
                    <div class="act-up">
                        <div class="act-img">
                            <div class="act-type">{{item.type}}</div>
                            <img :src=item.titleimg alt="">
                        </div>
                        <p class="act-item-title">{{item.title}}</p>
                        <p class="act-item-sub">{{item.subtitle.substring(0,15)}}</p>
                    </div>
                    <div class="act-down">
                        {{item.address.substring(0,2)}} | {{item.time.substring(0,10)}}
                    </div>
                </div>
            </div>
        </div>

        <div class="main-loading activity-loading">
            <div class="pos-center">
                <div class="loading-no-tab loading pos-center" @click="showLoading" v-if="!isLoading">
                    浏览更多
                </div>
                <div class="loading-tab loading pos-center" v-else></div>
                <!-- <img src="/assest/img/loading.gif" alt=""> -->
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import helper from "@/helper";
import config from "@/config";
let queryAllActive = config.Api.localAddress + "active/queryAllActive";
export default {
  data() {
    return {
      testValue: "3",
      isLoading: false,
      getData: [],
      indexPara: {
        page: 1,
        limit: 16
      },
      options: [
        {
          value: "1",
          label: "所有活动"
        },
        {
          value: "2",
          label: "测试选择2"
        },
        {
          value: "3",
          label: "测试选择3"
        }
      ],
      scrollImg: [
        "http://pic.topys.cn/uploads/20180227/1483325017.png",
        "http://pic.topys.cn/uploads/20180123/220215725.png",
        "http://pic.topys.cn/uploads/20180327/1355392551.png",
        "http://pic.topys.cn/uploads/20180326/739536397.png"
      ]
    };
  },
  methods: {
    showLoading() {
      this.isLoading = true;
      this.search();
    },
    search() {
      this.indexPara.limit =  this.indexPara.limit  + 16;
      let para = Object.assign({}, this.indexPara);
      helper.httpGet(queryAllActive, para).then(data => {
        if (data.code != 2000) return;
        this.getData = data.result;
        this.isLoading = false;
      });
    },
    getDetail(type,artid){
      type = type || 3;
      switch(type){
        case 1: helper.routerGo("read",{
          type:1,
          id:artid
        })
        break;
        case 3: helper.routerGo("createAct",{
          type:3,
          id:artid
        })
        break;
      }
    }
  },
  watch: {
    testValue: function(newV, oldV) {}
  },
  created: function() {
    let para = Object.assign({}, this.indexPara);
    helper.httpGet(queryAllActive, para).then(data => {
      if (data.code != 2000) return;
      this.getData = data.result;
    });
  }
};
</script>
<style>
.activity-container {
  width: 100%;
  height: auto;
}

.swiper-activity {
  height: 400px;
}

.serach-select-input {
  width: 1100px;
  height: 46px;
  margin: 45px auto;
}

.serach-select-input .el-input__inner {
  height: 46px;
  border-radius: 0px;
  outline: none;
}

.serach-select-input .el-select {
  margin-right: 20px;
}

.select-address {
  width: 300px;
}

.sserach-select-input .el-input-group__append {
  background-color: #1d2129;
  color: #ffffff;
  border: 0px;
}

.activity-loading {
  margin-top: -40px;
}
</style>