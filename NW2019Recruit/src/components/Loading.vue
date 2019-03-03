<template>
  <div class="loading">
    <div>loading</div>
    <div>{{percent}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      percent: " "
    };
  },
  mounted() {
    this.preLoading();
  },
  methods: {
    preLoading() {
      var imgs = [
        "http://pnqc4vaxj.bkt.clouddn.com/full.png",
        "http://pnqc4vaxj.bkt.clouddn.com/p0.jpg",
        "http://pnqc4vaxj.bkt.clouddn.com/p1.png",
        "http://pnqc4vaxj.bkt.clouddn.com/p2.png",
        "http://pnqc4vaxj.bkt.clouddn.com/p3.png",
        "http://pnqc4vaxj.bkt.clouddn.com/p4.png",
        "http://pnqc4vaxj.bkt.clouddn.com/webg.jpg",
        "http://pnqc4vaxj.bkt.clouddn.com/weppl.png",
        "http://pnqc4vaxj.bkt.clouddn.com/bgm.png",
        "http://pnqc4vaxj.bkt.clouddn.com/book.png",
        "http://pnqc4vaxj.bkt.clouddn.com/commit.png",
        "http://pnqc4vaxj.bkt.clouddn.com/baomingbiao.jpg",
        "http://pnqc4vaxj.bkt.clouddn.com/tishikuang.png",
        "http://pnqc4vaxj.bkt.clouddn.com/inf.png",
        "http://pnqc4vaxj.bkt.clouddn.com/newHome.jpg",
      ];

      for (let img of imgs) {
        let image = new Image();
        image.src = img;
        image.onload = () => {
          this.count++;
          this.percent = Math.floor((this.count / imgs.length) * 100) + "%";
        };
      }
    }
  },
  watch: {
    count(val) {

      if (val == 15) {
        setTimeout(() => {
          this.$router.replace({
            path: "/realhomepage"
          });
        },2000);
      }
    }
  }
};
</script>

<style scoped>
</style>
