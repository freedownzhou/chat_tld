<template>
  <div class="Pay_box">
    <div class="Pay">
      <div class="Pay_tit">
        <van-nav-bar left-arrow left-text="聊天列表" @click-left="onClickLeft"></van-nav-bar>       
      </div>
      <nav>
        <router-link to=""></router-link> 
        <router-link to=""></router-link> 
      </nav>
      <div class="Pay_con SC_topbox pict">
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      realName:this.$store.state.userInfo.realName,
      phone: "17700560721",
      IDcard:"430523199805677766",
      Bankcard:"6222600260001072444",
      onNUm:1, 
      wxStatus:false, 
      wxImg:null,
      wxNumber:null,
      aipayStatus:null,
      aipayImg:null,
      aipayNumber:null,

      payList:[
          {num:1,name:"银行卡"},
          {num:2,name:"微信"},
          {num:3,name:"支付宝"}
      ]    
    };
  },
  methods: {
    ...mapActions(["SetEncryption"]),
    actionPay(num){
        this.onNUm=num;
    },
    onClickLeft() {
      this.$router.go(-1);
    }, 
    disableds () {        
        if (!(new RegExp('^[\u4e00-\u9fa5]{2,4}$').test(this.realName))) {
            this.$notify('需为中文名');
            return false
        }
        if (!(this.$RegExp.userId(this.IDcard))) {
            this.$notify('身份证填写错误');
            return false
        }
        if (!(/^([1-9]{1})(\d{14}|\d{18})$/).test(this.Bankcard)) {
            this.$notify('银行卡填写错误');
            return false
        }
        if (!(/^1(3|4|5|7|8)\\d{9}$/).test(this.phone)) {
            this.$notify('手机号填写错误');
            return false
        }
        return true
    },
    addBandcard(){
      if(this.disableds()){
        this.$post()
      }
    },
    addImg(num){
      if(num == 1){  //微信
        this.$get("/tldollar/sysUser/uploadWeChatCode",{
            params:{
              userId:this.$store.state.userInfo.userId,
              weChatNo:this.wxNumber,
              weChatCode:this.wxImg
              }
            }).then(
              res=>{
                if(res.code == 0){
                  this.$notify(res.data)
                  this.$post("/tldollar/sysUser/refreshUserInfo",{userId:this.$store.state.userInfo.userId},{urlEncode:"urlEncode"}).then(
                    res=>{
                        if(res.code == 0){
                            this.$store.state.userInfo = res.data;
                            localStorage.setItem("tldm",JSON.stringify(res.data))
                        }
                    })  
                }else{
                  this.$notify(this.msg)
                }
              }
            )
        }else if(num == 2){
          this.$get("/tldollar/sysUser/uploadAliPayCode ",{
            params:{
              userId:this.$store.state.userInfo.userId,
              aliPayNo:this.aipayNumber,
              aliPayCode:this.aipayImg
              }
            }).then(
              res=>{
                if(res.code == 0){
                  this.$notify(res.data)
                  this.$post("/tldollar/sysUser/refreshUserInfo",{userId:this.$store.state.userInfo.userId},{urlEncode:"urlEncode"}).then(
                    res=>{
                        if(res.code == 0){
                            this.$store.state.userInfo = res.data;
                            localStorage.setItem("tldm",JSON.stringify(res.data))
                        }
                    })
                }else{
                  this.$notify(this.msg)
                }
              }
            )
        
        }
    },
    
     
    //判断图片格式
    afterRead(res) {
      let formDate = new FormData()
      formDate.append("file", res.file)
      this.$post("/tldollar/common/ossUploadFile",formDate,{multipart:"multipart"}).then(
        res=>{
          this.wxImg = res.data.url;
          this.wxStatus = !this.wxStatus
        }
      )
    },
    // 微信 添加图片
    beforeRead(file) {
      if (file.type !== 'image/jpeg') {
        this.$notify('请上传 jpg 格式图片');
        return false;
      }
      return true;
    },
    // 支付宝 添加图片
    alipayRead(res) {
      let formDate = new FormData()
      formDate.append("file", res.file)
      this.$post("/tldollar/common/ossUploadFile",formDate,{multipart:"multipart"}).then(
        res=>{
          this.aipayImg = res.data.url;
          this.aipayStatus = !this.aipayStatus
        }
      )
    },
    //微信 支付宝 按钮状态管理
    statusBtn(num){
      if(num == 1){
        this.wxStatus = !this.wxStatus
      }else if(num ==2 ){
        this.aipayStatus = !this.aipayStatus
      }
    }
    
  }
};
</script>
<style lang="scss" scoped>
.on{
    color: #3DA8D7;    
    position: relative;
};
.on:before{
  content: "";
  width: 100%;
  height: 2px;
  background-color:#3DA8D7;
  position: absolute; 
  bottom: -10px;
  left: 0;
}
.Pay_box {
  height: 100%;
  background: url('../../img/public_bg.png');
  background-size: cover;
  position: relative;
  .Pay {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    overflow: hidden;
    .Pay_tit {
      display: inline-flex;
      width: 100%;
      height: 44px;
      align-items: center;
      justify-content: space-between;
      font-size: 17px;
      color: white;
      padding-right: 16px;
      div.van-nav-bar__left {
        width: 100px;
        position: absolute;
        left: 0;
        background: none;
        text-align: left;
        padding-left: 16px;
        z-index: 4;
        span.van-nav-bar__text {
          color: #fff;
          font-size: 14px !important;
        }
        i {
          font-size: 14px;
          color: #fff;
        }
      }
      span {
        display: inline-flex;
        height: inherit;
        align-items: center;
        img {
          width: 24px;
          height: 24px;
          margin-left: 13px;
        }
      }
    }
    
    .Pay_con {
      height: 100%;
      height: calc(100% - 79px);
      position: absolute;
      top: 79px;
      background: #F5F5F5;
      box-sizing: border-box;
      nav{
          height: auto;
          padding: 0 16px 21px 16px;
          width: 100%;
          ol{
              padding: 12px 0;
              text-align: center;
              color: #333;
              font-size: 14px;
              display: flex;
              li{
                  flex: 1;
              }
          }
          
      }
      ul{
            height: calc(100% - 59px);
            width: 100%;
            li{
              height: 100%;
              width: 100%;
              position: relative;
              .InputArea {
                height: auto;
                width: 100%;
                padding: 0 16px;
                background: #fff;
                p {
                  display: flex;
                  justify-content: space-between;
                  border-bottom: 1px solid #F5F5F5;
                  height: 56px;
                  box-sizing: border-box;
                  padding: 18px 0;
                  position: relative;
                  color: #333;
                  font-size: 14px;
                  input {
                    width: 70%;                   
                    border: none;                    
                  }
                  span {
                    font-weight: 550;
                  }                  
                  input::-webkit-input-placeholder {
                    color: #999999;
                    font-size: 12px;
                  }
                } 
              }
              .updBox{
                height: auto;
                width: 100%;
                background: #fff;
                padding: 20px 26px;
                h3{
                  height: auto;
                  width: 100%;
                  i{
                    display: inline-block;
                    height: 20px;
                    width: 20px;
                    background: red;
                    margin-right: 16px;
                    img{
                      height: 100%;
                      width: 100%;
                    }
                  }
                  span{
                    font-size: 12px;
                    color: #333;
                    line-height: 20px;
                  }
                }
                .updBtnbox{
                  padding: 50px 0 30px 0;
                  position: relative;
                  text-align: center;
                  span{
                    display: inline-block;
                    width: 50%;
                    height: 100%;
                    position: relative;
                    img{
                      width: 100%;
                    }
                    .delIco{
                      position: absolute;
                      right: 0;
                      bottom: 1px;
                    }

                  }
                  .van-uploader{
                    height: 98px;
                    width: 98px;
                    background: #F1F1F1;
                    border-radius: 50%;
                    .van-icon{
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%,-50%) !important;                     
                    }
                  }
                }                
              }
              p.pInp{
                  margin-top: 20px;
                  padding: 15px 26px;
                  background: #fff;
                  input{
                    border:none;
                    font-size: 12px;
                  }
                }
              button {
                position: absolute;
                bottom: 47px;
                right: 50%;
                transform: translate(50%);
                font-size: 14px;
                border: none;
                border-radius: 4px;
                background: #3da8d7;
                height: 42px;
                color: #fff;
                width: 343px;
                padding: 0 14px;
              }
            }
          }
    }
  }
}
</style>

