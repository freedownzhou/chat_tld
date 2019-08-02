<template>
    <div class="nav_box">
        <transition :name="transitionName">
            <router-view class="child-view"/>
        </transition>
        <div class="nav">
            <p class="nav_manu" >
                <router-link v-for="(item,index) in linkArr" :key="index" :to='item.links' active-class="isIns">
                    <span>
                        <i class="iconfont" :class="item.clas"></i>
                        <u>{{item.name}}</u>
                    </span>
                </router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            routerIn:0,
            // home0:require('../img/tab/home0.png'),
            // home1:require('../img/tab/home1.png'),
            // buy0:require('../img/tab/buy0.png'),
            // buy1:require('../img/tab/buy1.png'),
            // sell0:require('../img/tab/sell0.png'),
            // sell1:require('../img/tab/sell1.png'),
            // my0:require('../img/tab/my0.png'),
            // my1:require('../img/tab/my1.png'),
            linkArr:[
                {links:'/Navigation/Index',name:'首页',clas:'icon-shouye'},
                {links:'/Navigation/Buy',name:'买入',clas:'icon-mairu'},
                {links:'/Navigation/Sell',name:'卖出',clas:'icon-biaoqian'},
                // {links:'/Navigation/Product',name:'产品',clas:'icon-chanpin'},
                {links:'/Navigation/OrderList',name:'订单',clas:'icon-gerenzhongxin'},
            ],
            transitionName: 'slide-left'  
        }
    },
    watch: {  
        '$route' (to, from) {  
            if(to.path == '/'){  
                this.transitionName = 'slide-right';  
            }else{  
                this.transitionName = 'slide-left';  
            }  
        }  
    },
    methods:{
        
    },
}
</script>

<style lang='scss' scoped>
.child-view {  
    position: absolute;  
    left: 0;  
    top: 0;  
    width: 100%;  
    height: 100%;  
    transition: all .3s cubic-bezier(.55,0,.1,1);  
}  
.slide-left-enter, .slide-right-leave-active {  
    opacity: 0;  
    // -webkit-transform: translate(30px, 0);  
    // transform: translate(30px, 0);  
}  
.slide-left-leave-active, .slide-right-enter {  
    opacity: 0;  
    // -webkit-transform: translate(-30px, 0);  
    // transform: translate(-30px, 0);  
}  

.nav_box{
    height: 100%;    
}
.nav{
    position: fixed;
    width: 100%;
    bottom: 0;
    border-top: 1px solid #dedede;
    .nav_manu{
        display: flex;
        height: 50px;
        background: #FAFAFA;
        justify-content: flex-start;
        padding: 0 30px 0 30px;
        justify-content: space-between;
        a{
            display: inline-flex;
            width: 48px;
            flex-wrap: wrap;
            color: #8e8e93;
            align-content: center;
            justify-content: center;
            span{
                text-align: center;
            }
            i{
                display: inline-flex;
                width: 48px;
                height: 32px;
                font-size: 24px;
                align-items: center;
                justify-content: center;
            }
            u{
                font-size: 12px;
                line-height: 12px;
            }
        }
        .isIns{
            color: #1E233F;
        }
    }
}
</style>
