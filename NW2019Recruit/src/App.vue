<template>
  <div id="app" @touchmove="move">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <div class="arrow" id="arrow" @click="next" v-if="arrStatus"></div>
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

    let body = document.getElementsByTagName("body")[0];
		body.addEventListener("touchstart", this.start);
		body.addEventListener("touchend", this.end);
  },
	methods: {
		move(e){
			e.preventDefault();
      e.stopPropagation();
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
			console.log(routes);
			var navMap = routes.reduce((acc,cur,idx) => {
				if(cur.name === routeName){
					return acc = idx;
				}
				return acc;
			},0);

			if((navMap == 1 && cha > 120) || (navMap == routes.length - 1 && cha < -120)){
				return 
			}
			if(Math.abs(cha) > 120){
				cha < 0 ? this.$router.push(routes[navMap + 1].name) : this.$router.push(routes[navMap - 1].name);
				this.arrStatus = true;
			}
			if((navMap == routes.length - 2 && cha < -120) || (routeName == 'HomePage' && cha < -120)){
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
#arrow{
  z-index: 100;
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
