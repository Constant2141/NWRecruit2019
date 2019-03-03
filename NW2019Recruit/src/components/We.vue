<template>
  <div class="we-container" :style="{height:clientHeight}">
    <div class="we-photo" ref="wePhoto">
      <div class="we-bg"></div>
      <div class="we-ppl"></div>
      <div class="lcircle"></div>
      <div class="scircle"></div>
      <div class="black-clip" ref="blackCover"></div>
    </div>
    <div class="we-word" lang="ch" ref="weNW">
      <!-- <img src="../assets/nw.png" alt> -->
      <h1>
        <span>N</span>ight's
      </h1>
      <h1 id="font-bottom">
        <span>W</span>atch
      </h1>Night's Watch 工作室成立于2017年初，前身是协同工作室前端组，目前主要分为全栈，设计组，工作室专注设计并开发Web项目、移动端网页及小程序，特色独立项目为女生节的许愿墙。守夜人工作室一直秉持<del>在玩耍中学习</del>理论与实践相结合的学习理念，在工作室培训中积累理论知识，在项目中增加实战经验。毕业的师兄大多就职于阿里、网易、腾讯等一线互联网公司。
    </div>
  </div>
</template>

<script>
export default {
  name: "We",
  data() {
    return {
      clientHeight: ""
    };
  },
  mounted() {
    this.clientHeight =
      (window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight) + "px";
        setTimeout(() => {
            this.$refs.wePhoto.style.opacity = 1;
        }, 300);
        setTimeout(() => {
            this.$refs.weNW.style.opacity = 1;           
        }, 1000);
    },
    beforeRouteLeave(to,from,next){
      this.$refs.blackCover.style.left="-100px"
      this.$refs.blackCover.style.top="-100px"
      this.$refs.weNW.style.opacity = 0;
      setTimeout(function(){
        next();
      },800)
    }
}
</script>

<style scoped>
@font-face {
  font-family: HarryP;
  src: url("../font/harrypotter.ttf");
}
* {
  margin: 0;
  padding: 0;
}
.we-container{
    width:750px;
    height: 100vh;
    background-color: black;
    position: relative;
    z-index: 1;
}
.we-photo{
    overflow: hidden;
    position: relative;
    height: 500px;
    opacity: 0;
    transition: all 0.4s linear;
}
.we-bg,
.we-ppl {
  width: 750px;
  height: 500px;
  background-size: cover;
}
.we-bg {
  background-image: url("http://pnqc4vaxj.bkt.clouddn.com/webg.jpg");
}
.we-ppl {
  background-image: url("http://pnqc4vaxj.bkt.clouddn.com/weppl.png");
  z-index: 3;
  position: absolute;
  top: 0;
}
@keyframes rotateIt {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
.lcircle {
  width: 618px;
  height: 618px;
  background-image: url("../../static/img/lcircle.png");
  background-size: cover;
  position: absolute;
  top: -260px;
  left: -243px;
  animation: rotateIt 70s linear infinite;
}
.scircle {
  width: 225px;
  height: 225px;
  background-image: url("../../static/img/scircle.png");
  background-size: cover;
  position: absolute;
  top: -70px;
  right: 1px;
  animation: rotateIt 25s linear infinite;
}
.black-clip{
    width:1000px;
    height: 800px;
    background-color: black;
    position: absolute;
    left:750px;
    top:500px;
    z-index: 4;
    transform: rotate(45deg);
    transition: all 1s;
}
.we-word {
  color: white;
  font-size: 22px;
  font-family: "SimSun";
  padding: 0 112px;
  line-height: 52px;
  z-index: 5;
  position: relative;
  text-align: justify;
  transition: opacity 1s;
  opacity: 0;
}
.we-word > img {
  width: 489px;
  height: 480px;
  position: absolute;
  left: 130px;
}
.we-word > h1 {
  margin: 10px 0;
  text-align: right;
  font-family: "HarryP";
  font-size: 75px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #fefefe;
}
.we-word span {
  position: relative;
  /* left:18px; */
  /* top:-38px; */
  font-family: "HarryP";
  font-size: 75px;
  font-weight: 400;
  font-stretch: normal;
  line-height: 18px;
  letter-spacing: 0px;
  color: #79beff;
  z-index: 10;
}
.we-word p {
  text-align: right;
  font-family: "SoukouMincho";
  font-size: 38px;
  color: #fefefe;
}
#font-bottom{
  margin-bottom: 50px;
}
</style>
