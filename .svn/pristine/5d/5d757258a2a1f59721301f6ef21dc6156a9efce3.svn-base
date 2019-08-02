<template>
    <!-- 更改手机号码 -->
    <div class="reset_box" ref="pageH">
        <div class="reset_box_tit" ref="titH" >
                <img src="../img/index_jl.png" alt="">
        </div>
        <div class="reset_list" :style="{height:resetHeight+'px'}">
            <ul>
                <li>
                    <i>原手机号</i>
                    <i>17836478334</i>
                </li>
                <li>
                    <i>手机验证码</i>
                    <i>
                        <input type="text" name="" v-model="captcha" placeholder="请输入验证码">
                        <button @click="getCode($event)">获取验证码</button>
                    </i>
                </li>
                <li>
                    <i>身份证/护照</i>
                    <i>
                        <input type="text" name="" v-model="IdCard" placeholder="请输入您的18 位身份证号码">
                    </i>
                </li>
                <li>
                    <i>新手机号码</i>
                    <i>
                        <input type="text" name="" v-model="account" placeholder="请输入您的手机号码">
                    </i>
                </li>
                <li>
                    <i>新手机验证码</i>
                    <i>
                        <input type="text" name="" v-model="new_captcha" placeholder="请输入验证码">
                        <button @click="getCode($event)">获取验证码</button>
                    </i>
                </li>
            </ul>
            <p class="sure">
                <button @click="next_one">确认更改</button>
            </p>
        </div>
    </div>  
</template>

<script>
export default {
    data(){
        return{
            resetHeight:0,
          // 要输入的新手机号
          account: '',
          //老手机验证码
          captcha: '',
          //新手机验证码
          new_captcha: '',
          //身份证
          IdCard:'',
          // 手机校验
          phoneFilter: new RegExp(`^1(3|4|5|7|8)\\d{9}$`),
        }
    },
    mounted(){
        this.resetHeight = this.$refs.pageH.clientHeight-this.$refs.titH.clientHeight;
    },
    methods:{
            
        }
    
}
</script>

<style lang='scss' scoped>
    .reset_box{
        height: 100%;
        background: url('../img/public_bg.png') no-repeat;
        background-size: 100% 100%; 
        .reset_box_tit{
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
        .reset_list{
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
            .sure{
                display: flex;
                width: 100%;
                justify-content: center;
                button{
                    position: absolute;
                    bottom: 20px;
                    width: 345px;
                    height: 50px;
                    color: white;
                    font-size: 14px;
                    background: none;
                    border-radius:4px;
                    background: #3DA8D7;
                    border:none;
                }
            }
        }
    }
</style>
