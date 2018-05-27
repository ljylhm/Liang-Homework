<template>
  <div>
    <div class="main-loading index-loading">
      <div class="pos-center">
        <div class="loading-tab loading pos-center" v-if="isShowLoading"></div>
        <div class="loading-no-tab loading pos-center" @click="showLoading" v-else>
          浏览更多
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        nowPage: 1,
        isShowLoading: false
    };
  },
  props:[
     'isLoad'
  ],
  methods: {
      showLoading:function(){
          this.isShowLoading = true;
          this.nowPage++;
          this.$emit("pageChange",this.nowPage);
      },
      close:function(){
          this.isShowLoading = false;
      }
  },
  created:function(){
      console.log(this.isLoad)
      this.isShowLoading = this.isLoad || false;
      console.log(this.isShowLoading);
  }
}

</script>
<style lang='less' scoped>
</style>