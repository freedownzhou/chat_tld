<template>
  <div class="bg_box">
    <p class="text_right pt40"><router-link  class="lg_a" to="login/LanguageChange">语言</router-link></p>
    <!--中间部分-->
    <div class="center_box">
      <!--姓名-->
      <p class="input_p"><input type="text" class="long_input" placeholder="请输入您的真实姓名" v-model="shangName"><img class="img_icon" src="../../../assets/images/Login/user.png" width="32px"></p>
      <!--身份证-->
      <p class="input_p"><input type="text" class="long_input" placeholder="请输入您的身份证/护照号码" v-model="shangIdCard"><img class="img_icon" src="../../../assets/images/Login/user_id.png" width="32px"></p>
      <!--上传营业执照-->
      <div class="file_box">
        <img class="img_icon" src="../../../assets/images/Login/zhizhao.png" width="32px">
        <span class="ml10">请上传公司营业执照</span>
        <div class="text_center mt10" v-for="(item,index) in postData" :key="index">
          <img :src="item.content" alt="图片" class="imgPreview">
          <van-icon name="close" @click="delImg(index)" class="delte"/>
        </div>
      <!--上传文件-->
        <div class="file_smallbox">
        <van-uploader name="uploader" :after-read="onRead" multiple>
          <van-icon name="photograph" />
        </van-uploader>
        </div>
      </div>
      <!--协议复选框-->
      <van-checkbox v-model="checked" class="ft12 mb20">我已阅读并同意<span class="color_tianblue"><a>《用户协议》</a></span></van-checkbox>
      <button class="bt_btn_one" @click="zhuce">马上注册</button>
      <p class="last_p pt30">
        <a class="float_right"  href="#Login">去登录</a>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "BusinessLicense",
      data (){
          return {
              checked:false,
              shangName:'',      //商户真实名字
              shangIdCard:'',    //商户身份证
              postData:[]        //图片路径存贮
          }
      },
      methods: {
        // 输入校验
        disableds () {
          //真实姓名校验
          if (!(new RegExp('^[\u4e00-\u9fa5]{2,4}$').test(this.shangName))) {
            this.$notify('真实姓名输入有误 ');
            return false
          }
          //身份证校验
          if (!(this.$RegExp.userId(this.shangIdCard))) {
            this.$notify('身份证输入有误 ');
            return false
          }
          //同意协议校验
          if (this.checked !== true){
            this.$notify('请勾选同意《用户协议》 ');
            return false
          }
          //同意协议校验
          if (this.postData.length < 1){
            this.$notify('还没有选择上传的图片 ');
            return false
          }
          return true
        },
        //  商户注册
        zhuce () {
          if ( this.disableds()){
            this.$store.commit('SAVE_USER',{shangName:this.shangName,shangIdCard:this.shangIdCard})
            this.$router.push({name:'RegisteredSuccessfully'})
          }
        },
        delImg (index) {
          // 删除指定下标的图片对象
          if (isNaN(index) || index >= this.postData.length) {
            return false
          }
          let tmp = []
          for (let i = 0, len = this.postData.length; i < len; i++) {
            if (this.postData[i] !== this.postData[index]) {
              tmp.push(this.postData[i])
            }
          }
          this.postData = tmp
        },
        onRead (file) { // 上传图片到图片服务器
          // this.$refs.clothImg.src = file.content
          this.postData.push(file)  // postData是一个数组
          // let url = API + '/upload?type=99'
          let fd = new FormData()
          fd.append('upImgs', file.file)
          // this.axios.post(url, fd, {headers: {
          //     'Content-Type': 'multipart/form-data'
          //   }}).then(res => {
          //   this.imgUrlListValue.push(res.data.urls[0].image) //这里上传到指定的图片服务器，成功后会返回图片的url
          // }).catch(err => {
          //   alert(err)
          // })
        },
      }
    }
</script>

<style scoped>
  .bg_box{
    height: auto!important;
    padding-bottom: 68px;
  }
  a{
    text-decoration: none;
  }
  p{
    margin: 0;
  }

  input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #FFFFFF;
    /* placeholder字体大小  */
    font-size: 12px;
    /* placeholder位置  */
    text-align: left;
  }
  button:hover{
    background-color: #0BB2FE;
    color: #FFFFFF;
    cursor: pointer;
  }
  /*营业执照盒子*/
  .file_box{
    width: 300px;
    background: rgba(255,255,255,0.2);
    border-radius:4px;
    height: auto;
    font-size:12px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color: #FFFFFF;
    margin-bottom: 25px;
    padding-bottom: 37px;
  }
  .file_box .img_icon{
    top: 10px;
  }
  .file_smallbox{
    width: 86px;
    height: auto;
    border-radius: 50%;
    background:rgba(255,255,255,0.5);
    text-align: center;
    margin: 0 auto;
    font-size: 30px;
    line-height: 86px;
    margin-top: 25px;
    box-sizing: border-box;
  }
  /*回显的图片*/
  .imgPreview{
    width: 80%;
    height: 150px;
  }
  .text_right{margin-bottom: 10px}
</style>

