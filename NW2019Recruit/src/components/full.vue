<template>
  <div class="full">
    <transition name="bg">
      <div class="fullstack" v-if="backg">
      </div>
    </transition>
    <transition name="fade">
      <div v-if="circles">
      <div class="circle">
        <p class="top-text" id="now">现在</p>
        <p class="top-text" id="look">来了解一下</p>
        <p class="top-text" id="full">无所不能的<span style="color:yellow">全栈</span>吧</p>
      </div>
      <div class="title">
        <p class="three">全棧<span style="color:#000000;opacity:0.7">組</span></p>
      </div>
      </div>
    </transition>
    <div class="more-content">
      <p id="p1">{{msg1}}</p>
      <p id="p2">{{msg2}}</p>
      <p id="p3">{{msg3}}</p>
      <p id="p4">{{msg4}}</p>
      <p id="p5">{{msg5}}</p>
      <p id="p6">{{msg6}}</p>
      <p id="p7">{{msg7}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      circles:false,msg1:"",msg2:"",msg3:"",msg4:"",msg5:"",msg6:"",msg7:"",backg:false,
      timer1:null,timer2:null,timer3:null,timer4:null,timer5:null,timer6:null,timer7:null,
    }
  },
  mounted(){
    this.text = true;
    let that = this;
    this.backg = true;
    setTimeout(function(){
      that.circles = true;
    },1200)
    setTimeout(function(){
      that.texts()
    },3550)

    let imgs = [
      'http://pnqc4vaxj.bkt.clouddn.com/paper2.png',
      'http://pnqc4vaxj.bkt.clouddn.com/book.png',
      'http://pnqc4vaxj.bkt.clouddn.com/commit.png',
      'http://pnqc4vaxj.bkt.clouddn.com/desk.jpg',
      'http://pnqc4vaxj.bkt.clouddn.com/tishikuang.png',
      'http://pnqc4vaxj.bkt.clouddn.com/inf.png'
    ]
    for (let img of imgs) {
        let image = new Image();
        image.src = img;
        image.onload = () => {
        };
      }
  },
  methods:{
    texts(){
      let that = this;
      var text1 = "全栈工程师，是“全方位”的工程师。";
      var i1 = 0;
      var num1 = text1.length;
      var text2 = "既要了解前端开发，也要清楚后台逻辑，";
      var num2 = text2.length;
      var i2 = 0;
      var text3 = "熟悉客户端用户体验的同时又懂服务端。";
      var num3 = text3.length;
      var i3 = 0;
      var text4 = "在这里，我们学习CSS3,HTML5和JavaScript等";
      var num4 = text4.length;
      var i4 = 0;
      var text5 = "前端基础知识，使用Vue，React等主流框架进行前端开发，";
      var num5 = text5.length;
      var i5 = 0;
      var text6 = "掌握轻量级的Node.js作为后台语言，更方便地";
      var num6 = text6.length;
      var i6 = 0;
      var text7 = "搭建响应速度快、易于扩展的网络应用。";
      var num7 = text7.length;
      var i7 = 0;
      that.timer1 = setInterval(() => {
          var shower1 = text1.substr(0,i1++);
          if(i1 > num1){
            clearInterval(that.timer1);
          }
        that.msg1 = shower1;
      },30)
      setTimeout(() => {
        that.timer2 = setInterval(() => {
            var shower2 = text2.substr(0,i2++);
            if(i2 > num2){
              clearInterval(that.timer2);
            }
          that.msg2 = shower2;
      },30)
      }, 700);
      setTimeout(() => {
        that.timer3 = setInterval(() => {
            var shower3 = text3.substr(0,i3++);
            if(i3 > num3){
              clearInterval(that.timer3);
            }
          that.msg3 = shower3;
        },30)
      }, 1400);
      setTimeout(() => {
        that.timer4 = setInterval(() => {
            var shower4 = text4.substr(0,i4++);
            if(i4 > num4){
              clearInterval(that.timer4);
            }
          that.msg4 = shower4;
        },30)
      }, 2100);
      setTimeout(() => {
        that.timer5 = setInterval(() => {
            var shower5 = text5.substr(0,i5++);
            if(i5 > num5){
              clearInterval(that.timer5);
            }
          that.msg5 = shower5;
        },30)
      }, 3200);
      setTimeout(() => {
        that.timer6 = setInterval(() => {
            var shower6 = text6.substr(0,i6++);
            if(i6 > num6){
              clearInterval(that.timer6);
            }
          that.msg6 = shower6;
        },30)
      }, 4400);
      setTimeout(() => {
        that.timer7 = setInterval(() => {
            var shower7 = text7.substr(0,i7++);
            if(i7 > num7){
              clearInterval(that.timer7);
            }
          that.msg7 = shower7;
        },30)
      }, 5500);
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
@font-face {
  font-family: SoukouMincho;
  src: url("../font/SoukouMincho.ttf");
}
.full{
  height: 100vh;
  background: black;
}
.fullstack{
  height: 1334px;
  background: url("http://pnqc4vaxj.bkt.clouddn.com/full2.png");
  background-size: contain;
  background-repeat: no-repeat;
}
.circle{
  position: absolute;
  width: 200px;
  height: 339px;
  top: 109px;
  left: 28px;
  background: url("../../static/img/circle.png");
  background-size: 100% 100%;
}
.top-text{
  font-family: youyuan;
  font-size: 26px;
  color:#ffffff;
  writing-mode: vertical-lr;
}
#now{
  margin-left: 27px;
  margin-top: 37px;
}
#look{
  margin-left: 91px;
  margin-top: 10px;
}
#full{
  position: absolute;
  top: 100px;
  left: 120px;
  }
.bg-enter{
  opacity: 0;
}
.bg-enter-active{
  transition: opacity 2s;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 4s;
}
.title{
  position: absolute;
  top: 505px;
  left: 114px;
  font-family: "SoukouMincho";
}
.three{
  font-size: 50px;
  color: #242746;
}
.more-content{
  width: 640px;
  height: 474px;
  position: absolute;
  top: 600px;
  left: 58px;
  font-style: italic;
  font-size: 24px;
  color: #000000;
  line-height: 75px;
}
.more-content p{
  text-align: left;
  height: 48px;
}
#p1{
  margin-left: 110px;
}
#p2{
  margin-left: 107px;
}
#p3{
  margin-left: 100px;
}
#p4{
  margin-left: 70px;
}
#p5{
  margin-left: 5px;
}
#p6{
  margin-left: 70px;
}
#p7{
  margin-left: 90px;
}
</style>
