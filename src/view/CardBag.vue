<template>
    <!-- 我的银行卡 -->
    <div class="card_box" ref="pageH">
        <div class="card_box_tit" ref="titH">
            <span @click="onClickLeft"><a><img src="../img/icon_jyjl_l.png" alt=""> 银行卡</a></span>
            <span>
                <img src="../img/index_jl.png" alt="">
            </span>
        </div>
        <div class="card_list">
            <ul>
                <li v-for="item in 5">
                    <p class="pic">
                        <i class="logo">
                            <img src="../img/icon_yhklg.png" alt="">
                            <u class="name">中国工商银行</u>
                        </i>
                        <i class="del"><img src="../img/icon_yhk_ljt.png" alt=""></i>
                    </p>
                    <p class="typs">
                        <i>**** **** **** 3829</i>
                        <i>借记卡</i>
                    </p>
                </li>
            </ul>
        </div>
        <div class="add"><router-link to="/AddCard">添加银行卡</router-link></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    mounted(){
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang='scss' scoped>
    .card_box{
        // height: 100%;
        background: url('../img/public_bg.png') no-repeat;
        background-size: 100% 100%; 
        .card_box_tit{
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
                    margin-left: 13px;
                }
            }
        }
        .card_list{
            display: flex;
            padding: 10px 16px 0 16px;
            flex-wrap: wrap;
            align-content: flex-start;
            ul{
                display: flex;
                width: 100%;
                flex-wrap: wrap;
                align-content: flex-start;
                li{
                    display: flex;
                    width: 100%;
                    height: 78px;
                    padding: 20px 10px 26px 10px;
                    background: white;
                    box-shadow:0px 4px 4px -4px rgba(0,0,0,0.5);
                    border-radius:4px;
                    flex-wrap: wrap;
                    align-content: space-between;
                    margin-bottom: 20px;
                   p{
                       display: inline-flex;
                       width: 100%;
                       flex-wrap: wrap;
                       align-content: center;
                       justify-content: flex-start;
                   }
                   .pic{
                       height: 24px;
                       justify-content: space-between;
                       i{
                           display: inline-flex;
                           height: inherit;
                           img{
                               width: 24px;
                               height: 24px;
                           }
                       }
                       .logo{
                           img{
                             margin-right: 20px;
                           }
                       }
                       .name{
                           font-size: 17px;
                           color: #333;
                       }
                   }
                   .typs{
                       height: 28px;
                       justify-content: space-between;
                       i{
                           display: inline-flex;
                           align-items: center;
                           height: 28px;
                       }
                       i:first-child{
                           font-size: 20px;
                           color: #333;
                       }
                       i:last-child{
                           font-size: 12px;
                           color: #999;
                       }
                   }
                }
                li:last-child{
                    margin-bottom: 100px;
                }
            }
        }
        .add{
            position: fixed;
            display: flex;
            bottom: 20px;
            width: 100%;
            height: 50px;
            a{
                display: inline-flex;
                margin: 0 16px 0 16px;
                width: 100%;
                height: inherit;
                align-items: center;
                justify-content: center;
                background: white;
                border-radius: 4px;
                font-size: 14px;
                color: #3DA8D7;
            }
        }
    }
</style>
