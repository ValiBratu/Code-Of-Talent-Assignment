<template>

<div class="container">
    <div class="row">
        <div class="col-sm-4  card-spacing" v-for=" (program,i) in programs" v-bind:key="i">
      
          <program-card v-bind:data="program"></program-card>
      
        </div>
        
    </div>
</div>
                
</template>

<script>
import ProgramCard from '../programs/programCard.vue';
export default {

    components:{ProgramCard},

    name:"listCards",
    props:["api"],
    data(){
        return{
            programs:null
        }
    },
    created(){
        fetch(this.api)
        .then(response=>response.json())
        .then(data=>{
           
            this.programs=data;
        })
        .catch(err=>console.log(err))
    }
}

//  v-for=" (program,i) in programs" v-bind:key="i"
</script>

<style scoped>
.row {
   display: flex;
   flex-wrap: wrap;
   margin-left: 100px;
   margin-bottom: 40px;
}

.row > div[class*='col-'] {
  display: flex;
}

.card-spacing{
    margin-top:35px;

}

</style>


