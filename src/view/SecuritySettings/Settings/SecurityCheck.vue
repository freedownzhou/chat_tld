<template>
  <div class="SC_topbox">
    <van-nav-bar
      left-arrow
      left-text="账户安全检查"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon slot="right" >
        <img src="../../../assets/images/SecuritySettings/jlu.png" width="24px">
      </van-icon>
    </van-nav-bar>
    <p>账户安全检查</p>
  </div>
</template>

<script>
    export default {
        name: "SecurityCheck",
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

</style>
