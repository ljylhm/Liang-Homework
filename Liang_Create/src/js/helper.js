/**
 * 工具类函数
 */
import axios from 'axios'
let that;
var helper = {
    /**获得this指针**/
    init:function(arg){
      if(!arg) return;  
      that = arg
    },

    toRouter:function(name){
      console.log(name);  
      that.$router.push({path:name}) 
    },

    setStorage:function(key,value){
       if(!name) return; 
       window.localStorage.setItem(key,value)
    },
    
    getStorage:function(key){
       if(!key) return;
       return window.localStorage.getItem(key)  
    },

    httpGet:function(apiName,postData){
      if(!apiName) return;
      if(!postData) postData = {}; 
       return axios({
         method:'get',
         url:apiName,
         data:postData
       })
    },

    httpPost:function(apiName,postData){
      if(!apiName) return;
      if(!postData) postData = {}; 
       return axios({
         method:'post',
         url:apiName,
         data:postData
       })
    }


}

export default helper