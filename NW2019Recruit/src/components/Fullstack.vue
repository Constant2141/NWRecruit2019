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
        <img src="../assets/ball.png" id="ball" v-show="false">
        <canvas id="canv"></canvas>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      aw1:0,aw2:0,aw3:0,aw4:0,aw5:0,aw6:0,aw7:0,aw8:0,aw9:0,aw10:0,aw11:0,aw12:0,aw13:0,aw14:0,
      ah1:0,ah2:0,ah3:0,ah4:0,ah5:0,ah6:0,ah7:0,ah8:0,ah9:0,ah10:0,ah11:0,ah12:0,ah13:0,ah14:0,
    }
  },
methods:{
loadImg(){
  let that = this
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
        ispeed = alpha < tar ? 2 : -2;
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
  },1000)
  setTimeout(function(){
    startMove(100,p1)
  },2000)
  setTimeout(function(){
    startMove(100,p2)
  },2800)
  setTimeout(function(){
    startMove(100,can)
  },4000)
  setTimeout(function(){
    startMove(100,p3)
  },17000)
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

    this.aw1 = 0.426*cwidth;
    this.ah1 = 0.285*cheight;
    this.aw2 = 0.516*cwidth;
    this.ah2 = 0.285*cheight;
    this.aw3 = 0.561*cwidth;
    this.ah3 = 0.285*cheight;
    this.aw4 = 0.471*cwidth;
    this.ah4 = 0.285*cheight;
    this.aw5 = 0.345*cwidth;
    this.ah5 = 0.405*cheight;
    this.aw6 = 0.389*cwidth;
    this.ah6 = 0.405*cheight;
    this.aw7 = 0.434*cwidth;
    this.ah7 = 0.405*cheight;
    this.aw8 = 0.265*cwidth;
    this.ah8 = 0.525*cheight;
    this.aw9 = 0.310*cwidth;
    this.ah9 = 0.525*cheight;
    this.aw10 = 0.355*cwidth;
    this.ah10 = 0.525*cheight;
    this.aw11 = 0.207*cwidth;
    this.ah11 = 0.645*cheight;
    this.aw12 = 0.252*cwidth;
    this.ah12 = 0.645*cheight;
    this.aw13 = 0.152*cwidth;
    this.ah13 = 0.765*cheight;
    this.aw14 = 0.197*cwidth;
    this.ah14 = 0.765*cheight;


    let that = this
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
    context.fillText("沙雕瀚程沙雕瀚程沙", 0.016*cwidth, 0.285*cheight);
    context.fillText("雕", that.aw1, that.ah1)
    context.fillText("瀚", that.aw4, that.ah4)
    context.fillText("程", that.aw2, that.ah2)
    context.fillText("沙", that.aw3, that.ah3)
    context.fillText("雕瀚程大沙雕",0.607*cwidth, 0.285*cheight)
    context.fillText("沙雕瀚程沙雕", 0.073*cwidth, 0.405*cheight);
    context.fillText("瀚", that.aw5, that.ah5)
    context.fillText("程", that.aw6, that.ah6)
    context.fillText("沙", that.aw7, that.ah7)
    context.fillText("雕瀚程沙雕瀚程大沙雕",0.479*cwidth, 0.405*cheight)
    context.fillText("沙雕瀚", 0.128*cwidth, 0.525*cheight);
    context.fillText("程", that.aw8, that.ah8)
    context.fillText("沙", that.aw9, that.ah9)
    context.fillText("雕", that.aw10, that.ah10)
    context.fillText("瀚程沙雕瀚程沙雕瀚程大沙雕",0.400*cwidth, 0.525*cheight)
    context.fillText("沙雕瀚", 0.072*cwidth, 0.645*cheight);
    context.fillText("程", that.aw11, that.ah11)
    context.fillText("沙", that.aw12, that.ah12)
    context.fillText("雕瀚程沙雕瀚程沙雕瀚程大沙雕",0.297*cwidth, 0.645*cheight)
    context.fillText("沙雕瀚", 0.016*cwidth, 0.765*cheight);
    context.fillText("程", that.aw13, that.ah13)
    context.fillText("沙", that.aw14, that.ah14)
    context.fillText("雕瀚程沙雕瀚程沙雕瀚程大沙雕",0.242*cwidth, 0.765*cheight)

    function change(ctx){
      ctx.clearRect(0.016*cwidth, 0.155*cheight,cwidth,cheight);
      ctx.fillText("沙雕瀚程沙雕瀚程沙", 0.016*cwidth, 0.285*cheight);
      ctx.fillText("雕", that.aw1, that.ah1)
      ctx.fillText("瀚", that.aw4, that.ah4)
      ctx.fillText("程", that.aw2, that.ah2)
      ctx.fillText("沙", that.aw3, that.ah3)
      ctx.fillText("雕瀚程大沙雕",0.607*cwidth, 0.285*cheight)
      ctx.fillText("沙雕瀚程沙雕", 0.073*cwidth, 0.405*cheight);
      ctx.fillText("瀚", that.aw5, that.ah5)
      ctx.fillText("程", that.aw6, that.ah6)
      ctx.fillText("沙", that.aw7, that.ah7)
      ctx.fillText("雕瀚程沙雕瀚程大沙雕",0.479*cwidth, 0.405*cheight)
      ctx.fillText("沙雕瀚", 0.128*cwidth, 0.525*cheight);
      ctx.fillText("程", that.aw8, that.ah8)
      ctx.fillText("沙", that.aw9, that.ah9)
      ctx.fillText("雕", that.aw10, that.ah10)
      ctx.fillText("瀚程沙雕瀚程沙雕瀚程大沙雕",0.400*cwidth, 0.525*cheight)
      ctx.fillText("沙雕瀚", 0.072*cwidth, 0.645*cheight);
      ctx.fillText("程", that.aw11, that.ah11)
      ctx.fillText("沙", that.aw12, that.ah12)
      ctx.fillText("雕瀚程沙雕瀚程沙雕瀚程大沙雕",0.297*cwidth, 0.645*cheight)
      ctx.fillText("沙雕瀚", 0.016*cwidth, 0.765*cheight);
      ctx.fillText("程", that.aw13, that.ah13)
      ctx.fillText("沙", that.aw14, that.ah14)
      ctx.fillText("雕瀚程沙雕瀚程沙雕瀚程大沙雕",0.242*cwidth, 0.765*cheight)
    }

    setTimeout(function(){
      var timer = setInterval(function(){
      if(that.aw4 <= 0.426*cwidth){
        clearInterval(timer)
      }
      else{
      that.aw4 -= 0.1;
      that.ah4 -= 0.1;
      change(context)
      }
    },20)
    },15500)

    setTimeout(function(){
      var timer = setInterval(function(){
      if(that.aw2 <= 0.470*cwidth){
        clearInterval(timer)
      }
      else{
      that.aw2 -= 0.1;
      that.ah2 -= 0.1;
      change(context)
      }
    },20)
    },15000)

    setTimeout(function(){
      var timer = setInterval(function(){
      if(that.aw3 <= 0.516*cwidth){
        clearInterval(timer)
      }
      else{
      that.aw3 -= 0.1;
      that.ah3 -= 0.1;
      change(context)
      }
    },20)
    },15000)

    setTimeout(function(){
      var timer = setInterval(function(){
      if(that.aw1 <= 0.380*cwidth){
        clearInterval(timer)
      }
      else{
      that.aw1 -= 0.1;
      that.ah1 -= 0.1;
      change(context)
      }
    },20)
    },15500)

    setTimeout(function(){
      var timer = setInterval(function(){
      if(that.aw5 <= 0.296*cwidth){
        clearInterval(timer)
      }
      else{
      that.aw5 -= 0.1;
      that.ah5 -= 0.1;
      change(context)
      }
    },20)
    },15500)

    setTimeout(function(){
      var timer = setInterval(function(){
      if(that.aw6 <= 0.340*cwidth){
        clearInterval(timer)
      }
      else{
      that.aw6 -= 0.1;
      that.ah6 -= 0.1;
      change(context)
      }
    },20)
    },15500)

    setTimeout(function(){
      var timer = setInterval(function(){
      if(that.aw7 <= 0.383*cwidth){
        clearInterval(timer)
      }
      else{
      that.aw7 -= 0.1;
      that.ah7 -= 0.1;
      change(context)
      }
    },20)
    },15500)

    setTimeout(function(){
      var timer = setInterval(function(){
      if(that.aw8 <= 0.220*cwidth){
        clearInterval(timer)
      }
      else{
      that.aw8 -= 0.1;
      that.ah8 -= 0.1;
      change(context)
      }
    },20)
    },15550)

    setTimeout(function(){
      var timer = setInterval(function(){
      if(that.aw9 <= 0.265*cwidth){
        clearInterval(timer)
      }
      else{
      that.aw9 -= 0.1;
      that.ah9 -= 0.1;
      change(context)
      }
    },20)
    },15550)

    setTimeout(function(){
      var timer = setInterval(function(){
      if(that.aw10 <= 0.310*cwidth){
        clearInterval(timer)
      }
      else{
      that.aw10 -= 0.1;
      that.ah10 -= 0.1;
      change(context)
      }
    },20)
    },15550)

    setTimeout(function(){
      var timer = setInterval(function(){
      if(that.aw11 <= 0.161*cwidth){
        clearInterval(timer)
      }
      else{
      that.aw11 -= 0.1;
      that.ah11 -= 0.1;
      change(context)
      }
    },20)
    },15550)

    setTimeout(function(){
      var timer = setInterval(function(){
      if(that.aw12 <= 0.206*cwidth){
        clearInterval(timer)
      }
      else{
      that.aw12 -= 0.1;
      that.ah12 -= 0.1;
      change(context)
      }
    },20)
    },15550)

    setTimeout(function(){
      var timer = setInterval(function(){
      if(that.aw13 <= 0.109*cwidth){
        clearInterval(timer)
      }
      else{
      that.aw13 -= 0.1;
      that.ah13 -= 0.1;
      change(context)
      }
    },20)
    },15550)

    setTimeout(function(){
      var timer = setInterval(function(){
      if(that.aw14 <= 0.154*cwidth){
        clearInterval(timer)
      }
      else{
      that.aw14 -= 0.1;
      that.ah14 -= 0.1;
      change(context)
      }
    },20)
    },15550)
},
  show(){
    let that = this
    var myCanvas = document.getElementById("canv");
    var context = myCanvas.getContext("2d");

    myCanvas.width = document.documentElement.clientWidth;
    myCanvas.height = document.documentElement.clientHeight/2;
    var cwidth = myCanvas.width;
    var cheight = myCanvas.height
      var ball = {
      x:0.8*cwidth,
      y:0.1*cheight,
      g:0.006*cheight,
      vx:0.043*cwidth,
      vy:0,
    }
      var timer = setInterval(function(){
        update();
        render(context)
      },100)
      function update(){
        ball.x -= ball.vx;
        ball.y += ball.vy;
        ball.vy += ball.g; 
      }

      function render(ctx){
      ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
      var img = document.getElementById("ball");
      var imag = new Image()
      imag.src = img.src
      imag.onload = function(){
        if(ball.x < 0.152*cwidth){
        context.drawImage(imag,ball.x,ball.y,20,20)
        clearInterval(timer)
        }else{
        context.drawImage(imag,ball.x,ball.y,20,20)
        }
      }
      }
    },
  },
mounted(){
    let that = this
    this.loadImg()
    this.drawIt()
    setTimeout(function(){
      that.show()
    },14500)
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
#can{
  z-index: 10
}
#canv{
  position: absolute;
  top: 296px;
  left: 0;
  z-index: 99
}
</style>
