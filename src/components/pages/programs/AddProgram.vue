<template>
    <div>
        <button type="button" class="btn btn-primary add-button blue-round-btn" data-toggle="modal" data-target="#exampleModal">
        Add new program
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
                <h5 class="modal-title modal-text" id="exampleModalLabel">Add a new program</h5>

                <label for="programName" class="modal-title modal-text inputs-headers">Program name:</label>
                <br>
                <input type="text" id="programName" class="name-input inputs" placeholder="Enter the name of your program"/>
                <br>
                <label for="programDesc" class="modal-title modal-text inputs-headers">Program name:</label>
                <br>
                <textarea id="programDesc" class="inputs description-input" placeholder="Program description"></textarea>
                <br>
                <p class="parahraph">Describe your program</p>
            </div>
                <p id="warning" class="warning-p"></p>
            <div class="modal-footer modal-footer-line">
                <button type="button" class=" blue-round-btn btn btn-primary" @click="saveProgram">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"AddProgram",
    
    methods:{
        saveProgram:function(){
            const name=document.getElementById("programName").value;
            const desc = document.getElementById("programDesc").value;

            const programsApi="http://localhost:3000/programs";
          
            let sentData={
                title:name,
                description:desc
            }
           

            if(!this.validateData(sentData)){
                return;
            }

            fetch(programsApi, {
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
        validateStatus:function(status,data){
            if(status>=200 && status<300){
                document.getElementById("warning").textContent="";
                document.getElementById("programName").value="";
                 document.getElementById("programDesc").value="";
                document.getElementById("closeButton").click();

                this.$emit("customAdd",data)

                return;
            }
            

        },
        validateData:function(data){
          
            if(data.title === "" || data.description===""){
                 document.getElementById("warning").textContent="All fields must be completed!";
                 return false;
            }
            return true;
        }
    }
}
</script>

<style scoped>
.add-button{
    margin-top: 40px;
    margin-left: 880px;
}
.modal-text{
    color:#0F2B4E;
}
.inputs-headers{
    font-size: 16px;
    font-weight: bold;
    margin-top: 30px;
    padding: 10px 0;
}
.modal-body-form{
    margin-left: 35px;
    height: 400px;
}
.modal-box{
    width: 800px;
}
.name-input{
    width: 450px;
    height: 50px;

}
.inputs{
    border-color: #CACDD8;
    border-style: solid;
    border-radius: 5px;
    padding: 10px;
}
.description-input{
    width: 450px;
    height: 120px;
}
.parahraph{
    color:#898A95;
}
.warning-p{
    color:red;
    margin-left: 35px;
}
</style>