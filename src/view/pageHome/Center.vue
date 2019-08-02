
<template>
    <div  class="centers_box">
        <div class="centers">
            <div class="centers_tit">
                <span>{{this.$store.state.utype ==1 ? "个人中心" : "商户中心"}}</span>
                <span>
                    <img src="../../img/icon_buy_ss.png" alt="">
                    <img src="../../img/index_jl.png" alt="">
                </span>
            </div>
            <div class="my_info">
                <p class="my_pic"><img src="../../img/center_test.png" alt=""></p>
                <p class="my_name">王大锤</p>
                <p class="my_phone">17283937435</p>
                <div class="my_money">
                    <div v-show="!wallet" class="HaveNot" @click="Delete">
                        <i>
                            <img src="../../img/wallet.png" alt="">
                        </i>
                        <span>创建钱包</span>
                    </div>
                    <div v-show="wallet" class="Have">
                        <span class="my_money_bzj">
                            <i><u>$</u>3469</i>
                            <i>保证金</i>
                        </span>
                        <span class="my_money_zzc">
                            <i><u>$</u>247289</i>
                            <i>总资产</i>
                        </span> 
                    </div>
                </div>
            </div>
            <div class="my_set">
                <ul>
                    <li v-for="(item,index) in linksArr" :key="index" v-if='item.types===1'>
                        <router-link :to='item.links'>
                            {{item.title}}
                            <i>
                                <img src="../../img/center_jt.png" alt="">
                            </i>
                        </router-link>
                    </li>
                </ul>
            </div> 
        </div>
        <div v-show="AlipayStatus" class="Alipays">
            <p>创建钱包<i @click="Delete"><van-icon name="cross" /></i></p>
            <p><span>输入支付密码:</span><input type="password" placeholder="输入你的支付密码" v-model="payPassword"></p>
            <p><span>确认支付密码:</span><input type="password" placeholder="确认你的支付密码" v-model="payPassword1"></p>
            <button @click="CreateWallet">确认支付</button>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
    data(){
        return{
            wallet:JSON.parse(localStorage.getItem("tldm")).wallet,            //创建钱包前后状态
            AlipayStatus:false,      //钱包确认密码的信息状态
            payPassword:null,        //支付密码
            payPassword1:null,
            linksArr:[
                {links:'/Statement',title:'对帐单',types:1},
                {links:'/view/UserSettings/UserSetting',title:'用户设置',types:1},
                {links:'SecuritySettings/SecurityCenter',title:'安全设置',types:1},
                {links:'/DockingSet',title:'对接设置',types:1},
                {links:'/NotificationSetting',title:'通知设置',types:1},
                {links:'PersonalCenter/CustomerService',title:'客服',types:1},
                {links:'/PersonalCenter/AboutUs',title:'关于我们',types:1},
                {links:'/OrderList',title:'订单',types:0},
                {links:'/CardBag',title:'银行卡',types:0},
                {links:'SecuritySettings/SecurityCenter',title:'安全设置',types:0},
                {links:'/PersonalCenter/SafetySettingReception',title:'账户保障',types:0},
                {links:'PersonalCenter/CustomerService',title:'客服',types:0},
                {links:'/PersonalCenter/AboutUs',title:'关于我们',types:0},
            ]
        }
    },
    mounted(){
        // console.log(JSON.parse(localStorage.getItem("tldm")))
        // if(this.$store.getters.getUser.wallet == true && this.wallet == false){
        //     this.$https.get(this.api+"/tldollar/sysUser/queryChainCodeUserBalance/"+this.$store.state.userId1).then(
        //         res=>{
        //             console.log(res)
        //         }
        //     )
        // }
         
    },
    methods:{
        ...mapActions(["SetEncryption"]),
        CreateWallet(){            
            this.$store.state.PromptStatus = true;
            this.$store.state.PromptValue = "创建钱包中..."
            if((/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/).test(this.payPassword)){               
                if(this.payPassword1 == this.payPassword){
                    this.SetEncryption(this.payPassword)
                    setTimeout(function(){
                        let objs={
                            payPassword: this.$store.state.login.Password,
                            publicKey: this.$store.state.login.publicKey,
                            sixWordsKey:this.$store.state.login.sixWordsKey,
                            userId: JSON.parse(localStorage.getItem("tldm")).userId
                        }
                        this.$https.post(this.api+"/tldollar/sysUser/createWallet",objs).then(
                            res=>{                                                                 
                                if(res.data.code == 0){
                                    this.$store.state.PromptStatus = false;
                                    this.$notify(res.data.msg);
                                    let tldm = JSON.parse(localStorage.getItem("tldm"))                                 
                                    tldm.wallet = true ;
                                    localStorage.setItem("tldm",JSON.stringify(tldm))
                                    this.AlipayStatus = !this.AlipayStatus
                                    this.wallet = JSON.parse(localStorage.getItem("tldm")).wallet;
                                }else{
                                    this.$store.state.PromptStatus = false;
                                    this.$notify(res.data.msg)
                                }
                            }
                        )
                    }.bind(this),1000)
                }else{
                    this.$notify('两次密码不同');
                }
            }else{
                this.$notify('密码需包含数字字母');
            }
        },
        Delete(){
            this.AlipayStatus = !this.AlipayStatus
        }
    }
}
</script>

<style lang='scss' scoped>
    .centers_box{
        height: 100%;
        background: url('../../img/public_bg.png') no-repeat;
        background-size: 100% 100%; 
        position: relative;
        .Alipays{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-60%);
            padding:20px;
            background: rgba(0, 0, 0, .7);
            color: #333;
            border-radius: 4px;
            color: #fff;
            margin: 0 auto;
            p{
                font-size: 14px;
                padding-bottom: 8px;
                text-align: center;
                font-size: 17px;
                i{
                    display: inline-block;
                    float: right;                    
                }
                input{
                    border: none;
                    border-radius: 4px;
                    padding: 10px;
                    color: #333;
                    font-size: 14px;
                }
                span{
                    display: inline-block;
                    width: 100%;
                    font-size: 14px;
                    text-align: left !important;
                    margin-bottom: 3px;
                }                
            }
            button{
                margin-top: 10px;
                border: none;
                background: #3DA8D7;
                width: 100%;
                padding: 8px 0;
                border-radius: 4px;
                font-size: 14px;
            }
        }
        .centers{
            display: flex;
            padding: 0 16px 0 16px;
            flex-wrap: wrap;
             .centers_tit{
                display: inline-flex;
                width: 100%;
                height: 44px;
                align-items: center;
                justify-content: space-between;
                font-size: 17px;
                color: white;
                margin-bottom: 50px;
                span{
                    display: inline-flex;
                    height: inherit;
                    align-items: center;
                    img{
                        width: 24px;
                        height: 24px;
                        margin-left: 13px;
                    }
                }
            }
            .my_info{
                display: flex;
                position: relative;
                width: 100%;
                height: 150px;
                background: url('../../img/center_bg.png') no-repeat;
                background-size: 100% 100%;
                border-radius: 4px;
                box-shadow:0px 4px 4px 2px rgba(0,0,0,0.5);
                flex-wrap: wrap;
                align-content: flex-start;
                justify-content: center;
                margin-bottom: 10px;
                .my_pic{
                    position: absolute;
                    top: -35px;
                    display: inline-flex;
                    width: 70px;
                    height: 70px;
                    align-items: center;
                    justify-content: center;
                    img{
                        width: 64px;
                        height: 64px;
                        border-radius: 50%;
                    }
                }
                .my_name{
                    width: 100%;
                    margin: 50px 0 10px 0;
                    text-align: center;
                    font-size: 14px;
                    color: #171B34;
                }
                .my_phone{
                    font-size: 12px;
                    color: #999;
                    margin-bottom: 8px;
                }
                .my_money{
                    width: 100%;
                    height: auto;                    
                    div.HaveNot{
                        padding-top: 5px;
                        width:100%;
                        height: auto;
                        text-align: center;
                        i{
                            display: inline-block;
                            height: 24px;
                            width: 24px;
                            vertical-align: middle;
                            img{
                                height: 100%;
                                width: 100%
                            }
                        }
                        span{
                            // padding-left: 9px;
                            color: #3DA8D7;
                            font-size: 12px;
                        }
                    }
                    div.Have{     
                        width: 100%;
                        height: auto;
                        display: flex;
                        justify-content: center;                 
                        span{
                            position: relative;
                            display: inline-flex;
                            flex: 1;
                            justify-content: center;
                            flex-wrap: wrap;
                        i{
                            display: inherit;
                            width: 100%;
                            justify-content: center;
                        }
                        i:first-child{
                            color: #333;
                            font-size: 20px;
                            height: 20px;
                            line-height: 20px;
                            u{
                                font-size: 12px;
                                line-height: 24px;
                                margin-right: 2px;
                            }
                        }
                        i:last-child{
                            color: #999;
                            font-size: 12px;
                            line-height: 12px;
                            margin-top: 10px;
                        }
                    }
                    span:first-child:after{
                        position: absolute;
                        width: 1px;
                        height: 42px;
                        content: '';
                        background: #DDDDDD;
                        right: 0;
                        
                    }
                    }
                    
                }
            }
            .my_set{
                width: 100%;
                background: white;
                border-radius: 4px;
                ul{
                    display: flex;
                    flex-wrap: wrap;
                    padding: 0 10px 0 10px;
                    li{
                        position: relative;
                        display: flex;
                        width: 100%;
                        padding-left:10px;
                        height: 50px;
                        border-bottom: 1px solid #E5E5E5;
                        box-sizing: border-box; 
                        align-items: center;
                        a{
                            width: 100%;
                            height: 100%;
                            line-height: 50px;
                            font-size: 14px;
                            color: #333333;
                            i{
                                position: absolute;
                                right: 0;
                                top: 50%;
                                transform: translate(0,-70%);
                                display: inline-block;
                                width: 12px;
                                height: 24px;
                                img{
                                    width: 100%;
                                }
                            }
                        }
                    }                    
                    li:last-child{
                        border: none;
                    }
                }
            }
        }
    }
</style>
