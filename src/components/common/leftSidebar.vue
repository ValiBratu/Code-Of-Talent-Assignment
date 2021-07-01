<template>

    <ul class="navbar-nav mr-auto flex-column vertical-nav">
         <img src="../../assets/code-of-talent.png" alt="logo" class="logo-image">
      <li class="nav-item sidebar-li">
       
         <router-link to="/" class="nav-link sidebar-link" >Home</router-link>
      </li>
      <li class="nav-item sidebar-li">
        <router-link to="/programs" class="nav-link sidebar-link" >Programs</router-link>
      </li>
      <li class="nav-item sidebar-li">
        <router-link to="/participants" class="nav-link sidebar-link" >Participants</router-link>
      </li>
      
    </ul>
    <router-view/>
</template>
<script>
export default {
    name:"sidebar",
    setup() {
        
    },
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
    width: 100px;
    height: 100px;
}
.sidebar-link{
  color: white;
  font-size: 23px;
   margin-left: 40px;
}

.sidebar-li:hover{
  background-color: #285B9A;
}

</style>