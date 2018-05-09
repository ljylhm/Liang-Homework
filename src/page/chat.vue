<template>
    <div class="chat-container">
        <div class="topic chat-topic">
            <div class="topic-title">今日话题</div>
            <p>哪些品牌story让你觉得“哇！”或“切！”</p>
            <div class="topic-btn">点击参与</div>
        </div>

        <div class="serach">
            <el-input class="serach-input" prefix-icon="el-icon-search">
                <el-button slot="append" class="serach-btn">搜索</el-button>
            </el-input>
        </div>

        <div class="list-show-container">
            <div class="list-item-chat" v-for="item in 20" :key="item">
                <div class="item-title">你见过最糟or最好的品牌谈心姿势</div>
                <div class="item-bottom">
                    <div class="item-bottom-icon"></div>
                    <div class="item-bottom-font">12</div>
                    <div class="item-bottom-type">
                        <span>互动</span>
                        <span>谈心</span>
                    </div>
                </div>
                <img src="http://pic.topys.cn/uploads/20180402/2057881154.jpg?x-oss-process=style/topic_cover" alt="">
            </div>
        </div>

        <div class="main-loading">
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
                message: "welcome to chat.vue",
                isLoading: false
            };
        },
        methods: {
            showLoading() {
                this.isLoading = true;
            }
        }
    }
</script>
<style>
    .chat-container {
        width: 100%;
        height: auto;
    }

    .serach {
        width: 1100px;
        height: 50px;
        margin: 20px auto;
    }

    .serach-input .el-input__inner {
        width: 100%;
        height: 50px;
        font-size: 16px;
    }

    .serach-input .el-input-group__append {
        background-color: #1D2129;
        color: #ffffff;
        border: 0px;
    }

    .list-show-container {
        width: 1110px;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        height: auto;
        margin: 0 auto;
        overflow: hidden;
    }

    .list-item-chat {
        width: 240px;
        height: 240px;
        position: relative;
        margin-bottom: 40px;
    }

    .list-item-chat img {
        width: 100%;
        height: 100%;
    }

    .item-title {
        width: 130px;
        height: auto;
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 20px;
        color: #fff;
    }

    .item-bottom {
        width: 200px;
        height: 34px;
        position: absolute;
        bottom: 10px;
        left: 20px;
    }

    .item-bottom-icon {
        width: 34px;
        height: 100%;
        float: left;
        background: url("/assest/img/ic-topic-us.png") no-repeat center center;
        background-size: 100% 100%;

    }

    .item-bottom-font {
        float: left;
        height: 100%;
        padding-left: 5px;
        line-height: 34px;
        font-size: 26px;
        color: #fff;

    }

    .item-bottom-type {
        height: 100%;
        font-size: 12px;
        float: right;
        color: #fff;
        text-align: right;
        line-height: 52px;
    }
</style>