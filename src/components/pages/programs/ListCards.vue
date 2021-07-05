<template>

<div class="container">
    <div class ="row header-row" >
        <div class="program-header-text" >
            <p>Programs</p>
        </div>
    <add-program @customAdd="addItemToPrograms"></add-program>
    
    </div>
    <div class="row">
        <div class="col-sm-4 " v-for=" (program,i) in programs" v-bind:key="i">
      
          <program-card v-bind:data="program"></program-card>
      
        </div>
        
    </div>
</div>
                
</template>

<script>
import ProgramCard from '../programs/programCard.vue';
import AddProgram from './AddProgram.vue';
export default {

    components:{ProgramCard, AddProgram},

    name:"listCards",
    props:["api"],
    data(){
        return{
            programs:[]
        }
    },
    created(){
        fetch(this.api)
        .then(response=>response.json())
        .then(data=>{
           
            this.programs=data;
        })
        .catch(err=>console.log(err))
    },
    methods:{
        addItemToPrograms:function(NewItem){
            
            let newProgram={
                id:this.getIdForNewProgram(),
                title:NewItem.title,
                description:NewItem.description
            }
            this.programs.push(newProgram);
        },
        getIdForNewProgram:function(){
            const ids = this.programs.map(user => user.id);
            const sorted = ids.sort((a, b) => b - a);
            return sorted[0]+1;
        }
    }
}


</script>

<style scoped>
.row {
   display: flex;
   flex-wrap: wrap;
   margin-left: 100px;
   margin-bottom: 20px;
}

.row > div[class*='col-'] {
  display: flex;
}


.program-header-text{
  
    margin-left:20px;
    margin-top: 30px;
    font-size: 2rem;
    font-weight: bold;
    color: #0F2B4E;
}

.header-row{
     width: 1200px;
}

</style>


