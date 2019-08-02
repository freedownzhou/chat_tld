<template>
    <div class="companys_box">
        <div class="companys">
            <div class="companys_tit">
                 <van-nav-bar
                    left-arrow
                    :left-text="this.name"
                    @click-left="onClickLeft"                   
                    >
                </van-nav-bar>
            </div>
            <div class="companys_cons">
                <div class="companys_con">
                    <div class="companys_content">
                        <div class="bankCard">
                            <img src="" alt="">
                        </div>                       
                        <div class="conTent">
                           <h3>{{this.title}}</h3>
                           <ul>
                               <li v-for="(items,index) in LinkArrs" :key="index">
                                   <p>{{items.content}}</p>
                                   <a href="#"><img :src="items.image"></a>
                               </li>
                           </ul>
                        </div>
                    </div>
                </div>                
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
    data (){
        return {
            name:"收银宝",
            title:"产品特点",
            LinkArrs:[
                {                        
                    content:"可实现银行卡（磁条/芯片/非接）支付微信、支付宝、通联钱包扫码支付方式的一站式受理都端可灵活结算、互动营销、理财融资等丰富的商户增值服务。",
                    image:require("../assets/images/Product/Product3.png")
                },
                {                      
                    content:"可实现银行卡（磁条/芯片/非接）支付微信、支付宝、通联钱包扫码支付方式的一站式受理都端可灵活结算、互动营销、理财融资等丰富的商户增值服务。",
                    image:require("../assets/images/Product/Product2.png")
                },
                {                        
                    content:"可实现银行卡（磁条/芯片/非接）支付微信、支付宝、通联钱包扫码支付方式的一站式受理都端可灵活结算、互动营销、理财融资等丰富的商户增值服务。",
                    image:require("../assets/images/Product/Product1.png")
                }
            ]
        }
      },
    methods: {
        onClickLeft() {           
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss" scoped>
    .companys_box{
        height: 100%;
        background: url('../img/public_bg.png') no-repeat;
        background-size: cover;
        position: relative;
        .companys{
            display: flex;
            flex-wrap: wrap;
            height: 100%;
            // overflow:hidden;
            .companys_tit{
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
            .companys_cons{
                height: 100%;                
                height: calc(100% - 44px);  
                width: 100%; 
                position: absolute;
                top: 44px;             
                background: #F2F2F2;
                box-sizing: border-box;
                overflow: hidden;
                .companys_con{
                    height:100%;
                    width: 100%;
                    overflow: auto;
                    box-sizing: border-box;
                    padding: 0 16px;
                    background:#F2F2F2;
                    .companys_content{
                        .bankCard{
                            width:343px;
                            height:211px;
                            background:linear-gradient(46deg,rgba(23,27,52,1) 0%,rgba(65,74,134,1) 100%);
                            border-radius:4px;
                            margin: 0 auto;
                            margin-top: 15px;
                        }
                        .conTent{
                            h3{
                                padding: 16px 0;
                                font-size:16px;
                                font-weight:600;
                                color:rgba(51,51,51,1);
                                text-align: center; 
                            }
                             ul{
                                li{
                                    p{
                                        width:344px;
                                        height:56px;
                                        font-size:12px;
                                        font-weight:500;
                                        color:rgba(153,153,153,1);
                                        line-height:17px;
                                        margin: 0 auto
                                    }
                                    a{
                                        display: block;
                                        width: 256px;
                                        margin: 0 auto;
                                        height: auto;
                                        img{
                                            width: 100%;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }                
            }            
        }
    }
</style>

