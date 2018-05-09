<!-- 尾部 -->
<template>
    <div class="footer" :style="{width: footerWidth+'px'}">
        <div class="footer-container">
            <div class="footer-email">
                <div class="email-input">
                   <input type="text" placeholder="输入邮箱订阅newletter">
                </div>
                <div class="email-icon">
                    <i class="el-icon-arrow-right "></i>
                </div>
            </div>
            <div class="footer-gz">
                
            </div>
        </div>
        <div class="footer-font">
            梁钧元@liang 2018
        </div>
    </div>
</template>

<script>
    export default {
      data:function(){
          return{
              name:123,
              footerWidth:1100
          }
      },
      created:function(){
         this.footerWidth = this.width || this.footerWidth; 
      },
      props:["width"]
    }
</script>
<style scoped>
.footer{
    width: 1100px;
    margin: 20px auto 0px auto;
    height: 175px;
}
.footer-container{
    width: 100%;
    height: 75px;
    border-top: 1px solid#DDD;
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items:center;
    border-bottom: 1px solid#DDD;
}
.footer-email{
    width: 360px;
    height: 40px;
    line-height: 38px;
}
.footer-email input{
    width: 100%;
    height: 34px;
    border: 0px;
    outline:none;
    font-size: 14px;
}
.footer-gz{
    width: 300px;
    height: 40px;
    border: 1px solid #ddd;    
}
.email-input{
    width: 82%;
    height: 100%;
    float: left;
    border: 1px solid #ddd;
}
.email-icon{
    width: 13%;
    height: 100%;
    float: left;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    text-align: center;
    border: 1px solid #ddd;
}
.footer-font{
    width: 100%;
    height: 30px;
    padding-top: 20px;
    font-size: 14px;
    text-align: center;
}
</style>