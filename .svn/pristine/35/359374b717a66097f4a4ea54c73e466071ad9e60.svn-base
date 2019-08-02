<template>
    <!-- 注销账户 -->
    <div class="reset_box" ref="pageH">
        <div class="reset_box_tit" ref="titH">
            <span><a><img src="../img/icon_jyjl_l.png" alt="">注销账户</a></span>
            <span>
                <img src="../img/index_jl.png" alt="">
            </span>
        </div>
        <div class="reset_list" :style="{height:resetHeight+'px'}">
            <p class="titles">注销后，将放弃以下资产或权益：</p>
            <ul>
                <li>
                    <span><van-checkbox v-model="checked1"></van-checkbox></span>
                    <span>
                        <u>个人身份信息、账户信息、会员权益将被清空且无法恢复。</u>
                        <router-link to="">查看账户信息</router-link>
                    </span>
                </li>
                <li>
                    <span><van-checkbox v-model="checked2"></van-checkbox></span>
                    <span>
                        <u>交易记录被删除，请确保所有交易已完结且无纠纷。账户删除历史交易肯恩产生的资金退回权益等视作自动放弃。</u>
                        <router-link to="">查看账户信息</router-link>
                    </span>
                </li>
                <li>
                    <span><van-checkbox v-model="checked3"></van-checkbox></span>
                    <span>
                        <u>银行卡的快捷支付（含卡通）服务将被自动关闭。</u>
                        <router-link to="">查看账户信息</router-link>
                    </span>
                </li>
                <li>
                    <p>                        
                        你绑定的手机号为：
                        <span>{{phone}} </span>                       
                    </p>
                    <p>                        
                        <b>登录密码：</b><input type="password"  placeholder="请输入密码">                       
                    </p>
                     <p>
                         <b>验证码:</b>
                        <input type="number"  placeholder="请输入验证码" >
                        <button class="dx_button" @click="getCode" :disabled="disabled">{{this.ButtonName}}</button>
                    </p>
                </li>
                <li>
                    <span><van-checkbox v-model="checked4"></van-checkbox></span>
                    <span>
                        <u>同意</u>
                        <router-link to="">《tldollar账户注销协议》</router-link>
                    </span>
                </li>
            </ul>
            <p class="sure">
                <button @click="LogoutUser">确认注销</button>
            </p>
        </div>
    </div>  
</template>

<script>
export default {
    data(){
        return{
            phone:17700560721,
            ButtonName:"获取验证码",
            disabled:false,
            timer: null,
            time: 60,
            phoneFilter: new RegExp(`^1(3|4|5|7|8)\\d{9}$`),
            resetHeight:0,
            checked1: false,
            checked2: false,
            checked3: false,
            checked4: false,
        }
    },
    mounted(){
        this.resetHeight = this.$refs.pageH.clientHeight-this.$refs.titH.clientHeight;
    },
    methods:{
        getCode () {
            



          if (!(this.phoneFilter.test(this.phone))) {
            this.$notify("手机号错误，重新输入");            
          }else{
            if (!this.timer) {
              // 发起请求
              this.$http.post(this.API+"common/getMessageVerCode",this.qs.stringify({telephoneNum:this.phone}))
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
        LogoutUser(){
            if(this.checked1 && this.checked2 && this.checked3 && this.checked4){
                let objs={
                    "shortMsgCode": "123456",
                    "userId": this.phone
                }
                this.$https.post(this.API+"sysUser/loggedOff",objs).then(
                    res=>{
                        if(res.data.code == 0){
                            this.$notify(res.data.msg);
                            setTimeout(function(){
                                this.$router.push({name:'Login'})
                            }.bind(this),1000)
                        }
                    }
                )
            }
        }
    }
    
}
</script>

<style lang='scss'>
    .reset_box{
        height: 100%;
        background: url('../img/public_bg.png') no-repeat;
        background-size: 100% 100%; 
        .reset_box_tit{
            display: flex;
            height: 44px;
            padding: 0 16px 0 16px;
            align-items: center;
            justify-content: space-between;
            font-size: 17px;
            color: white;
            span{
                display: inline-flex;
                height: inherit;
                align-items: center;
            }
            span:first-child{
                a{
                    display: inherit;
                    align-items: center;
                    img{
                        width: 12px;
                        height: 24px;
                        margin-right: 10px;
                    }
                }
            }
            span:last-child{
                img{
                    width: 24px;
                    height: 24px;
                }
            }
        }
        .reset_list{
            display: flex;
            padding: 0 16px 0 16px;
            background: white;
            flex-wrap: wrap;
            align-content: flex-start;
            position: relative;
            .titles{
                width: 100%;
                line-height: 22px;
                font-size: 16px;
                color: #333;
                margin: 20px 0 20px 0;
            }
            ul{
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                li{
                    display: inline-flex;
                    font-size: 12px;
                    color: #999;
                    margin-bottom: 17px;
                    span{
                        display: inline-flex;
                        flex-wrap: wrap;
                        align-content: flex-start;
                    }
                    span:first-child{
                        margin-right: 13px;
                        .van-checkbox__icon, .van-checkbox__label{
                            line-height: 12px;
                        }
                        .van-checkbox__icon,.van-icon{
                            width: 12px;
                            height: 12px;
                        }
                        .van-icon-success:before{
                        }
                    }
                    span:last-child{
                        u{
                            margin-bottom: 10px;
                        }
                        a{
                            color: #3DA8D7;                           
                        }
                    }
                }                
                li:last-child{
                    font-size: 14px;
                    color: #666;
                }
                li:nth-child(4){
                    display: inline-block;
                    width: 100%;
                    margin-bottom: 5px;
                    p{
                        margin-bottom: 10px;
                        font-size: 18px;
                        color: #333;                       
                        span{
                            color: #999;
                            font-size: 12px
                        }                        
                    }
                    p:nth-child(2){
                        b{
                            display: inline-block;
                            width: 80px; 
                            height: 48px;
                            line-height: 48px;
                            color: #333;
                            font-weight: 500;  
                            font-size: 15px;                                                     
                        }
                        input{
                            display: inline-block;
                            height: 48px;
                            width:calc(100% - 80px);
                            padding: 0 10px;
                            line-height: 48px;
                            box-sizing: border-box;
                            font-size: 13px;
                            border: none;
                            border: #3DA8D7 solid 1px;
                            padding: none;
                            border-radius: 4px;
                        }
                    }
                     p:nth-child(3){
                         position: relative;
                        b{
                            display: inline-block;
                            width: 75px; 
                            height: 48px;
                            line-height: 48px;
                            color: #333;
                            font-weight: 500;  
                            font-size: 15px;                                                     
                        }
                        input{
                            display: inline-block;
                            height: 48px;
                            width:calc(100% - 80px);
                            padding: 0 10px;
                            line-height: 48px;
                            box-sizing: border-box;
                            font-size: 13px;
                            border: none;
                            border: #3DA8D7 solid 1px;
                            padding: none;
                            border-radius: 4px;
                        }
                        button{
                            position: absolute;
                            right: 0;
                            top: 0;
                            background: #3DA8D7;
                        }
                     }
                }
            }
            .sure{
                display: flex;
                width: 100%;
                justify-content: center;
                button{
                    position: absolute;
                    bottom: 20px;
                    width: 345px;
                    height: 50px;
                    color: white;
                    font-size: 14px;
                    background: none;
                    border-radius:4px;
                    background: #3DA8D7;
                    border:none;
                }
            }
        }
    }
</style>
