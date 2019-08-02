<template>
  <div class="SC_topbox">
    <van-nav-bar
      left-arrow
      left-text="安全中心"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon slot="right" >
        <img src="../../../assets/images/SecuritySettings/jlu.png" width="24px">
      </van-icon>
    </van-nav-bar>
<!--    内容-->
    <div class="securitys_center" v-for="(item,index) in neirong" :key="index">
      <div class="border_box">
      <p style="text-align: center"><img :src=item.src width="67px"/></p>
      <span class="title">{{item.title}}</span>
    <p class="mb0  mt15">{{item.text}}</p>
    </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SecurityCenterIntroduce",
      data (){
        return {
          checked:true,
          neirong:[
            {src: require('../../../assets/images/SecuritySettings/suo.png'), title: '安全可信', text: 'tldollar具备传统金融级别的业务、技术和监管能力，自身不存放任何用户资产，主要实现加密资产的现货、合约、大宗场外交易等交易业务，避免了“账务不准、虚增资产、无资产杠杆、定向爆仓、品台被盗”等各种让交易放担心的问题。'},
            {src: require('../../../assets/images/SecuritySettings/cheng.png'), title: '托管清算', text: 'tldollar的底层将由tldollar去中心化资产托管清算技术支撑，它以区块链技术和社区共识为基础，综合运用密码学和区块链技术，在技术层面拥有去中心化的协会制治理能力，有效解决了中心化数字资产管理平台面临的安全和信任难题。'},
            {src: require('../../../assets/images/SecuritySettings/anquan.png'), title: '多种衍生品', text: '除了币币交易和法币交易以外，tldoolar还将在全球合法地区开展法币交易业务，并陆续推出期权、永续合约扽创新型金融衍生品，以满足不同用户的投资需求。'}
          ]
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
  .SC_topbox{
    height: auto!important;
  }
  /*中间部分*/
  .securitys_center{
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 20px 24px;
    text-align: center;
  }
  .securitys_center p{
    word-wrap:break-word;
    text-align: left;
    font-size:12px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(153,153,153,1);
  }
  .securitys_center .title{
    font-size:17px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(51,51,51,1);
  }
  .border_box{
    box-shadow:0px 4px 4px -4px rgba(0,0,0,0.5);
    padding-bottom: 15px;
  }
</style>
