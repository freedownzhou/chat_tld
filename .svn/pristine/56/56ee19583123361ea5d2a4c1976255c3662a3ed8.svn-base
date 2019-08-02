<template>
  <div class="bg_box">
    <p class="text_right pt40"><router-link  class="lg_a" to="login/LanguageChange">语言</router-link></p>
    <!--中间部分-->
    <div class="center_box pt70">
      <!--手机号-->
      <p class="pb20 input_p"><input type="number" class="long_input" placeholder="请输入您的手机号" v-model="phone" ><img class="img_icon" src="../../assets/images/Login/phone.png" width="32px"></p>
      <!--验证码-->
      <p class="pb20 input_p ft0 ">
        <input type="number" class="short_input" placeholder="请输入验证码"  v-model="code" >
        <button class="dx_button" @click="getCode" :disabled="disabled">{{ButtonName}}</button>
        <img class="img_icon" src="../../assets/images/Login/suo.png" width="32px">
      </p>      
      <!--新密码-->
      <p class="input_p pb20"><input type="password" class="long_input" placeholder="请输入新密码"  v-model="pwd1" ><img class="img_icon" src="../../assets/images/Login/key.png" width="32px"></p>
      <!--确认新密码-->
      <p class="input_p pb20"><input type="password" class="long_input" placeholder="重新输入新密码"  v-model="pwd2" ><img class="img_icon" src="../../assets/images/Login/key.png" width="32px"></p>
      <!--协议复选框-->
      <van-checkbox v-model="checked" class="ft12 mb40">我已阅读并同意<span class="color_tianblue"><a>《用户协议》</a></span></van-checkbox>
      <button class="bt_btn_one mr10" @click="modifyBtn">确认更改</button>
      <p class="last_p pt30 pb100">
        <router-link to="/Login" class="float_right">去登录</router-link>
      </p>
    </div>
  </div>
</template>

<script>
    import {mapActions} from 'vuex'  
    export default {
      name: "ForgotPassword",
      data (){
        return {
          // 手机校验,这里是登录，所以只验证手机号即可
          phoneFilter: new RegExp(`^1(3|4|5|7|8)\\d{9}$`),
          // 要输入的手机号
          phone: '',
          //验证码
          captcha: '',
          //密码
          psw:'',          
          psw_two:'',
          ButtonName : '获取短信验证',
          // 参数
          phone:null,
          code:null,
          pwd:null,
          pwd1:null,
          pwd2:null,
           // 定时器
          timer: null,
          time: 60,
          disabled: false,
          checked:false
        }
      },

      methods: {   
        getCode () {        
         if (!(this.phoneFilter.test(this.phone))) {
            this.$notify("手机号错误，重新输入");            
          }else{
            if (!this.timer) {
              this.$http.post(this.API+"/tldollar/common/getMessageVerCode",this.qs.stringify({telephoneNum:this.phone}))
                .then(
                  res=>{                    
                    if(res.data.code == 0){
                      this.$notify(res.data.msg);
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
        disableds () {
          //手机号校验
          if (!(new RegExp('^[\u4E00-\u9FA5A-Za-z0-9_]+$').test(this.phone))) {
            this.$notify('账户名输入有误 ');
            return false
          }          
          // 密码校验
          if (!(this.$RegExp.password(this.pwd1))) {
            this.$notify('密码需为10位数字及字母集合 ');
            return false
          }
          //2次却密码校验
          if (!(this.pwd1 === this.pwd2)) {
            this.$notify('2次密码不一致 ');
            return false
          }
          //同意协议校验
          if (this.checked !== true){
            this.$notify('请勾选同意《用户协议》 ');
            return false
          }
          return true
        },
        modifyBtn(){
          if(this.disableds()){   
            this.$store.state.PromptStatus = true;
            this.$store.state.PromptValue = "修改登录密码中..."                      
            this.$https.get("http://192.168.2.119:8084/tldollar/common/getSixRandomKeyWords").then(//获取六键码
                res=>{                   
                    this.$https.post("http://192.168.2.119:8084/tldollar/common/getPublicKey").then(//获取公钥
                      obj=>{ 
                        console.log(res.data.data.sixWord)
                        let encrypt = new JSEncrypt();
                        let _publicKeys=obj.data.data                 
                        encrypt.setPublicKey(_publicKeys) 
                        let datas={
                            messageCode: this.code,
                            newPassword: encrypt.encrypt(this.pwd1 + _sixWords),
                            oldPassword: encrypt.encrypt(this.pwd + _sixWords),
                            publicKey: _publicKeys,
                            sixWordsKey: res.data.data.sixWordsKey,
                            telephone: this.phone
                        }                         
                        this.$https.post(this.api+"/tldollar/sysUser/changePassword",datas).then(
                          Arrs=>{
                            if(Arrs.data.code == 0){
                              this.$store.state.PromptValue = "修改成功" 
                              this.$store.state.PromptStatus = false;
                              this.$router.push({name:'Login'})
                            }
                          }
                        )
                      }
                    )   
                }
              )
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
  .pb20{
    padding-bottom:20px !important;
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
  .text_right{margin-bottom: 10px}
</style>
