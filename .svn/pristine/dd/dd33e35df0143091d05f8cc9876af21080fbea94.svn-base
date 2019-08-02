<template>
    <!-- 付款方式 -->
    <div class="paying">
        <div class="paying_tit">
            <span><a><img src="../img/icon_jyjl_l.png" alt="" @click="$router.go(-1)"> 买入</a></span>
            <span>
                <img src="../img/icon_buy_ss.png" alt="">
                <img src="../img/index_jl.png" alt="">
            </span>
        </div>
        <div class="paying_box">
            <div class="paying_info">
                <p class="title">付款方式</p>
                <ul>
                    <li>
                        <i>
                            <img src="../img/icon_wxfk.png" alt="">
                            <u>微信付款</u>
                        </i>
                        <i>
                            <img src="../img/center_jt.png" alt="">
                        </i>
                    </li>
                    <li @click="alipay">
                        <i>
                            <img src="../img/icon_zhbfk.png" alt="">
                            <u>支付宝付款</u>
                        </i>
                        <i>
                            <img src="../img/center_jt.png" alt="">
                        </i>
                    </li>
                    <li>
                        <i>
                            <img src="../img/icon_yhkfk.png" alt="">
                            <u>银行卡</u>
                        </i>
                        <i>
                            <img src="../img/center_jt.png" alt="">
                        </i>
                    </li>
                    <li>
                        <i>
                            <img src="../img/icon_myfk.png" alt="">
                            <u>美元账号</u>
                        </i>
                        <i>
                            <img src="../img/center_jt.png" alt="">
                        </i>
                    </li>
                </ul>
            </div>
        </div>
        <div class="pay_btn">
            <button>取消订单</button>
            <button @click="OrderList">我的订单</button>
        </div>
        <!-- <div class="payPrompt">
            <form name="punchout_form" method="post" action="https://openapi.alipaydev.com/gateway.do?charset=utf-8&method=alipay.trade.page.pay&sign=iHqwGzIlqc54BzP1MlwDQsGtJF1fduwfVzo7lb%2FoD%2B0FIjVFTTGl7IE8izgjurraLjJEcmk%2FlxnqG6AbVP3mDCIm6bjvOOKbbK2WAGd6a3jDX3JkM14jCFxl9uo2arrwN8O9orHCK32WFnK45rj6AdGbBQ73UrBYSOCLwpvZ2k9AJtOz9B%2Bq%2FN6zQUi1lQiwb4Es1Tt4wIzQq0u%2FbjIB2CZHJaJIlvDbDVtgYRcHTHPrdJDX%2B1oJ8rQIwW84UswL794JYbDbnEm5eCd029ljU4CVjs8uYbA8OS9HuFoeb8ZlT%2FG%2BER4ZcQZ%2FQ8776s60Bx23HTrFIN8gf6%2BMusctYQ%3D%3D&return_url=http%3A%2F%2Flocalhost%3A8084%2Ftldollar%2ForderInfo%2FalipayReturnNotice&notify_url=http%3A%2F%2Flocalhost%3A8084%2Ftldollar%2ForderInfo%2FalipayNotifyNotice&version=1.0&app_id=2016092900622180&sign_type=RSA2&timestamp=2019-07-08+16%3A30%3A11&alipay_sdk=alipay-sdk-java-dynamicVersionNo&format=json">
                <input type="hidden" name="biz_content" value="{&quot;out_trade_no&quot;:&quot;402882f76bbaf7cd016bbaf7cd1d0001&quot;,&quot;total_amount&quot;:&quot;100.00&quot;,&quot;subject&quot;:&quot;买入tld&quot;,&quot;body&quot;:&quot;购买的tld数量:1.000000&quot;,&quot;timeout_express&quot;:&quot;15m&quot;,&quot;product_code&quot;:&quot;FAST_INSTANT_TRADE_PAY&quot;}">
                <input type="submit" value="立即支付" style="display:none" >
            </form>
            <script>document.forms[0].submit();</script>
        </div> -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                OrderId:null
            }
        },
        mounted(){
            this.OrderId = this.$route.params.OrderId
        },
        methods:{
            alipay(){
                this.$https.get(this.api+"/tldollar/orderInfo/goPay",{params:{orderId:this.OrderId}})
            },
            OrderList(){
                this.$router.push({name:'OrderList'})
            }
        }
    }
</script>

<style lang='scss' scoped>
  .paying{
        height: 100%;
        background: url('../img/public_bg.png') no-repeat;
        background-size: 100% 100%; 
        overflow: hidden;
        .payPrompt{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(0,0,0,0.7);
            form{
                height: 100px;
                width: 100%;
            }
        }
        .paying_tit{
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
                        width: 14px;
                        height: 24px;
                        margin-right: 10px;
                    }
                }
            }
            span:last-child{
                img{
                    width: 24px;
                    height: 24px;
                    margin-left: 13px;
                }
            }
        }
        .paying_box{            
            height: 100%;
            box-sizing: border-box;
            padding: 15px 26px 0 26px;
            background: #F2F2F2;
            
            .paying_info{
                display: flex;
                padding: 0 10px 0 10px;
                box-sizing: border-box;
                width: 100%;                
                align-content: flex-start;
                flex-wrap: wrap;
                background: white;
                box-shadow:0px 4px 4px -4px rgba(0,0,0,0.5);
                border-radius:4px;
                height: auto;
                .title{
                    width: 100%;
                    margin: 15px 0 10px 0;
                    font-size: 14px;
                    line-height: 14px;
                    color: #333333;
                }
                ul{
                    display: flex;
                    width: 100%;
                    flex-wrap: wrap;
                    li{
                        display: inline-flex;
                        width: 100%;
                        height: 48px;
                        align-items: center;
                        justify-content: space-between;
                        i{
                            display: inline-flex;
                        }
                        i:first-child{
                            img{
                                width: 24px;
                                height: 24px;
                                margin-right: 10px;
                            }
                            u{
                                font-size: 14px;
                                color: #333;
                                line-height: 24px;
                            }
                        }
                        i:last-child{
                            img{
                                width: 12px;
                                height: 24px;
                            }
                        }
                    }
                }
            }
        }
        .pay_btn{
            position: fixed;
            display: flex;
            width: 100%;
            height: 56px;
            bottom: 0;
            background: white;
            align-items: center;
            justify-content: flex-end;
            button{
                width: 130px;
                height: 40px;
                border-radius: 4px;
                background: none;
                border: none;
                color: #3DA8D7;
                font-size: 14px;
                box-sizing: border-box;
                border: 1px solid #3DA8D7;
            }
            button:last-child{
                margin: 0 15px 0 10px;
            }
        }
    }   
</style>
