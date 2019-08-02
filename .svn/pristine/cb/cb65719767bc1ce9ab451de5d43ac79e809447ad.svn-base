<template>
    <div class="logouts_box">
        <div class="logouts">
            <div class="logouts_tit">
                 <van-nav-bar
                    left-arrow
                    left-text="生成密钥"
                    @click-left="onClickLeft"                   
                    >
                </van-nav-bar>
            </div>
            <div class="logouts_con">
               <ul>
                   <li>
                       <p>RSA私钥<span>（PKCS8格式，PKCS1请自动转换）</span></p>
                       <textarea name="" id="" cols="30" rows="10"></textarea>
                   </li>
                   <li>
                        <p>RSA公钥<span>（请复制到设置RSA公钥）</span></p>
                       <textarea name="" id="" cols="30" rows="10"></textarea>
                   </li>
               </ul>
               <div class="btn">
                    <button>自动生成</button>
                    <router-link to="/Generatekey"><button>确定</button></router-link>
               </div>
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
     data (){
        return {
          
        }
      },
    methods: {
        onClickLeft() {
            console.log('返回');
            this.$router.go(-1);
        },
        onClickRight() {
            console.log('按钮');
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
                        p{
                            font-size: 14px;
                            color: #333333;
                            padding:10px 0;
                            span{
                                color: #D0021B;
                                font-size: 12px
                            }
                        }
                        
                        textarea{
                            box-sizing: border-box;
                            padding: 16px;
                            height: 169px;
                            width: 100%;
                            border:none;
                            font-size: 12px;
                            border-radius: 4px;
                            border: 1px solid  rgba(97, 97, 97,.35);
                        }
                    }
                    li:ntn-child(4){
                        .right{
                            border: none

                        }
                    }
                }
                .btn{
                    position: absolute;
                    bottom: 19px;
                    left: 50%;
                    transform: translate(-50%);
                    width: 100%;
                    display: flex;
                    justify-content: space-between;                    
                    button{
                        background:rgba(61,168,215,1);
                        height: 48px;
                        width: 160px;
                        text-align: center;
                        border: none;color: #fff;
                        border-radius:4px;
                        margin: 0 16px;
                    }
                }
            }            
        }
    }
</style>

