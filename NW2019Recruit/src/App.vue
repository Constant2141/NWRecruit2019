<template>
  <div id="app" @touchmove="move">
		<keep-alive include="EntryForm">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
		</keep-alive>
    <div class="arrow" id="arrowt" @click="next" v-if="arrStatus"></div>
  </div>
</template>

<script>
import vwx from './utils/vwx'

// 用于记录点击的初始位置
var pre;
var cha;

export default {
  name: 'App',
  data () {
		return {
			arrStatus: true
		}
	},
  created(){
    vwx.share();
		var u = navigator.userAgent;
		console.log(u)
		if(u.indexOf("iPhone") > -1 || u.indexOf("Linux") > -1 || u.indexOf('Windows Phone') > -1){
				console.log("手机")
		}else{
				this.$router.replace("/tophone");
				this.arrStatus = false;
				return ;
		}
    let body = document.getElementsByTagName("body")[0];
		body.addEventListener("touchstart", this.start);
		body.addEventListener("touchend", this.end);
	},
	updated(){
		var routeName = this.$route.name;
			// 整个路由配置中的url
		if(routeName == "Loading"||routeName == 'HomePage' || routeName == 'ToPhone' || routeName == 'FormShow' || routeName == "Picture" || routeName == "EntryForm")this.arrStatus = false;
		else this.arrStatus = true;
	},
	methods: {
		move(e){
			var routeName = this.$route.name;
			// 整个路由配置中的url
		if(routeName == "FormShow" || routeName == "EntryForm")return ;
		else{
			e.preventDefault();
			e.stopPropagation();
		}
		},
		next(){
			if(Math.abs(cha) > 120){
				return
			} else {
				this.navigate(-130);
			}
		},
		navigate (cha) {
			// 当前页面的url
			var routeName = this.$route.name;
			// 整个路由配置中的url
			var routes = this.$router.options.routes;
			// console.log(routes);
			var navMap = routes.reduce((acc,cur,idx) => {
				if(cur.name === routeName){
					return acc = idx;
				}
				return acc;
			},0);

			if(navMap == 7 && cha > 120){
				this.$router.replace('IntroducePage');
				return 
			}

			if((navMap == 1)||(navMap == 2 && cha > 120) || (navMap == 4 && cha < -120) ||(navMap == 6 && cha< -120)||(navMap == 6 && cha > 120)||(navMap == 8 && cha< -120)||(navMap == routes.length - 2)){
				// console.log("不该上下滑");
				return 
			}
			if(Math.abs(cha) > 120){
				cha < 0 ? this.$router.replace(routes[navMap + 1].name) : this.$router.replace(routes[navMap - 1].name);
				this.arrStatus = true;
			}
			if((navMap == routes.length - 2 && cha < -120)){
				this.arrStatus = false;
			}
		},
		start (e) {
			pre = e.touches[0];
		}, 
		end(e){
			var now = e.changedTouches[0];
			cha = now.pageY - pre.pageY;
			this.navigate(cha);
		}
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
body{
  margin: 0;
  padding: 0;
}
.arrow{
	width: 25%;
	height: 5%;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
  z-index: 10;
	margin: 0 auto;
	background: url('./assets/down.png') no-repeat;
	background-size: 50% 100%;
	background-position: 50% 50%;
	animation: updown .35s infinite linear;
	animation-direction: alternate;
}
#arrowt{
  z-index: 123 !important;
}
@keyframes updown {
	from{
		bottom: 0;
	}
	to{
		bottom: 6px;
	}
}
</style>
