<template>
<main>  
    <div id="topline"></div>
    <div id="topbox"></div>
     <div id="plakat"> 
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
    background-image: url("../assets/NO2.svg");
    background-repeat: no-repeat;
    background-position: 90% 20%;
    background-size: 250px;
    margin-bottom: 5%;
}

#plakat {
    height: 2000px;
    width: 100%;
    background-image: url("../assets/holdafstand.png");
    background-color: #D5EDF7;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
</style>