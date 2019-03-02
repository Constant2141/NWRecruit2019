<template>
    <div class="to-phone">
        <div class="qrCode"></div>
    </div>
</template>

<script>
export default {
    beforeRouteLeave(to,from,next){
        
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
.to-phone{
    background: url("../assets/tophone.jpg") no-repeat center center;
    /* background-size: cover; */
    height: 100vh;
}
.qrCode{
    width: 100px;
    height: 100px;
    position: absolute;
    top: 60%;
    left: 43%;
    background: url("../assets/QRCode.png");
    background-size: 100% 100%;
}
</style>
