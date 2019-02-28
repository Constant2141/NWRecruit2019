<template>
  <div class="fullstack">
    <transition name="fade">
      <div class="introduce" v-if="show">
      <p class="texts">
        全栈工程师既要了解前端开发，也要熟悉后台逻辑。
      </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:false,
    }
  },
  mounted(){
    this.show = true;
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.fullstack{
  height: 100vh;
  background: url("../assets/full.jpg");
  background-size: 100% 100%;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 10s;
}
.introduce{
  height: 600px;
  width: 600px;
  position: absolute;
  top: 600px;
  left: 60px;
}
.texts{
  writing-mode: vertical-lr;
  -webkit-writing-mode: vertical-lr;
  -ms-writing-mode: vertical-lr;
}
</style>
