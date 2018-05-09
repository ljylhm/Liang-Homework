<template>
    <div class="container">
        <div class="read-container">
            <div class="read-topic">
                <div>{{topic}}</div>
            </div>
            <div class="read-title">
                <h2>{{title}}</h2>
            </div>
            <div class="read-tag">
               <div v-for="item in tagArr" :key="item">{{item}}</div>
            </div>
            <div class="read-text">
                <p>还只知道吃是一种生活方式吗？人家现在已经是情感温度计了。</p>
                <p>以前卖点吃的喝的只需要走胃，现在都讲究走心。</p>
            </div>
            <v-comment></v-comment>
        </div>
        <v-footer></v-footer> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                topic:"好广告",
                title:"用铺天盖地的大字报和纽约人谈心",
                mes:"欢迎来到read.vue",
                tagArr:[123,333,3,"fdafs"]
            };
        }
    }
</script>
<style scoped>
h2{
    margin: 0px;
    padding: 0px;
}
.read-container{
    width: 900px;
    height: auto;
    margin: 0 auto;
}
.read-topic{
    width: 100%;
    height: 120px;
    color: #757779;
    font-size: 16px;
    position: relative;
    text-align: center;
}
.read-topic div{
   height: 20px;
   position: absolute;
   top: 50%;
   left: 50%;
   -webkit-transform: translate(-50%, -50%);
   transform: translate(-50%, -50%); 
   margin: 0 auto;
   padding-bottom: 20px;
   border-bottom: 1px solid #979797;
}
.read-title{
    width: 100%;
    text-align: center;
}
.read-tag{
    text-align: center;
    margin-top: 20px;
    width: 100%;
}
.read-tag div{
    display: inline;
    margin:0 auto;
    padding: 0 5px;
    color: #4a4a4a;
    cursor: pointer;
}
.read-text{
    width: 100%;
    margin-top: 30px;
    min-height: 600px;
    height: auto;
}
</style>