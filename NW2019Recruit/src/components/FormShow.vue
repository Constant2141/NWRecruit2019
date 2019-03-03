<template>
  <div class="show-form">
    <div class="form-show">
    <img src="http://pnqc4vaxj.bkt.clouddn.com/book.png" alt="" class="book">
    <img src="../../static/img/topf.png" alt="" class="topf">
    <img src="../../static/img/bottomf.png" alt="" class="bottomf">
    <transition name="fade">
    <div class="texts" v-if="show">
      <div>
        <p id="ptop">姓名</p>
        <span>{{this.name}}</span>
      </div>
      <div>
        <p class="middles">性别</p>
        <span>{{obj.sex}}</span>
      </div>
      <div>
        <p class="middles">意向</p>
        <span>{{obj.like}}</span>
      </div>
      <div>
        <p class="middles">手机</p>
        <span id="number">{{obj.call}}</span>
      </div>
      <div>
        <p class="middles">学号</p>
        <span id="number">{{obj.stuID}}</span>
      </div>
      <div id="guy">
        <p class="middles" id="subject">专业班级</p>
        <span id="school">{{obj.subject}}</span>
      </div>
      <!-- <div>
        <p id="introduce">自我介绍</p>
        <p id="contents">{{obj.intro}}</p>
      </div> -->
    </div>
    </transition>
    <transition name="logo">
      <div class="nw-logo" v-if="nws">
      </div>
    </transition>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:false,
      nws:false,
      name:this.$store.state.name,
      obj:'',
    }
  },
  methods:{
    changeStyle(){
      if(this.obj == '') return;
      if(this.obj.subject.length <= 6){
        var style = document.getElementById("school").style;
        style.fontSize = "18px";
        style.lineHeight = "25px";
        style.paddingTop = "11px";
        style.width = "103px";
      }

    }
  },
  updated(){
    let that = this;
    setTimeout(function(){
      that.changeStyle();
    },100)
  },
  mounted(){
  // console.log(this.$store.state.name);
    this.show = true;
    let that = this
    setTimeout(function(){
      that.nws = true
    },1200)


    this.$axios.post('/api/show',{
      name:this.$store.state.name
    })
    .then((res) => {
      if(res.data.code == 200){
        this.obj = res.data.doc;
      }else{
        console.log('不对劲');
      }
    })
    .catch((err) => {
      console.log(err);
    })
  },
}
</script>

<style scoped>
*{
  margin:0;
  padding: 0;
  list-style: none;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 2s;
}
.logo-enter{
  opacity: 0;
}
.logo-enter-active{
  transition: opacity 1s;
  animation: bounce-in 0.5s;
}
@keyframes bounce-in{
  0%{transform: scale(2);}
  50%{transform:scale(2);}
  100%{transform:scale(1);}
}
.show-form{
  height: 100vh;
  background: black;
}
.form-show{
  width: 100vw;
  height: 100vh;
  /* height: 1334px; */
  background: url("http://pnqc4vaxj.bkt.clouddn.com/baomingbiao.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
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
  /* top: 1100px; */
  top:80%;
  left: 117px;
}
.texts{
  height: 820px;
  width: 520px;
  position: absolute;
  top: 240px;
  left: 117px;
  z-index: 10;
}
.texts div{
  margin-top: 40px;
}
.texts>div::after{
  content: "";
  display: block;
  clear: both;
}
/* .texts>div{
  clear: both;
} */
.texts p{
  /* display: inline-block; */
  float: left;
  width: 160px;
  text-align: center;
  font-size: 36px;
  font-family: YouYuan;
  color: black;
}
.texts span{
  display: inline-block;
  float: left;
  width: 250px;
  text-align: center;
  font-size: 36px;
  font-family: YouYuan;
  color:#6e6e6e;
}
#number{
  line-height: 55px;
}
#ptop{
  margin-left: 60px;
}
.middles{
  margin-left: 60px;
}
#subject{
  height: 75px;
  padding-top: 17px;
}
#guy{
  margin-top: 23px;
}
#school{
  font-size: 24px;
  line-height: 44px;
  width:160px;
  height: 75px;
  word-wrap: break-word;
  margin-left: 30px;
}
#self-int{
  margin-top: 40px;
}
.nw-logo{
  z-index: 99;
  height: 198px;
  width: 198px;
  position: absolute;
  background: url("../../static/img/rnw.png");
  background-size: 100% 100%;
  /* top: 880px; */
  top:63%;
  right: 126px;
}
#introduce{
  float: none;
  margin-top: 0;
  margin-left: 60px;
  color: black;
}
#contents{
  font-family: YouYuan;
  /* font-size: 36px; */
  font-size: 28px;
  width: 450px;
  height: 150px;
  margin-top: 30px;
  margin-left: 40px;
  color:#6e6e6e;
  overflow-y: scroll;
  padding-left: 30px;
  text-align: left;
}
</style>
