<template>
    <div class="logouts_box">
        <div class="logouts">
            <div class="logouts_tit">
                 <van-nav-bar
                    left-arrow
                    :left-text="this.Title"
                    @click-left="onClickLeft"                   
                    >
                </van-nav-bar>
            </div>
            <div class="logouts_con">
                <van-tabs v-model="active" animated :color="'#FFF'" background="none" border="none" user-select="none" @click="fn"> 
                    <van-tab title="交易查询">                        
                        <div class="InputClaim">
                            <ul>
                                <li>
                                    <div class="left">终端：</div>
                                    <div class="right"><input type="text" placeholder="请输入8位数终端号"> </div>
                                </li>
                                <li>
                                    <div class="left">交易单号：</div>
                                    <div class="right"><input type="text" placeholder="请输入交易单号"></div>
                                </li>
                                <li>
                                    <div class="left">交易账号：</div>
                                    <div class="right"><input type="text" placeholder="请输入交易帐号"></div>
                                </li>
                                <li>
                                    <div class="left">订单号：</div>
                                    <div class="right"><input type="text" placeholder="请输入订单号"></div>
                                </li>
                                <li>
                                    <div class="left">交易类型：</div>
                                    <div class="right">
                                        <input type="text" placeholder="全部" :value="this.TransactionType" disabled="false">
                                        <i><img src="../../assets/images/Product/arrowDown.png" alt="" @click="VisibleFn"></i>
                                        <transition
                                            enter-active-class="animated fadeInDown"
                                            leave-active-class="animated fadeOutUp"
                                        >
                                            <ol v-show="Visible">
                                                <li @click="VisibleFn">买入</li>
                                                <li @click="VisibleFn">卖出</li>
                                                <li @click="VisibleFn">快速卖出</li>
                                            </ol>
                                        </transition>
                                    </div>
                                </li>
                                <li>
                                    <div class="left">交易状态：</div>
                                    <div class="right">
                                        <input type="text" placeholder="全部" disabled="false">
                                        <i><img src="../../assets/images/Product/arrowDown.png" alt=""></i>
                                    </div>
                                </li>
                            </ul>
                            <router-link to="/TransactionInquirys/OrderList"><button class="btn">查询</button></button></router-link>
                        </div>
                    </van-tab>
                    <van-tab title="交易统计">
                        <div class="TransactionStatistics">
                            <ul>
                                <li v-for="(items,index) in linkArrs" :key="index">
                                    <span><img :src="items.logoImage" alt=""></span>
                                    <input type="text" :placeholder="items.name" disabled="false">
                                    <i><img src="../../assets/images/Product/arrowDown.png" alt=""></i>
                                </li>
                            </ul>
                            <router-link to="/TransactionInquirys/OrderList"><button class="btn">查询</button></button></router-link>
                        </div>
                    </van-tab>
                    <van-tab title="查询结果">
                        <div class="Transaction_time">
                            <p class="Transaction_time_l"><img src="../../img/icon_jyjl_time.png" alt=""></p>
                            <p class="Transaction_time_r">
                                <span v-for="(item,index) in 2" :key="index" @click="changeT(index)" v-if="index==0">{{startTime}}</span>                                
                                <span @click="changeT(index)" v-else>{{endTime}}</span>
                                <i></i>
                            </p>
                        </div>
                        <div class="Transaction_menu">
                            <i @click="choiceType(index)" :class="{menu_in:index===typeIn}" v-for="(item,index) in typsArr" :key="index">{{item.title}}</i>
                        </div>
                        <div class="Transaction_content">
                            <ul class="order_info">
                                <li v-for="(item,index) in orderArr1" :key="index">
                                    <p class="order_name">
                                        <span>
                                            <img :src="item.img" alt="">
                                            <u>{{item.name}}</u>
                                        </span>
                                        <span>{{item.orderNum}}</span>
                                    </p>
                                    <p class="order_state">
                                        <span class="number">
                                            <i>{{item.buyNum}}</i>
                                            <i>{{item.buy}}</i>
                                        </span>
                                        <span class="money">
                                            <i>{{item.moneyNum}}</i>
                                            <i>{{item.money}}</i>
                                        </span>
                                        <span class="state">
                                            <i>{{item.stateT}}</i>
                                            <i>{{item.state}}</i>
                                        </span>
                                    </p>
                                    <p class="order_btn">
                                        <span>{{item.time}}</span>
                                        <button @click="operationBtn(item,index)">{{item.btn}}</button>
                                    </p>
                                </li>
                                <div style="height:104px;width:100%"></div>
                            </ul>
                        </div>
                    </van-tab>
                    
                </van-tabs>
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
           
        </div>
    </div>
</template>
<script>
export default {
    data (){
        return {
            Title:"交易查询",          //标题
            Visible:false,            //交易类型提示
            TransactionType: "全部",  //交易类型
            active: 0,
            inTime:0,            
            typeIn:0,
            show: false,
            currentDate: new Date(),
            maxDate: new Date(),
            startTime:this.$RegExp.getNowFormatDate(),   //开始时间 默认为当天时间
            endTime:this.$RegExp.getNowFormatDate(), 
            activeNames: ['1'], 
            typsArr:[
                {title:'全部'},
                {title:'买入'},
                {title:'卖出'},
                {title:'快速卖出'},
            ],
            orderArr:[
                {img:require('../../img/test.png'),orderNum:'36429763273',name:'李狗子',buy:'买入',buyNum:'234731',money:'金额',moneyNum:'113$（¥810.21）',state:'状态',stateT:'支付中',time:'2019-03-08 13:28',btn:'确认收款',types:0},
                {img:require('../../img/test.png'),orderNum:'36429763273',name:'王二妞',buy:'卖出',buyNum:'234731',money:'金额',moneyNum:'113$（¥810.21）',state:'状态',stateT:'支付中',time:'2019-03-08 13:28',btn:'删除',types:2},
                {img:require('../../img/test.png'),orderNum:'36429763273',name:'张三疯',buy:'快速卖出',buyNum:'234731',money:'金额',moneyNum:'113$（¥810.21）',state:'状态',stateT:'挂售中',time:'2019-03-08 13:28',btn:'取消订单',types:1},
                {img:require('../../img/test.png'),orderNum:'36429763273',name:'刘老四',buy:'卖出',buyNum:'234731',money:'金额',moneyNum:'113$（¥810.21）',state:'状态',stateT:'支付中',time:'2019-03-08 13:28',btn:'确认收款',types:0},
            ],
            linkArrs:[
                {
                    logoImage:require("../../assets/images/Product/TransactionStatistics1.png"),
                    name:"按天计算",
                },
                {
                    logoImage:require("../../assets/images/Product/TransactionStatistics2.png"),
                    name:"2019-03-19",
                },
                {
                    logoImage:require("../../assets/images/Product/TransactionStatistics3.png"),
                    name:"全部",
                }
            ],
            orderArr1:[
                {img:require('../../img/test.png'),orderNum:'36429763273',name:'李狗子',buy:'买入',buyNum:'234731',money:'金额',moneyNum:'113$（¥810.21）',state:'状态',stateT:'支付中',time:'2019-03-08 13:28',btn:'确认收款',types:0},
                {img:require('../../img/test.png'),orderNum:'36429763273',name:'王二妞',buy:'卖出',buyNum:'234731',money:'金额',moneyNum:'113$（¥810.21）',state:'状态',stateT:'支付中',time:'2019-03-08 13:28',btn:'删除',types:2},
                {img:require('../../img/test.png'),orderNum:'36429763273',name:'张三疯',buy:'快速卖出',buyNum:'234731',money:'金额',moneyNum:'113$（¥810.21）',state:'状态',stateT:'挂售中',time:'2019-03-08 13:28',btn:'取消订单',types:1},
                {img:require('../../img/test.png'),orderNum:'36429763273',name:'刘老四',buy:'卖出',buyNum:'234731',money:'金额',moneyNum:'113$（¥810.21）',state:'状态',stateT:'支付中',time:'2019-03-08 13:28',btn:'确认收款',types:0},
            ]

        }
      },
    methods: {
        fn(index,title){
            this.Title=title
        },
        onClickLeft() {            
            this.$router.go(-1);
        },
        onConfirm(value) {
            this.value = value;
            this.showPicker = false;
        },
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
        VisibleFn(e){
            this.Visible = !this.Visible;
            this.TransactionType =  e.target.innerHTML
        }
    }
}
</script>
<style lang="scss" scoped>
    .logouts_box{
        height: 100%;
        background: url('../../img/public_bg.png') no-repeat;
        background-size: cover;
        position: relative;
        
        .logouts{
            display: flex;
            flex-wrap: wrap;
            height: 100%;
            .logouts_tit{
                display: inline-flex;
                width: 100%;
                height: 44px;
                align-items: center;
                justify-content: space-between;
                font-size: 17px;
                color: white;
                padding-right: 16px;
                div.van-nav-bar__left{
                    width: 100px;
                    position: absolute;
                    left: 0;
                    background: none;
                    text-align: left; 
                    padding-left: 16px;
                    z-index: 4;
                    span.van-nav-bar__text{
                        color: #FFF;
                        font-size: 14px !important;
                    }
                    i{                       
                        font-size:14px;
                        color: #FFF;
                    }
                }
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
            
            .logouts_con{
                height: 100%;                
                height: calc(100% - 44px);  
                width: 100%; 
                position: absolute;
                top: 44px;
                box-sizing: border-box; 
                .van-tabs__nav--line{
                    height: 2.4rem;
                    padding-bottom: 0.6rem;
                } 
                .Transaction_time{
                    display: flex;
                    height: 32px;
                    padding: 10px 16px 10px 16px;
                    align-items: center;
                    p{
                        display: inline-flex;
                        height: inherit;
                        align-items: center;
                    }
                    .Transaction_time_l{
                        width: 24px;
                        height: 24px;
                        margin-right: 10px;
                        img{
                            width: inherit;
                            height: inherit;
                        }
                    }
                    .Transaction_time_r{
                        justify-content: space-between;
                        flex:1;
                        position: relative;
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
                        i{
                            border: 1px #DDDD solid;
                            width: 56px;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%,-50%)
                        }
                    }
                }
                .van-tab__pane{
                    height: 578px;
                    overflow: hidden;
                    position: relative;
                }
               
                .Transaction_menu{
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
                        color: rgba(255,255,255,1)
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
                .Transaction_content{
                    // height: auto;
                    height:100%;
                    overflow: auto;
                    overflow-x: hidden;                  
                    background: #FFF;
                    .order_info{
                        display: flex;
                        background: #F2F2F2;
                        flex-wrap: wrap;
                        overflow-y:auto;
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
                .InputClaim{
                    ul{
                        height: auto;
                        padding: 26px 16px 0 16px;
                        >li{
                            margin-bottom:10px;
                            display: flex;
                            justify-content: space-between;
                            div.left{
                                font-size: 14px;
                                color: #FFF;
                                padding: 16px 0;
                            }
                            div.right{ 
                                position: relative;   
                                height: 51px;                           
                                input{
                                    padding: 18.5px 20px;
                                    color: #FFF;
                                    font-size: 12px;
                                    border: none;
                                    background: rgba(255, 255, 255, .35);
                                    border-radius: 4px;
                                    width: 200px;
                                }
                                input::-webkit-input-placeholder {
                                    color: #FFF;    
                                    font-size: 12px;
                                    font-weight: 100                               
                                }
                                i{
                                    display: inline-block;
                                    height: 100%;
                                    width: 24px;
                                    position: absolute;                                  
                                    right:11px;
                                    top: 50%;
                                    transform: translate(0,-50%);
                                    box-sizing: border-box;
                                    padding: 17px 0;
                                    img{
                                        width: 100%;
                                    } 
                                }
                                ol{
                                    height: auto;
                                    z-index: 99999999999;
                                    background: #FFF;
                                    width: 100%;
                                    border-radius: 4px;
                                    li{
                                        padding: 14px 20px;
                                        font-size: 14px;
                                        color: #333;
                                        box-shadow: 0 7px 7px -7px rgba(0, 0, 0, .5)
                                    }
                                }
                            }

                        }
                    }
                }
                .TransactionStatistics{
                    ul{
                        height: auto;
                        padding: 26px 16px 0 16px;
                        >li{
                            margin-bottom:10px;
                            display: flex;
                            justify-content: space-between;
                            width: 100%;
                            box-sizing: border-box;
                            background:rgba(255,255,255,0.35);
                            border-radius:4px;
                            padding: 12px 10px;
                            span{
                                display: inline-block;
                                height: 24px;
                                width: 24px;
                                img{
                                    height: 100%;
                                    vertical-align: middle
                                }
                            }
                            input{
                                background: none;
                                border: none;
                                font-size: 12px;
                                color: #FFF;
                                width: 240px;

                            }
                            input::-webkit-input-placeholder {
                                color: #FFF;    
                                font-size: 12px;
                                font-weight: 100                               
                            }
                            i{
                                display: inline-block;
                                height: 24px;
                                width: 24px;
                                position: relative;
                                img{
                                    height: 50%;
                                    position: absolute;
                                    top: 50%;
                                    transform: translate(0,-50%)
                                }
                            }
                        }
                    }
                }
                button.btn{
                    position: absolute;
                    bottom: 19px;
                    left: 50%;
                    transform: translate(-50%);
                    background:#fff;
                    height: 48px;
                    width: 343px;
                    text-align: center;
                    border: none;
                    color: #666;
                    border-radius:4px;
                }
                
            }            
        }
    }
</style>

