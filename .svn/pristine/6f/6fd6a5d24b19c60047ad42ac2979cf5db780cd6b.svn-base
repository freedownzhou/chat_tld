<template>
    <!-- 买入推荐 -->
    <div class="guide">
        <div class="guide_tit">
            <span><a><img src="../img/icon_jyjl_l.png" alt=""  @click="$router.go(-1)">买入推荐</a></span>
            <span>
                <img src="../img/icon_buy_ss.png" alt="">
                <img src="../img/index_jl.png" alt="">
            </span>
        </div>
        <div class="guide_list">
            <ul>
                <li v-for="(items,ind) in dataArrs" :key="ind">
                    <p class="seller_name">
                        <span class="seller">
                            <img src="../img/center_test.png" alt="">
                            <i>{{items.accountName}}</i>
                        </span>
                        <!-- <router-link :to="{path:'/OrderPayment', params:{id:items.orderId}}"> -->
                        <span class="buyBtn" @click="goDetails(items.hangSellInfoId,items.accountName,items.tldNum,items.unitPrice)">购买</span>
                    </p>
                    <p class="seller_order">
                        <span class="time">
                            <i>（30日成单 | 30日完成率）</i>
                            <i>（327 | {{items.ratio}}）</i>
                        </span>
                        <span class="money">
                            <img src="../img/sellGuide_zc.png" alt="">
                            <i>{{items.unitPrice}}$</i>
                        </span>
                    </p>
                    <p class="seller_hl">
                        <span>
                            <img src="../img/sellGuide_dj.png" alt="">
                            <i>{{items.tldNum}} $ (￥{{items.rmb}})</i>
                        </span>
                        <span>
                            <img src="../img/sellGuide_xe.png" alt="">
                            <i>{{500}}-{{9000}}$</i>
                        </span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        data(){
            return{
                dataArrs:null,
                id:1,
                name:"cq",
                num:1,
                price:100, 
            }
        },
        mounted(){
            this.$https.post(this.api+"/tldollar/hangSellInfo/list",{userId:this.GetTldm.userId}).then(
                res=>{
                    if(res.data.code == 0){
                        this.dataArrs=res.data.data.list
                        console.log(this.dataArrs)
                    }else{
                        this.$notify(res.data.msg);
                    }
                }
            )
        },
        methods:{
            ...mapActions(['OrderEncryption']),
            goDetails(Id,Name,Num,Price){
                console.log(Id,Name,Num,Price)
                this.OrderEncryption({
                    buyerId: this.GetTldm.userId,
                    hangSellInfoId:Id,
                    tldNum:Num
                }).then(obj=>{
                    this.$https.post(this.api+"/tldollar/orderInfo/create",obj).then(
                        res=>{   
                            console.log(res)                     
                            if(res.data.code == 0){
                                this.id = Id;
                                this.name = Name;
                                this.num = Num;
                                this.price = Price;
                                this.$router.push({
                                    name: 'OrderPayment',
                                    params: {
                                        id:Id,
                                        name:Name,
                                        num:Num,
                                        price:Price,
                                        time:res.data.data.time
                                    }
                                })
                            }else{
                                this.$notify(res.data.msg);
                            }
                        }
                    ) 
                })
                               
            }
        }
    }
</script>



<style lang='scss' scoped>
  .guide{
        background: url('../img/public_bg.png') no-repeat;
        background-size: 100% 100%; 
        overflow: hidden;
        height: 100%;
        width: 100%;
        .guide_tit{
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
                img{
                    width: 24px;
                    height: 24px;
                    margin-left: 13px;
                }
            }
            span:first-child{
                a{
                    display: inherit;
                    align-items: center;
                    img{
                        width: 12px;
                        height: 24px;
                        margin: 0 10px 0 0;
                    }
                }
            }
        }
        .guide_list{
            position: absolute;
            left: 0;
            right: 0;
            top: 44px;
            bottom: 0;
            padding: 0 16px 0 16px;
            background: #F9F9F9;
            ul{
                display: flex;
                width: 100%;
                height: calc(100%-44px);
                flex-wrap: wrap;
                padding-top: 17px;
                align-content: flex-start;
                padding-bottom: 23px;
                li{
                    display: flex;
                    width: 100%;
                    height: 150px;
                    background: white;
                    box-shadow:0px 7px 7px -7px rgba(0,0,0,0.5);
                    border-radius: 4px;
                    margin-bottom: 17px;
                    flex-wrap: wrap;
                    align-content: flex-start;
                    .seller_name{
                        display: inline-flex;
                        width: 100%;
                        position: relative;
                        margin-bottom: 15px;
                        padding: 5px 0px 5px 10px;
                        flex: 1;
                        span{
                            display: inherit;
                            width: 100%;
                        }
                        .seller{
                            position: relative;
                            align-items: center;
                            flex: 1;
                            img{
                                width: 42px;
                                height: 42px;
                            }
                            i{
                                font-size: 16px;
                                margin-left: 14px;
                            }
                        }
                        // a{
                        //     display: inline-block;
                        //     text-align: center;
                        //     .buyBtn{
                        //         width: 76px;
                        //         height: 32px;
                        //         margin-top: 10px;
                        //         justify-content: center;
                        //         line-height: 32px;
                        //         align-items: center;
                        //         font-size: 12px;
                        //         background:linear-gradient(135deg,rgba(61,69,111,1) 0%,rgba(23,27,52,1) 100%);
                        //         border-radius:100px 0px 0px 100px;
                        //         color: white;
                        //     }
                        // }
                        .buyBtn{
                            width: 76px;
                            height: 32px;
                            margin-top: 10px;
                            justify-content: center;
                            line-height: 32px;
                            align-items: center;
                            font-size: 12px;
                            background:linear-gradient(135deg,rgba(61,69,111,1) 0%,rgba(23,27,52,1) 100%);
                            border-radius:100px 0px 0px 100px;
                            color: white;
                        }
                        
                    }
                    .seller_order{
                        width: 100%;
                        display: inline-flex;
                        padding: 0 5px; 
                        margin-bottom: 6px;
                        span{
                            display: inherit;
                            flex: 1;
                        }
                        .time{
                            flex-wrap: wrap;
                            align-content: center;
                            i{
                                font-size: 12px;
                                line-height: 16px;
                                color: #999999;
                            }
                            i:first-child{
                                margin-top: 3px;
                            }
                            i:last-child{
                                color: #666666;
                            }
                        }
                        .money{
                            align-items: flex-start;
                            img{
                                width: 24px;
                                height: 24px;
                                margin-right: 10px;
                            }
                            i{
                                line-height: 24px;
                                font-size: 14px;
                                color: #666666;
                            }
                        }
                    }
                    .seller_hl{
                        display: inline-flex;
                        padding: 0 5px; 
                        width: 100%;
                        justify-content: space-between;
                        span{
                            display: inherit;
                            align-items: center;
                            font-size: 14px;
                            color: #666666;
                            flex: 1;
                            img{
                                width: 24px;
                                height: 24px;
                                margin-right: 5px;
                            }
                        }
                    }
                }
                li:last-child{
                    margin-bottom: 0;
                }
            }
        }
    }   
</style>
