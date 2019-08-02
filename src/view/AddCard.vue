<template>
    <!-- 添加银行卡 -->
    <div class="add_box" ref="pageH">
        <div class="add_box_tit" ref="titH">
            <span @click="onClickLeft"><a><img src="../img/icon_jyjl_l.png" alt="">银行卡</a></span>
            <span>
                <img src="../img/index_jl.png" alt="">
            </span>
        </div>
        <div class="add_list" :style="{height:resetHeight+'px'}">
            <ul>
                <li>
                    <i>持卡人</i>
                    <i>王大锤</i>
                </li>
                <li>
                    <i>身份证号码</i>
                    <i>
                        <input type="text" name="" id="" placeholder="请输入您的18 位身份证号码">
                    </i>
                </li>
                <li>
                    <i>银行卡卡号</i>
                    <i>
                        <input type="text" name="" id="" placeholder="请输入您的银行卡卡号">
                    </i>
                </li>
                <li>
                    <i>手机号码</i>
                    <i>
                        <input type="text" name="" id="" placeholder="请输入您的手机号码">
                    </i>
                </li>
                <li>
                    <i>手机验证码</i>
                    <i>
                        <input type="text" name="" id="" placeholder="请输入验证码">
                        <button>获取验证码</button>
                    </i>
                </li>
            </ul>
            <p class="goxy"><router-link to="">《用户协议》</router-link></p>
        </div>
        <p class="sure">
            <button>同意协议并绑定</button>
        </p>
    </div>  
</template>

<script>
export default {
    data(){
        return{
            resetHeight:0,
  
        }
    },
    mounted(){
        this.resetHeight = this.$refs.pageH.clientHeight-this.$refs.titH.clientHeight;
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1);
        }
    }
    
}
</script>

<style lang='scss' scoped>
    .add_box{
        height: 100%;
        background: url('../img/public_bg.png') no-repeat;
        background-size: 100% 100%; 
        .add_box_tit{
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
            }
            span:first-child{
                a{
                    display: inherit;
                    align-items: center;
                    img{
                        width: 12px;
                        height: 24px;
                        margin-right: 10px;
                    }
                }
            }
            span:last-child{
                img{
                    width: 24px;
                    height: 24px;
                }
            }
        }
        .add_list{
            display: flex;
            padding: 0 16px 0 16px;
            background: white;
            flex-wrap: wrap;
            align-content: flex-start;
            position: relative;
            ul{
                display: flex;
                width: 100%;
                flex-wrap: wrap;
                li{
                    position: relative;
                    display: inline-flex;
                    width: 100%;
                    height: 55px;
                    box-shadow:0px 1px 0px 0px rgba(0,0,0,0.1);
                    justify-content: flex-start;
                    margin-bottom: 1px;
                    i{
                        display: inline-flex;
                        height: inherit;
                        align-items: center;
                        font-size: 14px;
                        color:#333333;
                    }
                    i:first-child{
                        width: 115px;
                    }
                    i:last-child{
                        flex: 1;
                        input{
                            width: 100%;
                            height: inherit;
                            border: none;
                            box-sizing: border-box;
                        }
                        input::-webkit-input-placeholder{
                            font-size: 12px;
                            color: #999999;
                        }
                        button{
                            position: absolute;
                            right: 0;
                            width: 100px;
                            height: 40px;
                            border-radius:4px;
                            background: #3DA8D7;
                            color: white;
                            border: none;
                            font-size: 14px;
                        }
                    }
                }
            }
            .goxy{
                display: flex;
                width: 100%;
                justify-content: flex-end;
                margin-top: 235px;
                font-size: 14px;
                color: #3DA8D7;
                a{
                    color: inherit;
                }
            }
        }
        .sure{
            position: fixed;
            display: flex;
            bottom: 20px;
            width: 100%;
            height: 50px;
            button{
                margin: 0 16px 0 16px;
                width: 100%;
                height: inherit;
                box-sizing: border-box;
                background: #3DA8D7;
                border: none;
                border-radius: 4px;
                font-size: 14px;
                color: white;
            }
        }
    }
</style>
