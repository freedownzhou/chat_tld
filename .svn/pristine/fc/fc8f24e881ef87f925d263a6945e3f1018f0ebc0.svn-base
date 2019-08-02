<template>
  <div class="logouts_box">
    <div class="logouts">
      <div class="logouts_tit">
        <van-nav-bar left-arrow left-text="生成钱包" @click-left="onClickLeft"></van-nav-bar>       
      </div>
      <div class="logouts_con SC_topbox pict">
        <div class="InputArea">
          <p>
            <span>交易昵称</span>
            <input type="text" placeholder="请输入交易昵称" v-model="nickName" />
          </p>
          <p>
            <span>支付密码</span>
            <input type="password" placeholder="请输入支付密码" v-model="pwd" />
          </p>
          <p>
            <span>确认密码</span>
            <input type="password" placeholder="请确认支付密码" v-model="pwdconfirm" />
          </p>          
        </div>       
        <button class="sub" @click="cwBtn">创建钱包</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      nickName:"wsup56",
      pwd: "96641042lyw",
      pwdconfirm:"96641042lyw",      
    };
  },
  methods: {
    ...mapActions(["SetEncryption"]),
    onClickLeft() {
       this.$router.push({name:'Index'});
    }, 
    disableds () {
        
        if (!(/^[a-zA-Z][a-zA-Z0-9]{4,15}$/).test(this.nickName)) {
            this.$notify('交易昵称需为字母开头的5-16位字母数字集合');
            return false
        }
        if (!(this.$RegExp.password(this.pwd))) {
            this.$notify('密码需为9-21位数字字母集合');
            return false
        }
        if (this.pwd !== this.pwdconfirm) {
            this.$notify('密码需为9-21位数字字母集合');
            return false
        }
        return true
    },   
    cwBtn() {
      if (this.disableds()) {
        this.SetEncryption(this.pwd)
        this.$store.state.PromptStatus = true;
        this.$store.state.PromptValue = "创建钱包中..."
        setTimeout(function(){
            let objs={
                "nickName": this.nickName,
                "publicKey": this.$store.state.login.publicKey,
                "sixWordsKey":this.$store.state.login.sixWordsKey,
                "transferPassword": this.$store.state.login.Password,
                "userId": this.$store.state.userInfo.userId
            }
            console.log(objs)
            this.$post("/tldollar/sysUser/completeTransInfo",objs).then(
                res=>{                    
                    if(res.code == 0){                        
                        this.$post("/tldollar/sysUser/refreshUserInfo",{userId:this.$store.state.userInfo.userId},{urlEncode:"urlEncode"}).then(
                        res=>{
                            if(res.code == 0){
                                this.$toast({
                                  message:"创建钱包成功",
                                  duration:1000,
                                });
                                this.$store.state.PromptStatus = false;
                                this.$store.state.userInfo = res.data;
                                localStorage.setItem("tldm",JSON.stringify(res.data))
                                setTimeout(function(){
                                  this.$router.push({name:'Index'})
                                }.bind(this),1000)
                            }
                        }
                      )                 
                    }
                }
            )
        }.bind(this),1000)
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.logouts_box {
  height: 100%;
  background:#171B34;
  background-size: cover;
  position: relative;
  .logouts {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    overflow: hidden;
    .logouts_tit {
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
    .InputArea {
      height: auto;
      width: 100%;
      p {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        height: 56px;
        box-sizing: border-box;
        padding: 18px 0;
        position: relative;
        input {
          width: 70%;
          color: #333;
          border: none;
          font-size: 14px;
        }
        span {
          font-size: 14px;
          color: #333;
        }
        button {
          position: absolute;
          top: 7px;
          right: 0;
          font-size: 14px;
          border: none;
          border-radius: 4px;
          background: #3da8d7;
          height: 42px;
          color: #fff;
          padding: 0 14px;
        }
        input::-webkit-input-placeholder {
          color: #999999;
          font-size: 12px;
        }
      }
    }
    .logouts_con {
      height: 100%;
      height: calc(100% - 44px);
      position: absolute;
      top: 44px;
      background: #fff;
      padding: 0 16px;
      box-sizing: border-box;
      h3 {
        padding-top: 20px;
        color: #333333;
        font-weight: normal;
        font-size: 16px;
      }
      ul {
        padding-bottom: 43px;
        li {
          padding-top: 22px;
          .left {
            display: inline-block;
            width: 26px;
            float: left;
            line-height: 1.2rem;
          }
          .right {
            display: inline-block;
            font-size: 12px;
            color: #999999;
            line-height: 1.2rem;
            width: 315px;
            p {
              padding-bottom: 10px;
            }
            span {
              color: #3da8d7;
            }
          }
        }
      }
      b {
        color: #666666;
        font-size: 14px;
        font-weight: normal;
        span {
          color: #3da8d7;
        }
        i {
          display: inline-block;
          height: 20px;
          width: 20px;
          img {
            height: 100%;
            vertical-align: middle;
          }
        }
      }
      > button {
        position: absolute;
        bottom: 19px;
        left: 50%;
        transform: translate(-50%);
        background: rgba(61, 168, 215, 1);
        height: 48px;
        width: 343px;
        text-align: center;
        border: none;
        color: #fff;
        border-radius: 4px;
      }
    }
  }
}
</style>

