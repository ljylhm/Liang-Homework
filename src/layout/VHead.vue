<template>
    <div class="container-head">
        <div class="fixed-content">
            <div class="content">
                <div class="ct-left">
                    <div class="ch-item" v-for="(item,index) in channelList" :key=index @click="pageChange(item.router)">{{item.name}}</div>
                </div>
                <div class="ct-right">
                    <div class="cr-item-1">
                        <el-input class="cr-item-1-input" placeholder="请输入内容" suffix-icon="el-icon-search" v-model="text"></el-input>
                    </div>
                    <div class="cr-item-user" @click="enter">
                        <div class="drop-down" v-show="isDrop">
                            <div class="drop-down-list">个人中心</div>
                            <div class="drop-down-list">我的草稿</div>
                            <div class="drop-down-list">我的主页</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import helper from "@/helper";

    export default {
        data: function () {
            return {
                channelList:[
                    {
                        name:"发现",
                        router:"/index"
                    },{
                        name:"有聊",
                        router:"/chat"
                    },{
                        name:"活动",
                        router:"/activity"
                    },{
                        name:"探索",
                        router:"discovery"
                    }
                ],
                text:"",
                isDrop: false
                //channelList: ["发现", "有聊", "活动", "探索"]
            };
        },
        created: function () {

        },
        methods: {
            pageChange: function (router) {
                helper.routerGo(router);
            },
            enter: function(){
                this.isDrop = !this.isDrop; 
            },
            leave: function(){
                setTimeout(()=>{
                    this.isDrop = false; 
                },1000)
                
            }
        }
    };
</script>

<style>
    .container-head {
        width: 100%;
        height: 84px;
        position: relative;
        border-bottom: 1px solid #C2C2C2;
    }

    .fixed-content {
        width: 100%;
        height: 84px;
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 1002;
        background: #fff;
    }

    .content {
        width: 1137px;
        height: 100%;
        margin: 0 auto;
        
    }

    .ct-left {
        height: 100%;
        float: left;
        /* border: 1px solid black; */
    }

    .ct-right {
        width: 300px;
        height: 100%;
        float: right;
        position: relative;
    }

    .ch-item {
        width: auto;
        height: 100%;
        line-height: 84px;
        float: left;
        font-size: 14px;
        cursor: pointer;
        padding: 0px 20px 0px 20px;
    }

    .ch-item:hover {
        border-bottom: 2px solid #000;
    }

    .cr-item-1{
        width: 150px;
        height: 30px;
        float: left;
        position: absolute;
        top: 50%;
        margin-top: -10px;
    }

    .cr-item-1-input input{
        height: 30px;
        border-radius: 0px;
    }

    .cr-item-user{
        width: 30px;
        height: 30px;
        float: left;
        position: absolute;
        top: 50%;
        left: 170px;
        margin-top: -10px;
        cursor: pointer;
        background: url("http://www.topys.cn/Public/home/img/icon/ic-user.png") no-repeat;
        background-position-y: 0% ;
        background-size: 30px;
    }

    .cr-item-user:hover{
        background: url("http://www.topys.cn/Public/home/img/icon/ic-user.png") no-repeat;
        background-position-y: 100%;
        background-size: 30px;
    }

    .drop-down{
        position: relative;
        top: 52px;
        background: #fff;
        left: -44px;
        width: 110px;
        height: 200px; 
    }

    .drop-down-list{
        width: 100%;
        height: 34px;
        line-height: 34px;
        text-align: center;
        font-size: 14px;
        color: #757779;
    }
    .drop-down-list:hover{
        color: #000; 
    }
</style>