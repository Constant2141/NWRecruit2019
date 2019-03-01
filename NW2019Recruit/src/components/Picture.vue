<template>
  <div class="picture">
    <transition name="p1">
      <section v-if="p1">
        <img src="../assets/p1.png" class="p1">
      </section>
    </transition>
    <transition name="p2">
      <section v-if="p2">
        <img src="../assets/p2.png">
      </section>
    </transition>
    <transition name="p3">
      <section v-if="p3">
        <img src="../assets/p3.png">
      </section>
    </transition>
    <transition name="p4">
      <section v-if="p4">
        <img src="../assets/p4.png">
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
      p4: false
    };
  },
  mounted() {
    this.p1 = true
    setTimeout(() => {
      this.p1 = false
    }, 2000);
    setTimeout(()=>{
      this.p2 = true;
    },4000)
    setTimeout(() => {
      this.p2 = false;
    }, 6000);
    setTimeout(() => {
      this.p3 = true;
    },8000)
    setTimeout(() => {
      this.p3 = false;
    }, 10000);
    setTimeout(() => {
      this.p4 = true;
    },12000)
    setTimeout(() => {
      this.p4 = false
    }, 14000);
    setTimeout(() => {
      this.$router.push({
        path: "/full"
      });
    },16000)
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
  transition: opacity 2s;
}
.p1-enter,
.p1-leave-to {
  opacity: 0;
}
.p2-enter-active,
.p2-leave-active {
  transition: opacity 2s;
}
.p2-enter,
.p2-leave-to {
  opacity: 0;
}
.p3-enter-active,
.p3-leave-active {
  transition: opacity 2s;
}
.p3-enter,
.p3-leave-to {
  opacity: 0;
}
.p4-enter-active,
.p4-leave-active {
  transition: opacity 2s;
}
.p4-enter,
.p4-leave-to {
  opacity: 0;
}
.cat {
  position: absolute;
  left: 162px;
  top: 276px;
  width: 112px;
  height: 152px;
}
img {
  width: 100vw;
  height: 100vh;
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
