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
        alert(1)
  },
  methods: {
    preLoading() {
      var imgs = [
        "static/img/full.png",
        "static/img/p0.jpg",
        "static/img/p1.png",
        "static/img/p2.png",
        "static/img/p3.png",
        "static/img/p4.png",
        "static/img/webg.jpg",
        "static/img/weppl.png",
        "static/img/bgm.png",
        "static/img/book.png",
        "static/img/commit.png",
        "static/img/baomingbiao.jpg",
        "static/img/tishikuang.png",
        "static/img/inf.png",
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
      if (val == 14) {
        alert(1)
        setTimeout(() => {
          this.$router.push({
            path: "/"
          });
        },2000);
      }
    }
  }
};
</script>

<style scoped>
</style>
