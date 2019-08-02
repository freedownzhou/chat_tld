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
          v-model="zf_password"
          label="新的支付密码"
          placeholder="请输入6位数字支付密码"
          :error-message="error_zf_password"
        />
        <!--      持卡人证件号码-->
        <van-field
          v-model="zf_password_true"
          label="确认支付密码"
          placeholder="请输入6位数字支付密码"
          :error-message="error_zf_password_true"
        />
      </van-cell-group>
      <van-button type="primary" size="large" class="mt60" @click="xiugai_suc">确认更改</van-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "RememberWordTwo",
      data (){
        return {
          zf_password:"",
          zf_password_true:"",
          //错误显示
          error_zf_password:"",
          error_zf_password_true:""
        }
      },
      methods: {
        // 输入校验
        disableds () {
          //支付密码
          if (!(new RegExp('^\\d{6}$').test(this.zf_password))) {
            this.$notify('支付密码格式错误 ');
            return false
          }
          if (!(this.zf_password === this.zf_password_true)) {
            this.$notify('2次支付密码不一致 ');
            return false
          }
          return true
        },
        //  修改成功跳转
        xiugai_suc(){
          if ( this.disableds()){
            this.$toast('修改成功');
            this.$router.push({ name: 'SecurityCenter' })
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
