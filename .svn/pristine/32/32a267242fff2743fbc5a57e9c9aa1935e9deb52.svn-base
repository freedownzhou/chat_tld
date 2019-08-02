<template>
  <div class="SC_topbox">
    <van-nav-bar
      left-arrow
      left-text="更改支付密码"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon slot="right" >
        <img src="../../../assets/images/SecuritySettings/jlu.png" width="24px">
      </van-icon>
    </van-nav-bar>
<!--    内容-->
    <div class="security_center">
    <p class="small_span">您正在为账户178******43重置支付密码，请选择重置方式：</p>
      <div class="big_span">
        <img src="../../../assets/images/SecuritySettings/success.png" width="56px"/>
        <p class="img_span">经过检测，您在不正常的环境下操作，需要进行安全校验</p>
      </div>
      <div class="cell_box mt20 mb10" @click="$router.push({ path:'SecuritySettings/FrogetWord',name:'FrogetWord'})">
        <span>我忘记支付密码了</span>
        <img src="../../../assets/images/SecuritySettings/right_jiantou.png" />
      </div>
      <div class="cell_box mb10" @click="$router.push({ path:'/SecuritySettings/RememberWord',name:'RememberWord'})">
        <span>我记得原支付密码</span>
        <img src="../../../assets/images/SecuritySettings/right_jiantou.png" />
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ChangeWord",
      data (){
        return {
        }
      },
      methods: {
        onClickLeft() {
          console.log('返回');
          this.$router.go(-1);
        },
        onClickRight() {
          console.log('按钮');
        }
      }
    }
</script>

<style scoped>
.small_span{
  font-size:12px;
  font-family:PingFang-SC-Medium;
  font-weight:500;
  color:rgba(153,153,153,1);
  line-height:17px;
  margin-top: 20px;
  margin-bottom: 28px;
}
  .big_span{
    font-size:14px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:20px;
  }
  .img_span{
    width: 78%;
    display: inline-block;
    margin: 0;
    vertical-align: top;
    margin-top: 8px;
  }
  .cell_box{
    width: 100%;
    line-height: 56px;
    box-sizing: border-box;
    padding-left: 20px;
    background:rgba(255,255,255,1);
    border: solid 0.1px rgba(0,0,0,0.1);
    font-size: 14px;
  }
  .cell_box img{
    vertical-align: middle;
    position: relative;
    right: -54%;
  }
</style>
