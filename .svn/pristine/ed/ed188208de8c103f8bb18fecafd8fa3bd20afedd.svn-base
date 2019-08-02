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
                <van-cell title="门店" is-link to="/view/UserSettings/Company"/>
                <van-field type="text" label="登录名称" placeholder="请输入登录名称"/>
                <van-field type="text" label="用户名称" placeholder="请输入用户名称"/>                
                <van-cell title="修改登录密码" is-link to="login/ForgotPassword"/>
                <van-cell title="注销账户" is-link  to="/view/UserSettings/LogoutAccount" />
                <button class="sub">查询</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
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
                background: #FFF;
                div.van-cell{
                    border-top: solid 1px rgba(0, 0, 0, .1);
                    padding-left:0;
                    padding-right:0;
                }
                button{
                    position: absolute;
                    bottom: 19px;
                    left: 50%;
                    transform: translate(-50%);
                    background:rgba(61,168,215,1);
                    height: 48px;
                    width: 343px;
                    text-align: center;
                    border: none;color: #fff;
                    border-radius:4px;
                }
            }            
        }
    }
</style>

