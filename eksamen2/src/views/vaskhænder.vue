<template>
<main>  
    <div id="topline"></div>
    <div id="topbox"></div>
     <div id="plakat"> 
         <div id="baktusser">
             <img src="../assets/baktusser.svg" alt="">
         </div>
    </div> 
</main>
   

  
</template>

<script>
    export default {
        name: "vaskH",
    }
</script>

<style lang="scss" scoped>

main {
    margin-top: -150px;
    height: 1000px;
    width: 100%;
    background-color: #D5EDF7;
}

#topline {
    height: 100px;
    width: 100%;
    background-color: #D5EDF7;
}

#topbox {
    height: 250px;
    width: 100%;
    background-image: url("../assets/no1.1.svg");
    background-repeat: no-repeat;
    background-position: 90% 20%;
    background-size: 250px;
}

#plakat {
    height: 2000px;
    width: 100%;
    background-image: url("../assets/vaskhænder.png");
    background-color: #D5EDF7;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

#baktusser {
    width: 100%;
    height: 800px;
    display: flex;
    align-items: baseline;
}

img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 800px;
    width: 35%;
    animation: vibrate-1 1s infinite both;
    position: relative;
}

@keyframes vibrate-1 {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}

@media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3) { 

main {
    margin-top: -150px;
    height: 1000px;
    width: 100%;
    background-color: #D5EDF7;
}

#topline {
    height: 100px;
    width: 100%;
    background-color: #D5EDF7;
}

#topbox {
    height: 100px;
    width: 100%;
    background-image: url("../assets/no1.1.svg");
    background-repeat: no-repeat;
    background-position: 90% 20%;
    background-size: 100px;
}

#plakat {
    height: 600px;
    width: 100%;
    background-image: url("../assets/vaskhænder.png");
    background-color: #D5EDF7;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

#baktusser {
    width: 100%;
    height: 10px;
    display: flex;
    align-items: center;
}

img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 635px;
    width: 50%;
    animation: vibrate-1 1s infinite both;
    position: relative;
}
    }




</style>