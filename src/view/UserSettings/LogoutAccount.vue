<template>
  <div class="logouts_box">
    <div class="logouts">
      <div class="logouts_tit">
        <van-nav-bar left-arrow left-text="注销账户" @click-left="onClickLeft"></van-nav-bar>
        <van-icon slot="right">
          <img src="../../assets/images/SecuritySettings/jlu.png" width="24px" />
        </van-icon>
      </div>

      <div class="logouts_con SC_topbox pict">
        <div class="InputArea">
          <p>
            <span>登录密码</span>
            <input type="password" placeholder="请输入登录密码" v-model="pwd" />
          </p>
          <p>
            <span>手机验证码</span>
            <input type="text" placeholder="请输验证码" v-model="verCode" />
            <button @click="getCode">{{ButValue}}</button>
          </p>
        </div>
        <h3>注销后，将放弃以下资产或权益：</h3>
        <ul>
          <li v-for="item in dataArrs">
            <div class="left">
              <img src="../../img/Logout.png" alt />
            </div>
            <div class="right">
              <p>{{item.content}}</p>
              <span>{{item.sub}}</span>
            </div>
          </li>
        </ul>
        <b>
          <van-checkbox v-model="checked" class="ft12 mb40">
            同意
            <span class="color_tianblue">
              <a>《tldollar账户注销协议》</a>
            </span>
          </van-checkbox>
        </b>
        <button class="sub" @click="LogoutAccount">确认注销</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      ButValue: "获取验证码",
      pwd: null,
      verCode: null,
      timer: null,
      time: 60,
      checked: false,
      phoneFilter: new RegExp(`^1(3|4|5|7|8)\\d{9}$`),
      dataArrs: [
        {
          content: "个人身份信息、账户信息、会员权益将被清空且无法恢复。",
          sub: "查看账户信息"
        },
        {
          content:
            "交易记录被删除，请确保所有交易已完结且无纠纷。账户删 除历史交易肯恩产生的资金退回权益等视作自动放弃。",
          sub: "查看账户信息"
        },
        {
          content: "银行卡的快捷支付（含卡通）服务将被自动关闭。",
          sub: "查看账户信息"
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    getCode() {
      // 验证码60秒倒计时

      if (!this.timer) {
        // 发起请求
        this.$http
          .post(
            this.API + "/tldollar/sysUser/sendMessageByUser",
            this.qs.stringify({ userId: this.GetTldm.userId })
          )
          .then(res => {
            if (res.data.code == 0) {
              this.$notify(res.data.msg);
              // 验证码60秒倒计时
              this.timer = setInterval(() => {
                if (this.time > 0 && this.time <= 60) {
                  this.time--;
                  if (this.time !== 0) {
                    this.ButValue = "重新发送(" + this.time + ")";
                  } else {
                    clearInterval(this.timer);
                    this.ButValue = "获取验证码";
                    this.time = 60;
                    this.timer = null;
                    this.disabled = false;
                  }
                }
              }, 1000);
            } else if (res.data.code == 1) {
              this.$notify(res.data.msg);
            }
          });
      }
    },
    LogoutAccount() {
      if (this.checked) {
        if (this.verCode) {
          let objs = {
            password: this.pwd,
            shortMsgCode: this.verCode,
            userId: this.GetTldm.userId
          };
          this.$https
            .post(this.api + "/tldollar/sysUser/loggedOff", objs)
            .then(res => {
              if (res.data.code == 0) {
                this.$notify(res.data.msg);
                this.$router.push({ name: "Login" });
              } else {
                this.$notify(res.data.msg);
              }
            });
        }
      } else {
        this.$notify("未勾选《tldollar账户注销协议》");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.logouts_box {
  height: 100%;
  background: url("../../img/public_bg.png") no-repeat;
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

