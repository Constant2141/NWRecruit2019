<template>
        <svg ref="star" class="star" style="position:fixed;top:0px;left:0px;z-index:10;">
            <circle v-bind:cx=x v-bind:cy=y r="1" style="fill:#ffffff00"></circle>
            <circle v-bind:cx=(x+1) v-bind:cy=(y+1) r="0.5" style="fill:#ffffff00"></circle>
        </svg>
</template>

<script>
export default {
    data(){
        return{
            x:null,
            y:null,
            color:0,
            timer:null
        }
    },
    mounted(){
        this.timer = setInterval(() =>{
            this.star();
        },3000)
 
    },
    beforeDestroy(){
        clearInterval(this.timer);
    },
    methods:{
        star(){
            this.x = Math.random()*(window.innerWidth);
            this.y = Math.random()*(window.innerHeight/2);
            var circle = document.getElementsByTagName("circle");
            let count = 0;
            let act = setInterval(() =>{
                // console.log(circle[0].style.fill);
                if(circle[0].style.fill == "rgba(255, 255, 255, 0)" || circle[0].style.fill == "#ffffff" ){
                        for(let i = 0;i < circle.length;i++){
                            // console.log(circle[i].style.fill);
                            circle[i].style.fill = "#ffffff";
                        }
                }
                else{
                        for(let i = 0;i < circle.length;i++){
                            // console.log(this.color);
                            circle[i].style.fill = "#ffffff00";
                            count ++;
                        }                   
                }
                if(count >= 24){
                    clearInterval(act);
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
        transition: fill 0.5s ease-in;
    }

</style>
