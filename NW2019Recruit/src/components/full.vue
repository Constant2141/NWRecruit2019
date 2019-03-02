<template>
  <div class="fullstack">
    <transition name="fade">
      <div v-if="circles">
      <div class="circle">
        <p class="top-text" id="now">现在</p>
        <p class="top-text" id="look">来了解一下</p>
        <p class="top-text" id="full">无所不能的<span style="color:yellow">全栈</span>吧</p>
      </div>
      <div class="title">
        <p class="three">全栈<span style="color:#000000;opacity:0.7">组</span></p>
      </div>
      </div>
    </transition>
    <div class="more-content">
      <p id="p1"></p>
      <div style="display:none" ref="p11">全栈工程师，是“全方位”的工程师。</div>
      <p id="p2"></p>
      <div style="display:none" ref="p22">既要了解前端开发，也要清楚后台逻辑，</div>
      <p id="p3"></p>
      <div style="display:none" ref="p33">熟悉客户端用户体验的同时又懂服务端。</div>
      <p id="p4"></p>
      <div style="display:none" ref="p44">在这里，我们学习CSS3,HTML5和JavaScript等</div>
      <p id="p5"></p>
      <div style="display:none" ref="p55">前端基础知识，使用Vue，React等主流框架进行前端开发，</div>
      <p id="p6"></p>
      <div style="display:none" ref="p66">掌握轻量级的Node.js作为后台语言，更方便地</div>
      <p id="p7"></p>
      <div style="display:none" ref="p77">搭建响应速度快、易于扩展的网络应用。</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      circles:false,
    }
  },
  mounted(){
    this.circles = true;
    let that = this;
    setTimeout(function(){
      that.texts()
    },2350)
    // this.texts()
  },
  methods:{
    texts(){
      var index1 = 0;
      var word1 = this.$refs.p11.innerHTML;
      function type1(){
        document.getElementById("p1").innerText = word1.substring(0,index1++)
      }
      setInterval(type1,30);
      var index2 = 0;
      var word2 = this.$refs.p22.innerHTML;
      function type2(){
        document.getElementById("p2").innerText = word2.substring(0,index2++)
      }
      // setInterval(type2,200);
      setTimeout(function(){
        setInterval(type2,30);
      },500)
      var index3 = 0;
      var word3 = this.$refs.p33.innerHTML;
      function type3(){
        document.getElementById("p3").innerText = word3.substring(0,index3++)
      }
      // setInterval(type3,200);
      setTimeout(function(){
        setInterval(type3,30);
      },1000)
      var index4 = 0;
      var word4 = this.$refs.p44.innerHTML;
      function type4(){
        document.getElementById("p4").innerText = word4.substring(0,index4++)
      }
      // setInterval(type4,200);
      setTimeout(function(){
        setInterval(type4,30);
      },1600)
      var index5 = 0;
      var word5 = this.$refs.p55.innerHTML;
      function type5(){
        document.getElementById("p5").innerText = word5.substring(0,index5++)
      }
      // setInterval(type5,200);
      setTimeout(function(){
        setInterval(type5,30);
      },2600)
      var index6 = 0;
      var word6 = this.$refs.p66.innerHTML;
      function type6(){
        document.getElementById("p6").innerText = word6.substring(0,index6++)
      }
      // setInterval(type6,200);
      setTimeout(function(){
        setInterval(type6,30);
      },3500)
      var index7 = 0;
      var word7 = this.$refs.p77.innerHTML;
      function type7(){
        document.getElementById("p7").innerText = word7.substring(0,index7++)
      }
      // setInterval(type7,200);
      setTimeout(function(){
        setInterval(type7,30);
      },4200)
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
/* @font-face {
  font-family: adobe;
  src: url("../font/adb.otf");
}
@font-face {
  font-family: skm;
  src: url("../font/SoukouMincho.ttf");
} */
.fullstack{
  height: 100vh;
  background: url("../../static/img/full.png");
  background-size: 100% 100%;
}
.circle{
  position: absolute;
  width: 200px;
  height: 339px;
  top: 109px;
  left: 28px;
  background: url("../assets/circle.png");
  background-size: 100% 100%;
}
.top-text{
  font-family: YouYuan;
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
}
.three{
  font-size: 50px;
  color: #242746;
}
.more-content{
  width: 640px;
  height: 474px;
  position: absolute;
  bottom: 240px;
  left: 58px;
  font-style: italic;
  font-size: 24px;
  color: #000000;
  line-height: 75px;
}
.more-content p{
  text-align: left;
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
