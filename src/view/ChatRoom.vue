<template>
    <!-- 联系卖家 -->
    <div class="chat" ref="chatH">
        <div class="chat_tit">
            <span><a><img src="../img/icon_jyjl_l.png" alt="" @click="onClickLeft"> 联系卖家</a></span>
            <span>
                <img src="../img/index_jl.png" alt="">
            </span>
        </div>
        <div class="chat_box"  ref="chatList">
            <div class="chat_info">
                <p><img src="../img/test.png" alt=""></p>
                <p>
                    <i class="name">{{contactId}}</i>
                    <i>30日成单：188</i>
                </p>
            </div>
            <div class="chat_msg" ref="chatH" id="chatBox" >
                <p class="create_time">
                    <i>2019-03-18</i>
                    <i>您已成功下单，请及时支付。（13:20:38）</i>
                </p>
              <span :class="item.sender===userId?'pay_chat_window_reply':'pay_chat_window_receive'" v-for="(item,index) in chats.chatlist" :key=index>
                <i :class="item.sender===userId?'pay_chat_window_reply_time':'pay_chat_window_receive_time'" v-if="item.createTime!=''">{{item.createTime}}</i>
                <i :class="item.sender===userId?'pay_chat_window_reply_content':'pay_chat_window_receive_content'">
                    <img class="smLogo" :src="myPic" alt="" v-if="item.sender===userId">
                    <img class="smLogo" :src="youPic" alt="" v-else>
                    <u v-html="item.message" @click="lookImg" ref="lookImg"></u>
                </i>
              </span>
            </div>
            <div class="chat_send">
                <p>
                    <i><img src="../img/jia.png" alt="" @click="chatMenu=!chatMenu"></i>
                    <textarea ref="sendBox" name="" id="" cols="30" :rows="textRow" v-model="sendMsg" v-on:input ="inputFunc(sendMsg)"></textarea>
                    <i><img src="../img/chat_send.png" alt="" @click="send(sendMsg,contactId)"></i>
                </p>
              <div class="chat_menu" v-show="chatMenu">
                <ul>
                  <li>
                    <input id="getPic" type="file" @change="getUrl" accept="image/*">
                    <img src="../img/tu.png" alt="">
                  </li>
                  <li>
                    <input id="getCamera" type="file" @change="getUrl" accept="image/*" capture="camera">
                    <img src="../img/picter.png" alt="">
                  </li>
                </ul>
              </div>
            </div>
        </div>
      <van-image-preview
        v-model="showPicUrl"
        :images="images"
      >
      </van-image-preview>
    </div>
</template>

<script>
  import indexedDB from "../indexedDB";
  import {mapState,mapGetters} from 'vuex';
    export default {
        data(){
            return{
              contactId:0,
              chat_msg:0,
              userId:'',       //用户id
              myPic:require('../img/timg.jpg'),
              youPic:require('../img/test.jpg'),
              chatArr:[],
              chatMenu:false, //更多选项
              sendMsg:'',         //发送信息
              beforeTime:'',  //之前的时间
              afterTime:'',   //现在的时间
              timeReduce:0,  //时间差
              textRow:1,     //输入框高度
              browser:'',    //浏览器名字
              roomId:'',     //房间ID
              sender:0,      //发送人ID
              receiverId:0,    //接收人ID
              picUrl:'',
              showPicUrl:false,
              images: [
                'https://img.yzcdn.cn/2.jpg'
              ]

            }
        },
        mounted(){
          this.$nextTick(() => {
            this.userId = this.userInfo.userId;
            this.receiverId = this.contactId;
            this.chatArr = this.chat.allChatArr;
            // this.getBom();
            this.goBoom();
          });
        },
        methods:{
          //把双字节的替换成两个单字节的然后再获得长度
          getBLen(str) {
            if (str == null) return 0;
            if (typeof str != "string") {
              str += "";
            }
            return str.replace(/[^\x00-\xff]/g, "01").length;
          },
          // getBom(){
          //   this.browser  = this.$RegExp.getBrowser();
          //   if(this.browser=='Chrome'){
          //     this.textRow = 2;
          //   }
          //   if(this.browser=='Firefox'){
          //     this.textRow = 1;
          //   }
          // },
          //聊天框高度变化
          inputFunc(msg){
            this.getBLen(msg);
            if(this.getBLen(msg)>30){
              if(this.browser=='Chrome'){
                this.textRow = 3;
              }
              if(this.browser=='Firefox'){
                this.textRow = 2;
              }
            }else{
              if(this.browser=='Chrome'){
                this.textRow = 2;
              }
              if(this.browser=='Firefox'){
                this.textRow = 1;
              }
            }
          },
          //发送或接收消息后到窗口底部
          goBoom(){
            this.$nextTick(() => { //使用nextTick为了保证dom元素都已经渲染完毕
              let div = document.getElementById('chatBox');
              // alert(div.scrollHeight);
              setTimeout(function() {
                div.scrollTop = div.scrollHeight
                //实例初始化
              },100)
            });
          },
          //发送信息
          send(msg,contactId){
            if(this.roomId == ''){
            this.roomId = this.userInfo.userId.toString()+contactId;
            console.log(Number(this.roomId))
            }
            let addData = {};
            let now = new Date();
            let nowTime = this.$RegExp.getNowTime(now);
            let timestamp = new Date().getTime();
            console.log(timestamp)
            let sender = this.userInfo.userId;
            let spenName = this.userInfo.userAccountName;
            let onDay = 86400;
            console.log(sender)
            if(msg==''||msg==null||msg==undefined){
              // this.$message('请输入内容');
              return
            }else{
              this.beforeTime = this.afterTime;
              this.afterTime = (new Date()).getTime();
              this.timeReduce = (this.afterTime-this.beforeTime)/1000;
            }
            if(this.beforeTime!=''){
              if(this.timeReduce<180){
                nowTime='';
              }else if(this.timeReduce>=onDay){
                nowTime = this.$RegExp.getNowFormatDate();
              }
            }
            addData = {
              createTime:nowTime,
              headImage:require('../img/test.jpg'),
              message:msg,
              sender:sender,
              roomId:Number(this.roomId),
              receiver:Number(contactId),
              nickName:sender,
              timestamp:timestamp,
            }
            this.sendMsg = '';
            this.$store.commit('WEBSOCK_SEND',addData);
            // console.log(this.chats);
            this.goBoom();
            this.inputFunc();
            this.chatArr = this.chats.allChatArr
            // console.log(this.chats)
            // console.log('打印')
            let p = this.receiverId.toString()
            this.chats.redMsg[p][0].message  = msg
            localStorage.setItem('hongdian', JSON.stringify(this.chats.redMsg));
          },
          onClickLeft() {
            console.log('返回');
            this.$store.commit('CLOSE_CHATWINDOW');
            this.$router.go(-1);
          },
          //查看大图
          lookImg(e){
            let imgUrl = e.path[0].currentSrc;
            if (e.path[0].currentSrc){
              this.showPicUrl = true;
              this.images[0] = imgUrl;
            }
          },
          //发送并压缩图片
          getUrl(e){
            let addData = {};
            let now = new Date();
            let nowTime = this.$RegExp.getNowTime(now);
            let timestamp = new Date().getTime();
            let sender = this.userInfo.userId;
            let onDay = 86400;
            let that = this;
            let maxSize = 1024;//图片最大数字
            this.beforeTime = this.afterTime;
            this.afterTime = (new Date()).getTime();
            this.timeReduce = (this.afterTime-this.beforeTime)/1000;//新建一个FileReader对象
            let file = e.target.files[0];       //获取图片对象
            let reader = new FileReader();
            reader.readAsDataURL(file);         //读取文件url
            reader.onloadend = function (e) {
              let imgSize = Math.ceil(e.total/1024);
              that.picUrl = e.target.result;//通过e,输出图片的base64码
              if(that.beforeTime!=''){
                if(that.timeReduce<180){
                  nowTime='';
                }else if(that.timeReduce>=onDay){
                  nowTime = that.$RegExp.getNowFormatDate();
                }
              }
              console.log(imgSize+'kb')
              if (imgSize>maxSize){
                let image = new Image();
                image.src = e.target.result
                image.onload = function () {
                  let canvas = document.createElement('canvas');
                  let context = canvas.getContext('2d');
                  let imageW = image.width/4;
                  let imageH = image.height/4;
                  canvas.width = imageW;
                  canvas.height = imageH;
                  context.drawImage(image,0,0,imageW,imageH);
                  that.picUrl = canvas.toDataURL('image/jpeg/png');
                  let yimgSize = Math.ceil(that.picUrl.length/512); //讲字符串长度换算成KB
                  if (yimgSize>10240){
                    that.$notify('发送失败,图片大于10M');
                  }else{
                    addData = {
                      createTime:nowTime,
                      headImage:require('../img/test.jpg'),
                      message: `<img src='${that.picUrl}'/>`,
                      sender:sender,
                      roomId:Number(this.roomId),
                      receiver:Number(that.contactId),
                      nickName:sender,
                      timestamp:timestamp,
                      type:2,
                    }
                    that.$store.commit('WEBSOCK_SEND',addData);
                    that.goBoom();
                    that.inputFunc();
                    that.chatArr = that.chats.allChatArr;
                  }
                }
              }else{
                addData = {
                  createTime:nowTime,
                  headImage:require('../img/test.jpg'),
                  message: `<img src='${that.picUrl}'/>`,
                  sender:sender,
                  roomId:Number(this.roomId),
                  receiver:Number(that.contactId),
                  nickName:sender,
                  timestamp:timestamp,
                  type:2,
                }
                that.$store.commit('WEBSOCK_SEND',addData);
                that.goBoom();
                that.inputFunc();
                that.chatArr = that.chats.allChatArr;
              }
            };
          }
        },
      created() {
          this.contactId = this.$route.query.sendId
          this.roomId = this.$route.query.roomId
        this.goBoom();
        // console.log('重复')
        // console.log(this.chat.allChatArr)
      },
      computed: {
        ...mapState(['userInfo','chat']),
        ...mapGetters(['chats'])
      },
      watch:{
        'chat.chatlist.length'(n,o){
          console.log(n,o,1111111111111)
          console.log(this.chats.chatlist,1111111111111)
          this.goBoom();
        }
      },
    }
</script>

<style lang='scss'>
  /*.height1{*/
  /*  height: 500px!important;*/
  /*}*/
  /*.height2{*/
  /*  height: 580px!important;*/
  /*}*/
  .chat{
        height: 100%;
        background: url('../img/public_bg.png') no-repeat;
        background-size: 100% 100%; 
        overflow: hidden;
        .chat_tit{
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
        .chat_box{
            display: flex;
            height: 100%;
            background: #F2F2F2;
            flex-wrap: wrap;
            align-content: flex-start;
            .chat_info{
                display: flex;
                width: 100%;
                padding: 0 0 0 15px;
                align-items: center;
                height: 70px;
                margin-top: 10px;
                background: white;
                box-shadow:0px 4px 4px -4px rgba(0,0,0,0.5);
                border-radius:4px;
                p{
                    display: inline-flex;
                    flex-wrap: wrap;
                }
                p:first-child{
                    width:55px;
                    height:55px;
                    background:rgba(255,255,255,1);
                    box-shadow:0px 4px 4px -3px rgba(0,0,0,0.5);
                    border-radius: 50%;
                    align-items: center;
                    justify-content: center;
                    margin-right: 23px;
                    img{
                        width: 50px;
                        height: 50px;
                    }
                }
                p:last-child{
                    align-content: center;
                    i{
                        width: 100%;
                        font-size: 12px;
                        line-height: 12px;
                        color: #999;
                    }
                    .name{
                        font-size: 14px;
                        line-height: 14px;
                        color: #333;
                        margin-bottom: 5px;
                    }
                }
            }
            .chat_msg{
                display: flex;
                width: 100%;
                height: 400px;
                overflow: scroll;
                align-content: flex-start;
                flex-wrap: wrap;
                .create_time{
                    margin: 10px 0 26px 0;
                    display: inline-flex;
                    width: 100%;
                    flex-wrap: wrap;
                    align-content: flex-start;
                    i{
                        width: 100%;
                        text-align: center;
                        font-size: 12px;
                        color: #333333;
                        line-height: 12px;
                    }
                    i:last-child{
                        color: #999;
                        margin-top: 10px;
                    }
                }
                ul{
                    display: flex;
                    padding: 0 16px 0 16px;
                    width: 100%;
                    flex-wrap: wrap;
                    li{
                        display: inline-flex;
                        width: 100%;
                        margin-bottom: 10px;
                        flex-wrap: wrap;
                        span{
                            display: inline-flex;
                            width: 100%;
                            height: 24px;
                            justify-content: center;
                            margin-bottom: 20px;
                            u{
                                display: inline-flex;
                                align-items: center;
                                justify-content: center;
                                padding: 0 10px 0 10px;
                                height: inherit;
                                background: #D8D8D8;
                                border-radius: 4px;
                                font-size: 12px;
                                color:#333;


                            }
                        }
                    }
                    li:last-child{
                        margin-bottom: 40px;
                    }
                    .you{
                        justify-content: flex-start;
                        i{
                            display: inline-flex;
                            align-content: flex-start;
                        }
                        .msg_Logo{
                            img{
                                width: 38px;
                                height: 38px;
                                margin-right: 10px;
                            }
                        }
                        .msg_box{
                            width: 205px;
                            padding: 10px;
                            background: white;
                            font-size: 12px;
                            color: #333;
                            line-height: 17px;
                            border-radius: 4px;
                        }
                    }
                    .me{
                        justify-content: flex-end;
                        i{
                            display: inline-flex;
                            align-content: flex-start;
                        }
                        .msg_Logo{
                            img{
                                width: 38px;
                                height: 38px;
                                margin-left: 10px;
                            }
                        }
                        .msg_box{
                            width: 205px;
                            padding: 10px;
                            background:#3DA8D7;
                            font-size: 12px;
                            color: #FFFFFF;
                            line-height: 17px;
                            border-radius: 4px;
                        }
                    }
                }

            }
          .chat_send{
            position: fixed;
            bottom: 0;
            display: flex;
            width: 100%;
            /*height: 64px;*/
            background: white;
            flex-wrap: wrap;
            p{
              display: flex;
              width: 100%;
              padding: 10px 16px 10px 16px;
              align-items: center;
              justify-content: space-between;
              i{
                display: inline-flex;
                img{
                  width: 24px;
                  height: 24px;
                }
              }
              textarea{
                width: 275px;
                height: 44px;
                background:#F2F2F2;
                border-radius:4px;
                border:1px solid #DDDDDD;
                resize: none;
              }
            }
            .chat_menu{
              display: flex;
              width: 100%;
              padding: 0 30px 25px 30px;
              ul{
                display: flex;
                width: 100%;
                flex-wrap: wrap;
                li{
                  position: relative;
                  display: inline-flex;
                  width: 38px;
                  height: 38px;
                  align-items: center;
                  justify-content: center;
                  margin-right: 30px;
                  input{
                    width: 24px;
                    height: 20px;
                    outline: none;
                    opacity: 0;
                    z-index: 1;
                  }
                  img{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                  }
                }
              }
            }
          }
          .pay_chat_window_receive{
            display: flex;
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
            margin: 0 auto 35px auto;
            min-width: 275px;
            .pay_chat_window_receive_time{
              display: block;
              text-align: center;
              font-size: 11px;
              color: #333;
              padding: 0 5px 0 5px;
              height: 20px;
              line-height: 20px;
              background: #CFCFCF;
              border-radius: 3px;
              margin: 5px 0 5px 0;
            }
            .pay_chat_window_receive_content{
              display: inline-flex;
              width: 100%;
              margin-left: 15px;
              .smLogo{
                width: 25px;
                height: 25px;
                margin-right: 10px;
                border-radius: 50%;
              }
              u{
                display: inline-flex;
                max-width: 157px;
                padding:10px;
                background: #55ADD6;
                border-radius: 4px;
                color: white;
                font-size: 14px;
                img{
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
          .pay_chat_window_reply{
            display: flex;
            justify-content: center;
            width: 100%;
            flex-wrap: wrap;
            margin: 0 auto 35px auto;
            min-width: 275px;
            .pay_chat_window_reply_time{
              display: block;
              text-align: center;
              font-size: 11px;
              color: #333;
              padding: 0 5px 0 5px;
              height: 20px;
              line-height: 20px;
              background: #CFCFCF;
              border-radius: 3px;
              margin: 0 0 10px 0;
            }
            .pay_chat_window_reply_content{
              position: relative;
              display: block;
              width: 100%;
              margin-right: 15px;
              .smLogo{
                float: right;
                width: 25px;
                height: 25px;
                border-radius: 50%;
                margin-left: 10px;
              }
              u{
                display: inline-flex;
                max-width: 157px;
                padding:10px;
                background: #55ADD6;
                border-radius: 4px;
                color: white;
                font-size: 14px;
                float: right;
                img{
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      .van-image-preview__index{
        opacity: 0;
      }
    }   
</style>
