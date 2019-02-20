<template>
    <div class="homepage">
        <div class="home-img">
            <div class="font"></div>

            <div class="star-wrap" id="s1">
                <div class="star"></div>
                <div class="star-blur" ref="blur1"></div>
                <div class="star-blur2" ref="blur2"></div>
            </div>
            <div class="star-wrap" id="s2">
                <div class="star"></div>
                <div class="star-blur" ref="blur1"></div>
                <div class="star-blur2" ref="blur2"></div>
            </div>
            <div class="star-wrap" id="s3">
                <div class="star"></div>
                <div class="star-blur" ref="blur1"></div>
                <div class="star-blur2" ref="blur2"></div>
            </div>
            <div class="star-wrap" id="s4">
                <div class="star"></div>
                <div class="star-blur" ref="blur1"></div>
                <div class="star-blur2" ref="blur2"></div>
            </div>
            <div class="star-wrap" id="s5">
                <div class="star"></div>
                <div class="star-blur" ref="blur1"></div>
                <div class="star-blur2" ref="blur2"></div>
            </div>
            <div class="star-wrap" id="s6">
                <div class="star"></div>
                <div class="star-blur" ref="blur1"></div>
                <div class="star-blur2" ref="blur2"></div>
            </div>
            <div class="star-wrap" id="s7">
                <div class="star"></div>
                <div class="star-blur" ref="blur1"></div>
                <div class="star-blur2" ref="blur2"></div>
            </div>
            <div class="star-wrap" id="s8">
                <div class="star"></div>
                <div class="star-blur" ref="blur1"></div>
                <div class="star-blur2" ref="blur2"></div>
            </div>
        </div>
    </div>
</template>

<script>

import star from "../utils/star"
export default {
    data(){
        return {

        }
    },
    mounted(){

    },
    methods: {
    }

}
</script>

<style lang="scss" scoped>
    .home-img{
        background-image: url(../assets/home.jpg);
        height: 100vh;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .font{
        position: absolute;
        width:187px;
        height:520px;
        top: 26vw;
        left: 37vw;
        background-color: whitesmoke;
    }
    .star-wrap{
        position: absolute;
        width: 7vw;
        height: 7vw;
    }
    #s1{
        top: 25vw;
        left: 20vw;
    }
    #s2{
        top: 44vw;
        left: 10vw;
    }
    #s3{
        top: 70vw;
        left: 32vw;
    }
    #s4{
        top: 88vw;
        left: 6vw;
    }
    #s5{
        top: 11vw;
        left: 62vw;
    }
    #s6{
        top: 38vw;
        left: 82vw;
    }
    #s7{
        top: 63vw;
        left: 75vw;
    }
    #s8{
        top: 94vw;
        left: 87vw;
    }
    #s1 .star ,#s4 .star{
        background-color: #a4ad67;
    }
    #s1 .star-blur2,#s4 .star-blur2{
        background-color: #a4ad6750;
    }
    #s3 .star ,#s5 .star,#s7 .star{
        background-color: #56e4cd80;
    }
    #s3 .star-blur2,#s5 .star-blur2,#s7 .star-blur2{
        background-color: #56e4cd50;
    }
    .star{
        background-color: #ffffff80;
        border-radius: 20px;
        position: absolute;
        top:50%;
        left:50%;
        margin-left: -.4vw;
        margin-top:-.4vw;
        width: .8vw;
        height: .8vw;
        -webkit-filter: blur(2px);
    }

    .star-blur{
        position: absolute;
        top:50%;
        left:50%;
        margin-left: -1.5vw;
        margin-top:-1.5vw;
        background-color: #ffffff50;
        width: 3vw;
        height: 3vw;
        -webkit-filter: blur(13px);
        transition: width 1.5s,height 1.5s,margin 1.5s;
    }
    .star-blur2{
        position: absolute;
        top:50%;
        left:50%;
        margin-left: -1.5vw;
        margin-top:-1.5vw;
        background-color: #ffffff50;
        width: 3vw;
        height: 3vw;
        -webkit-filter: blur(10px);
        transition: width 1.5s,height 1.5s,margin 1.5s;
    }
</style>
