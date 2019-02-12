<template>
    <div class="page6">
      <div class="pic1" v-show="pic1">
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      pic1:false,
    }
  },
  methods:{
    second5(){
        let that = this;
      setTimeout(function(){
        that.pic1 = true;
      },1000)
    }
  },
  mounted(){
    this.second5()
  }
}
</script>

<style scoped>
.page6{
    height: 100vh;
    background: black;
}
.pic1{
  height: 150px;
  width: 480px;
  background: url('../assets/page62.png');
  background-size: 100% 100%
}
</style>
