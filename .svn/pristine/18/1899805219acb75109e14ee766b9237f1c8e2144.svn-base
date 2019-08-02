<template>
    <div class="ordinary">
        <div class="sell_con">
            <p class="sell_con_tit">总资产</p>
            <p class="allMoney">{{assets}}$</p>
            <p class="sell_con_num">卖出tldollar的数量</p>
            <p class="sell_input">
                <input type="text" name="" id="" placeholder="最低卖出1个tldollar" v-model="tldNum">
                <span class="sell_bfb">
                    <i>0%</i>
                    <i>20%</i>
                    <i>40%</i>
                    <i>60%</i>
                    <i>80%</i>
                    <i>100%</i>
                </span>
                <van-slider v-model="value" @change="onChange" />
            </p>
            <p class="sell_text">
                公告性文字公告性文字公告性文字公告性文字公告性文字公告性文字公告性文字公告性文字公告性文字公告性文字公告性文字公告性文字公告性文字公告性文字公告性
            </p>
            <p class="sell_sxf">
                <span>
                    <i>手续费</i>
                    <i>10%</i>
                </span>
                <span>根据对饭付款时金额计算</span>
            </p>
            <p class="sell_btn">
                <button @click="goSell()">立即卖出</button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            assets:0,
            value: 0,
            max:this.GetTldm.totalAssets,
            min:1,
            tldNum:null
        };
    },
    mounted(){        
        this.value = Math.ceil((Number(this.tldNum )/Number(this.max))*100)       
        this.$toast('当前值：' + this.value + " % ");   
        this.assets= Number(this.$store.state.Pricing) * Number(this.max)
        console.log(this.GetTldm)
    },
    methods: {
        getFloatStr(num){  
            num += '';  
            num = num.replace(/[^0-9|\.]/g, ''); //清除字符串中的非数字非.字符  
            
            if(/^0+/) //清除字符串开头的0  
                num = num.replace(/^0+/, '');  
            if(!/\./.test(num)) //为整数字符串在末尾添加.00  
                num += '.00';  
            if(/^\./.test(num)) //字符以.开头时,在开头添加0  
                num = '0' + num;  
            num += '00';        //在字符串末尾补零  
            num = num.match(/\d+\.\d{2}/)[0];  
            console.log(num)
            return num
        },
        onChange(value) {
             this.tldNum = Math.floor( Number(this.max) * (Number(value)/100))
            this.$toast('当前值：' + value+ " % ");
        },
        goSell(){
            if(Number(this.tldNum) > 0){ 
                this.$store.state.PromptStatus = true;
                this.$store.state.PromptValue = "创建订单中..."                           
                let objInfo =({
                    tldNum:Number(this.tldNum),
                    userId:String(this.GetTldm.userId),
                })
                this.$https.post(this.api+"/tldollar/hangSellInfo/create",objInfo).then(
                    res=>{                        
                        if(res.data.code == 0){
                            this.$store.state.PromptStatus = false;
                            this.$router.push({name:'MyOrder'})
                        }else{
                            this.$store.state.PromptStatus = false;
                            console.log("创建订单失败")
                        }
                    }                    
                ).catch(res=>{
                    console.log(typeof(objInfo))
                })
               
            }else{
                this.$notify('请输入数量');
            }

            
        }
    },
    watch:{
        tldNum(val) {
            this.value = Math.ceil((Number(this.tldNum)/Number(this.max))*100)
            if(this.tldNum<=this.max){
                this.$toast('当前值：' + this.value + " % "); 
            }else{
                this.value = 100;
                this.tldNum = this.max;
                this.$toast('当前值：' + this.value + " % "); 
            }
        }        
    }
}
</script>

<style lang='scss'>
.ordinary{
    height: 100%;
    background: #F9F9F9;
    overflow: hidden;
    padding: 0 16px 0 16px;
    .sell_con{
        display: flex;
        align-content: flex-start;
        flex-wrap: wrap;
        p{
            width: 100%;
        }
        .sell_con_tit{
            font-size: 16px;
            line-height: 20px;
            color: #333;
            margin: 10px 0 10px;
        }
        .allMoney{
            font-size: 12px;
            line-height: 16px;
            color: #999;
        }
        .sell_con_num{
            margin: 30px 0 10px 0;
            font-size: 16px;
            color: #333;
            line-height: 20px;
        }
        .sell_input{
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
                margin: 20px 0 10px 0;
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
        .sell_text{
            font-size: 12px;
            color: #999;
            line-height: 17px;
            margin: 35px 0 30px 0;
        }
        .sell_sxf{
            display: inline-flex;
            width: 100%;
            justify-content: space-between;
            span{
                display: inline-flex;
                height: 22px;
                align-items: center;
                font-size: 12px;
                color: #999;
                i{
                    line-height: 22px;
                }
                i:first-child{
                    font-size: 16px;
                    color: #333;
                    margin-right: 20px;
                }
            }
        }
        .sell_btn{
            display: inline-flex;
            width: 100%;
            height: 50px;
            margin-top: 78px;
            justify-content: flex-end;
            button{
                width: 165px;
                height: 100%;
                box-sizing: border-box;
                background: #3DA8D7;
                color: white;
                border: none;
                border-radius: 4px;
            }
        }
    }
}
</style>
