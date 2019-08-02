<template>
  <div class="SC_topbox">
    <van-nav-bar
      left-arrow
      left-text="关于我们"
      @click-left="onClickLeft"
    >
    </van-nav-bar>
<!--    内容-->
    <div class="security_center FW_one">
      <div class="US_top">
        <img src="../../assets/images/SecuritySettings/shez.png" width="64px">
        <p class="mt20 ft16 mb0" style="font-family:PingFangSC-Semibold;font-weight:600;">tldollar</p>
        <p class="mt10 ft12 color-999">tldollar1.0.1</p>
      </div>
      <van-cell title="版本信息" is-link url=""  style=" border-top: 0.0625rem solid rgba(0,0,0,0.1);"/>
      <van-cell title="投诉建议" is-link to="" />
      <van-cell title="检查更新" is-link to="" />
    </div>
    <p class="last_child_p">copyright @ 2019 杭州蚂蚁金服 | ICP证浙B2-20160559</p>
  </div>
</template>

<script>
    export default {
        name: "AboutUs",
      data (){
        return {}
      },
      methods: {
        onClickLeft() {
          console.log('返回');
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>
  .US_top{
    text-align: center;
    box-sizing: border-box;
    padding-top: 46px;
    padding-bottom: 60px;
  }
  .US_top p{
    text-align: center;
  }
  .FW_one .van-cell{
   padding-left: 5px;
  }
  .last_child_p{
    position: absolute;
    bottom: 37px;
    font-weight:500;
    color:rgba(153,153,153,1);
    line-height:14px;
    font-size:10px;
    text-align: center;
    width: 100%;
    height: auto;
    font-family:PingFang-SC-Medium;
  }
</style>
