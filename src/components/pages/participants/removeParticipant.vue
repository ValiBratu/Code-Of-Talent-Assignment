<template>

    <div class="btn-group dropleft">
        <button type="button" class="btn btn-outline-*" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="bi bi-three-dots-vertical dropdown-btn"></i>
        </button>
        <div class="dropdown-menu">
            <button class="dropdown-item" @click="removeParticipant">Remove Participant</button>
        </div>
        </div>

</template>

<script>
export default {
    name:"removeParticipant",
    props:["userId"],
    methods:{
        removeParticipant:function(){
            
           
            fetch("http://localhost:3000/participants/"+this.userId,{
                method: 'DELETE',
            })
            .then(response=>{
                
                this.validateStatus(response.status);
            })
            .catch(err=>console.log(err))
        },
        validateStatus:function(status){
            if(status>=200 && status <300){
                this.$emit('updateRows',this.userId);
            }
        }
    }
}
</script>


<style scoped>

.btn, .btn-outline-{
border: 1px solid #DADDE7;
background:transparent;
}


.dropdown-btn{
    color:#CACDD8;
}
</style>