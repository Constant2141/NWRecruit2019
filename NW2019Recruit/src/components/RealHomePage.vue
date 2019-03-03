<template>
    <div class="homepage">
        <star v-for="i in items" :key="i.id"></star>
        <div class="home-img">

            <div class="font">
                <svg width="93" height="259">
                    <g class="shou">
                        <rect x="15" y="10" width="45" height="1" style="fill:#ffffff00" id="s1"></rect>
                        <rect x="15" y="20" width="1" height="10" style="fill:#ffffff00" id="s2"></rect>
                        <rect x="60" y="20" width="1" height="10" style="fill:#ffffff00" id="s3"></rect>
                        <rect x="12" y="35" width="53" height="1" style="fill:#ffffff00" id="s4"></rect>
                        <rect x="50" y="26" width="1" height="33" style="fill:#ffffff00" id="s5"></rect>
                        <path d="M50.5 59
                            S50 64 45 64"
                            style="stroke:#ffffff;stroke-width:1;fill:#ffffff00"
                            id="s6"></path>
                        <rect x="35" y="63.5" width="10" height="1" style="fill:#ffffff00" id="s7"></rect>
                        <path style="stroke:#ffffff00;stroke-width:1.5;fill:#ffffff00"
                            id="s8"
                            d="M35 13
                            L40 19"></path>
                        <path style="stroke:#ffffff00;stroke-width:1"
                            id="s9"
                            d="M21 41
                            L33 52"></path>
                    </g>

                    <g class="ye">
                        <rect x="15" y="116" width="45" height="1" style="fill:rgba(255,255,255,0)" id="y2"></rect>
                        <rect x="21" y="130" width="1" height="27" style="fill:rgba(255,255,255,0)" id="y4"></rect>
                        <rect x="36" y="128" height="1" width="22" style="fill:rgba(255,255,255,0)" id="y6"></rect>
                        <path style="stroke:#ffffff00;stroke-width:1.5"
                            id="y1"
                            d="M35 109
                            L40 116"></path>
                        <path style="stroke:#ffffff00;stroke-width:1;fill:#ffffff00"
                            id="y3"
                            d=" M27 121
                            S25 128 13 140"></path>
                        
                        <path id="y5"
                            style="stroke:#ffffff00;stroke-witdth:1;fill:#ffffff00"
                            d="M39 121
                            S37 128 27 140"></path>

                        <path id="y7"
                            style="stroke:#ffffff00;stroke-witdth:1;fill:#ffffff00"
                            d="M57 128
                            S54 146 27 157"></path>
                        <path id="y8"
                            style="stroke:#ffffff00;stroke-witdth:1;fill:#ffffff00"
                            d="M32 133
                            S38 150 60 157"></path>
                        <path id="y9"
                            style="stroke:#ffffff00;stroke-witdth:1;fill:#ffffff00"
                            d="M41 133
                            L47 138"></path>
                    </g>
                    <g class="ren">
                        <path id="r1"
                        style="fill:#ffffff00;stroke:#ffffff00;stroke-witdth:1;"
                        d="M35 202
                        S40 230 10 250"></path>
                        <path id="r2"
                        style="fill:#ffffff00;stroke:#ffffff00;stroke-witdth:1"
                        d="M35 202
                        S30 230 60 250"></path>
                    </g>
                </svg>
            </div>

            <!-- <div class="star-wrap" id="s1">
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
            </div> -->
        </div>

        <!-- <div id="wave1"> </div>
        <div id="wave2"></div> -->
    </div>
</template>

<script>
import star from "@/components/star"
export default {
    data(){
        return {
            timer:null,
            timer2:null,
            timer3:null,
            starcount: 12,
            items:[]
        }
    },
    components:{
        star
    },
    created(){
        // window.addEventListener('message',function(e){
        //     console.log(e.origin,e.data)
        //     }
        // )
    },
    mounted(){
        // this.wave();
        this.font();
        for(let i = 0;i < this.starcount;i++){
            this.items.push("1");
        }
        // this.types();
        clearInterval(this.timer);
        // this.$star.RandomTwinkle(this.$refs.star);
        // this.timer = setInterval(() =>{
        //     // console.log(this.$star);
        //     console.log(this.timer);

        // },3000);
        this.$once('hook:beforeDestroy', () => {
            console.log(this.timer);
            clearInterval(this.timer);
            clearTimeout(this.timer2);
            clearTimeout(this.timer3)
        })
    },
    beforeDestroy(){
    },
    // destroyed(){
    //     clearInterval(this.timer);
    // },
    methods: {
        // star(){
        //     this.$refs.star.
        // },
        // wave(){
        //     var wave1 = document.getElementById("wave1");
        //     var wave2 = document.getElementById("wave2");
        //     var flagX = 0,
        //         flagY = 0;
        //     function act(){
        //         // console.log(wave1.style.backgroundPositionX)
        //         flagX -= 0.9;
        //         // flagY < -5 ? flagY = 5:flagY -= 0.1;
        //         wave1.style.backgroundPositionX = flagX + 'px';
        //         // wave1.style.backgroundPositionY = (Math.abs(flagY))+30 + 'px';
        //         wave2.style.backgroundPositionX = 100 + flagX*1.8 + 'px';
        //         // wave2.style.backgroundPositionY = (Math.abs(flagY))*0.5 +27 + 'px';
        //         requestAnimationFrame(act);
        //     }
        //     act();
        // },
        // types(){
        //     var u = navigator.userAgent;
        //     console.log(u)
        //     if(u.indexOf("iPhone") > -1 || u.indexOf("Linux") > -1 || u.indexOf('Windows Phone') > -1){
        //         console.log("手机")
        //     }else{
        //         this.$router.push("/tophone")
        //     }
        // },
        font(){
            function shou(){
                var shou = [0,0,80,-20,80,20,5.5,0];//用于调配笔画移动或透明度的参数（一一对应）
                let s1 = document.getElementById("s1"),
                    s2 = document.getElementById("s2"),
                    s3 = document.getElementById("s3"),
                    s4 = document.getElementById("s4"),
                    s5 = document.getElementById("s5"),
                    s6 = document.getElementById("s6"),
                    s7 = document.getElementById("s7"),
                    s8 = document.getElementById("s8"),
                    s9 = document.getElementById("s9");
                let color = 0;

                let act1 = setInterval(()=>{
                    if(shou[0] < 20){
                        color += 1/(20/0.4);
                        shou[0] += 0.4;
                        shou[1] += 15/(20/0.4);
                        shou[2] -= 20/(20/0.4);
                        shou[3] += 32/(20/0.4);
                        shou[4] -= 29.5/(20/0.4);
                        shou[5] += 30.5/(20/0.4);
                        shou[6] += 30.5/(20/0.4);
                        // console.log(color)

                        s1.setAttribute("y",shou[0]);
                        s2.setAttribute("x",shou[1]);
                        s3.setAttribute("x",shou[2]);
                        s4.setAttribute("x",shou[3]);
                        s5.setAttribute("x",shou[4]);
                        s6.setAttribute("d","M"+ (shou[5])+ " 58" + '\n'+"S" + ' ' + (shou[5]-0.5) + " 64" + " " + (shou[5]-5) + " 64");
                        s7.setAttribute("x",shou[6]);

                        s1.setAttribute("style","fill:rgba(255,255,255,"+ color +")");
                        s2.setAttribute("style","fill:rgba(255,255,255,"+ color +")")
                        s3.setAttribute("style","fill:rgba(255,255,255,"+ color +")");
                        s4.setAttribute("style","fill:rgba(255,255,255,"+ color +")");
                        s5.setAttribute("style","fill:rgba(255,255,255,"+ color +")");
                        s6.setAttribute("style","fill:rgba(255,255,255,"+ color +")");
                        s7.setAttribute("style","fill:rgba(255,255,255,"+ color +")")
                    }
                    else{
                        // console.log(s1.getAttribute("style"))
                        clearInterval(act1);
                        let act2 = setInterval(() => {
                            if(shou[7] < 1){
                                shou[7] += 1/(20/0.4);
                                s8.setAttribute("style","stroke-width:1.5;stroke:rgba(255,255,255,"+ shou[7]+")" );
                                s9.setAttribute("style","stroke-width:1;stroke:rgba(255,255,255,"+ shou[7]+")" );
                            }
                            else{
                                clearInterval(act2);
                            }
                        },30);


                    }
                },25)
            }
            function ye(){
                var ye = [0,86,2,180,0,60,83,10,0]; //用于调配笔画移动或透明度的参数（一一对应）
                let y1 = document.getElementById("y1"),
                    y2 = document.getElementById("y2"),
                    y3 = document.getElementById("y3"),
                    y4 = document.getElementById("y4"),
                    y5 = document.getElementById("y5"),
                    y6 = document.getElementById("y6"),
                    y7 = document.getElementById("y7"),
                    y8 = document.getElementById("y8"),
                    y9 = document.getElementById("y9");
                let color = 0;

                let act1 = setInterval(() =>{
                    if(ye[1] < 116){
                        ye[1] += 0.6;
                        ye[2] += 25/(30/0.6);
                        ye[3] -= 48/(30/0.6);
                        ye[5] -= 25/(30/0.6);
                        ye[6] -= 25/(30/0.6);
                        ye[7] += 22/(30/0.6);
                        color += 1/(30/0.6);
                        y2.setAttribute("y",ye[1]);
                        y3.setAttribute("d","M"+ ye[2] + " 121" + '\n'+"S" + ' ' + (ye[2]-2) + " 128" + " " + (ye[2]-14) + " 140");
                        y4.setAttribute("y",ye[3]);
                        y6.setAttribute("x",ye[5]);
                        y7.setAttribute("d","M"+ ye[6] + " 128" + '\n'+"S" + ' ' + (ye[6]-3) + " 146" + " " + (ye[6]-30) + " 157");
                        y8.setAttribute("d","M"+ ye[7] + " 133" + '\n'+"S" + ' ' + (ye[7]+6) + " 150" + " " + (ye[7]+28) + " 157");

                        y2.setAttribute("style","fill:rgba(255,255,255,"+ color +")");
                        y4.setAttribute("style","fill:rgba(255,255,255,"+ color +")");
                        y6.setAttribute("style","fill:rgba(255,255,255,"+ color +")");
                        y3.setAttribute("style","stroke:rgba(255,255,255,"+ color+")");
                        y7.setAttribute("style","stroke:rgba(255,255,255,"+ color+");fill:#ffffff00");
                        y8.setAttribute("style","stroke:rgba(255,255,255,"+ color+");fill:#ffffff00");


                    }
                    else{
                        clearInterval(act1);
                        if(ye[0] < 1){
                            let act2 = setInterval(() =>{
                                ye[0] += 1/(30/0.6);
                                ye[4] += 1/(30/0.6);
                                ye[8] += 1/(30/0.6);
                                y1.setAttribute("style","stroke-width:1;stroke:rgba(255,255,255,"+ ye[0]+")");
                                y5.setAttribute("style","stroke-width:1;stroke:rgba(255,255,255,"+ ye[4]+")");
                                y9.setAttribute("style","stroke-width:1;stroke:rgba(255,255,255,"+ ye[8]+")");
                            },30)
                        }
                        else{
                            clearInterval(act2);
                        }
                    }
                },25)

            }
            function ren(){
                var ren = [0,0];
                let r1 = document.getElementById("r1"),
                    r2 = document.getElementById("r2");
                let color = 0;

                if(color < 1){
                    let act2 = setInterval(() =>{
                        color += 1/50;
                        r1.setAttribute("style","stroke:rgba(255,255,255,"+ color+");");
                        r2.setAttribute("style","stroke:rgba(255,255,255,"+ color+");");
                    },30)
                }
                else{
                    clearInterval(act2);
                }

            }
            shou();
            this.timer2 = setTimeout(ye,500);
            this.timer3 = setTimeout(ren,1500);

        }
    },


}
</script>

<style scoped>
    path{
        fill:#ffffff00;
    }
    rect{
        stroke:#ffffff00;
    }
    circle{
        fill:#ffffff00;
        stroke: #ffffff00;
    }
    #star{
        width: 100%;
        height: 50vh;
    }
    .homepage{
        height: 100vh;
        overflow: hidden;
    }
    .home-img{
        background-image: url(http://pnqc4vaxj.bkt.clouddn.com/newHome.jpg);
        height: 100vh;
        background-color: black;
        overflow: hidden;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .font{
        position: absolute;
        width:187px;
        height:520px;
        top: 26vw;
        left: 40vw;
        /* overflow: hidden; */
        /* background-color: grey; */
    }
    .star-wrap{
        position: absolute;
        width: 7vw;
        height: 7vw;
        opacity: 0;
        transition: opacity 1.5s;
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
        width:100%;
        height:50vh;
    }

    /* .star-blur{
        position: absolute;
        top:50%;
        left:50%;
        margin-left: -1.5vw;
        margin-top:-1.5vw;
        background-color: #ffffff30;
        width: 3vw;
        height: 3vw;
        -webkit-filter: blur(3px);
        transition: width 1.5s,height 1.5s,margin 1.5s;
    } */
    .star-blur2{
        position: absolute;
        top:50%;
        left:50%;
        margin-left: -1.5vw;
        margin-top:-1.5vw;
        background-color: #ffffff10;
        width: 3vw;
        height: 3vw;
        -webkit-filter: blur(10px);
        transition: width 1.5s,height 1.5s,margin 1.5s;
    }
    #wave1
    {
        position: absolute;
        width: 100vw;
        height: 10vh;
        overflow: hidden;
        background-size: 100%;
        background-repeat: repeat-x;
        background-position-y: 5vh;
        bottom:0;
        background-image: url(../../static/img/wave1.png);
        z-index: 10;
    }
    #wave2{
        position: absolute;
        width: 100vw;
        height: 10vh;
        overflow: hidden;
        background-size: 120%;
        background-repeat: repeat-x;
        background-position-y: 4vh;
        bottom:0;
        background-image: url(../../static/img/wave2.png);
        z-index: 9;
    }
</style>
