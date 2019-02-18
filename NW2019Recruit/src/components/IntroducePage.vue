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
        <li v-for="i in 12" :key="i"></li>
      </ul>
      <img class="bg circle" src="../assets/bgm.png">
    </section>
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
  padding-top: 20px;
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
  width: 300px;
  height: 180px;
  top: 100px;
  z-index: 5;
  list-style: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.bg-bubbles li {
  position: absolute;
  top: 160px;
  left: 280px;
  width: 20px;
  height: 20px;
  background-color: #8deae6;
  transition-timing-function: linear;
  border-radius: 50%;
}
.bg-bubbles li:nth-child(1) {
  width: 25px;
  height: 25px;
  animation: square 5s linear 0s infinite;
}
.bg-bubbles li:nth-child(2) {
  width: 13px;
  height: 13px;
  top: 170px;
  left: 310px;
  animation: square 5s linear 1s infinite;
}
.bg-bubbles li:nth-child(3) {
  width: 12px;
  height: 12px;
  top: 210px;
  left: 280px;
  animation: square 5s linear 1.1s infinite;
}
.bg-bubbles li:nth-child(4) {
  width: 24px;
  height: 24px;
  top: 210px;
  left: 320px;
  animation: square 5s linear 1.6s infinite;
}
.bg-bubbles li:nth-child(5) {
  width: 6px;
  height: 6px;
  top: 230px;
  left: 300px;
  animation: square 5s linear 1s infinite;
}
.bg-bubbles li:nth-child(6) {
  width: 6px;
  height: 6px;
  top: 270px;
  left: 320px;
  animation: square 5s linear 1.1s infinite;
}
.bg-bubbles li:nth-child(7) {
  width: 10px;
  height: 10px;
  top: 150px;
  left: 300px;
  animation: square 5s linear 2.1s infinite;
}
.bg-bubbles li:nth-child(8) {
  width: 12px;
  height: 12px;
  top: 180px;
  left: 270px;
  animation: square 5s linear 3.6s infinite;
}
.bg-bubbles li:nth-child(9) {
  width: 14px;
  height: 14px;
  top: 100px;
  left: 300px;
  animation: square 5s linear 3.1s infinite;
}
.bg-bubbles li:nth-child(10) {
  width: 10px;
  height: 10px;
  top: 120px;
  left: 300px;
  animation: square 5s linear 3.4s infinite;
}
.bg-bubbles li:nth-child(11) {
  width: 14px;
  height: 14px;
  top: 100px;
  left: 300px;
  animation: square 5s linear 4.1s infinite;
}
.bg-bubbles li:nth-child(12) {
  width: 10px;
  height: 10px;
  top: 120px;
  left: 300px;
  animation: square 5s linear 4.4s infinite;
}
@keyframes square {
  0% {
    opacity: 1;
    transform: translate(-3px, -2px);
  }
  25% {
    opacity: 1;
    transform: translateY(-30px, -20px);
  }
  50% {
    opacity: 1;
    transform: translate(-60px, -40px);
  }
  75% {
    opacity: 0.8;
    transform: translate(-90px, -60px);
  }
  95% {
    opacity: 0.7;
  }
  100% {
    opacity: 0;
    transform: translate(-120px, -80px);
  }
}
</style>
