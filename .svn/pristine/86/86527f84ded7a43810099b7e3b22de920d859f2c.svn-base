<template>
    <div class="sells">
        <div class="sell_tit">
            <span>卖出</span>            
        </div>
        <div class="SellCON">
            <div class="sell_con">
                <p>
                    {{maxtldNum}}<i>TLD</i>
                    <span>总资产</span>
                </p>
                <div class="TldNum">
                    <h3>卖出TLD的数量</h3>
                    <div class="sell_input">
                        <input type="text"  placeholder="最低卖出1个tldollar" v-model="tldNum" @blur = "unblur">
                            <span class="sell_bfb">
                                <i>0%</i>
                                <i>20%</i>
                                <i>40%</i>
                                <i>60%</i>
                                <i>80%</i>
                                <i>100%</i>
                            </span>
                        <van-slider v-model="tldRatio" @change="onChange"  @click="relBtn" class="btn"/>
                        <b>当前数量：<strong>{{tldRatio.toFixed(2)}}</strong>  %</b>
                    </div>
                </div>
                <div class="Handling">
                    <h3>手续费</h3>
                    <span>({{(feeRatio/100).toFixed(2)}} + {{(feeRatioAdd*0.01*0.1).toFixed(2)}})%</span>
                    <div class="sell_input">
                        <van-slider v-model="feeRatioAdd" @change="onChange"  @click="relBtn" class="btn"/>
                    </div>
                    <h3>限额</h3>
                    <div class="QuanInterval">
                        <input type="text" placeholder="最低买入100TLD" v-model="LimitminIn">
                        <span></span>
                        <input type="text" placeholder="最高买入230TLD" v-model="LimitMaxIn">
                    </div>    
                </div>
                <button @click="SellBtb(),Per_wallet_cert(),Receipt_cert()">立即卖出</button>
            </div>
        </div>
        
    </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
    data() {
        return {
            maxtldNum:this.$store.state.userInfo.activeAssets,
            tldRatio: 0,
            feeRatio:null,
            feeRatioMax:"-- / --",
            feeRatioMin:"-- / --",
            feeRatioAdd:null,
            tldNum:null,
            feeRatioArrs:null,   //汇率的所有信息
            feeRatioArr:[],      //汇率的数量区间            
            feeRatioInd:null,    //当前对应汇率下标

            Limitmin: 1,         //限额小
            LimitminIn:null,     //传输的限额小
            LimitMax: null,      //限额大
            LimitMaxIn: null     //传输的限额大
        };
    },
    mounted(){
        this.Receipt_cert()
        this.$get("/tldollar/feeRate/feeRateList").then(
            res=>{
                if(res.data.code == 0){                   
                    let ind;
                    this.feeRatioArrs = res.data.data;
                    for( ind in res.data.data){                       
                        this.feeRatioArr.push(res.data.data[ind].highest)                       
                    }
                }
            }
        )
        this.getRate(1)
    },
    methods: {  
        ...mapActions(["Receipt_cert","Per_wallet_cert"]),     
        onChange() {   
            this.tldNum = Math.floor(Number(this.maxtldNum) * (Number(this.tldRatio)/100))
        },  
        getRate(num){      //获取费率        
            this.$get("/tldollar/feeRate/changeFeeRateByNum?tldNum="+num+"").then(
                res=>{
                    this.feeRatioMax = parseFloat(res.data.data.max)
                    this.feeRatioMin = parseFloat(res.data.data.min)
                    this.feeRatio    = parseFloat(res.data.data.feeRate) * 100                     
                }
            )
        },  
        unblur(){
            if(this.tldNum){
                this.getRate(this.tldNum)
            }
        },
        Judgingset(){
            console.log(this.tldNum)
            if(!this.tldNum){
               this.$notify("请选择卖出数量")
               return false
            }
            console.log(this.Limitmin)
            if(!this.Limitmin){
               this.$notify("请选择限额最低数量")
               return false
            }
            if(!this.LimitMax){
               this.$notify("请选择限额最高数量")
               return false
            }
            return true
        },
        SellBtb(){
            if(this.$store.state.userInfo.cert && this.$store.state.userInfo.wallet && this.$store.state.userInfo.pay){
                if(this.Judgingset()){
                    this.$post("/tldollar/hangSellInfo/create",{
                    "rate": this.feeRatio,
                    "tldNum": this.tldNum,
                    "userId": this.$store.state.userInfo.userId
                }).then(
                    res=>{
                        if(res.code){
                            this.$router.push("/Navigation/OrderList")
                        }
                    }
                )
            }
            }            
        },
        
        relBtn(){           
            this.$get("/tldollar/feeRate/changeFeeRateByNum?tldNum="+this.tldNum+"").then(
                res=>{
                    this.feeRatioMax = parseFloat(res.data.data.max)
                    this.feeRatioMin = parseFloat(res.data.data.min)
                    this.feeRatio    = parseFloat(res.data.data.feeRate)                       
                }
            )
        },
        frBlur(){
            if(this.feeRatio <= this.feeRatioMin){
                this.feeRatio = this.feeRatioMin
            }else if(this.feeRatio >= this.feeRatioMax){
                this.feeRatio = this.feeRatioMax
            }
        }
    },    
    watch: {
        tldNum(val) {
            this.tldRatio = (Number(this.tldNum)/Number(this.maxtldNum))*100; 
            if(this.tldRatio > 100){
               this.tldNum = this.maxtldNum
            }
            if(val > 1){
                this.LimitminIn = 1;
            }
            let ind
            for(ind in this.feeRatioArr){                            
                if(this.tldNum < this.feeRatioArr[ind]){
                    this.feeRatio = (this.feeRatioArrs[ind].feeRate) * 10000;
                    console.log(this.feeRatio)
                    this.LimitMax = (this.tldNum * ((10000 - ((this.feeRatio)+(this.feeRatioAdd*0.01*0.1).toFixed(2)*100)) / 10000)).toFixed(6) 
                    console.log(this.LimitMax)
                    return ind
                }
            }
        }, 
        feeRatioAdd(){
            this.LimitMax = (this.tldNum * ((10000 - ((this.feeRatio)+(this.feeRatioAdd*0.01*0.1).toFixed(2)*100)) / 10000)).toFixed(6) 
        },    
        LimitMax(){           
            this.LimitMaxIn = this.LimitMax 
        },
        LimitMaxIn(){            
            if(this.LimitMaxIn > Number(this.LimitMax)){
                this.LimitMaxIn = this.LimitMax
            }
            if(this.LimitMaxIn == 0){
                this.LimitMaxIn = null
            }
            if(this.LimitMaxIn < this.LimitminIn){
                this.LimitMaxIn = this.LimitminIn;
            }
        },   
        Limitmin(){           
            this.LimitminIn = this.Limitmin 
        },
        LimitminIn(){            
            if(this.LimitminIn < Number(this.Limitmin)){
                this.LimitminIn = this.Limitmin
            }
        } 
    }
}
</script>

<style lang='scss'>
  .sells{
        height: 100%;
        background: url('../../img/public_bg.png') no-repeat;
        background-size: 100% 100%; 
        overflow: hidden;
        padding: 0 16px;   
        box-sizing: border-box;        
        .sell_tit{
            display: flex;
            height: 44px;          
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
        }
        .SellCON{
            height: 530px;
            background: #FFF;
            border-radius: 4PX;
            position: relative;
        }
        .sell_con{           
           box-sizing: border-box;
           width: 100%;
           height: auto;
           >button{
               position: absolute;
               bottom:20px;
               left: 50%;
               transform: translate(-50%);
               border: none;
               background: #3DA8D7;
               width: 316px;
               height: 48px;
               line-height: 48px;
               text-align: center;
               color: #FFF;
               border-radius: 4px;
           }
           >p{
               width: 100%;
               padding: 17px 10px  10px 10px;
               box-sizing: border-box;
               font-size: 18px;
               color: #333;
               span{                   
                   float: right;
                   font-size: 12px;
               }
               i{
                   font-size: 12px;
                   color: #999;
                   margin-left: 4px;
               }
           }
           h3{
                    font-size: 16px;
                    color: #333;
                    padding: 30px 0 17px 0;
                }  
           .TldNum{
                background: #fff;
                color: #333;
                width: 100%;
                height: 155px;
                padding: 0 10px 18px 10px;
                border-radius: 4px;
                box-sizing: border-box;
                h3{
                    font-size: 14px;
                    padding: 18px 0 17px 0;
                } 
           }
            .Handling{               
                width: 100%;
                height: auto;
                border-radius: 4px;
                padding: 10px 12px 20px 12px;
                background: #FFF;
                box-sizing: border-box;
                justify-items: center;  
                >span{                   
                    color: #3DA8D7;
                }
                .Handlfee{
                    height: auto;
                    width: 100%;
                    padding-bottom: 15px;
                    ul{
                        display: flex;
                        justify-content: space-between;
                        li{
                            flex:1;
                             color: #999999;
                            span{
                                display: block;
                                font-size: 12px;
                                text-align: center;
                                padding: 7px 0;
                                
                            }
                            i{
                                display: block;
                                width: 100%;
                                text-align: center;
                                font-size: 18px;
                                line-height: 40px;
                                input{
                                    border: none;
                                    width:85px;
                                    height:40px;
                                    border-radius:4px;
                                    border:1px solid rgba(151,151,151,1);
                                    text-align: center;
                                }
                            }
                        }
                    }
                }            
                .QuanInterval{
                    height: auto;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;                   
                    align-items: center;
                    padding-bottom: 10px;
                    input{
                        width: 146px;
                        border:none;
                        border:solid 1px #979797;
                        border-radius: 4px;
                        padding: 12px 11px;
                        font-size: 12px;
                        color: #333;
                        box-sizing: border-box;
                    }
                    span{
                        display: inline-block;
                        width: 13px;
                        height: 1px;
                        background: #999999;
                    }
                }
            }
           .sell_input{
                    margin-top: 10px;
                    input{
                        width: 100%;
                        height: 50px;
                        box-sizing: border-box;
                        font-size: 12px;
                        color: #333;
                        text-indent: 10px;
                        border:1px solid #DDDDDD;

                    }
                    ::-webkit-input-placeholder{
                        color: #999;
                    }
                    .sell_bfb{
                        display: inline-flex;
                        width: 100%;
                        justify-content: space-between;
                        font-size: 12px;
                        line-height: 12px;
                        color: #333;
                        margin: 10px 0 10px 0;
                         box-sizing: border-box;
                    }
                    b{
                        display: block;
                        font-size: 12px;
                        color:#999;
                        padding-top: 10px;
                        strong{
                            color: #3DA8D7;
                        }
                    }
                    .van-slider{
                        height: 4px;
                        .van-slider__bar{
                            height: 4px !important;
                            background:linear-gradient(135deg,rgba(26,65,168,1) 0%,rgba(85,173,214,1) 100%) !important;
                            border-radius:2px !important;
                            .van-slider__button{
                                width:18px;
                                height:18px;
                                background:linear-gradient(360deg,rgba(26,65,168,1) 0%,rgba(85,173,214,1) 100%);
                            }
                            .van-slider__button-wrapper:after{
                                width:10px;
                                height:10px;
                                top: -50%;
                                left: -50%;
                                margin: 13px 0 0 13px;
                                background:linear-gradient(180deg,rgba(26,65,168,1) 0%,rgba(85,173,214,1) 100%);
                                border-radius: 50%;                               
                            }
                        }
                    }                    
                }
        }
        
    }   
</style>
