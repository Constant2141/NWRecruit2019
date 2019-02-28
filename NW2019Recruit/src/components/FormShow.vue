<template>
  <div class="form-show">
    <img src="../assets/书.png" alt="" class="book">
    <img src="../assets/topf.png" alt="" class="topf">
    <img src="../assets/bottomf.png" alt="" class="bottomf">
  </div>
</template>

<script>
export default {

}
</script>

<style>
*{
  margin:0;
  padding: 0;
  list-style: none;
}
.form-show{
  height: 100vh;
  background: url("../assets/报名表.jpg");
  background-size: 100% 100%;
}
.book{
  width: 479px;
	height: 230px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
.topf{
  height: 33px;
  width: 493px;
  position: absolute;
  top: 200px;
  left: 144px;
}
.bottomf{
  height: 33px;
  width: 493px;
  position: absolute;
  top: 1000px;
  left: 117px;
}
</style>
