<template>

<div>

<nav class="navbar navbar-expand-lg navbar-light bg-light upper-navbar">
  <div class="container navbar-items-right">
    <p class="navbar-name">John Doe</p>
    <img src="../../assets/navbar-user.png" alt="navbar-user-photo" class="navbar-image"/>
  </div>
</nav>


  


</div>
</template>

<script>
export default {
    name:"navbar-component",
    setup() {
        
    }
}
</script>

<style scoped>

.upper-navbar{
  color: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  margin-left: 250px;
}

.navbar-image{
  width: 50px;
  height: 50px;
  border-radius: 30px;
  margin-right: -40px;
}

.navbar-items-right{
 justify-content: flex-end;
}
.navbar-name{
  color: black;
  font-size: 18px;
  margin-right: 10px;
  margin-bottom: -1px;
  font-weight: bold;
}
</style>