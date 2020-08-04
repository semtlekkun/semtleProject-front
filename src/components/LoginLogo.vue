<template>
    <v-container>
        <v-row class="text-center">
            <v-col>
                <router-link to="/">
                    <img id="loginImg" src="../assets/logo.png"/>
                </router-link>
            </v-col>
        </v-row>

        <v-row class="text-center">
            <v-col>
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.circle1{
    background-color: #2a404e;
    border-radius: 100px;
    width:20px;
    height:20px;
    display:inline-block;
    margin:10px;
}
.circle2{
    background-color: rgb(255, 66, 66);
    border-radius: 100px;
    width:20px;
    height:20px;
    display:inline-block;
    margin:10px;
}
.circle3{
    background-color: rgb(35, 135, 216);
    border-radius: 100px;
    width:20px;
    height:20px;
    display:inline-block;
    margin:10px;
}
.LoginTitle{
    font-family:"Microsoft GothicNeo";
    font-size:50px;
    color:#2a404e;
}
.LoginLogo{
    text-align:center;
}
#loginImg{
    width: 60vw;
    max-width: 500px;
}
</style>