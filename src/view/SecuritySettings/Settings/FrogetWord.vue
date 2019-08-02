<template>
  <div class="SC_topbox">
    <van-nav-bar
      left-arrow
      left-text="忘记支付密码"
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
        <van-button slot="button" type="primary" size="small"  @click="getCode" :disabled="disabled">{{ButtonName}}</van-button>
      </van-field>
<!--      银行卡卡号-->
      <van-field
        v-model="bankcard"
        label="银行卡卡号"
        placeholder="请输入您的银行卡卡号"
        :error-message="error_bankcard"
      />
<!--      持卡人证件号码-->
      <van-field
        v-model="Idcard"
        label="持卡人身份证"
        placeholder="请输入您的身份证号码"
        :error-message="error_Idcard"
      />
    </van-cell-group>
      <van-button type="primary" size="large" class="mt50" @click="next_to">下一步</van-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FrogetWord",
      data () {
          return{
            // 手机校验
            phoneFilter: new RegExp(`^1(3|4|5|7|8)\\d{9}$`),
            captcha:"",
            phone:"",
            bankcard:"",
            Idcard:"",
            //错误显示
            error_captcha:"",
            error_phone:"",
            error_bankcard:"",
            error_Idcard:"",
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
          // 验证码校验
          if (!(this.$RegExp.captcha(this.captcha))) {
            this.$notify('验证码输入有误 ');
            return false
          }
          //身份证校验
          if (!(this.$RegExp.userId(this.Idcard))) {
            this.$notify('身份证输入有误 ');
            return false
          }
          //手机号校验
          if (!(this.phoneFilter.test(this.phone))) {
            this.$notify('手机号输入有误 ');
            return false
          }
          //银行卡号
          if (!(new RegExp('^([1-9]{1})(\\d{14}|\\d{18})$').test(this.bankcard))) {
            this.$notify('银行卡输入有误 ');
            return false
          }
          return true
        },
        //  下一步
        next_to () {
          if ( this.disableds()){
            // this.$store.commit('SAVE_USER',{shangName:this.shangName,shangIdCard:this.shangIdCard})
            this.$router.push({name:'FrogetWordTwo'})
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

</style>
