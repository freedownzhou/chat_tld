<template>
    <!-- 个人信息设置 -->
    <div class="set_box" ref="pageH">
        <div class="set_box_tit" ref="titH">
            <span><a><img src="../img/icon_jyjl_l.png" alt="" @click="$router.go(-1)">个人信息设置</a></span>
            <span>
                <img src="../img/index_jl.png" alt="">
            </span>
        </div>
        <div class="set_list" :style="{height:setHeight+'px'}">
            <ul>
                <li @click="picShow = true">
                    <i>头像</i>
                    <i><img src="../img/center_test.png" alt=""></i>
                </li>
                <li @click="zhNameShow = true">
                    <router-link to="">
                        <i>账户名</i>
                        <i>二狗子</i>
                    </router-link>
                </li>
                <li class="real_name">
                    <i>真实姓名</i>
                    <i>二狗子</i>
                </li>
                <li>
                    <router-link to="/ReSetPhoneNum">
                        <i>手机号码</i>
                        <i>17836478334</i>
                    </router-link>
                </li>
                <li>
                    <router-link to="login/ForgotPassword">
                        <i>修改登录密码</i>
                        <i></i>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <i>注销账户</i>
                        <i></i>
                    </router-link>
                </li>
            </ul>
            <p class="out">
                <button>退出登录</button>
            </p>
        </div>
        <div class="picC">
            <van-popup v-model="picShow" position="bottom" :close-on-click-overlay='false'>
                <div class="ChoicePic">
                    <ul>
                        <li>拍照</li>
                        <li>从相册中选择</li>
                        <li @click="picShow=false">取消</li>
                    </ul>
                </div>
            </van-popup>
        </div>
        <div class="nameC" v-show="zhNameShow">
            <div class="choiceName">
                <p>
                    <span>账户名</span>
                    <input type="text" name="" id="" placeholder="请输入2～8位昵称">
                    <i>
                        <u @click="zhNameShow=false">取消</u>
                        <u>确定</u>
                    </i>
                </p>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    data(){
        return{
            setHeight:0,
            picShow: false,
            zhNameShow:false,
        }
    },
    mounted(){
        this.setHeight = this.$refs.pageH.clientHeight-this.$refs.titH.clientHeight;
    },
    methods:{

    }
    
}
</script>

<style lang='scss' scoped>
    .set_box{
        height: 100%;
        background: url('../img/public_bg.png') no-repeat;
        background-size: 100% 100%; 
        .set_box_tit{
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
        .set_list{
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
                align-content: flex-start;
                li{
                    display: inline-flex;
                    width: 100%;
                    height: 55px;
                    justify-content: space-between;
                    box-shadow:0px 1px 0px 0px rgba(0,0,0,0.1);
                    a{
                        display: inline-flex;
                        width: inherit;
                        height: inherit;
                        justify-content: space-between;
                    }
                    i{
                        display: inline-flex;
                        height: inherit;
                        align-items: center;
                        font-size: 14px;
                        color: #333;
                    }
                    i:last-child{
                        font-size: 12px;
                        color: #999999;
                        img{
                            width: 40px;
                            height: 40px;
                        }
                    }
                    i:last-child:after{
                        position: relative;
                        content: '';
                        width: 12px;
                        height: 24px;
                        background: url('../img/center_jt.png') no-repeat;
                        background-size: cover;
                        margin-left: 7px;
                    }
                }
                .real_name{
                    i:after{
                        display: none;
                    }
                }
            }
            .out{
                display: flex;
                width: 100%;
                justify-content: center;
                button{
                    position: absolute;
                    bottom: 20px;
                    width: 345px;
                    height: 50px;
                    color: #333333;
                    font-size: 14px;
                    background: none;
                    border-radius:4px;
                    border:1px solid #DDDDDD;
                }
            }
            
        }
        .picC{
            .van-popup--bottom {
                width: 101%;
                border-radius:8px 8px 0px 0px;
            }
            .ChoicePic{
                display: flex;
                height: 175px;
                padding: 0 16px 0 16px;
                ul{
                    display: flex;
                    width: 100%;
                    flex-wrap: wrap;
                    align-content: flex-start;
                    li{
                        display: inline-flex;
                        width: 100%;
                        height: 48px;
                        align-items: center;
                        justify-content: center;
                        box-shadow:0px 1px 0px 0px rgba(0,0,0,0.2);
                        font-size: 14px;
                        color: #333;
                    }
                }
            }
        }
        .nameC{
            position: fixed;
            display: flex;
            align-items: center;
            justify-content: center;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            .choiceName{
                display: flex;
                background: white;
                width: 315px;
                height: 175px;
                border-radius: 4px;
                p{
                    display: flex;
                    width: 100%;
                    padding: 25px 15px 28px 15px;
                    font-size: 14px;
                    color: #333;
                    flex-wrap: wrap;
                    align-content: flex-start;
                    span{
                        width: 100%;
                        text-align: center;
                        line-height: 20px;
                        margin-bottom: 15px;
                    }
                    input{
                        width: 100%;
                        height: 35px;
                        font-size: 12px;
                        box-sizing: border-box;
                        border: none;
                        border-bottom: 2px solid #3DA8D7;
                        margin-bottom: 30px;
                    }
                    input ::-webkit-input-placeholder{
                        color: #999999;
                    }
                    i{
                        display: flex;
                        width: 100%;
                        height: 20px;
                        align-items: center;
                        justify-content: flex-end;
                        padding-right: 19px;
                        u{
                            margin-left: 44px;
                        }
                    }
                }
            }
        }
    }
</style>
