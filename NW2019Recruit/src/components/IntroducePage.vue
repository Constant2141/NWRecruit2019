<template>
  <div class="introduce-page" :style="{height:clientHeight}">
    <section class="content-box" ref="banner">
      <transition name="dotAppear">
        <div class="dot" v-if="IsShowDot">
          <div
            class="circle1"
            :style="{width:width+'px',height:width+'px',marginLeft:-width/2+'px',marginTop:-width/2+'px'}"
          ></div>
          <div class="circle2"></div>
          <div class="circle3 blur1" :style="{filter:blur}"></div>
        </div>
      </transition>
      <!-- <div class="dot blur1" :style="{filter:blur}"></div> -->
      <ul class="bg-bubbles" v-if="IsBegin">
        <li v-for="i in 9" :key="i"></li>
      </ul>
      <img class="bg circle" src="../assets/bgm.png">
    </section>
    <transition name="NW">
      <section class="nw-font" v-if="IsShowNW">
        <div class="night">
          <span>設計</span>
        </div>
        <div class="watch">組</div>
      </section>
    </transition>
    <transition name="font">
      <section class="font-content" v-if="IsShowFont">
        <p
          lang="ch"
          class="part1"
        >不同于传统画师，UI设计师除了要给用户带来最优的视觉效果，同时需要明确产品功能，安排界面布局，制定交互逻辑，创造流畅的动态效果，从而带来最佳的用户体验。</p>
        <p
          lang="ch"
          class="part2"
        >当然，我们设计组并不局限于UI设计，还会涉及到平面、海报、插图设计等。从用笔纸作画，到用Photoshop处理图像、Illustrator绘制图案、CorelDRAW建模、AfterEffect制定交互……工具多如繁星，只为实现你天马星空的灵感。</p>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clientHeight: "",
      blur: "2px",
      width: 0,
      height: "13px",
      IsBegin: false,
      IsShowDot: false,
      IsShowNW: false,
      IsShowFont: false
    };
  },
  methods: {
    blurChange() {
      var i = 2;
      var flag = true;
      var flag2 = false;

      setTimeout(() => {
        setInterval(() => {
          this.blur = "blur(" + i + "px)";
          if (flag2) {
            this.width -= 5;
          } else {
            this.width += 5;
          }
          if (this.width == 0) {
            flag2 = false;
          }
          if (this.width == 40) {
            flag2 = true;
          }
          if (flag) {
            i--;
          } else {
            i++;
          }
          if (i == 0) {
            flag = false;
          }
          if (i == 2) {
            flag = true;
            this.IsBegin = true;
            this.IsShowNW = true;
            setTimeout(() => {
              this.IsShowFont = true;
            }, 1000);
          }
        }, 100);
      }, 2000);
    }
  },
  mounted() {
    this.clientHeight =
      (window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight) + "px";
    console.log(this.clientHeight);
    this.IsShowDot = true;
    setTimeout(() => {
      this.blurChange();
    }, 70);
  }
};
</script>

<style scoped>
@font-face {
  font-family: SoukouMincho;
  src: url("../font/SoukouMincho.ttf");
}
.introduce-page {
  width: 750px;
  background: #000;
}
.content-box {
  width: 650px;
  margin: 0 auto;
  box-sizing: content-box;
  position: relative;
}
.bg {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  opacity: 1;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  margin: 0 auto;
}
.dotAppear-enter-active,
.dotAppear-leave-active {
  transition: opacity 2.5s;
}
.dotAppear-enter,
.dotAppear-leave-to {
  opacity: 0;
}
.dot {
  width: 26px;
  position: absolute;
  top: 50%;
  left: 50%;
  /* padding-left: -15px;  */
  padding-top: 24px;
  height: 26px;
  border-radius: 50%;
  z-index: 2;
}
.circle1 {
  background: #60e2da;
  position: absolute;
  border-radius: 25px;
  -webkit-filter: blur(20px);
}
.circle2 {
  background: #60e2da;
  position: absolute;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  -webkit-filter: blur(8px);
}
.circle3 {
  background: #60e2da;
  position: absolute;
  width: 10px;
  height: 10px;
  margin-top: -5px;
  margin-left: -5px;
  border-radius: 25px;
  -webkit-filter: blur(2px);
}
.blur3 {
  filter: blur(1px);
}
.blur2 {
  filter: blur(5px);
}
.circle {
  animation: 5s 1 normal circle;
}

@keyframes circle {
  from {
    -webkit-clip-path: circle(0%);
    clip-path: circle(0%);
  }
  to {
    -webkit-clip-path: circle(100%);
    clip-path: circle(100%);
  }
}

/*****/
.bg-bubbles {
  position: absolute;
  /* background-color: red; */
  width: 350px;
  height: 190px;
  top: 100px;
  z-index: 5;
  list-style: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.bg-bubbles li {
  position: absolute;
  top: 140px;
  left: 280px;
  width: 20px;
  height: 20px;
  background-color: #8deae6;
  transition-timing-function: linear;
  border-radius: 50%;
  opacity: 0;
}
.bg-bubbles li:nth-child(1) {
  width: 25px;
  height: 25px;
  animation: square 5s linear 0s infinite;
}
.bg-bubbles li:nth-child(2) {
  width: 13px;
  height: 13px;
  top: 150px;
  left: 310px;
  animation: square 5s linear 1s infinite;
}
.bg-bubbles li:nth-child(3) {
  width: 12px;
  height: 12px;
  top: 175px;
  left: 280px;
  animation: square 5s linear 1.1s infinite;
}
.bg-bubbles li:nth-child(4) {
  width: 24px;
  height: 24px;
  top: 175px;
  left: 320px;
  animation: square 5s linear 1.6s infinite;
}
.bg-bubbles li:nth-child(5) {
  width: 6px;
  height: 6px;
  top: 160px;
  left: 300px;
  animation: square 5s linear 1s infinite;
}
.bg-bubbles li:nth-child(6) {
  width: 6px;
  height: 6px;
  top: 200px;
  left: 320px;
  animation: square 5s linear 1.1s infinite;
}
.bg-bubbles li:nth-child(7) {
  width: 10px;
  height: 10px;
  top: 130px;
  left: 300px;
  animation: square 5s linear 2.1s infinite;
}
.bg-bubbles li:nth-child(8) {
  width: 12px;
  height: 12px;
  top: 160px;
  left: 270px;
  animation: square 5s linear 3.6s infinite;
}
.bg-bubbles li:nth-child(9) {
  width: 14px;
  height: 14px;
  top: 130px;
  left: 300px;
  animation: square 5s linear 3.1s infinite;
}
/* .bg-bubbles li:nth-child(10) {
  width: 10px;
  height: 10px;
  top: 140px;
  left: 300px;
  animation: square 5s linear 3.4s infinite;
}
.bg-bubbles li:nth-child(11) {
  width: 14px;
  height: 14px;
  top: 140px;
  left: 300px;
  animation: square 5s linear 4.1s infinite;
}
.bg-bubbles li:nth-child(12) {
  width: 10px;
  height: 10px;
  top: 140px;
  left: 300px;
  animation: square 5s linear 4.4s infinite;
} */
@keyframes square {
  0% {
    opacity: 0;
    transform: translate(-3px, -2px);
  }
  10% {
    opacity: 0.1;
  }
  25% {
    opacity: 1;
    transform: translateY(-24px, -16px);
  }
  50% {
    opacity: 1;
    transform: translate(-48px, -32px);
  }
  75% {
    opacity: 0.8;
    transform: translate(-72px, -48px);
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translate(-96px, -64px);
  }
}
/***night's watch*/
.nw-font {
  text-align: right;
  position: relative;
  height: 170px;
  width: 100vw;
  margin-right: 110px;
}
.night {
  font-family: "SoukouMincho";
  position: absolute;
  right: 120px;
  font-size: 80px;
  color: #fff;
}
.watch {
  font-family: "SoukouMincho";
  position: absolute;
  right: 90px;
  top: 50px;
  font-size: 75px;
  color: #fff;
}
.nw-font div span {
  color: #228e88;
}
/***font-content*/
.font-content {
  width: 528px;
  font-size: 22px;
  color: #ddd;
  font-family: "SimSun";
  line-height: 52px;
  text-align: justify;
  margin: 0 auto;
}
.part1 {
  margin-top: 15px;
}
.part2 {
  margin-top: 20px;
}
/****/
.NW-enter-active,
.NW-leave-active {
  transition: opacity 2.5s;
}
.NW-enter,
.NW-leave-to {
  opacity: 0;
}
.font-enter-active,
.font-leave-active {
  transition: opacity 2.5s;
}
.font-enter,
.font-leave-to {
  opacity: 0;
}
</style>
