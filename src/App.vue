<template>
  <div id="app">
    <router-view/>
    <div v-show="this.$store.state.PromptStatus" class="prompt">
      <van-loading type="spinner" color="#FFF" />
      <P>{{this.$store.state.PromptValue}}</P>
    </div>
    <!-- 个人信息认证/钱包认证-->
    <van-popup v-model="PerwalletShow" class="Perwallet">
         <h3>操作限制</h3>
        <div v-show="PerwalletValue == 1 ? true : false">
          <p>您需要在完善个人信息，才能进行后面等操作</p>
            <router-link to="/PerInformation"><button @click="PerwalletBtn">去完善</button></router-link>
        </div>
        <div v-show="PerwalletValue == 2 ? true : false">
             <p>您需要在完成钱包创建后，才能进行买入/卖出/提币等操作</p>
            <router-link to="/Createwallet"><button @click="PerwalletBtn">一键创建</button></router-link>
        </div>
        <div v-show="PerwalletValue == 3 ? true : false">
             <p>您需要在完善收款方式，才能进行卖出操作</p>
            <router-link to="/PayInformation"><button @click="PerwalletBtn">去创建</button></router-link>
        </div>
    </van-popup>

    <!-- <van-popup v-model="PerwalletShow" class="success">
        
    </van-popup> -->



  </div>
</template>

<script>
export default {
  name: 'App',  
  data(){
    return{
      PerwalletShow:this.$store.state.PerwalletShow,
      PerwalletValue:this.$store.state.PerwalletValue
    }
  },
  mounted(){
    console.log(this.PerwalletValue);
  },  
  methods:{
    PerwalletBtn(){
      this.PerwalletShow = !this.PerwalletShow
      this.$store.state.PerwalletShow = !this.$store.state.PerwalletShow
    }    
  },
  computed:{
    listShow() {
      return this.$store.state.PerwalletShow
    },
    listValue() {
      return this.$store.state.PerwalletValue
    }
  },
  watch:{
    PerwalletShow(val){
      this.$store.state.PerwalletShow = val
    },
    listShow(val){
        this.PerwalletShow = val
    },
    listValue(val){
      this.PerwalletValue = val
    }
  },
}
</script>

<style lang="scss">
*{
  list-style: none;
  text-decoration: none;
  font-style: normal;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0;}
html,body{
  height: 100%;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background: url('img/public_bg.png') no-repeat;
  background-size: 100% 100%; */
}
.prompt{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .7);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  p{
    color: #FFF;
    font-size: 15px;padding: 5px;
  }
}
.Perwallet{
  background: f2f2f2;
  padding: 13px;
  box-sizing: border-box;
  height: 175px;
  width: 268px;
  color: #333;
  margin:auto;
  border-radius: 10px;
    h3{
        font-size: 16px;
        padding: 12px 0 25px 0;
        text-align: center;
        letter-spacing:1.5px;
    }
    p{
        font-size: 12px;
        line-height: 16px;
    }
    button{
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translate(-50%);
        border:none;
        background: none;
        font-size: 14px;
        color:#FDD200;
        
    }
}

</style>
