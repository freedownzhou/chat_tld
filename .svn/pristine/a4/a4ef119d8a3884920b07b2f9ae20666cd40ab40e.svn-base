<template>
  <div class="SC_topbox">
    <van-nav-bar
      left-arrow
      left-text="安全中心"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon slot="right" >
        <img src="../../assets/images/SecuritySettings/jlu.png" width="24px">
      </van-icon>
    </van-nav-bar>
    <!--    内容-->
    <div class="security_center FW_one">
<!--4盒子-->
      <div class="four_box" v-for="(item,index) in neirong" :key="index">
        <div class="text_center mt0 mb10">
          <img src="../../assets/images/SecuritySettings/qianbao.png" width="67px" />
          <p class="text_center mt5 small_title">{{item.title}}</p>
        </div>
        <dl>
          <li v-for="itemes in neirong[index].text">{{itemes}}</li>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SafetySettingReception",
      data (){
        return {
          neirong:[
            {src: require('../../assets/images/SecuritySettings/qianbao.png'), title: '冷热钱包', text: [ '冷热钱包分离，定期转移珠子资产 ','自动化快速转出无需人工审核，保证平台资产安全']},
            {src: require('../../assets/images/SecuritySettings/dun.png'), title: '风控系统',text: [ '严格的风格系统，所有资产流转支持回溯','资产异常报警及时发现风险事件','冷热钱包分离、多重签名验证，不再担心资产被盗']},
            {src: require('../../assets/images/SecuritySettings/san.png'), title: '高安全性', text: [ '资产流转智能监控异常报警，提现阻断 ','高级用户信息验证机制，三重防护，保证信息安全','日常安全，运维体系']},
            {src: require('../../assets/images/SecuritySettings/xitong.png'), title: '撮合系统', text: [ '混合式撮合引擎，每秒可撮合1万笔','基于高频并发交易设计，稳定支持大数据量、高并发，保证 高性能运转']},
          ],
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
.four_box{
  width: 100%;
  height: 210px;
  background:rgba(23,27,52,1);
  box-shadow:0px 4px 4px -4px rgba(0,0,0,0.5);
  border-radius:4px;
  margin-top: 10px;
  box-sizing: border-box;
  padding: 30px 8px 0px 8px;
}
  .small_title{
    font-size:17px;
    font-family:PingFangSC-Semibold;
    font-weight:500;
    color:rgba(255,255,255,1);
  }
dl li {
  list-style-type: disc;
  font-size: 12px;
  color: #FFFFFF;
  line-height:17px;
}
.SC_topbox{
  overflow: auto;
}
</style>
