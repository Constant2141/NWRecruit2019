<template>
        <svg ref="star" class="star" style="position:fixed;top:0px;left:0px;z-index:10;">
            <circle v-bind:cx=x v-bind:cy=y r="0.8" style="fill:rgba(255,255,255,0)"></circle>
            <circle v-bind:cx=(x+1) v-bind:cy=(y+1) r="0.5" style="fill:rgba(255,255,255,0)"></circle>
        </svg>
</template>

<script>
export default {
    props:["destroy"],
    data(){
        return{
            x:null,
            y:null,
            color:0,
            timer:null,
            timer2:null
        }
    },
    mounted(){
        this.timer = setInterval(() =>{
            // console.log(this.destroy);
            this.star();
        },3000)
            // console.log(this.destroy);
    },
    beforeDestroy(){
        // console.log("this.destroy");
        clearInterval(this.timer);
        clearInterval(this.timer2);

    },
    watch:{
        destroy(data){
            if(data == true){
                
            }
        }
    },
    methods:{
        star(){
            this.x = Math.random()*(window.innerWidth);
            this.y = Math.random()*(window.innerHeight/2);
            var circle = document.getElementsByTagName("circle");
            let count = 0;            
            this.timer2 = setInterval(() =>{
                // console.log(circle[0].style.fill);
                if(circle[0].style.fill == "rgba(255, 255, 255, 0)" || circle[0].style.fill == "#ffffff" ){
                        for(let i = 0;i < circle.length;i++){
                            // console.log(circle[i].style.fill);
                            circle[i].style.fill = "rgba(255, 255, 255, 1)";
                        }
                }
                else{
                        for(let i = 0;i < circle.length;i++){
                            // console.log(this.color);
                            circle[i].style.fill = "rgba(255, 255, 255, 0)";
                            count ++;
                        }                   
                }
                if(count >= 24){
                    clearInterval(this.timer2);
                    // console.log(count)
                }
                // if(this.color < 99 && this.color >= 0){
                //     this.color += 1;
                //     for(let i = 0;i < circle.length;i++){
                //         // console.log(this.color);
                //         circle[i].setAttribute("style","fill:#ffffff"+((this.color >= 10)?this.color:("0"+this.color)))
                //     }
                // }
                // else if(this.color == 99){
                //     this.color = -99;
                //      for(let i = 0;i < circle.length;i++){
                //         // console.log(this.color);
                //         circle[i].setAttribute("style","fill:#ffffff"+((Math.abs(this.color) >= 10)?Math.abs(this.color):("0" + Math.abs(this.color))))
                //     }
                // }
                // else if(this.color < -1){
                //     this.color += 1;
                //      for(let i = 0;i < circle.length;i++){
                //         // console.log(this.color);
                //         circle[i].setAttribute("style","fill:#ffffff"+((Math.abs(this.color) >= 10)?Math.abs(this.color):("0" + Math.abs(this.color))))
                //     }
                // }
                // else{
                //     clearInterval(act);
                // }
            },500)
            
        }
    }
}
</script>
<style scoped>
    .star{
        width:100vw;
        height: 50vh;
    }
    .star circle{
        transition:fill 0.5s ease-in;
        stroke: #ffffff00;
        /* fill: #ffffff00; */
    }

</style>
