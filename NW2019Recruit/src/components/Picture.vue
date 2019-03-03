<template>
  <div class="picture">
    <!-- <section class="bg" v-show="IsShowBg"></section> -->
    <transition name="p4">
      <section v-show="p4">
        <img src="http://pnqc4vaxj.bkt.clouddn.com/p4.png">
        <!-- <img v-lazy="'../../static/img/p4.png'" alt> -->
      </section>
    </transition>
    <transition name="p3">
      <section v-show="p3">
        <img src="http://pnqc4vaxj.bkt.clouddn.com/p3.png">
        <!-- <img v-lazy="'../../static/img/p3.png'" alt> -->
      </section>
    </transition>
    <transition name="p2">
      <section v-show="p2">
        <img src="http://pnqc4vaxj.bkt.clouddn.com/p2.png">
        <!-- <img v-lazy="'../../static/img/p2.png'" alt> -->
      </section>
    </transition>
    <transition name="p1">
      <section v-show="p1">
        <img src="http://pnqc4vaxj.bkt.clouddn.com/p1.png">
        <!-- <img v-lazy="'../../static/img/p1.png'" alt> -->
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      p1: false,
      p2: false,
      p3: false,
      p4: false,
      // IsShowBg: false,
      flag:true,
      flag2:false
    };
  },
  mounted() {
    let image = new Image();
        image.src = "http://pnqc4vaxj.bkt.clouddn.com/full2.png";
        image.onload = () => {
          this.flag= false
     };
    this.p1 = true;
    setTimeout(() => {
      this.p1 = false;
    }, 800);
    setTimeout(() => {
      this.p2 = true;
    }, 850);
    setTimeout(() => {
      this.p2 = false;
    }, 1650);
    setTimeout(() => {
      this.p3 = true;
    }, 1700);
    setTimeout(() => {
      this.p3 = false;
    }, 2500);
    setTimeout(() => {
      this.p4 = true;
    }, 2550);
    setTimeout(() => {
      this.p4 = false;
    }, 3350);
    // setTimeout(() => {
    //   this.IsShowBg = true;
    // }, 3450);
    setTimeout(() => {
      this.flag2=true
    }, 3400);
  },
  watch:{
    flag(val){
      if(!val&&this.flag2)
          this.$router.replace({
            path: "/full"
      });
    },
   flag2(val){
      if(val&&!this.flag)
          this.$router.replace({
            path: "/full"
      });
    },
  }
};
</script>

<style scoped>
.picture {
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  background-color: #000;
  background-image: url(../assets/p0.jpg);
}
.p1-enter-active,
.p1-leave-active {
  transition: opacity 0.2s;
}
.p1-enter,
.p1-leave-to {
  opacity: 0.4;
}
.p2-enter-active,
.p2-leave-active {
  transition: opacity 0.2s;
}
.p2-enter,
.p2-leave-to {
  opacity: 0.4;
}
.p3-enter-active,
.p3-leave-active {
  transition: opacity 0.2s;
}
.p3-enter,
.p3-leave-to {
  opacity: 0.4;
}
.p4-enter-active,
.p4-leave-active {
  transition: opacity 0.1s;
}
.p4-enter,
.p4-leave-to {
  opacity: 0.4;
}
img {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
}
.bg {
  background-color: rgb(240,240,240);
  height: 100vh;
  width: 100vw;
}
/* .p1{
  position: absolute;
  left: 208px;
  top: 28px;
  width: 660px;
  height: 569px;
  background-size: 100% 100%;
} */
</style>
