<template>
  <div class="loading">
    <img src="http://pnqc4vaxj.bkt.clouddn.com/%E7%8C%AB.gif" alt width="104px" height="90px">
    <span class="font">{{ font }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      font: "loading",
      timer: ""
    };
  },
  mounted() {
    const Font = "loading...";
    var i = 7;
    this.timer = setInterval(() => {
      this.font = Font.slice(0, i++);
      if (i == 12) i = 7;
    }, 200);
    this.preLoading();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    preLoading() {
      // var imgs = [
      // "http://pnqc4vaxj.bkt.clouddn.com/full.png",
      // "http://pnqc4vaxj.bkt.clouddn.com/p0.jpg",
      // "http://pnqc4vaxj.bkt.clouddn.com/p1.png",
      // "http://pnqc4vaxj.bkt.clouddn.com/p2.png",
      // "http://pnqc4vaxj.bkt.clouddn.com/p3.png",
      // "http://pnqc4vaxj.bkt.clouddn.com/p4.png",
      // "http://pnqc4vaxj.bkt.clouddn.com/webg.jpg",
      // "http://pnqc4vaxj.bkt.clouddn.com/weppl.png",
      // "http://pnqc4vaxj.bkt.clouddn.com/bgm.png",
      // "http://pnqc4vaxj.bkt.clouddn.com/book.png",
      // "http://pnqc4vaxj.bkt.clouddn.com/commit.png",
      // "http://pnqc4vaxj.bkt.clouddn.com/baomingbiao.jpg",
      // "http://pnqc4vaxj.bkt.clouddn.com/tishikuang.png",
      // "http://pnqc4vaxj.bkt.clouddn.com/inf.png",
      // "http://pnqc4vaxj.bkt.clouddn.com/newHome.jpg",
      // ];

      // for (let img of imgs) {
      let image = new Image();
      image.src = "http://pnqc4vaxj.bkt.clouddn.com/newHome.jpg";
      image.onload = () => {
        this.flag = true;
        // this.count++;
        // this.percent = Math.floor((this.count / imgs.length) * 100) + "%";
      };
      // }
    }
  },
  watch: {
    flag(val) {
      if (val)
        setTimeout(() => {
          this.$router.replace({
            path: "/realhomepage"
          });
        }, 3000);
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: HarryP;
  src: url("../font/harrypotter.ttf");
}
.loading {
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.font {
  display: inline-block;
  width: 104px;
  font-family: HarryP;
  color: rgb(109, 135, 152);
  padding-top: 30px;
  font-size: 60px;
  text-align: left;
}
</style>
