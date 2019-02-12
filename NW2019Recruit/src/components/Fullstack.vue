<template>
    <div class="page6">
      <div class="pic1" v-show="pic1">
      </div>
      <div class="text">
        <p id="h1">全栈组</p>
        <p id="p1">这是全栈组介绍这是全栈组介绍自己想文案</p>
        <p id="p2">这是全栈组介绍这是全栈组介绍自己想文案</p>
        <p id="p3">这是全栈组介绍这是全栈组介绍自己想文案</p>
        <p id="p2">这是全栈组介绍这是全栈组介绍自己想文案</p>
        <p id="p4">这是全栈组介绍这是全栈组介绍自己想文案</p>
      </div>
      <div class="bottom">
        <div class="ltext">
        <p id="p5">噢...这只调皮的猫</p>
        <p id="p6">打翻了我的咖啡杯"</p>
        <p id="p7">啊！ZELDA！瞧你的毛线球！</p>
        </div>
        <div class="pic2"></div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      // pic1:false,
      pic1:true
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
    // this.second5()
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
  margin-top: 80px;
}
</style>
