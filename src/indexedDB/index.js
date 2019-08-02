
import store from '../store/index'

export default {
  //  //打开数据库
  //  openDB(dbName, tabName, db, listName, callBack) {
  //      let indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
  //      let request = indexedDB.open(dbName);
  //      //数据库打开失败
  //      request.onerror = function (event) {
  //          console.log('打开数据库失败',event)
  //      };
  //    //数据库打开成功
  //      request.onsuccess = function (event) {
  //          db = event.target.result;
  //          let transaction = db.transaction([tabName], 'readwrite');
  //          let objectStore = transaction.objectStore(tabName);
  //          if (callBack && (typeof callBack === 'function')) {
  //            console.log(objectStore)
  //            callBack(db, tabName);
  //          }
  //          // console.log('打开成功',objectStore);
  //          // console.log(transaction.objectStore(tabName))
  //      };
  //      //数据更新
  //      request.onupgradeneeded = function (event) {
  //          let db = event.target.result;
  //          console.log(tabName,listName,111111111111)
  //          let objectStore = db.createObjectStore(tabName, { keyPath: listName, autoIncrement: true });
  //          console.log('版本更新了', this.db, objectStore);
  //      };
  //  },
  //  //获取数据
  //  getData: function (db, storename,dataArr) {
  //      let store = db.transaction(storename).objectStore(storename);
  //      let keyRange = IDBKeyRange.lowerBound(0);
  //      let cursorRequest = store.openCursor(keyRange);
  //      cursorRequest.onsuccess = function (e) {
  //          let result = e.target.result;
  //          if (!!result == false) {
  //              return;
  //          }
  //          dataArr.push(result.value);
  //          result.continue();//这边执行轮询读取
  //      };
  //      cursorRequest.onerror = function (e) {
  //          console.log('获取失败')
  //      }
  //  },
  //
  //  //添加数据
  //  addData: function (db, storename, dataArr) {
  //      let transaction = db.transaction(storename, 'readwrite');
  //      let objectStore = transaction.objectStore(storename);
  //      objectStore.add(dataArr);
  //  },
  //  //查询数据
  // inquireData:function (dbName,objectStoreName, selectArgument)  {
  //   let request = indexedDB.open(dbName);
  //   request.onsuccess = function(success){
  //     let db = success.target.result;
  //     let transaction = db.transaction([objectStoreName],'readwrite');
  //     let objectStore = transaction.objectStore(objectStoreName);
  //     console.log(objectStore);
  //     let getResult = objectStore.get(selectArgument);
  //     getResult.onsuccess = function(e){
  //       console.log(e);
  //       console.log( e.target.result);
  //     }
  //   }
  // }



  //打开数据库
  openDB(dbName) {
    let indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
    let request = indexedDB.open(dbName);
    //数据库打开失败
    request.onerror = function (event) {
      console.log('打开数据库失败',event)
    };
    //数据库打开成功
    request.onsuccess = function (event) {
      let db = event.target.result;
      store.state.chat.db = event.target.result;
      console.log('打开成功', store.state.chat.db)
    };

    //数据更新
    request.onupgradeneeded = function (event) {
      let db = event.target.result;
      if (!db.objectStoreNames.contains('senderId')) {
        let objectStore = db.createObjectStore('senderId', { keyPath: 'id', autoIncrement: true });
        console.log(objectStore,'我更新了');
        objectStore.createIndex('sender','sender',{
          unique:false
        });
        objectStore.createIndex('roomId','roomId',{
          unique:false
        });
        objectStore.createIndex('mergeMsg',['sender','receiver']);
      }
    }
  },

  // room_openDB(db,dbName) {
  //   console.log(db,dbName)
  //   if (!db.objectStoreNames.contains('roomId')) {
  //     db.close();
  //     let indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
  //     let version =  parseInt(db.version);
  //     let secondRequest = indexedDB.open(dbName, version+1);
  //     secondRequest.onupgradeneeded = function (event) {
  //       let database = event.target.result;
  //       let objectStore = database.createObjectStore('roomId', { keyPath: 'roomId', autoIncrement: false });
  //       console.log('版本更新了',database, objectStore);
  //     };
  //     secondRequest.onsuccess = function (e) {
  //
  //     }
  //   }else{
  //     console.log('有这个表')
  //     console.log(store)
  //   }
  // },

  //查询我发的信息
  // queryMergeMsg(db,send_name,accept_name,dataArr,ques,qsc){
  //   let that = this;
  //   let transaction = db.transaction(['senderId'],'readonly');
  //   let store=transaction.objectStore('senderId');
  //   let index = store.index('mergeMsg');
  //   let request = index.openCursor(IDBKeyRange.only([send_name,accept_name]));
  //   request.onsuccess = function (e) {
  //     let result = e.target.result;
  //     if (result){
  //       dataArr.push(result.value)
  //       result.continue();//这边执行轮询读取
  //     }else{
  //       that.querySendId(db,accept_name,dataArr,ques,qsc);
  //     }
  //   }
  // },

  //查对方ID的历史记录
  // querySendId(db,sendName,dataArr,ques,qsc){
  //   let transaction = db.transaction(['senderId']);
  //   let stores=transaction.objectStore('senderId');
  //   let index = stores.index('sender');
  //   let request=index.openCursor(IDBKeyRange.only(sendName));
  //   request.onsuccess = function (e) {
  //     let result = e.target.result;
  //     if (result) {
  //       ques.push(result.value);
  //       result.continue();//这边执行轮询读取
  //     }else{
  //       let c = ques.concat(dataArr);
  //       c.sort(function(a,b){
  //         if(a.timestamp<b.timestamp){
  //           return -1;
  //         }else if(a.timestamp>b.timestamp){
  //           return 1;
  //         }
  //         return 0;
  //       })
  //       store.commit('SHOW_CHATWINDOW',{c,qsc});
  //     }
  //   }
  // },

  //关闭数据库
  closeDb(){
    store.state.chat.db.close();
    console.log('我关闭了')
  },

  //获取数据，暂时没用
  getData: function (storename,dataArr) {
    // console.log(dbName.transaction);
    console.log(store.state.chat.db)
    let transaction = store.state.chat.db.transaction([storename], "readonly");
    let objectStore = transaction.objectStore('send_name');
    let cursorRequest = objectStore.openCursor();
    cursorRequest.onsuccess = function (e) {
      let result = e.target.result;
      if (result) {
        dataArr.push(result.value);
        result.continue();//这边执行轮询读取
        console.log(result,11111111111)
      }
    };
    cursorRequest.onerror = function (e) {
      console.log('获取失败')
    }
  },


  //添加数据
  addData: function (storename,who_with,chatArr,dataArr) {
    // console.log(storename,who_with,chatArr,dataArr)
    console.log(store.state.chat.db)
    let transaction = store.state.chat.db.transaction([storename], 'readwrite').objectStore(storename).add(dataArr);
    transaction.onsuccess = function (e) {
      // console.log(who_with,store.state.chat.curChatId)
      if (who_with == store.state.chat.curChatId) {
        store.state.chat.chatlist.push(dataArr);
      }
    };
    transaction.onerror = function (e) {
      console.log('添加失败')
    }
  },

  //更新数据
  update:function (dbName,storename,dataArr) {
    let request  = indexedDB.open(dbName);
    request.onsuccess = function (event){
      let db = event.target.result;
      let transaction = db.transaction(storename, 'readwrite');
      let objectStore = transaction.objectStore(storename);
      objectStore.put(dataArr);
    }
  },

  //通过roomId索引查询

  suo_room:function (db,roomId) {
    let that = this;
    let transaction = db.transaction(['senderId'],'readonly');
    let stores=transaction.objectStore('senderId');
    let index = stores.index('roomId');
    let s = Number(roomId)
    let request = index.openCursor(IDBKeyRange.only(s),'next');
    // console.log(store.state)
    store.state.chat.chatlist=[];
    request.onsuccess = function (e) {
      let result = e.target.result;
      if (result){
        store.state.chat.chatlist.push(result.value)
        result.continue();//这边执行轮询读取
      }else{
        console.log(store.state.chat.chatlist)
      }
    }
    request.onerror = function (e) {

        console.log(888,store.state.chat.chatlist)

    }
  }
}
