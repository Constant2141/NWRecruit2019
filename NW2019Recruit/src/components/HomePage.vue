<template>
  <div class="home-page">
    <transition name="begin">
      <section class="part2" @click="clickHere" v-if="IsBegin">
        <div class="click-here">点击此处</div>
        <div class="dot"></div>
        <img class="bgm" src="../assets/bgm1.png" width="100%">
      </section>
    </transition>
    <transition name="lumos">
      <section class="part3" v-if="IsClickHere">
        <div class="lumos">Lumos</div>
      </section>
    </transition>
    <section class="part1">
      <transition name="first">
        <div v-if="first">隧道里太暗了...</div>
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
        let timer = setTimeout(() => {
          this.$router.push({
            path: "/introducePage"
          });
        }, 2000);
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
  background-position: relative;
  background-color: #000;
}
.part1 {
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -150px;
  margin-top: -100px;
  font-size: 30px;
  font-family: "Adobe Heiti Std";
  color: rgb(255, 255, 255);
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
  background-color: #fff;
  z-index: 2;
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
</style>
