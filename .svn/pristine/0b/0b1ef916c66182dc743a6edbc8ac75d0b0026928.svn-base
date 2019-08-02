import {LOGIN,SET_USER,SET_LANG,LOGIN_TYPE,CLEAR_USER_INFO,SAVE_USER,REDMSG,CLOSE_WEBSOCKET,WEBSOCK_SEND,SHOW_CHATWINDOW,CLOSE_CHATWINDOW,PRIVATE_CHAT} from './mutation-types'
import Vue, {AsyncComponentPromise as reject} from 'vue'
import indexedDB from "../../indexedDB";
import store from "../index";
export default {
    //登录
    // [LOGIN]: (state, data) => {
    //     return new Promise((resolve, reject) => {
    //         // 登录有效时间半小时
    //         Vue.cookies.set('login_status', true, 1800, '/');
    //     })
    // },
    // [SET_USER](state, user){
    //     // cookie中保存数据有效期，同浏览器生命周期同步
    //     Vue.cookies.set('validLocalStorage', true, '0', '/')
    //     // localStorage保存数据
    //     localStorage.setItem('user', JSON.stringify(user))
    //     state.loginStatus = JSON.parse(localStorage.getItem("user")).loginStatus
    // },
    // //语言设置
    // [SET_LANG]:(state,lang)=>{
    //     state.indexLang = lang;
    // },
    // //登录状态
    // [LOGIN_TYPE]: (state) => {
    //     state.loginStatus =  JSON.parse(localStorage.getItem("user")).loginStatus;
    // },
    // //退出登录
    // [CLEAR_USER_INFO]:({commit})=>{
    //     Vue.cookies.remove('login_status', '/')
    //     // cookie中保存数据有效期，同浏览器生命周期同步
    //     Vue.cookies.remove('validLocalStorage', '/')
    //     // localStorage保存数据
    //     localStorage.removeItem('user')
    //     // state.loginStatus = false
    //   }
  //存储用户注册信息
  [SAVE_USER]:(state,data)=>{
    if(data.status == 0){                          //注册
      state.login.Password = data.Password;        // 登录密码
      state.login.publicKey = data.publicKey;      // 公钥
      state.login.sixWordsKey = data.sixWordsKey;  // 六位码键
      state.login.sixWords = data.sixWords;
    }else if(data.status == 1){                 //登录
       state.userInfo = data      
    } 
  },
  // [Set_SixRandomKey]:(state)=>{
  //   console.log(this.$https)
  //   this.$https.get(this.API+"common/getSixRandomKeyWords").then(
  //     res=>{        
  //       state.nationality=res.data
       
  //     }
  //   )
  // }

  //红点信息
  [REDMSG]:(state,data)=>{
    state.chat.redMsg = data;
    let totalArr=Object.values(data);
    let total=0;
    for(let i of totalArr){
      total+=parseInt(i);
    }
    // console.log(total)
    state.chat.redMsgNum=total;
  },
  //踢下线 主动关闭websocket
  [CLOSE_WEBSOCKET]:(state)=>{
    //不自动重连
    state.chat.reconnect=false;
    console.log(state.chat,'我是状态20被挤掉了')
    state.chat.webSock.close();

  },
  //发送信息
  [WEBSOCK_SEND]:(state,data)=>{
    console.log(data)
    //发送信息后添加
    indexedDB.addData('senderId',data.receiver,state.chat.myChatArr,data);
    // indexedDB.roomId_addData('roomId',data);
    state.chat.webSock.send('{"to":\"'+data.receiver+'\","message":\"'+data.message+'\","roomId":\"'+data.roomId+'\"}');    //发送
  },
  //显示聊天窗口
  [SHOW_CHATWINDOW]:(state,data)=>{
    state.chat.curChatId=data.hearUserId;
    state.chat.curChatNick=data.nickName;
    // state.chat.allChatArr=data.c;
    // state.chat.chatWindow=true;
  },
  //关闭聊天窗口
  [CLOSE_CHATWINDOW]:(state)=>{
    // state.chat.chatWindow=false;
    state.chat.chatArr = [];
    state.chat.myChatArr = [];
    state.chat.chatlist = [];
    state.chat.curChatId='';
  },
  //收到信息后的回调
  [PRIVATE_CHAT]:(state,data)=>{
    console.log(data)
    //收到的消息数组
    let addData={
      createTime: data.createTime,
      headImage: data.headImage,
      message: data.message,
      userId: Number(data.sender),
      sender: Number(data.sender),
      receiver: Number(data.receiver),
      roomId:Number(data.roomId),
      timestamp:data.timestamp,
    };
    console.log('加入');
    //收到信息后添加
    indexedDB.addData('senderId',Number(data.sender),state.chat.chatArr,addData);
    // indexedDB.roomId_addData('roomId',addData,store);
  },
}
