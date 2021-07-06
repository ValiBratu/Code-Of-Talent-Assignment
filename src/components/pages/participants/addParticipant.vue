<template>
    <div>
        <button type="button" class="btn btn-primary add-button blue-round-btn" data-toggle="modal" data-target="#exampleModal">
        Add Participant
        </button>

       
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content modal-box">
            <div class="modal-header modal-header-line">
                <button type="button" id="closeButton" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body-form">           
                <h5 class="modal-title modal-text" id="exampleModalLabel">Add a new participant</h5>

               
                <label for="firstName" class="modal-title modal-text inputs-headers first-name-left ">First name:</label>
                <br>
                <input type="text" id="firstName" class="name-inputs inputs" placeholder="First name"/>

                <br>
                <label for="lastName" class="modal-title modal-text inputs-headers first-name-left">Last name:</label>
                <br>
                <input type="text" id="lastName" class="name-inputs inputs" placeholder="Last name"/>

                <br>
                <label for="email" class="modal-title modal-text inputs-headers first-name-left">Email:</label>
                <br>
                <input type="email" id="email" class="name-inputs email-input inputs" placeholder="Email"/>  

                <div class="row row-left">
                       <label for="isActive" class="modal-title modal-text inputs-headers ">Active</label>
                        <label for="isInvited" class="modal-title modal-text inputs-headers invited-label ">Invited</label>
                </div>

                <div class="row row-left">

                    <div class="form-check">
                        <input class="form-check-input active-checkbox" type="checkbox" value="" id="isActive">
                    </div>

                    <div class="form-check">
                        <input class="form-check-input invited-checkbox" type="checkbox" value="" id="isInvited">
                    </div>

                </div>
                

                
            </div>
                <p id="warning" class="warning-p"></p>
            <div class="modal-footer modal-footer-line">
                <button type="button" class=" blue-round-btn btn btn-primary save-btn" @click="addParticipant">Save</button>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"addParticipant",
    methods:{
        addParticipant:function(){
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const email_input = document.getElementById("email").value;

            const active= document.getElementById("isActive");
            const invited = document.getElementById("isInvited");

            const participantsApi="http://localhost:3000/participants";

            if(!this.validateData(firstName,lastName,email_input)){
                return;
            }

            let sentData ={
                first_name:firstName,
                last_name:lastName,
                email:email_input,
                is_active:active.checked,
                is_invited:invited.checked
            }

            fetch(participantsApi, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(
                    sentData)
                })
            .then(response=>{
                this.validateStatus(response.status,sentData);
                

                })
            .catch(err=>console.log(err))

        },
        validateData:function(first,last,mail){
            if(first==="" || last === "" || mail === ""){
                document.getElementById("warning").textContent="All fields must be completed!";
                return false;
            }
            return true;
        },
        validateStatus:function(status,data){
            if(status>=200 && status<300){
                document.getElementById("firstName").value="";
                document.getElementById("lastName").value="";
                document.getElementById("email").value="";
                document.getElementById("isActive").checked=false;
                document.getElementById("isInvited").checked=false;
                document.getElementById("warning").textContent="";
                document.getElementById("closeButton").click();
                this.$emit('addUser',data);
                return;
            }
        }
    }
}
</script>

<style scoped>
.add-button{
    margin-top: 40px;
    margin-left: 800px;
}
.modal-text{
    color:#0F2B4E;
}
.inputs-headers{
    font-size: 16px;
    font-weight: bold;
    margin-top: 15px;
    margin-left: 40px;
}
.modal-body-form{
    margin-left: 35px;
    height: 320px;
}
.modal-box{
    width: 800px;
}

.parahraph{
    color:#898A95;
}
.warning-p{
    color:red;
    margin-left: 80px;
    margin-top: 30px;
}


.row-left{
    margin-left: 3px;
}


.name-inputs{
    height: 35px;
    width: 200px;
    border-radius: 5px;
    margin-left: 40px;
}

.email-input{
    width: 300px;
}


.invited-label{
    margin-left: 195px;
}

.form-check-input{
    height: 30px;
    width: 30px;
}


.invited-checkbox{
    margin-left: 255px;
}

.active-checkbox{
    margin-left: 30px;
}

.save-btn{
    margin-right: 30px;
    margin-bottom: 10px;
}

.inputs{
    border-color: #CACDD8;
    border-style: solid;
    border-radius: 5px;
}
</style>