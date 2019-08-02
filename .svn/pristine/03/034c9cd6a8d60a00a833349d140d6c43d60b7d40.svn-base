<template>
  <div class="SC_topbox">
    <van-nav-bar
      left-arrow
      left-text="常见问题"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon slot="right" >
        <img src="../../assets/images/SecuritySettings/jlu.png" width="24px">
      </van-icon>
    </van-nav-bar>
    <!--    内容-->
    <van-tabs v-model="active" :swipe-threshold="lie" animated>
      <van-tab title="产品公告">
        <div class="security_center">
          <p v-for="(item,index) in Content[0].one" :key="index">{{item.text}}</p>
        </div>
      </van-tab>
      <van-tab title="注册登录"><div class="security_center"><p v-for="(item,index) in Content[1].two" :key="index">{{item.text}}</p></div></van-tab>
      <van-tab title="账户资产"><div class="security_center"><p v-for="(item,index) in Content[2].three" :key="index">{{item.text}}</p></div></van-tab>
      <van-tab title="付款方式"><div class="security_center"><p v-for="(item,index) in Content[3].four" :key="index">{{item.text}}</p></div></van-tab>
      <van-tab title="交易记录"><div class="security_center"><p v-for="(item,index) in Content[4].five" :key="index">{{item.text}}</p></div></van-tab>
    </van-tabs>
  </div>
</template>

<script>
    export default {
        name: "CommonProblems",
      data (){
        return {
          lie:5,
          PayPassword:"",
          //错误显示
          error_PayPassword:"",
          active: 0,
          Content:[
            {one:[{text:"手机【大额交易】服务调整公告"},{text:"汇率业务服务升级公告"},{text:"手机【大额交易】服务跳针公告"},{text:"汇率业务服务升级公告"}]},
            {two:[{text:"手机【大额交易】服务调整公告"},{text:"汇率业务服务升级公告"},{text:"手机【大额交易】服务跳针公告"},{text:"汇率业务服务升级公告"}]},
            {three:[{text:"手机【大额交易】服务调整公告"},{text:"汇率业务服务升级公告"},{text:"手机【大额交易】服务跳针公告"},{text:"汇率业务服务升级公告"}]},
            {four:[{text:"手机【大额交易】服务调整公告"},{text:"汇率业务服务升级公告"},{text:"手机【大额交易】服务跳针公告"},{text:"汇率业务服务升级公告"}]},
            {five:[{text:"手机【大额交易】服务调整公告"},{text:"汇率业务服务升级公告"},{text:"手机【大额交易】服务跳针公告"},{text:"汇率业务服务升级公告"}]}
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
      },
      mounted() {
          console.log(this.Content)
      }
    }
</script>

<style scoped>
  .security_center p{
    line-height: 56px;
    font-size:14px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
    margin: 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }


</style>
