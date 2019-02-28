<template>
  <div class="fullstack">
    <transition name="fade">
      <div class="circle" v-if="circles">
        <p class="top-text" id="now">现在</p>
        <p class="top-text" id="look">来了解一下</p>
        <p class="top-text" id="full">无所不能的<span style="color:yellow">全栈</span>吧</p>
      </div>
    </transition>
    <div class="title">
      <p class="three">全栈<span style="color:#000000;opacity:0.7">组</span></p>
    </div>
    <div class="more-content">
      <p>全栈工程师，是“全方位”的工程师。</p>
      <p>既要了解前端开发，也要清楚后台逻辑,</p>
      <p>熟悉客户端用户体验的同时又懂服务端。</p>
      <p>在这里，我们学习CSS3,HTML5和JavaScript等</p>
      <p>前端基础知识，使用Vue，React等主流框架进行前端开发，</p>
      <p>掌握轻量级的Node.js作为后台语言，更方便地</p>
      <p>搭建响应速度快、易于扩展的网络应用。</p>
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
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.fullstack{
  height: 100vh;
  background: url("../assets/full.png");
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
  transition: opacity 1.5s;
}
.title{
  position: absolute;
  top: 505px;
  left: 114px;
}
.three{
  font-size: 50px;
  font-family: SoukouMincho;
  color: #242746;
}
.more-content{
  width: 630px;
  height: 474px;
  position: absolute;
  bottom: 240px;
  left: 58px;
  font-style: italic;
  font-size: 24px;
  color: #000000
}
</style>
