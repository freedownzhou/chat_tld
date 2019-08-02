<template>
  <div class="SC_topbox">
    <van-nav-bar
      left-arrow
      left-text="设置密保"
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
          v-model="phone"
          label="手机号码"
          placeholder="请输入您的手机号码"
          :error-message="error_phone"
        />
        <!--      手机验证码-->
        <van-field
          v-model="captcha"
          label="手机验证码"
          placeholder="请输入验证码"
          :error-message="error_captcha"
        >
          <van-button slot="button" type="primary" size="small" @click="getCode" :disabled="disabled">{{ButtonName}}</van-button>
        </van-field>
        <!--支付密码-->
        <van-field
          v-model="payword"
          label="支付密码"
          placeholder="请输入6位数字支付密码"
          :error-message="error_payword"
          type="password"
        />
      </van-cell-group>
      <van-button type="primary" size="large" class="mt100" @click="next_jm">下一步</van-button>
      <p class="a_blue_span"><a href="#SecuritySettings/FrogetWord" style="color: #3DA8D7">忘记支付密码？</a></p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SettingBartender",
      data () {
        return{
          // 手机校验
          phoneFilter: new RegExp(`^1(3|4|5|7|8)\\d{9}$`),
          captcha:"",
          username:"",
          phone:"",
          //支付密码
          payword:"",
          //错误显示
          error_username:"",
          error_phone:"",
          error_captcha:"",
          error_payword:'',
          ButtonName : '获取验证码',
          // 定时器
          timer: null,
          time: 60,
          disabled: false,
        }
      },
      methods: {
        // 输入校验
        disableds () {
          //验证支付密码一致
          if (!(this.payword === this.payword && this.payword !== '')) {
            this.$notify('支付密码错误 ');
            return false
          }
          // 验证码校验
          if (!(this.$RegExp.captcha(this.captcha))) {
            this.$notify('验证码输入有误 ');
            return false
          }
          //手机号校验
          if (!(this.phoneFilter.test(this.phone))) {
            this.$notify('手机号输入有误 ');
            return false
          }
          return true
        },
        next_jm () {
          if ( this.disableds()){
            this.$router.push({ name: 'SettingBartenderTwo' })
          }
        },
        // 获取验证码
        getCode () {
          // 验证码60秒倒计时
          if (!this.timer) {
            this.timer = setInterval(() => {
              if (this.time > 0 && this.time <= 60) {
                this.time--
                if (this.time !== 0) {
                  this.ButtonName = '重新发送(' + this.time + ')'
                } else {
                  clearInterval(this.timer)
                  this.ButtonName = '获取验证码'
                  this.time = 60
                  this.timer = null
                  this.disabled = false
                }
              }
            }, 1000)
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
    margin-top: 20px;
  }
</style>
