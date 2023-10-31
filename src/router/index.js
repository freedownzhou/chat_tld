import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/Login'},
    //注册 登录 语言选择,忘记密码12345
    {path: '/Login',name: 'Login',component: resolve => require(['@/view/RegLogin/Login'], resolve)},
    {path: '/Registered',name: 'Registered',component: resolve => require(['@/view/RegLogin/Registered'], resolve)},
    {path: '/LanguageChange',name: 'LanguageChange',component: resolve => require(['@/view/RegLogin/LanguageChange'], resolve)},
    {path: '/ForgotPassword',name: 'ForgotPassword',component: resolve => require(['@/view/RegLogin/ForgotPassword'], resolve)},

    //项目六主页面
    {
      path: '/Navigation', name: '/Navigation', component: resolve => require(['@/view/pageHome/Navigation'], resolve,),meta:{requireAuth:true},   //下导航栏
      redirect: '/Navigation/Index',
      children: [
        { path: '/Navigation/Index', name: 'Index', component: resolve => require(['@/view/pageHome/Index'], resolve),meta:{requireAuth:true}},   //首页
        { path: '/Navigation/Buy', name: 'Buy', component: resolve => require(['@/view/pageHome/Buy'], resolve),meta:{requireAuth:true}},         //买入
        { path: '/Navigation/Sell', name: 'Sell', component: resolve => require(['@/view/pageHome/Sell'], resolve),meta:{requireAuth:true},},     //卖出
        { path:'/Navigation/Product',name:'Product',component:resolve=>require(['@/view/pageHome/Product'],resolve),meta:{requireAuth:true}},     //产品
        { path:'/Navigation/OrderList',name:'OrderList',component:resolve=>require(['@/view/pageHome/OrderList'],resolve),meta:{requireAuth:true}}//订单
      ]
    },

    //信息完善              ImpInformation
    {path: '/PerInformation', name: 'PerInformation', component: resolve => require(['@/view/ImpInformation/PerInformation'], resolve),meta:{requireAuth:true}},  //个人
    {path: '/Createwallet', name: 'Createwallet', component: resolve => require(['@/view/ImpInformation/Createwallet'], resolve),meta:{requireAuth:true}},        //钱包
    {path: '/PayInformation', name: 'PayInformation', component: resolve => require(['@/view/ImpInformation/PayInformation'], resolve),meta:{requireAuth:true}},  //收款

    //侧边 个人-商户中心     sideCenter
    {path: '/SecurityCenter',name: 'SecurityCenter',component: resolve => require(['@/view/sideCenter/SecurityCenter'], resolve),meta: {requireAuth:true}},       //安全中心


    //安全中心              SecuritySettings
    // {path: '/SecuritySettings/SecurityCenter',name: 'SecurityCenter',component: resolve => require(['@/view/SecuritySettings/Settings/SecurityCenter'], resolve),meta: {title: '安全中心',requireAuth:true}},
    {path: '/SecuritySettings/ChangeWord',name: 'ChangeWord',component: resolve => require(['@/view/SecuritySettings/Settings/ChangeWord'], resolve),meta: {requireAuth:true}},       //更改支付密码
    {path: '/SecuritySettings/FrogetWord',name: 'FrogetWord',component: resolve => require(['@/view/SecuritySettings/Settings/FrogetWord'], resolve),meta: {requireAuth:true}},       //忘记支付密码
    {path: '/SecuritySettings/FrogetWordTwo',name: 'FrogetWordTwo',component: resolve => require(['@/view/SecuritySettings/Settings/FrogetWordTwo'], resolve),meta: {requireAuth:true}},  //忘记支付密码第二步
    {path: '/SecuritySettings/RememberWord',name: 'RememberWord',component: resolve => require(['@/view/SecuritySettings/Settings/RememberWord'], resolve),meta: {requireAuth:true}},     //记得支付密码更改
    {path: '/SecuritySettings/RememberWordTwo',name: 'RememberWordTwo',component: resolve => require(['@/view/SecuritySettings/Settings/RememberWordTwo'], resolve),meta: {requireAuth:true}}, //记得支付密码更改第二步
    {path: '/SecuritySettingsSecurityCheck',name: 'SecurityCheck',component: resolve => require(['@/view/SecuritySettings/Settings/SecurityCheck'], resolve),meta: {requireAuth:true}},   //账户安全检查
    {path: '/SecuritySettings/SecurityCenterIntroduce',name: 'SecurityCenterIntroduce',component: resolve => require(['@/view/SecuritySettings/Settings/SecurityCenterIntroduce'], resolve),meta: {requireAuth:true}}, //安全中心详细介绍
    {path: '/SecuritySettings/SettingBartender',name: 'SettingBartender',component: resolve => require(['@/view/SecuritySettings/Settings/SettingBartender'], resolve),meta: {requireAuth:true}}, //设置密保
    {path: '/SecuritySettings/SettingBartenderTwo',name: 'SettingBartenderTwo',component: resolve => require(['@/view/SecuritySettings/Settings/SettingBartenderTwo'], resolve),meta: {requireAuth:true}}, //设置密保第二步

    //聊天   Chatpage
    // {path: '/chatList',name: 'chatList',component: resolve => require(['@/view/Chatpage/chatList'], resolve),meta: {requireAuth:true}},  //聊天列表
    {path:'/ChatRoom',name:'ChatRoom',component:resolve=>require(['@/view/ChatRoom'],resolve),meta:{requireAuth:true}},                                                    //联系卖家
    {path:'/ChatList',name:'ChatList',component:resolve=>require(['@/view/ChatList'],resolve),meta:{requireAuth:true}},

    //支付   Paypage
    {path: '/buyPay',name: 'buyPay',component: resolve => require(['@/view/payPage/buypay'], resolve),meta: {requireAuth:true}},  //聊天列表

    //test 测试
    // {path: '/test',name: 'test',component: resolve => require(['@/view/test'], resolve),meta: {requireAuth:true}},  //聊天列表















    {path: '/TransactionRecord', name: 'TransactionRecord', component: resolve => require(['@/view/TransactionRecord'], resolve),meta:{requireAuth:true}},                //交易记录
    {path:'/BuyGuide',name:'BuyGuide',component:resolve=>require(['@/view/BuyGuide'],resolve),meta:{requireAuth:true}},                                                    //买入推荐
    {path:'/OrderPayment/:id',name:'OrderPayment',component:resolve=>require(['@/view/OrderPayment'],resolve),meta:{requireAuth:true}},                                    //订单详情
    {path:'/Paying',name:'Paying',component:resolve=>require(['@/view/Paying'],resolve),meta:{requireAuth:true}},                                                          //支付方式
    // {path:'/OrderList',name:'OrderList',component:resolve=>require(['@/view/OrderList'],resolve),meta:{requireAuth:true}},                                                 //订单列表
                                              //聊天列表
    // {path:'/MyOrder',name:'MyOrder',component:resolve=>require(['@/view/MyOrder'],resolve),meta:{requireAuth:true}},                                                       //我的订单
    {path:'/SetInfo',name:'SetInfo',component:resolve=>require(['@/view/SetInfo'],resolve),meta:{requireAuth:true}},                                                       //个人信息设置
    {path:'/ReSetPhoneNum',name:'ReSetPhoneNum',component:resolve=>require(['@/view/ReSetPhoneNum'],resolve),meta:{requireAuth:true}},                                     //更改手机号码
    {path:'/Cancellation',name:'Cancellation',component:resolve=>require(['@/view/Cancellation'],resolve),meta:{requireAuth:true}},                                        //注销账户
    {path:'/CardBag',name:'CardBag',component:resolve=>require(['@/view/CardBag'],resolve),meta:{requireAuth:true}},                                                       //我的银行卡
    {path:'/AddCard',name:'AddCard',component:resolve=>require(['@/view/AddCard'],resolve),meta:{requireAuth:true}},                                                       //添加银行卡
    {path:'/TransactionInquiry',name:'TransactionInquiry',component:resolve=>require(['@/view/TransactionInquirys/TransactionInquiry'],resolve),meta:{requireAuth:true}},  //交易查询
    // {path:'/TransactionInquirys/OrderList',name:'OrderList',component:resolve=>require(['@/view/TransactionInquirys/OrderList'],resolve)},         //查询结果
    {path:'/ContactSeller',name:'ContactSeller',component:resolve=>require(['@/view/ContactSeller'],resolve),meta:{requireAuth:true}},                                     //联系卖家

    //商户
    { path:'/DockingSet',name:'DockingSet',component:resolve=>require(['@/view/DockingSet'],resolve),meta:{requireAuth:true}},                                              //对接设置
    { path:'/ReSetKey',name:'ReSetKey',component:resolve=>require(['@/view/ReSetKey'],resolve),meta:{requireAuth:true}},                                                    //重置密钥
    { path: '/Generatekey', name: 'Generatekey', component: resolve => require(['@/view/UserSettings/Generatekey'], resolve),meta:{requireAuth:true}},                      //生成密钥
    { path: '/ReSetUrl', name: 'ReSetUrl', component: resolve => require(['@/view/UserSettings/ReSetUrl'], resolve),meta:{requireAuth:true}},                               //重置Url
    { path: '/NotificationSetting', name: 'NotificationSettings', component: resolve => require(['@/view/NotificationSettings/NotificationSetting'], resolve),meta:{requireAuth:true}},       //通知设定
    { path: '/view/UserSettings/UserSetting',name: 'UserSetting',component: resolve => require(['@/view/UserSettings/UserSetting'], resolve),meta:{requireAuth:true}},                        //用户设置
    { path: '/view/UserSettings/LogoutAccount', name: 'LogoutAccount', component: resolve => require(['@/view/UserSettings/LogoutAccount'], resolve),meta:{requireAuth:true}},                        //注销账户
    { path: '/view/UserSettings/Company', name: 'Company', component: resolve => require(['@/view/UserSettings/Company'], resolve),meta:{requireAuth:true}},                                  //我的门店
    { path: '/view/UserSettings/Company/CompanyDetail', name: 'CompanyDetail', component: resolve => require(['@/view/UserSettings/CompanyDetail'], resolve),meta:{requireAuth:true}},        //门店详情
    { path: '/Product/ProductDetail', name: 'ProductDetail', component: resolve => require(['@/view/ProductDetail'], resolve),meta:{requireAuth:true}},                                       //产品详情
    { path: '/Statement', name: 'Statement', component: resolve => require(['@/view/Statement'], resolve),meta:{requireAuth:true}},                                                           //对账单
    // Statement







    {path: '/login/BusinessLicense',name: 'BusinessLicense',component: resolve => require(['@/view/login/registered/BusinessLicense'], resolve),meta: {title: '上传执照'}},


    //个人中心
    {path: '/PersonalCenter/SafetySettingReception',name: 'SafetySettingReception',component: resolve => require(['@/view/PersonalCenter/SafetySettingReception'], resolve),meta: {title: '安全中心4个简介',requireAuth:true}},
    {path: '/PersonalCenter/CustomerService',name: 'CustomerService',component: resolve => require(['@/view/PersonalCenter/CustomerService'], resolve),meta: {title: '客服',requireAuth:true}},
    {path: '/PersonalCenter/CommonProblems',name: 'CommonProblems',component: resolve => require(['@/view/PersonalCenter/CommonProblems'], resolve),meta: {title: '常见问题',requireAuth:true}},
    {path: '/PersonalCenter/AboutUs',name: 'AboutUs',component: resolve => require(['@/view/PersonalCenter/AboutUs'], resolve),meta: {title: '关于我们',requireAuth:true}},
    {path: '/PersonalCenter/SelfService',name: 'SelfService',component: resolve => require(['@/view/PersonalCenter/SelfService'], resolve),meta: {title: '自助服务',requireAuth:true}},
  ]
})
