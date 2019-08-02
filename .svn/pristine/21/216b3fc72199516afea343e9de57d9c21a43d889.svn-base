<template>
      <div class="bg_box">
        <p class="text_right pt40"><router-link  class="lg_a" to="login/LanguageChange">语言</router-link></p>
        <!--中间部分-->
        <div class="center_box">
          <!--昵称-->
          <p class="input_p"><input type="text" class="long_input" placeholder="请输入您的账户名"  v-model="userName"><img class="img_icon" src="../../../assets/images/Login/phone_one.png" width="32px"></p>
          <!--姓名-->
          <p class="input_p"><input type="text" class="long_input" placeholder="请输入您的真实姓名" v-model="TrueName"><img class="img_icon" src="../../../assets/images/Login/user.png" width="32px"></p>
          <!--身份证-->
          <p class="input_p"><input type="text" class="long_input" placeholder="请输入您的身份证/护照号码" v-model="credentialsNo"><img class="img_icon" src="../../../assets/images/Login/user_id.png" width="32px"></p>
          <!--密码-->
          <p class="input_p"><input type="password" class="long_input" placeholder="请输入密码" v-model="Password"><img class="img_icon" src="../../../assets/images/Login/key.png" width="32px"></p>
          <!--确认密码-->
          <p class="input_p"><input type="password" class="long_input" placeholder="请再次输入密码" v-model="confirmPassword"><img class="img_icon" src="../../../assets/images/Login/key.png" width="32px"></p>
          <!--协议复选框-->
          <van-checkbox v-model="checked" class="ft12 mb40">我已阅读并同意<span class="color_tianblue"><a>《用户协议》</a></span></van-checkbox>
          <button class="bt_btn mr10" @click="next_one">个人用户注册</button>
          <button class="bt_btn" @click="next_shanghu">商户注册</button>
          <p class="last_p pt30">
            <a class="float_right" href="#Login">去登录</a>
          </p>
        </div>
      </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "RegisteredTwo",
      data (){
          return {
            checked: false,
            //昵称
            userName:'',
            //真实姓名
            TrueName:'爱心社',
            //证件号码
            credentialsNo:'430523199805067777',
            //密码
            Password:'96641042lyw',
            //确认密码
            confirmPassword:'96641042lyw'
          }
      },
      created(){
        if(!(this.$store.state.login.nationality && this.$store.state.login.phone)){
          this.$router.push({name:'Registered'})
        }
      },
      methods:{
        ...mapActions(['SetEncryption']),
        //登录校验
        // 输入校验
        disableds () {
          //手机号校验
          if (!(/^[a-zA-Z][a-zA-Z0-9]{4,15}$/).test(this.userName)) {
            this.$notify('账户名输入有误 ');
            return false
          }
          //真实姓名校验
          if (!(new RegExp('^[\u4e00-\u9fa5]{2,4}$').test(this.TrueName))) {
            this.$notify('真实姓名输入有误 ');
            return false
          }
          //身份证校验
          if (!(this.$RegExp.userId(this.credentialsNo))) {
            this.$notify('身份证输入有误 ');
            return false
          }
          // 密码校验
          if (!(this.$RegExp.password(this.Password))) {
            this.$notify('密码输入有误 ');
            return false
          }
          //2次却密码校验
          if (!(this.Password === this.confirmPassword)) {
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
        //  下一步 个人注册
        next_one(){
          if ( this.disableds()){        
            this.SetEncryption(this.Password).then(res=>{
              console.log(111)
              setTimeout(function(){
                this.$store.state.PromptStatus = true;
                this.$store.state.PromptValue = "注册中..."
                let objs = {
                  accountName: this.userName,
                  credentialsNo: this.credentialsNo,
                  credentialsType: 1,  // 1-身份证 2-护照
                  nationality: this.$store.state.login.nationality,
                  password: this.$store.state.login.Password,
                  phone: this.$store.state.login.phone,
                  publicKey: this.$store.state.login.publicKey,
                  realName: this.TrueName,
                  sixWordsKey: this.$store.state.login.sixWordsKey,
                  utype: 1                 
                }               
                this.$https.post(this.API+"/tldollar/sysUser/register",objs).then(
                  res=>{ 
                    console.log(res)                  
                    if(res.data.code == 0){
                      let Arrs = res.data.data;
                      this.$store.state.PromptStatus = false
                      Arrs.status = 0                      
                      this.$router.push({name:'BusinessLicense'})
                    }else if(res.data.code == 1 ){                                            
                      this.$store.state.PromptStatus = false
                      this.$notify(res.data.msg)                      
                    }                    
                  }
                ).catch(res=>{
                  this.$store.state.PromptStatus = false
                  this.$notify("登录失败") 
                })
              }.bind(this),300)
            })            
          }
        },
        //下一步商户注册
        next_shanghu(){
          
        },
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
  .text_right{margin-bottom: 10px}
</style>
