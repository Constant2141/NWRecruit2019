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
      <div class="cans" ref="can">
        <canvas id="can"></canvas>
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
    var can = this.$refs.can
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
    startMove(100,can)
  },8000)
  setTimeout(function(){
    startMove(100,p3)
  },25000)
},
drawIt(){
  var getPixelRatio = function (context) {
        var backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    };
    //画文字
    var myCanvas = document.getElementById("can");
    var context = myCanvas.getContext("2d");
    var ratio = getPixelRatio(context);

    myCanvas.width = document.documentElement.clientWidth;
    myCanvas.height = document.documentElement.clientHeight/2;
    var cwidth = myCanvas.width;
    var cheight = myCanvas.height
    myCanvas.style.width = myCanvas.width + 'px';
    myCanvas.style.height = myCanvas.height + 'px';
 
    myCanvas.width = myCanvas.width * ratio;
    myCanvas.height = myCanvas.height * ratio;
 
    // 放大倍数
    context.scale(ratio, ratio);

    var sizes2 = 0.0853 * cwidth
    var fontsize2 = sizes2 + 'px'
    var styles2 = "FZYTK--GBK1-0"
    var font2 = fontsize2 + " " + styles2
    context.font = font2
    var color = context.createLinearGradient(0.016*cwidth,0.135*cheight, 0.32*cwidth, 0.135*cheight);   
    color.addColorStop(0, '#808080');      
    color.addColorStop(1, '#ffffff');  
    context.fillStyle = color;
    context.fillText("全栈组", 0.016*cwidth, 0.135*cheight);
    var sizes = 0.0453 * cwidth
    var fontsize = sizes + 'px'
    var styles = "AdobeHeitiStd-Regular"
    var font = fontsize + " " + styles
    context.font = font
    context.fillStyle = "#ffffff"
    context.fillText("沙雕瀚程沙雕瀚程沙雕瀚程沙雕瀚程大沙雕", 0.016*cwidth, 0.285*cheight);
    context.fillText("沙雕瀚程沙雕瀚程沙雕瀚程沙雕瀚程大沙雕", 0.072*cwidth, 0.405*cheight);
    context.fillText("沙雕瀚程沙雕瀚程沙雕瀚程沙雕瀚程大沙雕", 0.128*cwidth, 0.525*cheight);
    context.fillText("沙雕瀚程沙雕瀚程沙雕瀚程沙雕瀚程大沙雕", 0.072*cwidth, 0.645*cheight);
    context.fillText("沙雕瀚程沙雕瀚程沙雕瀚程沙雕瀚程大沙雕", 0.016*cwidth, 0.765*cheight);
}
  },
mounted(){
    this.loadImg()
    this.drawIt()
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
.cans{
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
