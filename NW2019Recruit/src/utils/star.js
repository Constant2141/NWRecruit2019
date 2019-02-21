var blur1 = document.getElementsByClassName("star-blur");
var blur2 = document.getElementsByClassName("star-blur2");
function twinkle(e,e2){


    setTimeout(() =>{
        e.style.width = 6 +'vw';
        e.style.height = 6 +'vw';
        e.style.marginLeft = -3 + 'vw';
        e.style.marginTop = -3 + 'vw';
        e2.style.width = 4 +'vw';
        e2.style.height = 4 +'vw';
        e2.style.marginLeft = -2 + 'vw';
        e2.style.marginTop = -2 + 'vw';
    },0)
    setTimeout(() =>{
        e.style.width = 3 +'vw';
        e.style.height = 3 +'vw';
        e.style.marginLeft = -1.5 + 'vw';
        e.style.marginTop = -1.5 + 'vw';
        e2.style.width = 2 +'vw';
        e2.style.height = 2 +'vw';
        e2.style.marginLeft = -1 + 'vw';
        e2.style.marginTop = -1 + 'vw';
    },1500)

}
setInterval(function(){
    let s1 = (Math.floor(Math.random()*100))%8;
    let s2 = (Math.floor(Math.random()*100))%8;
    let s3 = (Math.floor(Math.random()*100))%8;
    while (s2 == s1 || s2 == s3 || s1 == s3){
        if(s2 == s1) s2 = (Math.floor(Math.random()*100))%8;
        if(s2 == s3) s3 = (Math.floor(Math.random()*100))%8;
        if(s1 == s3) s3 = (Math.floor(Math.random()*100))%8;
    }
    console.log(s1+','+s2+','+s3)
    twinkle(blur1[s1],blur2[s1]);
    twinkle(blur1[s2],blur2[s2]);
    twinkle(blur1[s3],blur2[s3]);
},5000)
