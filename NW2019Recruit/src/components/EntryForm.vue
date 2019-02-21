<template>
    <div class="entry-form">
        <div class="desk">
          <img src="../assets/书.png" alt="" class="book">
            <div class="paper">
                <div class="title">报名</div>
                <div class="line"></div>
                <img src="../assets/人.png" alt="" class="person">
                <img src="../assets/提交.png" alt="" class="submit">
            </div>
        </div>
    </div>
</template>


<script>
export default {};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
.entry-form {
  width: 100vw;
  height: 100vh;
  background-position: relative;
}
.desk {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  background: url('../assets/报名表.jpg');
  background-size: contain;
  background-repeat: no-repeat;
}
.paper {
  width: 693px;
  height: 1022px;
  position: absolute;
  top: 16.867vw;
  left: 0;
}
.book{
  width: 479px;
	height: 230px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
/* .cup {
  width: 262px;
  height: 271px;
  position: absolute;
  top: 44vw;
  right: 0;
} */
.submit{
  width: 109px;
	height: 108px;
  position: absolute;
  bottom: 14.533vw;
  right: 8.733vw;
}
.person{
  width: 211px;
	height: 532px;
	opacity: 0.6;
  position: absolute;
  bottom: 262px;
  right: 101px;
}
.title{
  margin: 12.933vw auto 0 37.667vw;
  width: 200px;
  font-family: Genkaimincho;
	font-size: 78px;
	line-height: 75px;
	letter-spacing: 0px;
	color: #000000;
}
.line{
  width: 458px;
	height: 6px;
	background-color: #0d0d0d;
  margin:18px 0 0 152px;
}
</style>
