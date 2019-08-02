<template>
    <!-- 交易记录 -->
    <div class="Record">
        <div class="Record_box">
            <div class="Record_header">
                <span>
                    <router-link to=""><img src="../img/icon_jyjl_l.png" alt="" class="img_back"><i>交易记录</i></router-link>
                </span>
                <span><img src="../img/icon_jyjl_tba.png" alt="" class="img_list"></span>
            </div>
            <div class="Record_wallet">
                <span>
                    <i>32478.87</i>
                    <u>收入</u>
                </span>
                <span>
                    <i>437.34</i>
                    <u>支出</u>
                </span>
            </div>
            <div class="Record_time">
                <p class="Record_time_l"><img src="../img/icon_jyjl_time.png" alt=""></p>
                <p class="Record_time_r">
                    <span v-for="(item,index) in 2" :key="index" @click="changeT(index)" v-if="index==0">{{startTime}}</span>
                    <span @click="changeT(index)" v-else>{{endTime}}</span>
                </p>
            </div>
            <div class="Record_menu">
                <i @click="choiceType(index)" :class="{menu_in:index===typeIn}" v-for="(item,index) in typsArr" :key="index">{{item.title}}</i>
            </div>
        </div>
        <div id="myChart"></div>
        <div class="Record_list">
            <ul class="order_info">
                <li v-for="(item,index) in orderArr" :key="index">
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
            show: false,
            inTime:0,
            currentDate: new Date(),
            maxDate: new Date(),
            startTime:this.$RegExp.getNowFormatDate(),   //开始时间 默认为当天时间
            endTime:this.$RegExp.getNowFormatDate(),     //结束时间
            typeIn:0,
            typsArr:[
                {title:'全部'},
                {title:'买入'},
                {title:'卖出'},
                {title:'快速卖出'},
            ],
            orderArr:[
                {img:require('../img/test.png'),orderNum:'36429763273',name:'李狗子',buy:'买入',buyNum:'234731',money:'金额',moneyNum:'113$（¥810.21）',state:'状态',stateT:'支付中',time:'2019-03-08 13:28',btn:'确认收款',types:0},
                {img:require('../img/test.png'),orderNum:'36429763273',name:'王二妞',buy:'卖出',buyNum:'234731',money:'金额',moneyNum:'113$（¥810.21）',state:'状态',stateT:'支付中',time:'2019-03-08 13:28',btn:'删除',types:2},
                {img:require('../img/test.png'),orderNum:'36429763273',name:'张三疯',buy:'快速卖出',buyNum:'234731',money:'金额',moneyNum:'113$（¥810.21）',state:'状态',stateT:'挂售中',time:'2019-03-08 13:28',btn:'取消订单',types:1},
                {img:require('../img/test.png'),orderNum:'36429763273',name:'刘老四',buy:'卖出',buyNum:'234731',money:'金额',moneyNum:'113$（¥810.21）',state:'状态',stateT:'支付中',time:'2019-03-08 13:28',btn:'确认收款',types:0},
            ],
            orderData:['时间',2012,2013,2014,2015,2016,2017,2018,2019,2020],
            buyData:['买入', 15, 25, 45, 75, 55,85,45,105,119],
            sellData:['卖出', 5, 15, 35, 45, 65, 85, 35,5],
            SellQDate:['快速卖出', 20, 25, 55, 39, 42, 2, 4,10],
        };
    },
    mounted(){
        this.drawLine(); 
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
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                legend: {
                    top:15,
                    right:10,
                    itemHeight:3,
                    data:[
                        {name:'卖出',icon:'rect'},
                        {name:'买入',icon:'rect'},
                        {name:'快速卖出',icon:'rect'}
                    ]
                },
                grid:{
                    top:50,
                    left:50,
                    right:30
                },
                tooltip: {},
                dataset:{
                    source: [
                        this.orderData,
                        this.buyData,
                        this.sellData,
                        this.SellQDate
                    ]
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    offset:12,
                    axisLabel: {        
                        show: true,    //这行代码控制着坐标轴x轴的文字是否显示
                        textStyle: {
                            color: '#666',   //x轴上的字体颜色
                            fontSize:'14'    // x轴字体大小
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#ededed', // x坐标轴的轴线颜色
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    }, 
                },
                yAxis: {
                    axisLabel: {    
                        show: true,    //这行代码控制着坐标轴x轴的文字是否显示
                        formatter:'{value}$',
                        textStyle: {
                            color: '#666',   //x轴上的字体颜色
                            fontSize:'14',    // x轴字体大小
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#ededed', // x坐标轴的轴线颜色
                        }
                    },
                    axisTick: {
                        show: false
                    }, 
                },
                dataZoom: [{
                    type: 'inside',
                    throttle: 50
                }],
                series: [
                    {
                        type: 'line',
                        seriesLayoutBy: 'row',
                        smooth:true,
                        itemStyle: {
                            normal: {
                                    color: '#429321'
                                }
                            },
                        areaStyle: {
                            color: new this.$echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: 'rgba(180,236,81,.8)'},
                                    {offset: .999, color: 'rgba(66,147,33,.05)'},
                                    {offset: 1, color: '#fff'}
                                ]
                            )
                        },
                    },
                    {
                        type: 'line',
                        seriesLayoutBy: 'row',
                        smooth:true,
                        itemStyle: {
                            normal: {
                                    color: '#A4081F'
                                }
                            },
                        areaStyle: {
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: 'rgba(245,81,95,.8)'},
                                        {offset: .999, color: 'rgba(159,4,27,.05)'},
                                        {offset: 1, color: '#fff'}
                                    ]
                                )
                            }
                        },
                    },
                    {
                        type: 'line',
                        seriesLayoutBy: 'row',
                        smooth:true,
                        itemStyle: {
                            normal: {
                                    color: '#043EA1'
                                }
                            }, 
                        areaStyle: {
                              color: new this.$echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: 'rgba(0,53,156,.8)'},
                                    {offset: .999, color: 'rgba(83,203,253,.05)'},
                                    {offset: 1, color: '#fff'}
                                ]
                            )      
                        },
                    },
                ],
            });
        }
    }
}
</script>

<style lang='scss' scoped>
    #myChart{
        display: flex;
        width: 100%;
        height: 270px;
        background: #F2F2F2;
        margin-bottom: 20px;
    }
    .van-popup{
        width: 101%;
    }
    .Record{
        .Record_box{
            height: 223px;
            background: url('../img/public_bg.png') no-repeat;
            background-size: cover;
            color: white;
            .Record_header{
                display: flex;
                height: 44px;
                padding: 0 16px 0 16px;
                justify-content:space-between;
                span{
                    display: inline-flex;
                    height: inherit;
                    align-items: center;
                    a{
                        display: inherit;
                        color: inherit;
                        height: inherit;
                        align-items: center;
                        .img_back{
                            width: 12px;
                            height: 24px;
                        }
                        i{
                            margin-left: 10px;
                            font-size: 17px;
                        }
                    }
                    .img_list{
                        width: 24px;
                        height: 24px;
                    }
                }
            }
            .Record_wallet{
                display: flex;
                padding: 20px 16px 20px 16px;
                span{
                    display: inline-flex;
                    flex: 1;
                    flex-wrap: wrap;
                    i,u{
                        width: 100%;
                        text-align: center;
                    }
                    i{
                        font-size: 24px;
                        line-height: 30px;
                    }
                    u{
                        font-size: 14px;
                        line-height: 14px;
                        margin-top: 8px;
                    }
                }
            }
            .Record_time{
                display: flex;
                height: 32px;
                padding: 0 42px 20px 16px;
                align-items: center;
                p{
                    display: inline-flex;
                    height: inherit;
                    align-items: center;
                }
                .Record_time_l{
                    width: 24px;
                    height: 24px;
                    margin-right: 10px;
                    img{
                        width: inherit;
                        height: inherit;
                    }
                }
                .Record_time_r{
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
                    span:first-child:after{
                        position: absolute;
                        content: '';
                        width: 33px;
                        height: 2px;
                        background: rgba(255,255,255,0.35);
                        right: -42px;
                    }
                }
            }
            .Record_menu{
                display: flex;
                padding: 0 16px 0 16px;
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
        .Record_list{
            .order_info{
                display: flex;
                background: #F2F2F2;
                flex-wrap: wrap;
                li{
                    display:flex;
                    width: 100%;
                    flex-wrap: wrap;
                    padding: 0 16px 0 16px;
                    margin-bottom: 20px;
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
