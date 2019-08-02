<template>
  <div class="SC_topbox">
    <van-nav-bar
      left-arrow
      left-text="我的客服"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon slot="right" >
        <img src="../../assets/images/SecuritySettings/jlu.png" width="24px">
      </van-icon>
    </van-nav-bar>
    <!--    内容-->
    <div class="security_center">
      <div class="cell_box mt20 mb10" @click="$router.push({ name: 'CommonProblems' })">
        <span>常见问题</span>
        <img src="../../assets/images/SecuritySettings/right_jiantou.png" />
      </div>
      <div class="cell_box mb10" @click="$router.push({ name: 'SelfService' })">
        <span>自助服务</span>
        <img src="../../assets/images/SecuritySettings/right_jiantou.png" />
      </div>
      <div class="cell_box mb10" @click="$router.push({ name: 'Center' })">
        <span>客服电话</span>
        <img src="../../assets/images/SecuritySettings/right_jiantou.png" />
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CustomerService",
      data (){
        return {
          PayPassword:"",
          //错误显示
          error_PayPassword:""
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
    right: -70%;
  }

</style>
