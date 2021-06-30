<template>


    <ul class="navbar-nav mr-auto flex-column vertical-nav">
         <img src="../../assets/code-of-talent.png" alt="logo" class="logo-image">
      <li class="nav-item">
        <a class="nav-link" href="#">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pages</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="#">Another Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Setting</a>
      </li>
    </ul>



</template>

<script>
export default {
    name:"navbar-component",
    setup() {
        
    },
}
</script>

<style scoped>
.vertical-nav {
      position: fixed;
   
      left: 0;
      width: 200px;
      height: 100%;
      background-color: #0F2B4E;
      overflow-y: auto;
      padding-top: 30px;
      text-align: center;
    }
.logo-image{
    margin:0 auto;
    width: 100px;
    height: 100px;
}
</style>