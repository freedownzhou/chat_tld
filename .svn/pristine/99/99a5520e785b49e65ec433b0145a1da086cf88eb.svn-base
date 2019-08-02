<template>
    <!-- 我的订单 -->
    <div class="myOrder">
        <div class="myOrder_box">
            <div class="myOrder_header">
                <span>
                    <router-link to=""><img src="../img/icon_jyjl_l.png" alt="" class="img_back" @click="$router.go(-1)"><i>卖出订单</i></router-link>
                </span>
                <span>
                    <img src="../img/icon_buy_ss.png" alt="">
                    <img src="../img/index_jl.png" alt="">
                </span>
            </div>           
            <div class="myOrder_time">
                <p class="myOrder_time_l"><img src="../img/icon_jyjl_time.png" alt=""></p>
                <p class="myOrder_time_r">
                    <span v-for="(item,index) in 2" :key="index" @click="changeT(index)" v-if="index==0">{{startTime}}</span>
                    <span @click="changeT(index)" v-else>{{endTime}}</span>
                </p>
            </div>
            <div class="myOrder_menu">
                <i @click="choiceType(index)" :class="{menu_in:index===typeIn}" v-for="(item,index) in typsArr" :key="index">{{item.title}}</i>
            </div>
        </div>
        <div class="myOrder_list">
            <ul class="order_info">
                <li v-for="(item,index) in orderArr" :key="index">
                    <p class="order_name">
                        <span>
                            <img src="../img/test.png" alt="">
                            <u>{{realName}}</u>
                        </span>
                        <span>{{item.hangSellNo}}</span>
                    </p>
                    <p class="order_state">
                        <span class="number">
                            <i>{{item.virtualCoinAmount}}</i>
                            <i>买入</i>
                        </span>
                        <span class="money">
                            <i>{{item.virtualCoinAmount * price}}</i>
                            <i>金额</i>
                        </span>
                        <span class="state">
                            <i>{{item.status}}</i>
                            <i>状态</i>
                        </span>
                    </p>
                    <p class="order_btn">
                        <span>{{item.createTime}}</span>
                        <button @click="upStatus">取消订单</button>
                    </p>
                </li>
            </ul>
        </div>
        <van-popup v-model="show" position="bottom">
            <van-datetime-picker
            v-model="currentDate"
            :max-date="maxDate"
            type="date"
            @confirm="confirm()"
            @cancel = "cancel()"
            />
        </van-popup> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            price:100,    
            realName:this.GetTldm.realName,
            show: false,
            inTime:0,
            currentDate: new Date(),
            maxDate: new Date(),
            startTime:this.$RegExp.getNowFormatDate(),   //开始时间 默认为当天时间
            endTime:this.$RegExp.getNowFormatDate(),     //结束时间
            typeIn:0,
            typsArr:[
                {title:'全部'},
                {title:'进行中'},
                {title:'已完成'},
                {title:'已取消'},
            ],
            orderArr:null
            //  {img:require('../img/test.png'),orderNum:'36429763273',name:'李狗子',buy:'买入',buyNum:'234731',money:'金额',moneyNum:'113$（¥810.21）',state:'状态',stateT:'支付中',time:'2019-03-08 13:28',btn:'确认收款',types:0},
            //  {img:require('../img/test.png'),orderNum:'36429763273',name:'王二妞',buy:'卖出',buyNum:'234731',money:'金额',moneyNum:'113$（¥810.21）',state:'状态',stateT:'支付中',time:'2019-03-08 13:28',btn:'删除',types:2},
            //  {img:require('../img/test.png'),orderNum:'36429763273',name:'张三疯',buy:'快速卖出',buyNum:'234731',money:'金额',moneyNum:'113$（¥810.21）',state:'状态',stateT:'挂售中',time:'2019-03-08 13:28',btn:'取消订单',types:1},
            //  {img:require('../img/test.png'),orderNum:'36429763273',name:'刘老四',buy:'卖出',buyNum:'234731',money:'金额',moneyNum:'113$（¥810.21）',state:'状态',stateT:'支付中',time:'2019-03-08 13:28',btn:'确认收款',types:0},
        };
    },
    mounted(){
        let fromData = new FormData()
        fromData.append('userId', this.GetTldm.userId)
        this.$https.post(this.api+"/tldollar/hangSellInfo/mySellList",fromData,{
            headers:{'Content-Type':'x-www-form-urlencoded'}
        }).then(
            res=>{
                if(res.data.code == 0){
                    this.orderArr=res.data.data
                    console.log(res.data.data)
                }else{
                    this.$notify(res.msg);
                }
            }
        )
    },
    methods:{
        confirm(){
            if(this.inTime==0){
                this.startTime = this.$RegExp.getNowTime(this.currentDate);
            }else{
                this.endTime = this.$RegExp.getNowTime(this.currentDate);
            }
            this.currentDate=new Date();
            this.show = false;
        },
        changeT(index){
            this.inTime = index;
            if(!this.show){
                this.show = true;
            }else{
                this.show = false;
            }
        },
        cancel(){
            this.show = false;
        },
        choiceType(index){
            this.typeIn = index;
        },
        upStatus(){

        },
        operationBtn(item,index){
             if(item.types===2){
                this.$dialog.confirm({
                title: "提示",
                message: "此操作将永久删除该记录, 是否继续?",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
                }).then(()=> {
                        this.orderArr.splice(index,1);
                        this.$toast.success('删除成功');
                }).catch(() => {
                        this.$toast.fail('取消');
                })
            }
        },
    }
}
</script>

<style lang='scss' scoped>
    .van-popup{
        width: 101%;
    }
    .myOrder{
        .myOrder_box{
            background: url('../img/public_bg.png') no-repeat;
            background-size: cover;
            color: white;
            .myOrder_header{
                display: flex;
                height: 44px;
                padding: 0 16px 0 16px;
                justify-content:space-between;
                span{
                    display: inline-flex;
                    height: inherit;
                    align-items: center;
                }
                span:first-child{
                    a{
                        display: inherit;
                        align-items: center;
                        color: white;
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
            .myOrder_time{
                display: flex;
                height: 32px;
                padding: 20px 42px 10px 16px;
                align-items: center;
                p{
                    display: inline-flex;
                    height: inherit;
                    align-items: center;
                }
                .myOrder_time_l{
                    width: 24px;
                    height: 24px;
                    margin-right: 10px;
                    img{
                        width: inherit;
                        height: inherit;
                    }
                }
                .myOrder_time_r{
                    justify-content: space-between;
                    flex:1;
                    span{
                        position: relative;
                        display: inline-flex;
                        width: 117px;
                        height: inherit;
                        background:rgba(255,255,255,0.35);
                        border-radius: 4px;
                        color: rgba(255,255,255,0.9);
                        font-size: 14px;
                        align-items: center;
                        justify-content: center;
                    }
                    .startTime:after{
                        position: absolute;
                        content: '';
                        width: 33px;
                        height: 2px;
                        background: rgba(255,255,255,0.35);
                        right: -42px;
                    }
                }
            }
            .myOrder_menu{
                display: flex;
                padding: 0 16px 25px 16px;
                justify-content: space-between;
                i{
                    display: inline-flex;
                    height: 17px;
                    font-size: 12px;
                    flex: 1;
                    align-items: center;
                    justify-content: center;
                    color: rgba(255,255,255,0.6)
                }
                .menu_in{
                    position: relative;
                }
                .menu_in:after{
                    position: absolute;
                    content: '';
                    width: 86px;
                    height: 3px;
                    background: #fff;
                    bottom: -10px;
                }
            }
        }
        .myOrder_list{
            .order_info{
                display: flex;
                background: #F2F2F2;
                flex-wrap: wrap;
                li{
                    display:flex;
                    flex-wrap: wrap;
                    padding: 0 16px 0 16px;
                    margin-top: 20px;
                    background: white;
                    p{
                        display: inline-flex;
                        width: 100%;
                        align-items: center;
                    }
                    .order_name{
                        height: 44px;
                        justify-content: space-between;
                        span{
                            display: inherit;
                            align-items: center;
                            font-size: 12px;
                            color: #999;
                            img{
                                width: 28px;
                                height: 28px;
                                margin-right: 10px;
                            }
                            u{
                                color: #333333;
                                font-size: 14px;
                            }
                        }
                    }
                    .order_state{
                        justify-content: space-between;
                        border:1px solid #DDDDDD;
                        box-sizing: border-box;
                        border-right: none;
                        border-left: none;
                        span{
                            display: inherit;
                            flex-wrap: wrap;
                            padding: 23px 0 20px 0;
                            i{
                                width: 100%;
                            }
                            i:first-child{
                                font-size: 16px;
                                line-height: 16px;
                                color: #333;
                                margin-bottom: 7px;
                            }
                            i:last-child{
                                font-size: 12px;
                                line-height: 12px;
                                color: #999;
                            }
                        }
                        .money{
                            i:first-child{
                                color: #3DA8D7;
                            }
                        }
                        .state{
                            width: 60px;
                        }
                    }
                    .order_btn{
                        justify-content: space-between;
                        padding: 10px 0 10px 0;
                        font-size: 12px;
                        span{
                            color:#999999;
                        }
                        button{
                            width: 80px;
                            height: 32px;
                            border: 1px solid #3DA8D7;
                            color: #3DA8D7;
                            background: none;
                            box-sizing: border-box;
                            border-radius: 4px;
                        }
                    }
                }
                li:last-child{
                    margin-bottom: 27px;
                }
            }
        }
    }
</style>
