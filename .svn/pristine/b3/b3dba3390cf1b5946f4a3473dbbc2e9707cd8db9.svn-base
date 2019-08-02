<template>
    <div class="logouts_box">
        <div class="logouts">
            <div class="logouts_tit">
                 <van-nav-bar
                    left-arrow
                    left-text="重置Url"
                    @click-left="onClickLeft"                   
                    >
                </van-nav-bar>
            </div>
            <div class="logouts_con">
                <ul>
                    <li>
                        <div class="left">
                            查询URL
                        </div>
                        <div class="right">
                            <van-field placeholder="请输入MD5交易密码" value="17836478334"/>
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            通知URL
                        </div>
                        <div class="right">
                            <van-field placeholder="3756410864341"/>
                        </div>
                    </li>
                    <li>
                        <div class="left">签名类型</div>
                        <div class="right">
                            <van-field
                                readonly
                                clickable
                                :value="value"
                                placeholder="默认配置"
                                right-icon="arrow-down"
                                @click="showPicker = true"
                                />

                                <van-popup v-model="showPicker" position="bottom">
                                <van-picker
                                    show-toolbar
                                    :columns="columns"
                                    @cancel="showPicker = false"
                                    @confirm="onConfirm"
                                />
                                </van-popup>

                        </div>
                    </li>
                    <li>
                        <div class="left">交易密码</div>
                        <div class="right"><van-field type="password" placeholder="请输入交易密码"/></div>
                    </li>
                </ul>
                <router-link to="/view"><button>确定</button></router-link>
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
    data (){
        return {
            value: '默认配置',
            showPicker: false,
            columns: ['加密方法1', '加密方法2', '加密方法3', '加密方法4', '加密方法5']
        }
      },
    methods: {
        onClickLeft() {
            console.log('返回');
            this.$router.go(-1);
        },
        onConfirm(value) {
            this.value = value;
            this.showPicker = false;
        }
    }
}
</script>
<style lang="scss" scoped>
    .logouts_box{
        height: 100%;
        background: url('../../img/public_bg.png') no-repeat;
        background-size: cover;
        position: relative;
        .logouts{
            display: flex;
            flex-wrap: wrap;
            height: 100%;
            // overflow:hidden;
            .logouts_tit{
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
            .logouts_con{
                height: 100%;                
                height: calc(100% - 44px);  
                width: 100%; 
                position: absolute;
                top: 44px;             
                background: #FFF;
                padding: 0 16px;
                box-sizing: border-box;
                ul{
                    padding-top: 10px;
                    li{
                        padding-bottom: 10px;
                        .left{
                            display: inline-block;
                            width: 87px;
                            float: left;
                            font-size: 14px;
                            line-height: 48px;
                            height: 48px;
                            margin-right: 13px;
                        }
                        .right{
                            display: inline-block;
                            font-size: 12px;
                            color: #333333;
                            input[type="text"]{
                                display: block;
                                width: 241px;
                                height: 48px;
                            }
                            input[type="button"]{
                                // border: 1px solid  rgba(97, 97, 97,.35);
                                border: none;
                                border:#3DA8D7 solid 1px;
                                border-radius: 4px;
                                color: #3DA8D7;
                                background: #fff;
                                padding: 11px 21px;
                            }
                            div.van-cell{
                                height: 100%;
                                width: 241px;
                                line-height: 28px;
                                border: 1px solid  rgba(97, 97, 97,.35);
                                border-radius: 4px;
                            }
                            textarea{
                                // color: #999999
                                box-sizing: border-box;
                                padding: 16px;
                                height: 149px;width: 241px;
                                border:none;
                                font-size: 12px;
                                border: 1px solid  rgba(97, 97, 97,.35);
                            }
                            p{
                                padding-bottom: 10px
                            }
                            span{
                                color: #3DA8D7;                                
                            }
                        }
                    }
                    li:ntn-child(4){
                        .right{
                            border: none

                        }
                    }
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

