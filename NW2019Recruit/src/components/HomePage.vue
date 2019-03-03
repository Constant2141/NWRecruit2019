<template>
  <div class="home-page">
    <transition name="begin">
      <section class="part2" @click="clickHere" v-if="IsBegin">
        <div class="click-here">点击此处</div>
        <div class="dot"></div>
        <div class="wave1"></div>
        <div class="wave2"></div>
        <!-- <div class="wave3"></div> -->
        <!-- <div class="wave4"></div> -->
        <img class="bgm" src="../assets/bgm1.png" width="100%">
      </section>
    </transition>
    <!-- <transition name="lumos">
      <section class="part3" v-if="IsClickHere">
        <div class="lumos shaky">Lumos</div>
      </section>
    </transition>-->
    <section class="part1">
      <transition name="first">
        <div v-if="first" class="mgb50">隧道里太暗了...</div>
      </transition>
      <transition name="second">
        <div v-if="second">我们需要点亮一盏灯...</div>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      IsBegin: false,
      IsClickHere: false,
      first: false,
      second: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.first = true;
    }, 1000);
    setTimeout(() => {
      this.second = true;
    }, 2500);
    setTimeout(() => {
      this.IsBegin = true;
    }, 4000);
  },
  methods: {
    clickHere() {
      this.IsClickHere = true;
    }
  },
  watch: {
    IsClickHere() {
      if (this.IsClickHere == true) {
          var timer = setTimeout(() => {
            this.IsBegin = false;
            this.first = false;
            this.second = false;
          }, 500);
          setTimeout(() => {
            this.$router.replace({
              path: "/introducePage"
            });
          },1500)
      }
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: HarryP;
  src: url("../font/harrypotter.ttf");
}
.home-page {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #000;
}
.part1 {
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -150px;
  margin-top: -100px;
  font-size: 30px;
  font-family: "Adobe Heiti Std";
  color: rgb(255, 255, 255);
}
.mgb50 {
  margin-bottom: 50px;
}
.part1 div {
  text-align: left;
}
.first-enter-active,
.first-leave-active {
  transition: opacity 2.5s;
}
.first-enter,
.first-leave-to {
  opacity: 0;
}
.second-enter-active,
.second-leave-active {
  transition: opacity 2.5s;
}
.second-enter,
.second-leave-to {
  opacity: 0;
}
/**********/
.part2 {
  width: 650px;
  margin: 0 auto;
  box-sizing: content-box;
  position: relative;
}
.click-here {
  width: 150px;
  position: absolute;
  font-size: 25px;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -75px;
  font-family: "Adobe Heiti Std";
  color: #fff;
  margin-bottom: 10px;
}
.wave1 {
  width: 158px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -81px;
  margin-top: -61px;
  height: 158px;
  border-radius: 50%;
  /* background-color: blue; */
  border: 2px solid #1fab96;
  z-index: 2;
  opacity: 0;
  animation: wave 1.5s ease-in-out 0s infinite;
}
.wave2 {
  width: 158px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -81px;
  margin-top: -61px;
  height: 158px;
  border-radius: 50%;
  /* background-color: blue; */
  border: 2px solid #84ab7a;
  z-index: 2;
  opacity: 0;
  animation: wave 1.5s ease-in-out 0.75s infinite;
}
.wave3 {
  width: 208px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -106px;
  margin-top: -86px;
  height: 208px;
  border-radius: 50%;
  /* background-color: blue; */
  border: 6px solid #fff;
  z-index: 2;
  opacity: 0;
  animation: wave 2s ease-in-out 1.5s infinite;
}
.wave4 {
  width: 208px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -106px;
  margin-top: -86px;
  height: 208px;
  border-radius: 50%;
  /* background-color: blue; */
  border: 6px solid #fff;
  z-index: 2;
  opacity: 0;
  animation: wave 2s ease-in-out 1.6s infinite;
}
.bgm {
  margin: 0 auto;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  margin: 0 auto;
  z-index: -1;
}
.dot {
  width: 26px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -15px;
  margin-top: 5px;
  height: 26px;
  border-radius: 50%;
  background: -webkit-linear-gradient(#84ab7a, #1fab96);
  z-index: 20;
}
.begin-enter-active,
.begin-leave-active {
  transition: opacity 2.5s;
}
.begin-enter,
.begin-leave-to {
  opacity: 0;
}
.lumos-enter-active,
.lumos-leave-active {
  transition: opacity 2.5s;
}
.lumos-enter, .lumos-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* .begin-leave-active {
  width: 25vw;
  font-size: 15px;
  font-family: "Adobe Heiti Std";
  color: #fff;
  margin-bottom: 10px;
  transition: opacity 1.8s ;
} */
/*******/
.part3 {
  width: 100vw;
  position: absolute;
}
.part3 .lumos {
  position: absolute;
  width: 200px;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -150px;
  font-size: 60px;
  text-align: center;
  font-family: "HarryP";
  color: rgb(2, 172, 187);
}
/****波浪wave动效***/
@keyframes wave {
  0% {
    transform: scale(0.05);
    opacity: 0.3;
  }
  10% {
    transform: scale(0.1);
    opacity: 0.4;
  }
  20% {
    transform: scale(0.2);
    opacity: 0.5;
  }
  30% {
    transform: scale(0.3);
    opacity: 0.6;
  }
  40% {
    transform: scale(0.4);
    opacity: 0.6;
  }
  50% {
    transform: scale(0.5);
    opacity: 0.6;
  }
  60% {
    transform: scale(0.6);
    opacity: 0.6;
  }
  70% {
    transform: scale(0.7);
    opacity: 0.7;
  }
  80% {
    transform: scale(0.8);
    opacity: 0.6;
  }
  90% {
    transform: scale(0.9);
    opacity: 0.4;
  }
  100% {
    transform: scale(1);
    opacity: 0.1;
  }
}
/**lumos**/
/* .shaky {
  display: inline-block;
  -webkit-transform-origin: center center;
  -ms-transform-origin: center center;
  transform-origin: center center;
  -webkit-animation-name: shaky-slow;
  -ms-animation-name: shaky-slow;
  animation-name: shaky-slow;
  -webkit-animation-duration: 4s;
  -ms-animation-duration: 4s;
  animation-duration: 4s;
  -webkit-animation-iteration-count: infinite;
  -ms-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: ease-in-out;
  -ms-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-delay: 0s;
  -ms-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation-play-state: running;
  -ms-animation-play-state: running;
  animation-play-state: running;
}
@-webkit-keyframes shaky-slow {
  0% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
  }
  2% {
    -webkit-transform: translate(-1px, 1.5px) rotate(1.5deg);
  }
  4% {
    -webkit-transform: translate(1.3px, 0px) rotate(-0.5deg);
  }
  6% {
    -webkit-transform: translate(1.4px, 1.4px) rotate(-2deg);
  }
  8% {
    -webkit-transform: translate(-1.3px, -1px) rotate(-1.5deg);
  }
  10% {
    -webkit-transform: translate(1.4px, 0px) rotate(-2deg);
  }
  12% {
    -webkit-transform: translate(-1.3px, -1px) rotate(-2deg);
  }
  14% {
    -webkit-transform: translate(1.5px, 1.3px) rotate(1.5deg);
  }
  16% {
    -webkit-transform: translate(1.5px, -1.5px) rotate(-1.5deg);
  }
  18% {
    -webkit-transform: translate(1.3px, -1.3px) rotate(-2deg);
  }
  20% {
    -webkit-transform: translate(1px, 1px) rotate(-0.5deg);
  }
  22% {
    -webkit-transform: translate(1.3px, 1.5px) rotate(-2deg);
  }
  24% {
    -webkit-transform: translate(-1.4px, -1px) rotate(2deg);
  }
  26% {
    -webkit-transform: translate(1.3px, -1.3px) rotate(0.5deg);
  }
  28% {
    -webkit-transform: translate(1.6px, -1.6px) rotate(-2deg);
  }
  30% {
    -webkit-transform: translate(-1.3px, -1.3px) rotate(-1.5deg);
  }
  32% {
    -webkit-transform: translate(-1px, 0px) rotate(2deg);
  }
  34% {
    -webkit-transform: translate(1.3px, 1.3px) rotate(-0.5deg);
  }
  36% {
    -webkit-transform: translate(1.3px, 1.6px) rotate(1.5deg);
  }
  38% {
    -webkit-transform: translate(1.3px, -1.6px) rotate(1.5deg);
  }
  40% {
    -webkit-transform: translate(-1.4px, -1px) rotate(-0.5deg);
  }
  42% {
    -webkit-transform: translate(-1.4px, 1.3px) rotate(-0.5deg);
  }
  44% {
    -webkit-transform: translate(-1.6px, 1.4px) rotate(0.5deg);
  }
  46% {
    -webkit-transform: translate(-2.1px, -1.3px) rotate(-0.5deg);
  }
  48% {
    -webkit-transform: translate(1px, 1.6px) rotate(1.5deg);
  }
  50% {
    -webkit-transform: translate(1.6px, 1.6px) rotate(1.5deg);
  }
  52% {
    -webkit-transform: translate(-1.4px, 1.6px) rotate(0.5deg);
  }
  54% {
    -webkit-transform: translate(1.6px, -1px) rotate(-2deg);
  }
  56% {
    -webkit-transform: translate(1.3px, -1.6px) rotate(-2deg);
  }
  58% {
    -webkit-transform: translate(-1.3px, -1.6px) rotate(0.5deg);
  }
  60% {
    -webkit-transform: translate(1.3px, 1.6px) rotate(-0.5deg);
  }
  62% {
    -webkit-transform: translate(0px, 0px) rotate(-1.5deg);
  }
  64% {
    -webkit-transform: translate(-1.6px, -1.6px) rotate(-2deg);
  }
  66% {
    -webkit-transform: translate(1.6px, -1.6px) rotate(0.5deg);
  }
  68% {
    -webkit-transform: translate(0px, -1.6px) rotate(-2deg);
  }
  70% {
    -webkit-transform: translate(-1.6px, 1px) rotate(1.5deg);
  }
  72% {
    -webkit-transform: translate(-1.6px, 1.6px) rotate(2deg);
  }
  74% {
    -webkit-transform: translate(1.3px, -1.6px) rotate(-0.5deg);
  }
  76% {
    -webkit-transform: translate(1.4px, 1px) rotate(-0.5deg);
  }
  78% {
    -webkit-transform: translate(-1px, 1.4px) rotate(2deg);
  }
  80% {
    -webkit-transform: translate(1.4px, 1.6px) rotate(2deg);
  }
  82% {
    -webkit-transform: translate(-1.6px, -1.6px) rotate(-0.5deg);
  }
  84% {
    -webkit-transform: translate(-1.4px, 1.4px) rotate(-2deg);
  }
  86% {
    -webkit-transform: translate(1px, 1.4px) rotate(-2deg);
  }
  88% {
    -webkit-transform: translate(-1.4px, 1.4px) rotate(-1.5deg);
  }
  90% {
    -webkit-transform: translate(-1.6px, -1.6px) rotate(-2deg);
  }
  92% {
    -webkit-transform: translate(-1.6px, 1.6px) rotate(2deg);
  }
  94% {
    -webkit-transform: translate(-1.6px, -1.6px) rotate(-2deg);
  }
  96% {
    -webkit-transform: translate(-1.4px, 1.3px) rotate(-2deg);
  }
  98% {
    -webkit-transform: translate(1.3px, 1px) rotate(-0.5deg);
  }
}
@keyframes shaky-slow {
  0% {
    transform: translate(0px, 0px) rotate(0deg);
  }
  2% {
    transform: translate(-1px, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(1.3px, 0px) rotate(-0.5deg);
  }
  6% {
    transform: translate(1.4px, 1.4px) rotate(-2deg);
  }
  8% {
    transform: translate(-1.3px, -1px) rotate(-1.5deg);
  }
  10% {
    transform: translate(1.4px, 0px) rotate(-2deg);
  }
  12% {
    transform: translate(-1.3px, -1px) rotate(-2deg);
  }
  14% {
    transform: translate(1.5px, 1.3px) rotate(1.5deg);
  }
  16% {
    transform: translate(1.5px, -1.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(1.3px, -1.3px) rotate(-2deg);
  }
  20% {
    transform: translate(1px, 1px) rotate(-0.5deg);
  }
  22% {
    transform: translate(1.3px, 1.5px) rotate(-2deg);
  }
  24% {
    transform: translate(-1.4px, -1px) rotate(2deg);
  }
  26% {
    transform: translate(1.3px, -1.3px) rotate(0.5deg);
  }
  28% {
    transform: translate(1.6px, -1.6px) rotate(-1.5deg);
  }
  30% {
    transform: translate(-1.3px, -1.3px) rotate(-1.5deg);
  }
  32% {
    transform: translate(-1px, 0px) rotate(2deg);
  }
  34% {
    transform: translate(1.3px, 1.3px) rotate(-0.5deg);
  }
  36% {
    transform: translate(1.3px, 1.6px) rotate(1.5deg);
  }
  38% {
    transform: translate(1.3px, -1.6px) rotate(1.5deg);
  }
  40% {
    transform: translate(-1.4px, -1px) rotate(-0.5deg);
  }
  42% {
    transform: translate(-1.4px, 1.3px) rotate(-0.5deg);
  }
  44% {
    transform: translate(-1.6px, 1.4px) rotate(0.5deg);
  }
  46% {
    transform: translate(-2.1px, -1.3px) rotate(-0.5deg);
  }
  48% {
    transform: translate(1px, 1.6px) rotate(1.5deg);
  }
  50% {
    transform: translate(1.6px, 1.6px) rotate(1.5deg);
  }
  52% {
    transform: translate(-1.4px, 1.6px) rotate(0.5deg);
  }
  54% {
    transform: translate(1.6px, -1px) rotate(-2deg);
  }
  56% {
    transform: translate(1.3px, -1.6px) rotate(-2deg);
  }
  58% {
    transform: translate(-1.3px, -1.6px) rotate(0.5deg);
  }
  60% {
    transform: translate(1.3px, 1.6px) rotate(-0.5deg);
  }
  62% {
    transform: translate(0px, 0px) rotate(-1.5deg);
  }
  64% {
    transform: translate(-1.6px, -1.6px) rotate(-2deg);
  }
  66% {
    transform: translate(1.6px, -1.6px) rotate(0.5deg);
  }
  68% {
    transform: translate(0px, -1.6px) rotate(-2deg);
  }
  70% {
    transform: translate(-1.6px, 1px) rotate(1.5deg);
  }
  72% {
    transform: translate(-1.6px, 1.6px) rotate(2deg);
  }
  74% {
    transform: translate(1.3px, -1.6px) rotate(-0.5deg);
  }
  76% {
    transform: translate(1.4px, 1px) rotate(-0.5deg);
  }
  78% {
    transform: translate(-1px, 1.4px) rotate(2deg);
  }
  80% {
    transform: translate(1.4px, 1.6px) rotate(2deg);
  }
  82% {
    transform: translate(-1.6px, -1.6px) rotate(-0.5deg);
  }
  84% {
    transform: translate(-1.4px, 1.4px) rotate(-2deg);
  }
  86% {
    transform: translate(1px, 1.4px) rotate(-2deg);
  }
  88% {
    transform: translate(-1.4px, 1.4px) rotate(-1.5deg);
  }
  90% {
    transform: translate(-1.6px, -1.6px) rotate(-2deg);
  }
  92% {
    transform: translate(-1.4px, 1.6px) rotate(2deg);
  }
  94% {
    transform: translate(-1.6px, -1.6px) rotate(-2deg);
  }
  96% {
    transform: translate(-1.4px, 1.3px) rotate(-2deg);
  }
  98% {
    transform: translate(1.3px, 1px) rotate(-0.5deg);
  }
} */
</style>
