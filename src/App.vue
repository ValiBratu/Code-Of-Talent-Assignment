<template>
  

  <navbar ></navbar>
  <left-sidebar></left-sidebar>
 
</template>

<script>
import LeftSidebar from './components/common/leftSidebar.vue'
import navbar from './components/common/navbar.vue'

export default {
  components: { navbar, LeftSidebar},
  name: 'App',

}
</script>

<style>

</style>
