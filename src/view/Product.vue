<template>
    <div class="companys_box">
        <div class="companys">
            <div class="companys_tit">
                 <van-nav-bar
                    left-arrow
                    left-text="我的门店"
                    @click-left="onClickLeft"                   
                    >
                </van-nav-bar>
            </div>
            <div class="companys_cons">
                <div class="companys_con">
                    <div class="companys_content">
                        <ul>
                             <!-- v-for="(items,ind in LinkArrs)" -->
                            <!-- v-for="(item,index) in orderArr -->
                            <li v-for="(items,index) in LinkArrs" :key="index">
                                <van-cell :title="items.Category" is-link />
                                <ol>
                                    <li v-for="(objs,ind) in items.ols" :key="ind">
                                        <router-link :to="objs.link" >
                                            <img :src="objs.image" alt="">
                                            <span>{{objs.title}}</span>
                                        </router-link>
                                    </li>
                                </ol>
                            </li>
                            <div class="hrbox"></div>
                        </ul>
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
           LinkArrs:[
                {
                   Links:"/Product/ProductDetail",
                   Category:"收银类",
                   ols:[
                        {
                            image:require('../assets/images/Product/logo.png'),
                            title:"收银宝POS",
                            link:"/Product/ProductDetail",
                            id:1
                        },
                        {
                            image:require('../assets/images/Product/logo copy.png'),
                            title:"当面付",
                            link:"/Product/ProductDetail",
                            id:1
                        },
                        {
                            image:require('../assets/images/Product/logo copy 2.png'),
                            title:"网上收据",
                            link:"/Product/ProductDetail",
                            id:1
                        },
                        {
                            image:require('../assets/images/Product/logo copy 3.png'),
                            title:"支付参数",
                            link:"/Product/ProductDetail",
                            id:1
                        },
                        {
                            image:require('../assets/images/Product/logo copy 4.png'),
                            title:"支付参数",
                            link:"/Product/ProductDetail",
                            id:1
                        },
                   ]
                },
                {
                   Links:"/view/UserSettings/Company/CompanyDetail",
                   Category:"金融类",
                   ols:[
                       {
                        image:require('../assets/images/Product/logo.png'),
                        title:"我要理财",
                        link:"/Product/ProductDetail",
                        id:1
                       },
                       {
                        image:require('../assets/images/Product/logo copy.png'),
                        title:"我要借钱",
                        link:"/Product/ProductDetail",
                        id:1
                       }
                   ]
                },
                {
                   Links:"/view/UserSettings/Company/CompanyDetail",
                   Category:"服务类",
                   ols:[
                       {
                        image:require('../assets/images/Product/logo.png'),
                        title:"银行账户校验",
                        link:"/Product/ProductDetail",
                        id:1
                       },
                       {
                        image:require('../assets/images/Product/logo copy.png'),
                        title:"移动服务",
                        link:"/Product/ProductDetail",
                        id:1
                       },
                       {
                        image:require('../assets/images/Product/logo.png'),
                        title:"集团服务",
                        link:"/Product/ProductDetail",
                        id:1
                       },
                       {
                        image:require('../assets/images/Product/logo copy.png'),
                        title:"分账授权",
                        link:"/Product/ProductDetail",
                        id:1
                       },
                       {
                        image:require('../assets/images/Product/logo copy.png'),
                        title:"特色结算",
                        link:"/Product/ProductDetail",
                        id:1
                       }
                   ]
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
                bottom: -58px;
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
                        ul{   
                            background: #F2F2F2;                 
                            >li{
                                margin-top: 10px;
                                padding: 10px 0px;
                                .van-cell{
                                    padding: 6px 10px;
                                    font-size: 10px;
                                    color: #333;
                                }
                                ol{
                                    display: flex;
                                    justify-content: flex-start;
                                    flex-wrap: wrap;
                                    li{
                                        display: inline-block;
                                        height: 108px;
                                        width:108px;
                                        background: #FFF;
                                        margin:10px 9px 0 0;
                                        position: relative;
                                        box-shadow: 0px 7px 7px -9px #5E5E5E;
                                        img{
                                            display: block;
                                            height: 40px;
                                            width: 40px;
                                            position: absolute;
                                            left: 50%;
                                            top: 20%;
                                            transform: translate(-50%)
                                        }
                                        span{
                                            position: absolute;
                                            top: 65%;
                                            left: 50%;
                                            transform: translate(-50%,0);
                                            font-size: 14px;
                                            color:14px;  
                                            width: 100%;
                                            text-align: center;                                          
                                        }
                                    }
                                    li:nth-child(3n){
                                        margin-right:0px;
                                    }
                                }
                            }                    
                        }
                    }
                }   
                .hrbox{
                        display: block;
                        height: 50px;
                        width: 100%;
                    }             
            }            
        }
    }
</style>

