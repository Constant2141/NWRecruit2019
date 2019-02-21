<template>
    <div class="entry-form">
        <div class="desk">
          <img src="../assets/报名表.jpg" alt="" class="background">
          <img src="../assets/书.png" alt="" class="book">
            <div class="paper">
                <div class="title">報名</div>
                <div class="line"></div>
                <div class="NW">Night's Watch</div>
                <img src="../assets/人.png" alt="" class="person">
                <img src="../assets/提交.png" alt="" class="submit">

                <form class="form">
                    <label for="name">姓名:</label>
                    <input type="text" id="name" placeholder="点击编辑" v-model="name">

                    <label for="sex">性别:</label>
                    <input type="text" id="sex" placeholder="点击编辑" v-model="sex">

                    <label for="like">意向:</label>
                    <input type="text" id="like" placeholder="点击编辑" v-model="like">

                    <label for="major">专业班级:</label>
                    <input type="text" id="major" placeholder="点击编辑" v-model="major">

                    <label for="intro">个人简介:</label>
                    <input type="textarea" id="intro" placeholder="点击编辑" v-model="intro">
                </form>
               
            </div>
        </div>
    </div>
</template>


<script>
export default {
  data(){
    return{
      name:'',
      sex:'',
      like:'',
      major:'',
      intro:''
    }
  }
};
</script>


<style scoped>
@font-face {
  font-family: HarryP;
  src: url("../font/harrypotter.ttf");
}
@font-face {
  font-family: Genkaimincho;
  src: url("../font/genkai-mincho.ttf");
}
@font-face {
  font-family: ShouShuti;
  src: url("../font/ShouShuti.ttf");
}
.entry-form {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.desk {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
}
.desk .background{
  width: 100%;
  height: 100%;
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
.submit{
  width: 109px;
	height: 108px;
  position: absolute;
  bottom: 14.533vw;
  right: 8.733vw;
}
.NW{
  font-family: Papyrus-Regular;
  font-size: 23px;
  position: absolute;
  bottom: 14.533vw;
  right: 31.733vw;
}
.form{
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  margin-left: 152px;
  font-family: ShouShuti;
  font-size: 45px;
}
.form input{
  width: 195px;
	height: 41px;
	border: solid 1px #757575;
  background-color: transparent;
  border-radius: 0;
  font-family: ShouShuti;
  text-align: center;
  font-size: 36px;
  line-height: 41px;
}
.form input::placeholder{
	font-size: 36px;
  line-height: 41px;
  color: #757575;
  font-family: ShouShuti;
  text-align: center;
}
</style>

stly
