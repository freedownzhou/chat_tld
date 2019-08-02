<<<<<<< .mine
<template>
    <!-- 对接设置 -->
    <div class="dock">
        <div class="dock_tit">
            <span @click="onClickLeft"><a><img src="../img/icon_jyjl_l.png" alt="">对接设置</a></span>
        </div>
        <div class="dock_list">
            <ul>
                <li v-for="(item,index) in dockArr" :key='index'>
                    <p>{{item.title}}</p>
                    <span class="dock_cs">
                        <i><img :src="item.img" alt=""></i>
                        <i>
                            <u>{{item.text1}}:{{item.text1Num}}</u>
                            <u>{{item.text2}}:{{item.text2Num}}</u>
                            <u>{{item.text3}}:{{item.text3Num}}</u>
                        </i>
                    </span>
                    <span class="set_btn">
                        <router-link :to='item.links'><button>{{item.set}}</button></router-link>                        
                        <button v-if='index==0'>{{item.look}}</button>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                dockArr:[
                    {title:'系统对接参数',img:require('../img/dock_cs.png'),text1:'appid',text1Num:'******',text2:'MD5交易钥匙',text2Num:'******',text3:'PSA公钥',text3Num:'******',set:'重置',look:'查看参数',links:"/ReSetKey"},
                    {title:'订单支付配置',img:require('../img/dock_dj.png'),text1:'查询URL',text1Num:'2374292923473',text2:'通知URL',text2Num:'3246789214641',text3:'签名类型',text3Num:'默认配置',set:'重置',links:"/ReSetUrl"},
                ]
            }
        },
        mounted(){

        },
        methods:{
            goDetails(){
                this.$router.push({
                    name: 'OrderPayment',
                })
            },
            onClickLeft() {
                this.$router.go(-1);
            },
        }
    }
</script>



<style lang='scss' scoped>
  .dock{
        background: url('../img/public_bg.png') no-repeat;
        background-size: 100% 100%; 
        overflow: hidden;
        height: 100%;
        .dock_tit{
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
        .dock_list{
            display: flex;
            height: 100%;
            padding: 15px 16px 0 16px;
            background: #F2F2F2;
            ul{
                display: inherit;
                width: 100%;
                flex-wrap: wrap;
                align-content: flex-start;
                li{
                    display: inherit;
                    width: 100%;
                    height: 220px;
                    flex-wrap: wrap;
                    background: white;
                    box-shadow:0px 4px 4px -3px rgba(0,0,0,0.1);
                    border-radius:4px;
                    align-content: flex-start;
                    margin-bottom: 10px;
                    p{
                        margin: 14px 0 0 20px;
                        width: 100%;
                        font-size: 14px;
                        color: #333;
                        line-height: 14px;
                    }
                    .dock_cs{
                        display: inline-flex;
                        justify-content: flex-start;
                        width: 100%;
                        height: 120px;
                        border-bottom: 2px solid #DDDDDD;
                        box-sizing: border-box;
                        i{
                            display: inline-flex;
                            flex-wrap: wrap;
                            align-items: center;
                            font-size: 12px;
                            color: #666;
                            align-content: center;
                            img{
                                width: 120px;
                                height: 120px;
                                margin-right: 20px;
                            }
                            u{
                                width: 100%;
                            }
                            u:nth-child(2){
                                margin: 10px 0 10px 0;
                            }
                        }
                    }
                    .set_btn{
                        display: inline-flex;
                        width: 100%;
                        margin-top: 14px;
                        justify-content: flex-end;
                        margin-right: 10px;
                        button{
                            width: 110px;
                            height: 40px;
                            border-radius: 4px;
                            border: 1px solid #3DA8D7;
                            box-sizing: border-box;
                            background: none;
                            color: #3DA8D7;
                            font-size: 12px;
                            margin-left: 20px;
                        }
                    }
                }
            }
        }
    }   
</style>