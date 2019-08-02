<template>
    <div class="users_box">
        <div class="users">
            <div class="users_tit">
                 <van-nav-bar
                    left-arrow
                    left-text="用户设置"
                    @click-left="onClickLeft"
                    >
                </van-nav-bar>
            </div>
            <div class="users_con SC_topbox">
                <div class="Businform">
                    <p>商户信息</p>
                    <van-cell title="商户名"  :value="this.MerchantName" />
                    <van-cell title="商户号"  :value="this.MerchantNumber" />
                    <van-cell title="商户logo" is-link value="修改" />
                    <van-cell title="绑定手机号" is-link :value="this.Phone" to="/ReSetPhoneNum"/>
                    <van-cell title="绑定银行账户" is-link :value="this.BankAccount" to="/CardBag"/>
                    <van-cell title="实时到账"  value="开通请咨询业务经理申请" /> 
                </div>
                <div class="RateLimit">
                    <p>费率及限额</p>                    
                    <van-cell title="借记卡" is-link :value="this.Rate1" />
                    <van-cell title="信用卡" is-link :value="this.Rate2" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            MerchantName:"武大郎烧饼",
            MerchantNumber:"18723837283",
            Phone:"187****7283",
            BankAccount:"2387247021384710",
            Rate1:"千分之八",
            Rate2:"千分之八"
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
                width: 1000%;
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
                background: #f2f2f2;
                >div{
                    background: #FFF;
                    margin-bottom: 20px;
                    border-radius: 4px;
                    box-shadow: 0px 7px 7px -6px #5E5E5E;  
                    >P{
                        font-size: 16px;
                        color: #333;
                        margin: 10px 0;
                        padding: 10px 10px 0;
                    }
                    >P:before{
                        content: "";
                        border: 3px solid #3DA8D7;
                        height: 15px;
                        border-radius: 4px;
                        margin-right: 11px;
                    }
                }
                div.van-cell{
                    border-bottom: solid 1px rgba(0, 0, 0, .1);
                    padding-left:10px;
                    padding-right:10px;
                    vertical-align: middle;
                    line-height: 29px;
                    .van-cell__title{
                        font-size: 14px;
                        color: #333333
                    }
                    .van-cell__value{
                        font-size: 12px;
                        color: #999999;
                    }
                    i.van-icon{
                        margin-top: 1.5px
                    }

                }               
            }            
        }
    }
</style>

