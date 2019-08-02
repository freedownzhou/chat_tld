<template>
    <!-- 交易记录 -->
    <div class="main">        
        <div class="main_header">
            <span @click="onClickLeft">
                <i>订单列表</i>
            </span>                
            <span class="tb">
                <i><img  @click="chartShow" :src ="chartStatus == false? this.chartImage : this.ListImage " alt="" class="img_list"></i>
                <i @click="Seach">
                    <van-button type="primary" @click="Seach">
                        <img src ="../../img/condition.png" alt="" class="img_list">
                    </van-button>
                </i>
            </span>
        </div>         
        <div class="OrderCon">
            <div class="OrderContent">
                 <nav class="boxBor">
                    <ol>
                        <li v-for="(items,ind) in payList" :key="ind" @click="Navbtn(items.num)" :class="onNUm==items.num? 'on':''">{{items.name}}</li>
                    </ol>            
                </nav>
                <div class="Orderlist">
                    <div id="myChart" v-show="chartStatus"></div>  
                    <ul v-show="onNUm == 1">
                        <li class="boxBor" >
                            <div class="mainPage boxBor" v-if="HangupArr != null" >
                                <h3 class="boxBor"><i><img :src="HangupArr.headImg" alt=""></i><b>{{HangupArr.nickName}}</b><span>{{HangupArr.hangSellNo}}</span></h3>
                                <div class="top">
                                    <div><span>{{HangupArr.coinNum}}<i>TLD</i></span>数量</div>
                                    <div><span>{{HangupArr.dollar}}$<i>（¥{{HangupArr.rmb}}）</i></span>金额</div>
                                </div>
                                <div class="prBar">
                                    <van-progress inactive :percentage="HangupArr.percent" color="linear-gradient(360deg,rgba(26,65,168,1) 0%,rgba(85,173,214,1) 100%)"/>
                                </div>
                                <div class="bottom">
                                    <span>{{HangupArr.createTime}}</span>
                                    <span>
                                       <button @click="cancelOrder">取消订单</button>
                                         <button @click="HangDetbtn">查看详情</button>
                                    </span>
                                </div>
                            </div>
                            <transition name="fade">
                                <p v-if="HangShow" @click="HangDetbtn">hello</p>
                            </transition>
                        </li>
                    </ul>
                    <ul v-show="onNUm == 2" class="order_info">
                        <li v-for="(item,index) in BuyArr" :key="index">
                            <p class="order_name">
                                <span>
                                    <img :src="item.headImg" alt="">
                                    <u>{{item.nickName}}</u>
                                </span>
                                <span>{{item.orderNo}}<router-link :to="{ name: 'ChatRoom'}"><img src="../../assets/images/OrderList/call.png" alt=""></router-link></span>
                            </p>
                            <p class="order_state">
                                <span class="number">
                                    <i>{{item.tldNum}}<strong>Tld</strong></i>
                                    <i>买入</i>
                                </span>
                                <span class="money">
                                    <i>{{item.rmb}}￥</i>
                                    <i>金额</i>
                                </span>
                                <span class="state">
                                    <i>{{item.status}}</i>
                                    <i>状态</i>
                                </span>
                            </p>
                            <p class="order_btn">
                                <span>{{item.createTime}}</span>
                                <span>
                                    <!-- <button>取消订单</button> -->
                                    <button @click="operationBtn(item)">{{item.action}}</button>
                                </span>
                            </p>
                        </li>
                        <div style="height:103px; width:100%;"></div>
                    </ul>
                    <ul v-show="onNUm == 3"  class="order_info">
                        <li v-for="(item,index) in BuyArr" :key="index">
                            <p class="order_name">
                                <span>
                                    <img :src="item.headImg" alt="">
                                    <u>{{item.nickName}}</u>
                                </span>
                                <span>{{item.orderNo}}<router-link :to="{ name: 'ChatRoom'}"><img src="../../assets/images/OrderList/call.png" alt=""></router-link></span>
                            </p>
                            <p class="order_state">
                                <span class="number">
                                    <i>{{item.tldNum}}<strong>Tld</strong></i>
                                    <i>买入</i>
                                </span>
                                <span class="money">
                                    <i>{{item.rmb}}￥</i>
                                    <i>金额</i>
                                </span>
                                <span class="state">
                                    <i>{{item.status}}</i>
                                    <i>状态</i>
                                </span>
                            </p>
                            <p class="order_btn">
                                <span>{{item.createTime}}</span>
                                <button @click="operationBtn(item)">{{item.action}}</button>
                            </p>
                        </li>
                        <div style="height:103px; width:100%;"></div>
                    </ul>
                </div>    
            </div>
        </div>
        <van-popup  v-model="show1" position="right" :style="{ height: '100%'}" class="seachs">
            <div class="Options">
                <p>时间</p>
                <ul>
                    <li>一天之内</li>
                    <li>一周之内</li>
                    <li>一月之内</li>
                </ul>
                <p>状态</p>
                <ul>
                    <li>支付中</li>
                    <li>待收款</li>
                    <li>待放行</li>
                    <li>挂售中</li>
                    <li>已完成</li>
                </ul>
            </div>
            <div class="btns">               
                <button>重置</button>
                <button>确定</button>               
            </div>
        </van-popup>
        <van-popup  v-model="conShow" class="confirm boxBor">
            <div>
                <h3>{{conShowText}}</h3>                
            </div>
            <ul>
                <li><button  @click="conShowBtn(1)">取消</button></li>
                <li><button class="onbtn" @click="conShowBtn(2)">确定</button></li>
            </ul>
        </van-popup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            conShow:false,       //取消提示
            conShowText:null,    //提示内容
            conShowStatus:null,  //(ok-确认收款 cancel-取消订单)
            conShoworderId:null, //点击的订单号

            chartStatus:false,
            chartImage:require('../../img/chart.png'),
            ListImage:require('../../img/List.png'),
            show: false,
            show1:false,
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
                {img:require('../../img/test.png'),orderNum:'36429763273',name:'李狗子',buy:'买入',buyNum:'234731',money:'金额',moneyNum:'113$（¥810.21）',state:'状态',stateT:'支付中',time:'2019-03-08 13:28',btn:'确认收款',types:0},
                {img:require('../../img/test.png'),orderNum:'36429763273',name:'王二妞',buy:'卖出',buyNum:'234731',money:'金额',moneyNum:'113$（¥810.21）',state:'状态',stateT:'支付中',time:'2019-03-08 13:28',btn:'删除',types:2},
                {img:require('../../img/test.png'),orderNum:'36429763273',name:'张三疯',buy:'快速卖出',buyNum:'234731',money:'金额',moneyNum:'113$（¥810.21）',state:'状态',stateT:'挂售中',time:'2019-03-08 13:28',btn:'取消订单',types:1},
                {img:require('../../img/test.png'),orderNum:'36429763273',name:'刘老四',buy:'卖出',buyNum:'234731',money:'金额',moneyNum:'113$（¥810.21）',state:'状态',stateT:'支付中',time:'2019-03-08 13:28',btn:'确认收款',types:0},
            ],
            orderData:['时间',2012,2013,2014,2015,2016,2017,2018,2019,2020],
            buyData:['买入', 15, 25, 45, 75, 55,85,45,105,119],
            sellData:['卖出', 5, 15, 35, 45, 65, 85, 35,5],
            // SellQDate:['快速卖出', 20, 25, 55, 39, 42, 2, 4,10],


            onNUm:1, 
            //nav 导航栏
            payList:[
                {num:1,name:"挂售"},
                {num:2,name:"买入"},
                {num:3,name:"卖出"}
            ],
            // 显隐 1-挂售 2-买入 3-卖出
            navStatus:1,
            HangupArr:null,  //挂售数据
            BuyArr:null,   //买入数据
            SellArr:null,  //卖出数据
            HangShow:false //挂售显隐
        };
    },
    beforeCreate(){
       
    },
    mounted(){
        this.drawLine(); 
        this.HangData();
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1);
        },
        chartShow(){
            this.chartStatus=!this.chartStatus;
            // ../img/icon_jyjl_tba.png
        },
        //侧边栏
        Seach(){
            this.show1 = true;
        },        
        // 数据请求
        httpDatas(num){
                    
        let Link ;
            if(num == 1){ //挂售单
                Link = "/tldollar/hangSellInfo/mySellInfo"
            }
            this.$post(Link,{userId:this.$store.state.userInfo.userId},{urlEncode:"urlEncode"}).then(
                res=>{
                    
                    if(res.code == 0){
                        this.HangupArr= res.data;
                        console.log(this.HangupArr)
                    }else{
                        this.$notify(res.msg)
                    }
                }
            )
        },
        //挂售订单数据
        HangData(){
            this.$post("/tldollar/hangSellInfo/mySellInfo",{userId:this.$store.state.userInfo.userId},{urlEncode:"urlEncode"}).then(
                res=>{
                    if(res.code == 0){
                        this.HangupArr= res.data;
                        console.log(this.HangupArr)
                    }else{
                        this.$notify(res.msg)
                    }
                }
            )
        },         
        // 订单的详情显隐
        HangDetbtn(){
            this.HangShow = ! this.HangShow
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
        operationBtn(item){
            if(item.code == 1){
                this.conShow = !this.conShow
                // this.$router.push({ name: 'buyPay', params: { orderId: item.orderId}})
            } 
            if(item.code == 2){
                this.conShowText   = "确认取消订单";
                this.conShowStatus = "cancel";
                this.conShoworderId= item.orderId;
                this.conShow = !this.conShow;
                // this.$router.push({ name: 'buyPay', params: { orderId: item.orderId}})
            } 
            if(item.code == 3){
                // this.$router.push({ name: 'buyPay', params: { orderId: item.orderId}})
            } 
            if(item.code == 4){
                // this.$router.push({ name: 'buyPay', params: { orderId: item.orderId}})
            }       
            if(item.code == 5){
                this.$router.push({ name: 'buyPay', params: { orderId: item.orderId}})
            }  
            if(item.code == 6){
                // this.$router.push({ name: 'buyPay', params: { orderId: item.orderId}})
            } 
            if(item.code == 7){
                // this.$router.push({ name: 'buyPay', params: { orderId: item.orderId}})
            }      
        },
        conShowBtn(num){
            if(num == 1){
                this.conShow = !this.conShow;
            }else if(num == 2){
                let datas={
                    userId:this.$store.state.userInfo.userId,
                    orderId:this.conShoworderId,
                    action:this.conShowStatus
                }
                console.log(datas)
                this.$post("/tldollar/orderInfo/updateOrderStatus",datas).then(
                    res=>{
                        console.log(res)
                    }
                )               
            }else if(num == 3){
                this.$get("/tldollar/hangSellInfo/cancel",{
                    params:{
                        userId:this.$store.state.userInfo.userId,
                        hangSellId:this.HangupArr.hangSellInfoId
                    }
                }).then(
                    res=>{
                        console.log(res)
                        if(res.data.code == 0){
                            this.orderInfoList()
                        }
                    }
                )
            }
        },
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let chartBox = document.getElementById('myChart')
            chartBox.style.width=window.innerWidth+'px';
            let myChart = this.$echarts.init(chartBox)            
           
            // 绘制图表
            myChart.setOption({
                legend: {
                    top:15,
                    right:10,
                    itemHeight:3,
                    data:[
                        {name:'卖出',icon:'rect'},
                        {name:'买入',icon:'rect'},
                        // {name:'快速卖出',icon:'rect'}
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
        },
        orderInfoList(num){
            let status ;
            console.log(num)
            if(num == 2){
                status = "buy"
            }else if(num == 3){
                status = "sell"
            }
            this.$get("/tldollar/orderInfo/orderInfoList",{
                params:{
                    userId:this.$store.state.userInfo.userId,
                    status:status
                }
            }).then(
                res=>{
                    if(res.data.code == 0){
                        this.BuyArr = res.data.data
                    }
                }
            )
        },
        Navbtn(num){
            this.onNUm=num; 
            if(num == 1){
                this.HangData();
            }else if(num == 2){
                this.orderInfoList(2);
            }else if(num == 3){
                this.orderInfoList(3);
            }

        },
        cancelOrder(){  
            this.conShow = !this.conShow;      
            this.conShowBtn(3)
        }
    }
}
</script>

<style lang='scss' scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
    #myChart{
        display: flex;
        width: 100%;
        height: 270px;
        background: #F2F2F2;
    }
    .van-popup{
        width: 101%;
    }
    .main{
        height: calc(100%-50px);
        background: url('../../img/public_bg.png') no-repeat;
        background-size: cover;
        color: white;
        position: relative;
        .main_header{
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
            .tb{
                i{
                    display:inline-block;
                    width: 24px;
                    height: 24px;
                    padding-left: 10px;
                    button{
                        background: none;
                        height: 100%;
                        width: 100%;
                        border: none;
                        position: relative;
                        img{
                            position: absolute;
                            left: 0;
                            top: 0;
                            height:100%
                        }
                    }
                    
                }

            }
        }            
        .OrderCon{
            position: absolute;
            top: 44px;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: hidden;
            .OrderContent{
                overflow: auto;
                height:100%;
                background: #F2F2F2;
                nav{
                    height: auto;
                    padding: 0 16px 14px 16px;
                    width: 100%;
                    ol{
                        padding: 12px 0;
                        text-align: center;
                        color: #333;
                        font-size: 14px;
                        display: flex;
                        li{
                            flex: 1;
                        }
                        .on{
                                color: #3DA8D7;    
                                position: relative;  
                                font-weight: 550;                  
                            };
                        .on:before{
                            content: "";
                            width: 100%;
                            height: 2px;
                            background-color:#3DA8D7;
                            position: absolute; 
                            bottom: -10px;
                            left: 0;
                        }
                    }
                } 
                .Orderlist{
                    position: absolute;
                    top: 52px;
                    height: 100%;
                    width: 100%;
                    overflow: auto;
                    ul{
                        overflow: auto;
                        height: auto;
                        li{
                            height: auto;
                            margin-bottom: 10px;
                            .mainPage{
                                padding: 10px  16px 0px 10px;
                                background: #fff;
                                height: auto;
                                width: 100%;
                                padding: 10px 16px;
                                h3{
                                    height: auto;
                                    width: 100%;
                                    padding-bottom: 6px;
                                    border-bottom: 1px solid #DDDDDD;
                                    i{
                                        display: inline-block;
                                        height: 28px;
                                        width: 28px;
                                        border-radius: 50%;
                                        background: red;
                                        margin-right: 9px;
                                        overflow: hidden;
                                        vertical-align: middle;
                                        img{
                                            height: 100%;
                                            width: 100%;
                                        }
                                    }
                                    b{
                                        display: inline-block;
                                        font-size: 14px;
                                        line-height: 28px;
                                        color: #333;
                                    }
                                    span{
                                        line-height: 28px;
                                        float: right;
                                        font-size: 12px;
                                        color: #999999
                                    }
                                }
                                .top{
                                    height: auto;
                                    width: 100%;
                                    display: flex;
                                    justify-content: space-between;
                                    padding: 23px 0 5px 0;
                                    div{
                                        flex:1;
                                        font-size: 12px;
                                        color: #999999;
                                        text-align: center;
                                        line-height:20px;                                        
                                        span{
                                            display: block;
                                            color: #3DA8D7;
                                            font-size: 16px;
                                        }
                                    }
                                }
                                .prBar{
                                    padding: 20px 0;
                                    width: 100%;
                                    height: 100%;
                                }
                                .bottom{
                                    height: 32px;
                                    width: 100%;
                                    button{
                                        float: right;
                                        border: none;
                                        height: 32px;
                                        width:  78px;
                                        font-size: 12px;
                                        line-height: 30px;
                                        text-align: center;
                                        border:1px solid #3DA8D7;
                                        color: #3DA8D7;
                                        background: #fff;
                                        border-radius: 4px;
                                        margin-left: 5px;
                                    }
                                    span{
                                        font-size: 12px;
                                        color: #999;
                                        line-height: 32px;
                                    }
                                }
                            }
                        }
                    }
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
                                    a{
                                        display: inline-block;
                                        height: 24px;
                                        width: 24px;
                                        margin-left: 4px;
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
                                        strong{
                                            font-size: 12px;
                                            color: #999;
                                            margin-left: 4px;
                                        }
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
                                    width: auto;                                   
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
        }        
    }

    // 弹出框css
    .seachs{
       width: 280px !important;
       background: #171B34  !important;
        .van-popup{
            background-color: #171B34;
        }
        .Options{
            height: 280px;
            width: 100%;
            padding: 10px 38px 0 38px;
            box-sizing: border-box;
            p{
                padding: 13px 0;
                font-size: 14px;
                color: #FFF;                
            };
            ul{
                float: left;               
                li{
                    display: inline-block;
                    color: #333;
                    height: 40px;
                    width: 90px;
                    font-size: 12px;
                    line-height: 40px;
                    background: #FFF;
                    border-radius: 4px;
                    text-align: center;
                    margin: 0 16px 10px 0;
                } 
                li:nth-child(2n){
                    margin-right: 0;
                }
            }
        }
        .btns{
            border-top: 1px solid #F2F2F2;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 58px;
            padding: 6px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            button{
                flex:1;
                height: 100%;
                text-align: center;
                border: none;
                background: none;
                color: #999999;
            }
            button:first-child {
                border-right: .5px solid #F2F2F2
            }
        }
    }
    .confirm{
        border-radius: 10px;
        padding: 0 12px;
        width: 268px;
        height: auto;
        div{
        padding: 25px 25px 20px;
        text-align: center;
        border-bottom: 1.5px solid rgba(0,0,0,.2);
        h3{
            font-size:16px;
            font-weight:600;
            color:rgba(51,51,51,1);
            line-height:22px;
            padding: 5px 0 15px 0;
        }
        p{
            font-size: 12px;
            color: #666666FF;
            line-height: 18px;
            span{
            display: block;
            color: #3DA8D7FF;
            
            }
        }
        }
        ul{
        display: flex;
        width: 100%;
        height: 52px;
        line-height: 52px;
        li{
            flex: 1;
            height: 100%;
            button{
            width: 100%;
            text-align: center;
            font-size: 14px;
            color: #999999FF;
            border: none;
            background: none;
            }
            button.onbtn{
            color: #3DA8D7FF
            }
        }
        }
    }
</style>
