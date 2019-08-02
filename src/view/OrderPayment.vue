<template>
    <!-- 订单详情 -->
    <div class="payment">
        <div class="payment_tit">
            <span><a><img src="../img/icon_jyjl_l.png" alt="" @click="$router.go(-1)"> 买入</a></span>
            <span>
                <img src="../img/icon_buy_ss.png" alt="">
                <img src="../img/index_jl.png" alt="">
            </span>
        </div>
        <div class="payment_box">
            <div class="payment_info">
                <p class="orderNum">
                    订单号：{{OrderID}}
                </p>
                <p class="order_form">
                    您向<span>{{Seller}}</span>购买<span>{{Quantity}}</span>tldollar
                </p>
                <p class="amoney">
                    <img src="../img/sellGuide_dj.png" alt="">
                    <i>{{Price}} $ / tldollar</i>
                </p>    
                <p class="all_money">
                    <span>
                        <i>{{Price*Quantity}}</i>
                        <u>$</u>
                    </span>
                    <span>
                        <img src="../img/call.png" alt="">
                    </span>
                </p>
            </div>

            <div class="payment_pay" v-show='status == 1 ?true:false'>
                <p class="ckNum">
                    <i>付款参考号</i>
                    <i>34739</i>
                </p>
                <p class="pay_time">待支付，请于
                    <b>{{Time}}</b>
                    之前向<span>{{Seller}}</span>支付</p>
                <p class="pay_money">{{Price*Quantity}} $</p>
                <p class="pay_bzj"><img src="../img/icon_bzj.png" alt="">对方已缴纳10tldollar保证金</p>
            </div>

            <div class="payment_pay" v-show='status == 2 ?true:false'>
                <p class="ckNum">
                    <i>付款参考号</i>
                    <i>34739</i>
                </p>
                <p class="pay_time">已支付，待名字确认后并放币，您将收到</p>
                <p class="pay_money">{{347593.88}} $</p>
                <p class="pay_bzj pay_fb">对方正在放币
                    <van-loading type="spinner" color="#666666" size="14" />
                </p>
            </div>

            <div class="payment_pay" v-show="status == 3 ?true:false">
                <p class="ckNum">
                    <i>付款参考号</i>
                    <i>34739</i>
                </p>
                <p class="cgimg">
                  <img src="../img/icon_gmcg.png" alt="">  
                </p>
                <p class="ckzc">
                    <router-link to=''>查看资产</router-link>
                </p>
            </div>

        </div>
        <div class="pay_btn">
            <button>取消订单</button>
            <button @click="goPay()">去支付</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                OrderID:null,
                Seller:null,
                Quantity:null,
                Price:null,
                Time:null,
                status:1,
                //倒计时
                day:null,
                hour:null,
                minute:null,

            }
        },
        mounted(){
            this.OrderID=this.$route.params.id
            this.Seller = this.$route.params.name
            this.Quantity = this.$route.params.num
            this.Price = this.$route.params.price
            this.Time = this.$route.params.time  
            var endTime = Date.parse(this.Time)   
            let timer = setInterval(res=>{
                let starttime = Date.parse(new Date());
                var usedTime = endTime - starttime; 
                if(usedTime>0){
                    console.log(usedTime)
                    this.day = Math.floor(usedTime/86400);    
                    this.hour = Math.floor(usedTime%86400/3600);    
                    this.minute = Math.floor(usedTime%86400%3600/60) 
                    window.clearInterval(timer)
                }
            },1000)
                   
            var endTime = Date.parse(this.Time)
            let starttime = Date.parse(new Date());
            var usedTime = endTime - starttime; 
            var day = Math.floor(usedTime/86400);    
            var hour = Math.floor(usedTime%86400/3600);    
            var minute = Math.floor(usedTime%86400%3600/60)          
            
            console.log(day)
            console.log(hour)
            console.log(minute)
        },
        methods:{
            goPay(){
                this.$router.push({
                    name: 'Paying',
                    params:{
                        OrderId : this.OrderID
                    }
                })
            }
        }
    }
</script>

<style lang='scss' scoped>
  .payment{
        height: 100%;
        background: url('../img/public_bg.png') no-repeat;
        background-size: 100% 100%; 
        overflow: hidden;
        .payment_tit{
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
                    margin-left: 13px;
                }
            }
        }
        .payment_box{
            display: flex;
            height: 100%;
            padding: 15px 26px 0 26px;
            background: #F2F2F2;
            align-content: flex-start;
            flex-wrap: wrap;
            .payment_info{
                display: flex;
                padding: 0 10px 0 10px;
                width: 100%;
                height: 168px;
                align-content: flex-start;
                flex-wrap: wrap;
                background: white;
                box-shadow:0px 4px 4px -4px rgba(0,0,0,0.5);
                border-radius:4px;
                margin-bottom: 10px;
                .orderNum{
                    display: inline-flex;
                    width: 100%;
                    height: 42px;
                    box-shadow:0px 1px 0px 0px rgba(0,0,0,0.2);
                    font-size: 12px;
                    align-items: center;
                    color: #999999;
                }
                .order_form{
                    width: 100%;
                    font-size: 14px;
                    color: #333;
                    line-height: 20px;
                    margin: 10px 0 10px 0;
                    span{
                        padding: 0 4px;
                        color: #3DA8D7;
                        font-size: 18px;
                    }
                }
                .amoney{
                    display: inline-flex;
                    width: 100%;
                    height: 24px;
                    margin-bottom: 5px;
                    img{
                        width: 24px;
                        height: 24px;
                        margin-right: 10px;
                    }
                    i{
                        display: inherit;
                        height: inherit;
                        align-items: center;
                        font-size: 12px;
                        color: #999;
                    }
                }
                .all_money{
                    display: inline-flex;
                    width: 100%;
                    height: 42px;
                    align-items: center;
                    justify-content: space-between;
                    span{
                        display: inline-flex;
                    }
                    span:first-child{
                        font-size: 36px;
                        color: #449522;
                        align-items: flex-end;
                        i{
                            height: 36px;
                        }
                        u{
                            font-size: 12px;
                            margin-left: 10px;
                        }
                    }
                    span:last-child{
                        img{
                            width: 24px;
                            height: 24px;
                        }
                    }
                }
            }
            .payment_pay{
                display: flex;
                padding: 0 10px 0 10px;
                width: 100%;
                // height: 147px;
                align-content: flex-start;
                flex-wrap: wrap;
                background: white;
                box-shadow:0px 4px 4px -4px rgba(0,0,0,0.5);
                border-radius:4px;
                .ckNum{
                    display: inline-flex;
                    margin-top: 15px;
                    width: 100%;
                    height: 24px;
                    align-items: center;
                    justify-content: flex-start;
                    font-size: 14px;
                    color: #333;
                    margin-bottom: 20px;
                    i{
                        display: inline-flex;
                        height: 24px;
                        align-items: center;
                    }
                    i:last-child{
                        border: 1px solid #DDDDDD;
                        box-sizing: border-box;
                        border-radius: 4px;
                        padding: 0 10px 0 10px;
                        margin-left: 20px;
                    }
                }
                .pay_time{
                    font-size: 14px;
                    color: #333;
                    line-height: 20px;
                    margin-bottom: 10px;
                    b{
                        padding: 0 6px;
                        color: #3DA8D7;
                        font-size: 15px;
                        
                    }
                    span{
                       padding: 0 4px;
                        color: #3DA8D7;
                        font-size: 15px;
                        font-weight: 600 
                    }
                }
                .pay_money{
                    width: 100%;
                    font-size: 14px;
                    line-height: 14px;
                    color: #449522;
                    margin-bottom: 12px;
                }
                .pay_bzj{
                    display: inline-flex;
                    height: 24px;
                    align-items: center;
                    font-size: 12px;
                    color: #999;
                    margin-bottom: 14px;
                    img{
                        width: 24px;
                        height: 24px;
                        margin-right: 12px;
                    }
                }
                .pay_fb{
                    display: inline-flex;
                    width: 150px;
                    height: 40px;
                    margin-bottom: 18px;
                    background:#DDDDDD;
                    box-shadow:0px 4px 4px -4px rgba(0,0,0,0.5);
                    border-radius:4px;
                    justify-content: center;
                    border: 1px solid #C0C0C0;
                    box-sizing: border-box;
                    .van-loading{
                        margin-left: 10px;
                        width: 16px;
                        height: 16px;
                    }
                }
                .cgimg{
                    width: 100%;
                    height: 50px;
                    margin-bottom: 18px;
                    img{
                        width: 50px;
                        height: inherit;
                    }
                }
                .ckzc{
                    line-height: 14px;
                    color: #3DA8D7;
                    font-size: 14px;
                    margin-bottom: 36px;
                    a{
                        color: inherit
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
                background: #3DA8D7;
                border: none;
                color: #FFFFFF;
                font-size: 14px;
                box-sizing: border-box;
            }
            button:first-child{
                color: #3DA8D7;
                background: none;
                border: 1px solid #3DA8D7;
            }
            button:last-child{
                margin: 0 15px 0 10px;
            }
        }
    }   
</style>
