<template>
    <div class="page6">
      <div class="pic1">
        <img src="../assets/page62.png" ref="img1">
      </div>
      <div class="pic2">
        <img src="../assets/page61.png" ref="img2">
      </div>
      <div class="text1">
        <p ref="p1">噢...这只调皮的猫</p>
        <p ref="p2">打翻了我的咖啡杯</p>
      </div>
      <div class="text2">
        <p ref="p3">啊！ZELDA！瞧你的毛线球！</p>
      </div>
      <div>
        <canvas id="can" width="375" height="330"></canvas>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
methods:{
loadImg(){
    var alpha = 20;
    var img1 = this.$refs.img1
    var img2 = this.$refs.img2
    var p1 = this.$refs.p1
    var p2 = this.$refs.p2
    var p3 = this.$refs.p3
    startMove(100,img1)
    var timer;
    function startMove(tar,obj) {
      clearInterval(timer);
      timer = setInterval(function () {
        var ispeed = 0;
        ispeed = alpha < tar ? 0.5 : -0.5;
          if(alpha == tar){
            clearInterval(timer)
            alpha = 20;
        }
        else{
            alpha += ispeed;
            obj.style.filter = "alpha(opacity:"+alpha+")";
            obj.style.opacity = alpha/100;
        }
    }, 10)
  }
  setTimeout(function(){
    startMove(100,img2)
  },2000)
  setTimeout(function(){
    startMove(100,p1)
  },4000)
  setTimeout(function(){
    startMove(100,p2)
  },5800)
  setTimeout(function(){
    startMove(100,p3)
  },25000)
},
drawIt(){
  // var canvas = document.getElementById("can");
  // if (!canvas.getContext) return;
  // var ctx = canvas.getContext("2d");
  // ctx.font = "bold 50px"
  // ctx.fillStyle = "#b4b4b4"
  // ctx.fillText("天若有情", 10, 50);
  // ctx.fillText("天若有情", 20, 90);
  // ctx.strokeText("天若有情", 10, 40)
}
  },
mounted(){
    this.loadImg()
    // this.drawIt()
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.page6{
    height: 100vh;
    background: black;
    overflow: hidden;
}
.pic1{
  height: 271px;
  width: 563px;
  margin-left: 16px;
  margin-top: 26px;
}
.pic1 img{
  height: 271px;
  width: 563px;
  margin: 0 auto;
  filter: alpha(opacity=0);
  opacity: 0;
}
.pic2{
  width: 290px;
  height: 340px;
  position: absolute;
  bottom: 20px;
  right: 2px;
}
.pic2 img{
  height: 340px;
  width: 290px;
  margin: 0 auto;
  filter: alpha(opacity=0);
  opacity: 0;
}
.text1{
  position: absolute;
  bottom: 140px;
  left: 16px;
}
.text1 p{
  font-family: YouYuan;
	font-size: 32px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 75px;
	letter-spacing: 0px;
	color: #b4b4b4;
  filter: alpha(opacity=0);
  opacity: 0;
}
.text2{
  position: absolute;
  bottom: 40px;
  left: 16px;
}
.text2 p{
  font-family: YouYuan;
	font-size: 32px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 75px;
	letter-spacing: 0px;
	color: #b4b4b4;
  filter: alpha(opacity=0);
  opacity: 0;
}
/* .pic1{
  height: 271px;
  width: 563px;
  background: url('../assets/page62.png');
  background-size: 100% 100%;
  margin-left: 16px;
  margin-top: 26px;
}
.text{
  text-align: left;
  margin-top: 50px;
  margin-left:16px;
}
#h1{
	font-family: FZYTK--GBK1-0;
	font-size: 63px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 75px;
	letter-spacing: 0px;
	background: -webkit-linear-gradient(left, #808080 , #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#p1{
	font-family: AdobeHeitiStd-Regular;
	font-size: 35px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 75px;
	letter-spacing: 0px;
	color: #ffffff;
  margin-top: 50px;
}
#p2{
	font-family: AdobeHeitiStd-Regular;
	font-size: 35px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 75px;
	letter-spacing: 0px;
	color: #ffffff;
  margin-top: 10px;
  margin-left: 32px;
}
#p3{
	font-family: AdobeHeitiStd-Regular;
	font-size: 35px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 75px;
	letter-spacing: 0px;
	color: #ffffff;
  margin-top: 10px;
  margin-left: 64px;
}
#p4{
	font-family: AdobeHeitiStd-Regular;
	font-size: 35px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 75px;
	letter-spacing: 0px;
	color: #ffffff;
  margin-top: 10px;
}
.bottom{
  text-align: left;
  margin-left:16px;
}
.ltext{
  float: left;
  margin-top: 130px;
}
#p5{
	font-family: YouYuan;
	font-size: 32px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 75px;
	letter-spacing: 0px;
	color: #b4b4b4;
}
#p6{
	font-family: YouYuan;
	font-size: 32px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 75px;
	letter-spacing: 0px;
	color: #bababa;
}
#p7{
	font-family: YouYuan;
	font-size: 32px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 75px;
	letter-spacing: 0px;
	color: #b4b4b4;
  margin-top: 40px;
}
.pic2{
  float: left;
  width: 290px;
  height: 340px;
  background: url("../assets/page61.png");
  background-size: 100% 100%;
  margin-top: 660px;
} */
</style>
