<template>
  <div class="bg_box">
    <p class="text_right pt40"><router-link  class="lg_a" to="/LanguageChange">语言</router-link></p>
    <!--中间部分-->
    <div class="center_box pt20 ">
      <p class="text_center pb30"><img src="../../assets/images/Login/logo.png" width="166px"></p>
      <!--国籍-->
      <p class="input_p"><input type="text" class="long_input" placeholder="请输入国籍"  v-model="nationality"><img class="img_icon" src="../../assets/images/Login/countries.png" width="32px"></p>     
      <!--手机号-->
      <p class="input_p"><input type="number" class="long_input" placeholder="请输入您的手机号" v-model="phone"><img class="img_icon" src="../../assets/images/Login/phone.png" width="32px"></p>
      <!--验证码-->
      <p class="input_p ft0">
        <input type="number" class="short_input" placeholder="请输入验证码"  v-model="captcha">
        <button class="dx_button" @click="getCode" :disabled="disabled">{{ButtonName}}</button>
        <img class="img_icon" src="../../assets/images/Login/suo copy.png" width="32px">
      </p>
      <!-- 密码 -->
      <p class="input_p"><input type="password" class="long_input" placeholder="请输入密码(密码需数字+字母8位以上)" minlength="9" maxlength="16" v-model="pwd"><img class="img_icon" src="../../assets/images/Login/key.png" width="32px"></p>
      <!-- 确认密码 -->
      <p class="input_p"><input type="password" class="long_input" placeholder="请确认密码" minlength="9" maxlength="16" v-model="pwd2"><img class="img_icon" src="../../assets/images/Login/key.png" width="32px"></p>
     <!--协议复选框-->
      <van-checkbox v-model="checked" class="ft12 mb20 mt20">我已阅读并同意<span class="color_tianblue"><a>《用户协议》</a></span></van-checkbox>
           
      <van-button type="primary" @click="next_one(1)"  class="bt_btn_one  mr10">
            个人用户注册
      </van-button>
    </div>    
    <p class="last_p pt15">          
        <router-link to="/Login"  class="float_right pr40">有账号，去登录</router-link>
    </p>
    <van-popup v-model="showStatus"  class="popup">
      <i>
        <img src="../../assets/images/Login/gouzi.png" alt="">
      </i>
      <p>恭喜你注册成功</p>
      <router-link to="/Login"><button class="btnlogin" @click="showPopup">去登录</button></router-link>
    </van-popup>
  </div>
</template>

<script>
import {mapMutations,mapActions} from "vuex";
    export default {
        name: "Registered",
      data (){
        return {
          showStatus:false,
          show : '获取短信验证',
          // 定时器
          timer: null,
          time: 60,
          disabled: false,
          checked:false,
          // 国籍
          nationality:'中国',
          // 手机校验,这里是登录，所以只验证手机号即可
          phoneFilter: new RegExp(`^1(3|4|5|7|8)\\d{9}$`),
          // 要输入的手机号
          phone: '17700560721',
          //验证码
          captcha: '123456',
          pwd:"96641042lyw",
          pwd2:"96641042lyw",
          ButtonName:"获取验证码"
        }
      },
      methods: {
        ...mapActions(['SetEncryption','Base64']),
        showPopup(){
          this.showStatus = !this.showStatus
        },
        // 获取验证码
        getCode () {
          var strPhone = this.$Base64.encode(JSON.stringify({telephoneNum: this.phone}));          
          if (!(this.phoneFilter.test(this.phone))) {
            this.$notify("手机号错误，重新输入");            
          }else{
            if (!this.timer) {
              // 发起请求
              this.$http.post(this.API+"/tldollar/common/getMessageVerCode",this.qs.stringify({str:strPhone}))
                .then(
                  res=>{                    
                    if(res.data.code == 0){
                      this.$notify(res.data.msg);                      
                      // 验证码60秒倒计时
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
                    }else if(res.data.code == 1){
                      this.$notify(res.data.msg);
                    }
                }
              )              
            }              
          }
        },
        // 登录校验
        // 输入校验
        disableds () {
          if(!(this.$RegExp.userName(this.nationality))){
            this.$notify('国籍不能为空(中文)');
            return false
          }
          //手机号校验
          if (!(this.phoneFilter.test(this.phone))) {
            this.$notify('手机号错误');
            return false
          }          
          // 密码校验
          if (!(this.$RegExp.password(this.pwd))) {
            this.$notify('密码需数字+字母9位以上');
            return false
          }
          //2次却密码校验
          if (!(this.pwd === this.pwd2)) {
            this.$notify('2次密码不一致 ');
            return false
          }       
          // 是否勾选协议
          if (this.checked !== true){
            this.$notify('请勾选同意《用户协议》');
            return false
          }
          // 验证码校验
          if (!(this.$RegExp.captcha(this.captcha))) {
            this.$notify('验证码输入有误 ');
            return false
          }
          return true
        },
        //  注册
        next_one(num){
          if(this.disableds()){             
            this.$store.state.PromptStatus = true;
            this.$store.state.PromptValue = "注册中..."
            this.SetEncryption(this.pwd)
            setTimeout(function(){
              let objs={              	
                nationality: this.nationality,
                password: this.$store.state.login.Password,
                phone: this.phone,
                msgCode:this.captcha,
                publicKey:  this.$store.state.login.publicKey,
                sixWordsKey: this.$store.state.login.sixWordsKey,
                utype: num
              }
              console.log(objs)
              this.$http.post(this.API+"/tldollar/sysUser/register",objs,{
                headers:{
                  "Content-Type":"application/JSON"
                }
              })
              .then(
                res=>{ 
                  console.log(res)              
                  if(res.data.code == 0){    
                    this.showStatus = !this.showStatus                
                    this.$store.state.PromptStatus = false
                  }else{
                    this.$store.state.PromptStatus = false
                    this.$notify(res.data.msg);
                  }
              })
            }.bind(this),1000)
          }
        }
      }
    }
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  p{
    margin: 0;
  }
  input::-webkit-input-placeholder {
      /* placeholder颜色  */
      color: #FFFFFF;
      /* placeholder字体大小  */
      font-size: 12px;
      /* placeholder位置  */
      text-align: left;
    }
  button:hover{
    background-color: #0BB2FE;
    color: #FFFFFF;
    cursor: pointer;
  }
  .popup{
    padding: 16px 50px  28px;
    height: 206px;
    width: 225px;
    box-sizing: border-box;
  }
  .popup P{
    font-size: 12px;
    color: #333;
    padding: 10px 0 31px;
    text-align: center;
    margin: auto;
  }
  .popup i{
    display: block;
    height: 64px;
    width: 64px;
    margin: 0 auto;    
  }
  .popup i img{
    height: 100%;
    width: 100%
  }
  .btnlogin{
    border: none;
    background: #0BB2FE;
    font-size: 14px;
    color: #FFF;
    line-height: 38px;
    text-align: center;
    border-radius: 4px;
    height: 38px;
    width: 125px;

  }
  .text_right{margin-bottom: 10px}
</style>
