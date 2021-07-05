<template>

    <ul class="navbar-nav mr-auto flex-column vertical-nav">
      <div class="logo-div">
         <img src="../../assets/code-of-talent.png" alt="logo" class="logo-image">
        </div>
      <li class="nav-item sidebar-li" id="homeLi" @click="()=>makeNavButtonActive('homeLi')">
       
         <router-link to="/" class="nav-link sidebar-link" >Home</router-link>
      </li>
      <li class="nav-item sidebar-li" id="programsLi" @click="()=>makeNavButtonActive('programsLi')">
        <router-link to="/programs" class="nav-link sidebar-link" >Programs</router-link>
      </li>
      <li class="nav-item sidebar-li" id="participantsLi" @click="()=>makeNavButtonActive('participantsLi')">
        <router-link to="/participants" class="nav-link sidebar-link" >Participants</router-link>
      </li>
      
    </ul>
    <router-view/>
</template>
<script>
export default {
    name:"sidebar",
    methods:{
      makeNavButtonsSameClass:function(){
        document.getElementById("homeLi").setAttribute("class","nav-item sidebar-li");
        document.getElementById("programsLi").setAttribute("class","nav-item sidebar-li");
        document.getElementById("participantsLi").setAttribute("class","nav-item sidebar-li");
      },
      makeNavButtonActive:function(id){
        this.makeNavButtonsSameClass();
          document.getElementById(id).setAttribute("class","nav-item sidebar-li li-active");
      }
    }
}
</script>

<style scoped>
.vertical-nav {
      position: fixed;
      top:0;
      left: 0;
      width: 250px;
      height: 100%;
      background-color: #0F2B4E;
      overflow-y: auto;
      padding-top: 30px;
     
    }
.logo-image{
    margin:0 auto;
    width: 170px;
    height: 45px;
    padding: 7px 0;
}
.sidebar-link{
  color: white;
  font-size: 23px;
   margin-left: 40px;
}

.sidebar-li:hover{
  background-color: #285B9A;
}

.li-active{
    background-color: #285B9A;
}

.logo-div{
  text-align: center;
  margin-bottom: 40px;
  margin-top: 30px;
}
</style>