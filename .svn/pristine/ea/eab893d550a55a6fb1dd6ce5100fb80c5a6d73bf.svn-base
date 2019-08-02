<template>
  <div class="SC_topbox">
    <van-nav-bar
      left-arrow
      left-text="自助服务"
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <!--    内容-->
    <van-row type="flex" justify="space-around" class="mt20">
      <van-col span="8" class="text_center"><div><img src="../../assets/images/SelfService/dji.png" width="56px"><p class="text_center">激活账户</p></div></van-col>
      <van-col span="8" class="text_center"><div><img src="../../assets/images/SelfService/youjian.png" width="56px"><p class="text_center">修改邮箱名</p></div></van-col>
      <van-col span="8" class="text_center"><div  @click="$router.push({ name: 'ForgotPassword' })"><img src="../../assets/images/SelfService/yaos.png" width="56px"><p class="text_center">重置登录密码</p></div></van-col>
    </van-row>
    <van-row type="flex" justify="space-around" class="mt20">
      <van-col span="8" class="text_center"><div  @click="$router.push({ name: 'FrogetWord' })"><img src="../../assets/images/SelfService/suo.png" width="56px"><p class="text_center">重置支付密码</p></div></van-col>
      <van-col span="8" class="text_center"><div><img src="../../assets/images/SelfService/chaz.png" width="56px"><p class="text_center">进度中心查询</p></div></van-col>
      <van-col span="8" class="text_center"><div  @click="$router.push({ name: 'ReSetPhoneNum' })"><img src="../../assets/images/SelfService/sji.png" width="56px"><p class="text_center">修改手机号码</p></div></van-col>
    </van-row>
    <div class="cell_last">
    <p class="last_three_p"><img src="../../assets/images/SelfService/ID.png" width="32px"><span>账户服务</span></p>
    <p class="last_three_p"><img src="../../assets/images/SelfService/qian.png" width="32px"><span>账户服务</span></p>
    <p class="last_three_p"><img src="../../assets/images/SelfService/dun.png" width="32px"><span>账户服务</span></p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SelfService",
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
p{
  margin: 0;
  font-size:14px;
}
.last_three_p img{
  vertical-align:middle;
}
  .last_three_p span{
    font-size:14px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
    vertical-align:middle;
    margin-left: 12px;
  }
  .last_three_p{
    height: 56px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 16px;
    line-height: 56px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    /*border-bottom-width: 90%;*/
  }
  .last_three_p:first-of-type {
    margin-top: 50px;
  }
  .cell_last{
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
    height: auto;
  }
.cell_last p{
  padding-left: 0;
}
</style>
