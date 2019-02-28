<template>
  <div class="form-show">
    <img src="../assets/书.png" alt="" class="book">
    <img src="../assets/topf.png" alt="" class="topf">
    <img src="../assets/bottomf.png" alt="" class="bottomf">
    <transition name="fade">
    <div class="texts" v-if="show">
      <div>
        <p id="ptop">姓名</p>
        <span>郑庆义</span>
      </div>
      <div>
        <p class="middles">性别</p>
        <span>男</span>
      </div>
      <div>
        <p class="middles">意向</p>
        <span>设计</span>
      </div>
      <div>
        <p class="middles">手机</p>
        <span>18888299999</span>
      </div>
      <div>
        <p class="middles">学号</p>
        <span>3117002222</span>
      </div>
      <div>
        <p class="middles">专业班级</p>
        <span id="school">计算机学院软件2班</span>
      </div>
        <p class="middles" id="self-int">自我介绍</p>
    </div>
    </transition>
    <transition name="logo">
      <div class="nw-logo" v-if="nws">
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:false,
      nws:false,
    }
  },
  mounted(){
    this.show = true;
    let that = this
    setTimeout(function(){
      that.nws = true
    },2500)
  }
}
</script>

<style scoped>
*{
  margin:0;
  padding: 0;
  list-style: none;
}
@font-face {
  font-family: youyuan;
  src: url("../font/youyuan.ttf");
}
@font-face {
  font-family: handshu;
  src: url("../font/hand.ttf");
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 2s;
}
.logo-enter{
  opacity: 0;
}
.logo-enter-active{
  transition: opacity 1s;
  animation: bounce-in 0.5s;
}
@keyframes bounce-in{
  0%{transform: scale(2);}
  50%{transform:scale(2);}
  100%{transform:scale(1);}
}
.form-show{
  height: 100vh;
  background: url("../assets/报名表.jpg");
  background-size: 100% 100%;
}
.book{
  width: 479px;
	height: 230px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
.topf{
  height: 33px;
  width: 493px;
  position: absolute;
  top: 200px;
  left: 144px;
}
.bottomf{
  height: 33px;
  width: 493px;
  position: absolute;
  bottom: 230px;
  left: 117px;
}
.texts{
  height: 820px;
  width: 520px;
  position: absolute;
  top: 240px;
  left: 117px;
  z-index: 10;
}
.texts div{
  margin-top: 40px;
}
.texts>div::after{
  content: "";
  display: block;
  clear: both;
}
/* .texts>div{
  clear: both;
} */
.texts p{
  /* display: inline-block; */
  float: left;
  width: 160px;
  text-align: center;
  font-size: 36px;
  font-family: youyuan;
}
.texts span{
  display: inline-block;
  float: left;
  width: 250px;
  text-align: center;
  font-size: 36px;
  font-family: handshu;
}
#ptop{
  margin-left: 60px;
}
.middles{
  margin-left: 60px;
}
#school{
  font-size: 24px;
  line-height: 34px;
}
#self-int{
  margin-top: 40px;
}
.nw-logo{
  z-index: 99;
  height: 198px;
  width: 198px;
  position: absolute;
  background: url("../assets/rnw.png");
  background-size: 100% 100%;
  bottom: 270px;
  right: 126px;
}
</style>
