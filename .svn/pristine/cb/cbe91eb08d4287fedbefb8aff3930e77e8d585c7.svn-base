<template>
    <!-- 对接设置 -->
    <div class="dock">
        <div class="dock_tit">
            <span @click="onClickLeft"><a><img src="../img/icon_jyjl_l.png" alt="">对账单</a></span>
        </div>
        <div class="dock_list">
            <div class="Calendars">
                <Calendar ref="Calendar"
                    v-on:choseDay="clickDay"
                    v-on:changeMonth="changeDate"  
                    :markDateMore="this.arr"                  
                    >
                </Calendar>
            </div>
            <p> 
                <span class="title">TIPS:</span>
                <span>仅支持一年内的对账单，若日交易超过500笔则excel对账 单自动变为csv格式</span>
            </p>            
        </div>
    </div>
</template>

<script>
    import Calendar from 'vue-calendar-component';
    export default {
        data(){
            return{
                arr:[{date:'2019/6/20',className:"mark1"}, {date:'2019/6/21',className:"mark2"}]
            }
        },
        mounted(){
           
        },
        components:{
            Calendar

        },
        methods:{            
            onClickLeft() {
                this.$router.go(-1);
            },
            clickDay(time) {
                this.arr.push(
                    {date:time,className:"mark1"}
                )
                console.log(time); //选中某天
            },
            changeDate(data) {
                console.log(data); //左右点击切换月份
            },
            clickToday(data) {
                console.log(data); //跳到了本月
            }
        }
    }
</script>



<style lang='scss' scoped>
  .dock{
        background: url('../img/public_bg.png') no-repeat;
        background-size: 100% 100%; 
        overflow: hidden;
        height: 100%;
        .dock_tit{
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
                a{
                    display: inherit;
                    align-items: center;
                    img{
                        width: 12px;
                        height: 24px;
                        margin: 0 10px 0 0;
                    }
                }
            }
        }
        .dock_list{            
            height: 100%;
            padding: 15px 16px 0 16px;
            background: #FFF;
            .Calendars{
                height: 321px;
                width: 100%;
                .mark1{
                    color: red !important;
                    background: blue;
                }
            }
            p{
                color:rgba(153,153,153,1);
                padding-top:20px;
                font-size: 12px;
                height: auto;
                width: 100%;
                display: flex;
                line-height: 17px;                
                span.title{  
                    float: left;              
                    display: inline-block;
                    width:auto;
                    height: 100%;
                }
            }
        }
    }   
</style>