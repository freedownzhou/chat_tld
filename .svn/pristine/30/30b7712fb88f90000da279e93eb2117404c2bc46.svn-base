<template>
    <div class="companys_box">
        <div class="companys">
            <div class="companys_tit">
                 <van-nav-bar
                    left-arrow
                    left-text="我的门店"
                    @click-left="onClickLeft"                   
                    >
                </van-nav-bar>
            </div>
            <div class="companys_cons">
                <div class="companys_con">
                    <div class="companys_content">
                        <ul>
                            <li v-for="(items,ind) in LinkArrs" :key="ind">
                                <p class="tops">
                                    <!-- :src="items.image" -->
                                    <i><img src="../../img/test.png" alt=""></i>
                                    <span>{{items.name}}</span>
                                </p>
                                <div class="centers">
                                    <div>
                                        {{items.leftTitle}}
                                        <b>{{items.leftSub}}</b>
                                    </div>
                                    <div>
                                        {{items.rightTitle}}
                                        <b>{{items.rightSub}}</b>
                                    </div>
                                </div>
                                <P class="bottoms">
                                    <span>{{items.times}}</span>
                                    <router-link :to="items.Links"><button>查看详情</button></router-link>                                
                                </P>
                            </li>
                        </ul>
                    </div>
                </div>                
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
    data (){
        return {
           LinkArrs:[
                {
                   Links:"/view/UserSettings/Company/CompanyDetail",
                   name:"xxx公司",
                   image:"../../img/test.png",
                   leftTitle:"17837283822",
                   leftSub:"登录名称",
                   rightTitle:"商户管理员",
                   rightSub:"用户角色",
                   times:"2019-03-08 13:28"
                },
                {
                   Links:"/view/UserSettings/Company/CompanyDetail1",
                   name:"xxx公司",
                   image:"../../img/test.png",
                   leftTitle:"17837283822",
                   leftSub:"登录名称",
                   rightTitle:"商户管理员",
                   rightSub:"用户角色",
                   times:"2019-03-08 13:28"
                },
                {
                   Links:"/view/UserSettings/Company/CompanyDetail2",
                   name:"xxx公司",
                   image:"../../img/test.png",
                   leftTitle:"17837283822",
                   leftSub:"登录名称",
                   rightTitle:"商户管理员",
                   rightSub:"用户角色",
                   times:"2019-03-08 13:28"
                },
                {
                   Links:"/view/UserSettings/Company/CompanyDetail3",
                   name:"xxx公司",
                   image:"../../img/test.png",
                   leftTitle:"17837283822",
                   leftSub:"登录名称",
                   rightTitle:"商户管理员",
                   rightSub:"用户角色",
                   times:"2019-03-08 13:28"
                }
           ]
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
    .companys_box{
        height: 100%;
        background: url('../../img/public_bg.png') no-repeat;
        background-size: cover;
        position: relative;
        .companys{
            display: flex;
            flex-wrap: wrap;
            height: 100%;
            // overflow:hidden;
            .companys_tit{
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
            .companys_cons{
                height: 100%;                
                height: calc(100% - 44px);  
                width: 100%; 
                position: absolute;
                top: 44px;             
                background: #F2F2F2;
                box-sizing: border-box;
                overflow: hidden;
                .companys_con{
                    height:100%;
                    width: 100%;
                    overflow: auto;
                    box-sizing: border-box;
                    padding: 0 16px;
                    background:#F2F2F2;
                    .companys_content{
                        ul{   
                            background: #F2F2F2;                 
                            li{
                                margin-top: 10px;
                                background: #fff;
                                padding: 10px 16px;
                                p.tops{
                                    height: 28px;
                                    width: 100%;
                                    font-size: 14px;
                                    i{
                                        display: inline-block;
                                        width: 28px;
                                        height: 28px;
                                        vertical-align: middle;
                                        margin-right: 9px;
                                    
                                        img{
                                            height: 100%;
                                            width: 100%
                                        }
                                    }
                                }
                                div.centers{
                                    font-size: 14px;
                                    color: #333333;
                                    width: 100%;
                                    height: auto;;                              
                                    margin-top: 6px ;
                                    margin-bottom: 9px;
                                    padding: 20px 0;
                                    display: flex;
                                    justify-content: space-between;
                                    border-top: 1px solid #ddd;
                                    border-bottom: 1px solid #ddd;
                                    div{
                                        flex: 1;
                                        font-size: 14px;
                                        line-height: 25px;
                                        b{
                                            display: block;
                                            font-weight: normal;
                                            font-size: 12px;
                                            color: #999
                                        }
                                    }
                                }
                                p.bottoms{
                                    height: 32px;
                                    width: 100%;
                                    span{
                                        font-size: 12px;
                                        color: #999;
                                        line-height: 32px
                                    }
                                    a button{
                                        float: right;
                                        font-size: 14px;
                                        padding: 7px 15px;
                                        box-sizing: border-box;
                                        border:none;
                                        border: solid 1px #3DA8D7;
                                        border-radius: 4px;
                                        color:  #3DA8D7;
                                        text-align: center;
                                        background: #FFF;
                                    }
                                }
                            }                    
                        }
                    }
                }                
            }            
        }
    }
</style>

