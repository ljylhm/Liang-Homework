<template>
    <div class="container">
        <div class="pub-ban">
            <div class="pub-ban-content">
                <div class="pub-ban-left">编辑文章</div>
                <div class="pub-ban-right">
                    <div class="pub-ban-item">预览</div>
                    <div class="pub-ban-item">保存草稿</div>
                    <div class="pub-ban-item pub">发布</div>
                </div>
            </div>
        </div>

        <div class="pub-title">
            <div class="down-list">
                <el-dropdown trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        <div class="list-name">{{downName}}</div>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="item in listArr" :key="item" :command="item">{{item}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="input-title">
                <input type="text" placeholder="在这里输入标题" @focus="focuPlaceholder" @blur="blurPlaceholder">
            </div>
            <div class="input-title input-sub-title">
                <input type="text" placeholder="添加关键词：如多一个以空格隔开" @focus="focuPlaceholder" @blur="blurPlaceholderCode">
            </div>
        </div>

        <div class="write-area">
            <div class="write-area-pic">
                <div class="write-area-choose">
                    <div>
                        <div class="write-area-bg"></div>
                    </div>
                </div>
                <div class="write-area-intrd">
                    <textarea rows="3" cols="20" placeholder="此处摘要选填，如果不填写会默认抓取正文前50个字。" class="input-common">
                    </textarea>
                </div>
            </div>
            <div class="editor-area-toolbar" id="editor1">

            </div>
            <div class="editor-area-text" id="editor2">

            </div>
        </div>
        <div class="pub-footer">
           <v-footer :width="1300"></v-footer>
        </div>
    </div>
</template>

<script>
    import E from "wangEditor";
    export default {
        data() {
            return {
                downName: "选择主题站",
                listArr1: [{
                    name: "billy",
                    age: 23
                }, {
                    name: "bill",
                    age: 24
                }, {
                    name: "tom",
                    age: 25
                }],
                listArr: ["创意名人站", "独家合辑 ", "方法论", "创意越过界", "轻艺术"]
            };
        },
        methods: {
            handleCommand: function (command) {
                this.downName = command;
            },
            focuPlaceholder: function (e) {
                e.target.setAttribute("placeholder", "");
            },
            blurPlaceholder: function (e) {
                e.target.setAttribute("placeholder", "在这里输入标题");
            },
            blurPlaceholderCode: function (e) {
                e.target.setAttribute("placeholder", "添加关键词：如多一个以空格隔开");
            }
        },
        mounted: function () {
            var editor = new E("#editor1","#editor2");
            editor.customConfig.zIndex = 100;
            editor.create();
            
        }
    }
</script>
<style scoped>
    .pub-ban {
        width: 100%;
        height: 90px;
        position: fixed;
        top: 84px;
        left: 0px;
        z-index: 1001;
        background-color: #fafafa;
        box-sizing: border-box;
        padding: 0px 100px;
    }

    .pub-ban-content {
        width: 100%;
        height: 100%;
    }

    .pub-ban-left {
        width: 200px;
        float: left;
        height: 100%;
        font-size: 20px;
        line-height: 90px;
        text-align: center;
    }

    .pub-ban-right {
        width: 330px;
        height: 100%;
        float: right;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }

    .pub-ban-item {
        width: 80px;
        height: 45px;
        cursor: pointer;
        font-size: 14px;
        color: #757779;
        text-align: center;
        line-height: 45px;
        border: 1px solid #000;
    }

    .pub-ban-item:hover {
        color: #ffffff;
        background-color: #000000;
    }

    .pub {
        width: 120px;
        background-color: #000000;
        color: #ffffff;
    }

    .pub-title {
        width: 100%;
        height: 160px;
        margin-top: 90px;

    }

    .down-list {
        width: 100px;
        height: 20px;
        margin: 0 auto;
    }

    .list-name {
        width: 70px;
        display: inline-block;
        text-align: center;
    }

    .input-title {
        width: 400px;
        height: 40px;
        margin: 10px auto;
    }

    .input-title input {
        width: 100%;
        height: 100%;
        font-size: 26px;
        border: none;
        outline: none;
        line-height: 60px;
        text-align: center;
    }

    .input-title input::-webkit-input-placeholder {
        font-size: 26px;
        color: #000;
        line-height: 60px;
    }

    .input-sub-title {
        height: 40px;
    }

    .input-sub-title input {
        font-size: 14px;
    }

    .input-sub-title input::-webkit-input-placeholder {
        color: #4A4A4A;
        font-size: 14px;
    }

    .write-area {
        width: 1300px;
        height: auto;
        overflow: hidden;
        margin: 0 auto;
        border: 1px solid #EDEEEE;
    }

    .write-area-pic {
        width: 280px;
        height: 380px;
        float: left;
        border: 1px solid #EDEEEE;
    }

    .write-area-choose {
        width: 100%;
        height: 220px;
        box-sizing: border-box;
        padding: 10px;
    }

    .write-area-choose div:first-child {
        width: 100%;
        height: 100%;
        background-color: #EDEEEE;
    }

    .write-area-bg {
        width: 100%;
        height: 100%;
        cursor: pointer;
        position: relative;
        background: url("../../assest/img/addPic.png") no-repeat center center;
    }

    .write-area-intrd {
        width: 100%;
        height: 154px;
        box-sizing: border-box;
        padding: 0px 10px;
        overflow: hidden;
    }

    .input-common {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
    }

    .editor-area-toolbar {
        width: 1016px;
        height: 40px;
        float: left;
        background-color: #FAFAFA;
        border: 1px solid #EDEEEE;
    }

    .editor-area-text {
        width: 1016px;
        height: 600px;
        float: left;
        border: 1px solid #EDEEEE;
    }

    .pub-footer{
        margin: 30px auto 0px;
    }
</style>