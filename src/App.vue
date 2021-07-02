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
.blue-round-btn{
    background: #4482F6;
    border-radius: 20px;
}

.modal-header-line{
  border-bottom: 0px;
}

.modal-footer-line{
  border-top: 0px;
}
</style>
