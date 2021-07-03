<template>

    <div class ="row" >
        <div class="program-header-text" >
            <p>Participants</p>
        </div>
    </div>

    <div class="table-div">
        <div >
        <table class="table">
        <thead class="thead-light">
            <tr>
            <th scope="col"></th>
            <th scope="col">Participant</th>
            <th scope="col">E-mail</th>
            <th scope="col">Status</th>
            <th scope="col">Invited Status</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for=" (participant,i) in participants" v-bind:key="i" >
                
                <participant-row   v-bind:data="participant" @updateTb="updateTable" ></participant-row>
            </tr>
        </tbody>
        </table>
</div>
    </div>
</template>

<script>
import participantRow from './participantRow.vue'
export default {
  components: { participantRow },
    name:"listParticipants",
    props:["api"],
    data(){
        return{
            participants:[]
        }
    },
    created(){
        fetch(this.api)
        .then(response=>response.json())
        .then(data=>{
           
            this.participants=data;
            
        })
        .catch(err=>console.log(err))
    },
    methods:{
        updateTable:function(id){
            
            var updatedUserList=this.participants.filter(user=>user.id !== id)
            this.participants= updatedUserList;

        }

    }
}
</script>

<style scoped>
.table-div{
    margin-top: 40px;
    width: 1100px;
    margin-left: 330px;
}

.table{
    border: 1.5px solid #CACDD8;
}

.program-header-text{
  
    margin-left:340px;
    margin-top: 30px;
    font-size: 2rem;
    font-weight: bold;
    color: #0F2B4E;
}

.header-row{
     width: 1200px;
}
</style>