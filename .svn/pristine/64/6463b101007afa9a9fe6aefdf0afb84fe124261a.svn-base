<template>
  <div class="SC_topbox">
    <van-nav-bar
      left-arrow
      left-text="设置密保"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon slot="right" >
        <img src="../../../assets/images/SecuritySettings/jlu.png" width="24px">
      </van-icon>
    </van-nav-bar>
<!--    内容-->
    <div class="security_center">
    <van-collapse v-model="activeNames" @change="onClickRight" class="mibao">
      <van-collapse-item  name="1">
        <div slot="title" style="line-height: 36px">
          <span class="mr50">问题一</span>{{question_1}}</div>
        <p class="xuanzhe_p" @click="changes($event,1)">你最喜欢的蛋糕是？</p>
        <p class="xuanzhe_p" @click="changes($event,1)">你最不喜欢的蛋糕是？</p>
      </van-collapse-item>
      <van-cell-group style="border-bottom: 1px solid rgba(0,0,0,0.1);">
        <van-field
          v-model="answer_1"
          label="答案"
          placeholder="请输入您的答案"
        />
      </van-cell-group>
      <van-collapse-item title="标题1" name="2">
        <div slot="title" style="line-height: 36px">
          <span class="mr50">问题二</span>{{question_2}}</div>
        <p class="xuanzhe_p" @click="changes($event,2)">你最喜欢的蛋糕是？</p>
        <p class="xuanzhe_p" @click="changes($event,2)">你最不喜欢的蛋糕是？</p>
      </van-collapse-item>
      <van-cell-group style="border-bottom: 1px solid rgba(0,0,0,0.1);">
        <van-field
          v-model="answer_2"
          label="答案"
          placeholder="请输入您的答案"
        />
      </van-cell-group>
      <van-collapse-item title="标题1" name="3">
        <div slot="title" style="line-height: 36px">
          <span class="mr50">问题三</span>{{question_3}}</div>
        <p class="xuanzhe_p" @click="changes($event,3)">你最喜欢的蛋糕是？</p>
        <p class="xuanzhe_p" @click="changes($event,3)">你最不喜欢的蛋糕是？</p>
      </van-collapse-item>
      <van-cell-group style="border-bottom: 1px solid rgba(0,0,0,0.1);">
        <van-field
          v-model="answer_3"
          label="答案"
          placeholder="请输入您的答案"
        />
      </van-cell-group>
    </van-collapse>
      <van-button type="primary" size="large" class="mt100" @click="mibao_suc">下一步</van-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SettingBartenderTwo",
      data (){
        return {
          activeNames: [''],
          question_1:'你最喜欢的蛋糕是？',
          question_2:'你的初中班主任的名字是？',
          question_3:'你生日是？',
          answer_1:'',
          answer_2:'',
          answer_3:'',
        }
      },
      methods: {
        // 输入校验
        disableds () {
          if (!(this.answer_1 !== '' && this.answer_2 !== '' && this.answer_3 !== '')) {
            this.$notify('密保不能为空');
            return false
          }
          return true
        },
        //  设置成功跳转
        mibao_suc(){
          if ( this.disableds()){
            this.$toast('密保设置成功');
            this.$router.push({ name: 'SecurityCenter' })
          }
        },
        onClickLeft() {
          console.log('返回');
          this.$router.go(-1);
        },
        onClickRight() {
          console.log('按钮');
        },
        changes(e,index) {
          this["question_"+index] = e.target.innerHTML
          // this.question_1 = e.target.innerHTML
          // let next = e.target.childNodes;
          this.activeNames=['']
        }
      }
    }
</script>

<style scoped>
.xuanzhe_p{
  margin: 0;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding-left: 90px;
  line-height: 28px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}
  .mibao{
    padding-left: 0;
    padding-right: 0;
  }

</style>
