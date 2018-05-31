<template>
    <div class="container-head">
        <div class="fixed-content">
            <div class="ll-content">
                <div class="ct-left">
                    <div class="ch-item" v-for="(item,index) in channelList" :key=index @click="pageChange(item.router)">{{item.name}}</div>
                </div>
                <div class="ct-right">
                    <div class="cr-item-1">
                        <el-input class="cr-item-1-input" placeholder="请输入内容" suffix-icon="el-icon-search" v-model="text"></el-input>
                    </div>
                    <div class="cr-item-user" @click="enter">
                         <img :src="headimg || defaultHeadImg" alt="">
                        <div class="drop-down" v-show="isDrop">
                            <div class="drop-down-list" @click="to('/personal')">个人中心</div>
                            <div class="drop-down-list" @click="to('/publish')">发布文章</div>
                            <div class="drop-down-list" @click="to('/myPage')">我的主页</div>
                            <div class="drop-down-list" @click="out()">退出</div>
                        </div>
                    </div>
                    <!-- <div class="cr-head-img">
                        <img src="//pic.topys.cn/Uploads/image/head.png" alt="">
                    </div> -->
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
                    }
                ],
                text:"",
                isDrop: false,
                defaultHeadImg: helper.config.headimg
                //channelList: ["发现", "有聊", "活动", "探索"]
            };
        },
        methods: {
            pageChange: function (router) {
                helper.routerGo(router);
            },
            enter: function(){
                if(!this.isOnline){
                    this.$store.commit("loginDialog");
                    return;
                }
                this.isDrop = !this.isDrop; 
            },
            leave: function(){
                setTimeout(()=>{
                    this.isDrop = false; 
                },1000)    
            },
            to:function(item){
               item = item || '/index';
               helper.routerGo(item);
            },
            out:function(){ // 退出
                helper.showAlertCommon('是否要退出','warning',(flag)=>{
                    if(!flag) return;
                    this.$store.commit("changeStatus");
                    this.$store.commit("changeUserInfo",{});
                    helper.localStroageClear('user');
                    helper.routerGo('/index');
                })
            }
        },
        computed:{
           isOnline:function(){
               return this.$store.state.userInfo.status;
           },
           headimg:function(){
               return this.$store.state.userInfo.info.headimg;
           }
        },
        created: function(){
            console.log(this.headimg);
        }
    };
</script>

<style lang="less">
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

    .ll-content {
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
        position: absolute;
        top: 50%;
        left: 170px;
        margin-top: -10px;
        cursor: pointer;
        & img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }

    // .cr-item-user:hover{
    //     background: url("http://www.topys.cn/Public/home/img/icon/ic-user.png") no-repeat;
    //     background-position-y: 100%;
    //     background-size: 30px;
    // }

    .cr-head-img{
        width: 40px;
        height: 40px;
        position: absolute;
        top: 50%;
        left: 220px;
        margin-top: -20px;
        cursor: pointer;
        & img{
            width: 100%;
            height: 100%;
        }
    }

    .drop-down{
        position: relative;
        background: #fff;
        left: -34px;
        width: 100px;
        height: 130px; 
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