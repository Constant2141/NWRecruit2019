<template>
    <div class="page6">
      <div class="pic1" ref="img1">
        <img src="../assets/page62.png">
        <div class="ball" v-show="ball"></div>
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
        <img src="http://kwok.nwingdut.top/ball.png" id="ball" v-show="false">
        <!-- <img src="../assets/ball.png" id="ball" v-show="false"> -->
        <canvas id="canv"></canvas>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      aw1:0,aw2:0,aw3:0,aw4:0,aw5:0,aw6:0,aw7:0,aw8:0,aw9:0,aw10:0,aw11:0,aw12:0,
      ah1:0,ah2:0,ah3:0,ah4:0,ah5:0,ah6:0,ah7:0,ah8:0,ah9:0,ah10:0,ah11:0,ah12:0,
      zhuan1:0,zhuan2:0,zhuan3:0,zhuan4:0,zhuan5:0,zhuan6:0,zhuan7:0,zhuan8:0,zhuan9:0,zhuan10:0,zhuan11:0,zhuan12:0,
      ball:true,
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
        ispeed = alpha < tar ? 1 : -1;
          if(alpha == tar){
            clearInterval(timer)
            alpha = 20;
        }
        else{
            alpha += ispeed;
            obj.style.filter = "alpha(opacity:"+alpha+")";
            obj.style.opacity = alpha/100;
        }
    }, 20)
  }
  setTimeout(function(){
    startMove(100,img2)
  },1900)
  setTimeout(function(){
    startMove(100,p1)
  },3800)
  setTimeout(function(){
    startMove(100,p2)
  },5800)
  setTimeout(function(){
    startMove(100,can)
  },8500)
  setTimeout(function(){
    startMove(100,p3)
  },19500)
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

    this.aw1 = 0.622*cwidth; this.ah1 = 0.285*cheight; 
    this.aw2 = 0.532*cwidth; this.ah2 = 0.285*cheight; 
    this.aw3 = 0.578*cwidth; this.ah3 = 0.285*cheight; 
    this.aw4 = 0.608*cwidth; this.ah4 = 0.405*cheight; 
    this.aw5 = 0.658*cwidth; this.ah5 = 0.405*cheight; 
    this.aw6 = 0.747*cwidth; this.ah6 = 0.525*cheight; 
    this.aw7 = 0.792*cwidth; this.ah7 = 0.525*cheight; 
    this.aw8 = 0.766*cwidth; this.ah8 = 0.645*cheight; 
    this.aw9 = 0.812*cwidth; this.ah9 = 0.645*cheight; 
    this.aw10 = 0.856*cwidth; this.ah10 = 0.645*cheight;
    this.aw11 = 0.810*cwidth; this.ah11 = 0.765*cheight;
    this.aw12 = 0.852*cwidth; this.ah12 = 0.765*cheight;


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
    context.fillText("全栈工程师掌握多种技能,", 0.016*cwidth, 0.285*cheight);
    context.fillText("他", that.aw2, that.ah2)
    context.fillText("既", that.aw3, that.ah3)
    context.fillText("需", that.aw1, that.ah1)
    context.fillText("要了解后端",0.666*cwidth, 0.285*cheight)
    context.fillText("开发也要了解前端开发他", 0.103*cwidth, 0.405*cheight);
    context.fillText("们", that.aw4, that.ah4)
    context.fillText("是", that.aw5, that.ah5)
    context.fillText("“全方位”的",0.715*cwidth, 0.405*cheight)
    context.fillText("工程师,熟悉服务端的同时又", 0.185*cwidth, 0.525*cheight);
    context.fillText("懂", that.aw6, that.ah6)
    context.fillText("客", that.aw7, that.ah7)
    context.fillText("户端用",0.837*cwidth, 0.525*cheight)
    context.fillText("户体验,在这里,我们使用的是轻量", 0.103*cwidth, 0.645*cheight);
    context.fillText("级", that.aw8, that.ah8)
    context.fillText("的", that.aw9, that.ah9)
    context.fillText("语", that.aw10, that.ah10)
    context.fillText("言",0.898*cwidth, 0.645*cheight)
    context.fillText("Node.js搭建响应速度快,易于扩展的网络", 0.016*cwidth, 0.765*cheight);
    context.fillText("应", that.aw11, that.ah11)
    context.fillText("用", that.aw12, that.ah12)

    function change(ctx){
      ctx.clearRect(0.016*cwidth, 0.155*cheight,cwidth,cheight);
      ctx.fillText("全栈工程师掌握多种技能,", 0.016*cwidth, 0.285*cheight);
      ctx.save();
      ctx.translate(0,0);
      ctx.rotate(that.zhuan2);
      ctx.fillText("他", that.aw2, that.ah2);
      ctx.restore();
      ctx.save();
      ctx.translate(10, 10);
      ctx.rotate(that.zhuan3);
      ctx.fillText("既", that.aw3, that.ah3)
      ctx.restore();
      ctx.save();
      ctx.translate(17,12)
      ctx.rotate(that.zhuan1);
      ctx.fillText("需", that.aw1, that.ah1)
      ctx.restore();
      ctx.fillText("要了解后端",0.666*cwidth, 0.285*cheight)
      ctx.fillText("开发也要了解前端开发他", 0.103*cwidth, 0.405*cheight);
      ctx.save();
      ctx.translate(0,0)
      ctx.rotate(that.zhuan4)
      ctx.fillText("们", that.aw4, that.ah4)
      ctx.restore();
      ctx.save();
      ctx.translate(15,15)
      ctx.rotate(that.zhuan5)
      ctx.fillText("是", that.aw5, that.ah5)
      ctx.restore()
      ctx.fillText("“全方位”的",0.715*cwidth, 0.405*cheight)
      ctx.fillText("工程师,熟悉服务端的同时又", 0.185*cwidth, 0.525*cheight);
      ctx.save();
      ctx.translate(10,10)
      ctx.rotate(that.zhuan6)
      ctx.fillText("懂", that.aw6, that.ah6)
      ctx.restore()
      ctx.save();
      ctx.translate(50,50)
      ctx.rotate(that.zhuan7)
      ctx.fillText("客", that.aw7, that.ah7)
      ctx.restore();
      ctx.fillText("户端用",0.837*cwidth, 0.525*cheight)
      ctx.fillText("户体验,在这里,我们使用的是轻量", 0.103*cwidth, 0.645*cheight);
      ctx.save();
      ctx.translate(5,25)
      ctx.rotate(that.zhuan8)
      ctx.fillText("级", that.aw8, that.ah8)
      ctx.restore();
      ctx.save();
      ctx.translate(0,0);
      ctx.rotate(that.zhuan9)
      ctx.fillText("的", that.aw9, that.ah9)
      ctx.restore();
      ctx.save();
      ctx.translate(5,5)
      ctx.rotate(that.zhuan10)
      ctx.fillText("语", that.aw10, that.ah10)
      ctx.restore();
      ctx.fillText("言",0.898*cwidth, 0.645*cheight)
      ctx.fillText("Node.js搭建响应速度快,易于扩展的网络", 0.016*cwidth, 0.765*cheight);
      ctx.save();
      ctx.translate(2,12)
      ctx.rotate(that.zhuan11)
      ctx.fillText("应", that.aw11, that.ah11)
      ctx.restore();
      ctx.save();
      ctx.translate(10,10)
      ctx.rotate(that.zhuan12)
      ctx.fillText("用", that.aw12, that.ah12);
      ctx.restore();
    }

    setTimeout(function(){
      var timer = setInterval(function(){
      if(that.zhuan1 <= -5 * Math.PI / 180){
        clearInterval(timer)
      }
      else{
      that.zhuan1 -= 0.5*Math.PI/180;
      that.zhuan2 -= 0.5*Math.PI/180;
      that.zhuan3 -= 1*Math.PI/180;
      change(context)
      }
    },20)
    },18480)

    setTimeout(function(){
      var timer = setInterval(function(){
      if(that.zhuan4 <= -6 * Math.PI / 180){
        clearInterval(timer)
      }
      else{
      that.zhuan4 -= 0.6*Math.PI/180;
      that.zhuan5 -= 1*Math.PI/180
      change(context)
      }
    },20)
    },18550)

    setTimeout(function(){
      var timer = setInterval(function(){
      if(that.zhuan6 >= 10*Math.PI/180){
        clearInterval(timer)
      }
      else{
      that.zhuan6 += 1*Math.PI/180;
      that.zhuan7 += 1*Math.PI/180;
      change(context)
      }
    },20)
    },18600)

    setTimeout(function(){
      var timer = setInterval(function(){
      if(that.zhuan8 <= -15*Math.PI/180){
        clearInterval(timer)
      }
      else{
      that.zhuan8 -= 1.5*Math.PI/180;
      that.zhuan9 += 0.5*Math.PI/180;
      that.zhuan10 += 1*Math.PI/180;
      change(context)
      }
    },20)
    },18650)

    setTimeout(function(){
      var timer = setInterval(function(){
      if(that.zhuan11 <= -14*Math.PI/180){
        clearInterval(timer)
      }
      else{
      that.zhuan11 -= 1.4*Math.PI/180;
      that.zhuan12 -= 0.6*Math.PI/180;
      change(context)
      }
    },20)
    },18700)
},
  show(){
    let that = this
    this.ball = false
    var myCanvas = document.getElementById("canv");
    var context = myCanvas.getContext("2d");
    var img = document.getElementById("ball");
    
    myCanvas.width = document.documentElement.clientWidth;
    myCanvas.height = document.documentElement.clientHeight/2 + document.documentElement.clientHeight/7;
    var cwidth = myCanvas.width;
    var cheight = myCanvas.height
      var ball = {
      x:0.16*cwidth,
      y:0.14*cheight,
      g:0.006*cheight,
      vx:0.043*cwidth,
      vy:0,
    }
      var timer = setInterval(function(){
        update();
        render(context)
      },90)
      function update(){
        ball.x += ball.vx;
        ball.y += ball.vy;
        ball.vy += ball.g; 
      }

      function render(ctx){
      ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
      // var img = document.getElementById("ball");
      // var pat = ctx.createPattern(img,"repeat");
      // ctx.fillStyle = pat;
      // ctx.beginPath();
      // ctx.arc(ball.x,ball.y,ball.r,0,2*Math.PI);
      // ctx.closePath();
      // ctx.fill()
      var imag = new Image()
      // imag.src = ball.src
      imag.src = img.src
      imag.onload = function(){
        if(ball.x > 0.845*cwidth){
        context.drawImage(imag,ball.x,ball.y,30,30)
        clearInterval(timer)
        }else{
        context.drawImage(imag,ball.x,ball.y,30,30)
        }
        // ctx.drawImage(imag,ball.x,ball.y,30,30)
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
    },17500)
    // this.show()
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
.ball{
  position: absolute;
  height: 60px;
  width: 60px;
  top: 208px;
  left: 83px;
  background: url("../assets/ball.png");
  background-size: 100% 100%
}
.pic1{
  height: 271px;
  width: 563px;
  margin-left: 16px;
  margin-top: 26px;
  filter: alpha(opacity=0);
  opacity: 0;
}
.pic1 img{
  height: 271px;
  width: 563px;
  margin: 0 auto;
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
  top: 129px;
  left: 0;
  z-index: 99
}
</style>
