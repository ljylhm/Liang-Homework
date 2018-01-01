/**
 * 工具类函数
 */
import axios from 'axios'
import { Loading } from 'element-ui' 
import { Message } from 'element-ui';
let that,
    loadModel,
    messageModel;
var helper = {
    /**获得this指针**/
    init:function(arg){
      if(!arg) return;  
      that = arg
    },

    toRouter:function(name,query){
      if(arguments == 1) query = {}  
      that.$router.push({path:name,query:query}) 
    },

    setLocalStorage:function(key,value){
       if(!key) return; 
       window.localStorage.setItem(key,value)
    },
    
    getLocalStorage:function(key){
       if(!key) return;
       return window.localStorage.getItem(key)  
    },

    setSessionStorage:function(key,value){
      if(!key) return; 
      window.sessionStorage.setItem(key,value)
    },
   
    getSessionStorage:function(key){
      if(!key) return;
      return window.sessionStorage.getItem(key)  
    },

    httpGet:function(apiName,postData,target){
      if(!apiName) return;
      if(!postData) postData = {};
      if(target) this.showLoading('正在加载',target);
      else{
        this.showLoading('正在加载') 
      }
      return axios.get(apiName,{
        params:postData
      }) 
    },

    httpPost:function(apiName,postData){
      if(!apiName) return;
      this.showLoading('正在加载') 
      if(!postData) postData = {};
      return axios.post(apiName,postData)  
    },

    showLoading:function(text,target){
      var isFull = false;
      if(arguments.length == 1){
        target = 'document.body'
        isFull = true;
      };
      loadModel = Loading.service({ 
        fullscreen: isFull,
        text:text,
        target:target 
      });  
    },

    hiddenLoading:function(){
      loadModel.close();
    },

    showToast:function(name,type){
      messageModel = Message({
         message:name,
         type:type
      })
   }
}

export default helper