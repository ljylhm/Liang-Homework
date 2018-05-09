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

        <div class="serach-select-input">
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
        </div>

        <div class="jx-activity">
            <div class="list-show-container">
                <div class="act-item" v-for="item in 16" :key="item">
                    <div class="act-up">
                        <div class="act-img">
                            <div class="act-type">展览</div>
                            <img src="http://pic.topys.cn/uploads/20180403/1333385608.jpg?x-oss-process=style/event_cover" alt="">
                        </div>
                        <p class="act-item-title">可爱的哲学－小林 麻衣子个展</p>
                        <p class="act-item-sub">可爱如我</p>
                    </div>
                    <div class="act-down">
                        上海 | 2018/04/15
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
    export default {
        data() {
            return {
                testValue: "3",
                isLoading: false,
                options: [{
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
                scrollImg: ["http://pic.topys.cn/uploads/20180227/1483325017.png",
                    "http://pic.topys.cn/uploads/20180123/220215725.png",
                    "http://pic.topys.cn/uploads/20180327/1355392551.png",
                    "http://pic.topys.cn/uploads/20180326/739536397.png"
                ]
            };
        },
        methods: {
            showLoading() {
                this.isLoading = true;
            }
        },
        watch: {
            testValue: function (newV, oldV) {
                console.log("进入这里>>>");
                console.log(oldV)
                console.log(newV);
            }
        }
    }
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
        margin: 45px auto
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
        background-color: #1D2129;
        color: #ffffff;
        border: 0px;
    }

    .activity-loading {
        margin-top: -40px;
    }
</style>