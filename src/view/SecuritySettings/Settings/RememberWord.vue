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
    <div class="security_center FW_one">
      <!--    手机号码-->
      <van-cell-group>
        <van-field
          v-model="PayPassword"
          label="支付密码"
          placeholder="请输入6位数字支付密码"
          :error-message="error_PayPassword"
        />
      </van-cell-group>
      <van-button type="primary" size="large" class="mt30" @click="next_jm">下一步</van-button>
      <p class="a_blue_span mt20"><a href="#SecuritySettings/FrogetWord" style="color: #3DA8D7">忘记支付密码？</a></p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "RememberWord",
      data (){
        return {
          PayPassword:"",
          //错误显示
          error_PayPassword:""
        }
      },
      methods: {
        // 输入校验
        disableds () {
          //验证支付密码一致
          if (!(this.PayPassword === this.PayPassword)) {
            this.$notify('支付密码错误 ');
            return false
          }
          return true
        },
        next_jm () {
          if ( this.disableds()){
            this.$router.push({ name: 'RememberWordTwo' })
          }
        },
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
  .a_blue_span{
    color: #3DA8D7;
    font-size:12px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
  }
</style>
