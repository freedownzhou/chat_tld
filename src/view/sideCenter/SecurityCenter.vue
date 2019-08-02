<template>
  <div class="SC_topbox pict">
    <van-nav-bar
      left-arrow
      left-text="安全设置"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon slot="right" >
        <img src="../../assets/images/SecuritySettings/jlu.png" width="24px">
      </van-icon>
    </van-nav-bar>
    <van-cell title="支付密码" is-link to="SecuritySettings/ChangeWord" />
    <van-cell title="安全保护问题" is-link to="SecuritySettings/SettingBartender" />
    <van-cell title="账户安全检查" is-link to="/SecuritySettingsSecurityCheck" />
    <van-cell title="安全中心" is-link to="/SecuritySettings/SecurityCenterIntroduce" />
    <van-cell title="设备锁" >
      <van-switch v-model="checked" />
    </van-cell>
  </div>
</template>
<script>
    export default {
        name: "SecurityCenter",
      data (){
        return {
          checked:true
        }
      },
      methods: {
        onClickLeft() {
         this.$router.go(-1)
        },
        onClickRight() {
          console.log('按钮');
        }
      }
    }
</script>

<style scoped>

</style>
