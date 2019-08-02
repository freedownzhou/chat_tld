<template>
  <div class="lg_topbox">
    <van-nav-bar
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      style="line-height: 35px"
     >
    <van-icon slot="right" >
      <img src="../../assets/images/Login/save.png" width="24px">
    </van-icon>
    </van-nav-bar>
    <van-radio-group v-model="radio" class="lg_checked">
      <van-cell-group>
        <van-cell title="简体中文" clickable @click="radio = '1'">
          <van-radio name="1" />
          <img src="../../assets/images/Login/lg_right.png" width="24px" v-show="radio==1?true:false">
        </van-cell>
        <van-cell title="繁体中文" clickable @click="radio = '2'">
          <van-radio name="2" />
          <img src="../../assets/images/Login/lg_right.png" width="24px" v-show="radio==2?true:false">
        </van-cell>
        <van-cell title="English" clickable @click="radio = '3'">
          <van-radio name="3" />
          <img src="../../assets/images/Login/lg_right.png" width="24px" v-show="radio==3?true:false">
        </van-cell>
      </van-cell-group>
    </van-radio-group>
  </div>
</template>

<script>
    export default {
        name: "LanguageChange",
      data (){
          return {
            radio: 1
          }
      },
      methods: {
        onClickLeft() {
          console.log('返回');
          this.$router.go(-1);
        },
        onClickRight() {
          console.log('按钮');
        },
      //  改变图标位置
        change_img(that) {
          console.log(that)
          let strongobj=document.createElement('img')
          console.log(document.getElementById("#lg_ul").getElementsByTagName('li'))
          console.log(this.lg[that])
        }
      }
    }
</script>

<style scoped>

</style>
