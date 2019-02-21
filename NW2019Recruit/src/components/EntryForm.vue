<template>
    <div class="entry-form">
      <!-- <video id="myvideo" src="咖啡.mp4" webkit-playsinline="true"></video> -->
        <div class="desk">
          <!-- <img src="../assets/报名表.jpg" alt="" class="background"> -->
            <img src="../assets/书.png" alt="" class="book">
            <!-- <img src="../assets/杯子.png" alt="" class="cup"> -->
            <div class="paper">
                <div class="title">報名</div>
                <div class="line"></div>
                <img src="../assets/人.png" alt="" class="person">
                <form class="form">
                    <label for="name">姓名:</label>
                    <input type="text" id="name" placeholder="点击编辑" v-model="name">

                    <label for="sex">性别:</label>
                    <input type="text" id="sex" placeholder="点击编辑" v-model="sex" @click="showTip2 = true" readonly>

                    <label for="like">意向:</label>
                    <input type="text" id="like" placeholder="点击编辑" v-model="like"  @click="showTip3 = true" readonly>

                    <label for="major">专业班级:</label>
                    <input type="text" id="major" placeholder="点击编辑" v-model="major">

                    <label for="intro">个人简介:</label>
                    <textarea name="intro" id="intro" ></textarea>
                    <!-- <input type="textarea" id="intro" placeholder="点击编辑" v-model="intro"  cols="3" rows="3"> -->
                </form>
                <img src="../assets/提交.png" alt="" class="submit" @click="showTip1 = true">
                <div class="NW">Night's Watch</div>
            </div>
            
            <div class="tips" v-show="showTip1">
                <div class="close" @click="showTip1 = false">&times;</div>
                <p>是否確認提交?</p>
                <span @click="submit">確認</span> 
                <span @click="showTip1 = false">取消</span>
           </div>

           <div class="tips" v-show="showTip2">
                <div class="close" @click="showTip2 = false">&times;</div>
                <p>選擇性別</p>
                <span @click="handleSex('boy')">男生</span> 
                <span @click="handleSex('girl')">女生</span>
           </div>

           <div class="tips" v-show="showTip3">
                <div class="close" @click="showTip3 = false">&times;</div>
                <p>選擇意向</p>
                <span @click="handleLike('1')">全棧</span> 
                <span @click="handleLike('2')">設計</span>
           </div>
        </div>

      
    </div>
</template>


<script>
export default {
  data(){
    return{
      //要发送的信息
      name:'',
      sex:'',
      like:'',
      major:'',
      intro:'',
      //提示框
      showTip1:false, //提交
      showTip2:false, //选择性别
      showTip3:false //选择意向
    }
  },
  methods:{
    submit(){
      alert('啊啊')
      //此处发送请求
    },
    handleSex(sex){
        if(sex == 'boy') this.sex = '男生';
        else this.sex = '女生';
        this.showTip2 = false;
    },
    handleLike(like){
      if(like == '1') this.like = '全栈';
      else this.like = "设计";
      this.showTip3 = false;
    }
  }
};
</script>


<style scoped>
@font-face {
  font-family: ShouShuti;
  src: url("../font/ShouShuti.ttf");
}
@font-face {
  font-family: HarryP;
  src: url("../font/harrypotter.ttf");
}
@font-face {
  font-family: Genkaimincho;
  src: url("../font/genkai-mincho.ttf");
}
@font-face {
  font-family: Papyrus-Regular;
  src: url("../font/Papyrus-Regular.ttf");
}
.entry-form {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #000000;
}
.desk {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  background: url("../assets/报名表.jpg");
  background-size: contain;
  background-repeat: no-repeat;
}
.desk .background{
  width: 100%;
  height: 100%;
}
.paper {
  width: 569px;
  height: 909px;
  position: absolute;
  top: 148px;
  left: 87px;
}
.book{
  width: 479px;
	height: 230px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
.cup {
  width: 250px;
  height: 260px;
  position: absolute;
  top: 44vw;
  right: 0;
  z-index: 2;
}
.person{
  width: 211px;
	height: 532px;
	opacity: 0.6;
  position: absolute;
  bottom: 173px;
  right: 45px;
}
.title{
  margin: 73px auto 0 auto;
  width: 200px;
  font-family: Genkaimincho;
	font-size: 78px;
	line-height: 75px;
	letter-spacing: 0px;
  color: #000000;
  z-index: 1;
}
.line{
  margin:18px auto;
  width: 458px;
	height: 6px;
	background-color: #0d0d0d;
}

.submit{
  width: 109px;
	height: 108px;
  position: absolute;
  bottom: 4vw;
  right: 4vw;
}
.NW{
  font-family: Papyrus-Regular;
  font-size: 23px;
  position: absolute;
  bottom: 7vw;
  right: 208px;
}
.form{
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  margin-left: 74px;
  font-family: ShouShuti;
  font-size: 45px;
}
.form input{
  width: 195px;
  height: 24px;
  line-height: 24px;
  border: solid 1px #757575;
  background-color: transparent;
  border-radius: 0;
  font-family: ShouShuti;
  text-align: center;
  font-size: 36px;
}
.form input::placeholder{
	font-size: 36px;
  line-height: 40px;
  color: #757575;
  font-family: ShouShuti;
  text-align: center;
}
#intro{
  width: 27.133vw;
  height: 16.8vw;
  line-height: 36px;
  border: solid 1px #757575;
  background-color: transparent;
  border-radius: 0;
  font-family: ShouShuti;
  font-size: 36px;
  box-sizing: border-box;
}
.tips{
  width: 78.333vw;
  height: 46.333vw;
  position: absolute;
  top: 31%;
  left: 50%;
  transform: translate(-50%);
  background: url('../assets/提示框.png');
  background-size: cover;
  background-repeat: no-repeat;
  font-family: Genkaimincho;
  font-size: 44px;
}
.tips .close{
  position: absolute;
  top: 30px;
  right: 40px;
  transform: scale(1.3);
}
.tips p{
  margin-top: 80px;
}
.tips span{
  margin: 30px 40px 0 40px;
}
</style>

