<template>
    <div class="users_box">
        <div class="users">
            <div class="users_tit">
                 <van-nav-bar
                    left-arrow
                    left-text="通知设置"
                    @click-left="onClickLeft"
                    >
                </van-nav-bar>
            </div>
            <div class="users_con SC_topbox">
                <ul>
                    <li>
                        <p>结算到账短信通知</p>
                        <div class="box">
                            <i><img src="../../img/information.png" alt=""></i>
                            <span>结算短信将发送到财务联系人手机号</span>
                        </div>
                        <van-switch v-model="checked" size="22px"/>
                    </li>
                    <li>
                        <p>结算到账短信通知</p>
                        <div class="box">
                            <i><img src="../../img/weixin.png" alt=""></i>
                            <span>结算短信将发送到财务联系人手机号</span>
                        </div>
                        <van-switch v-model="checked1" size="22px"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            checked: false,
            checked1: false
        };
    },
    methods: {
        onClickLeft() {
            console.log('返回');
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss" scoped>
    .users_box{
        height: 100%;
        background: url('../../img/public_bg.png') no-repeat;
        background-size: cover;
        position: relative;
        .users{
            display: flex;
            flex-wrap: wrap;
            height: 100%;
            overflow:hidden;
            .users_tit{
                display: inline-flex;
                width: 100%;
                height: 44px;
                align-items: center;
                justify-content: space-between;
                font-size: 17px;
                color: white;
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
            .users_con{
                height: 100%;
                height: calc(100% - 44px);   
                position: absolute;
                top: 44px;  
                box-sizing: border-box;
                padding: 0 16PX;           
                background: #F2F2F2;
                ul{
                    padding-top: 10px;
                    li{
                        display: block;
                        height: 154px;
                        width: 100%;
                        background: #FFF;
                        box-shadow: 0px 7px 7px -9px #5E5E5E;
                        margin-bottom: 10px;
                        position: relative;
                        p{
                            font-size: 14px;
                            color: #333333; 
                            padding: 10px                           
                        }
                        div.box{
                            height: 120px;
                            width: 100%;
                            i{
                                display: inline-block;
                                height: 120px;
                                width: 120px;
                                vertical-align: middle;
                                img{
                                    height: 100%;
                                }
                            }   
                            span{
                                color: #999999;
                                font-size: 12px
                            }                         
                        }
                        div.van-switch{
                            position: absolute;
                            top: 10px;
                            right: 10px;                            
                        }
                    }
                }
            }            
        }
    }
</style>

