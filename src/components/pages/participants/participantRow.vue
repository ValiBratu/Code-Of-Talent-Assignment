<template>
          
            <th scope="row">
                <div class="form-check">
                <input class="form-check-input checkbox-size" type="checkbox" value="" id="flexCheckDefault">
                
                </div>
            </th>
            <td>
                <span class="dot"><p class="circle-p"> {{data.first_name[0]+""+data.last_name[0]}}</p></span>
                 <span class="name-span">{{data.first_name+" "+data.last_name}}</span>
            </td>

            <td>
                
                <span>{{data.email}}</span>
                </td>

            <td>
                <button v-if="data.is_active" type="button" class="btn btn-outline-success" disabled>Active</button>
                <button v-else type="button" class="btn btn-outline-secondary" disabled>Inactive</button>
            </td>

            <td>
                <button v-if="data.is_invited" type="button" class=" btn-invited" disabled>Invited</button>
                <button v-else type="button" class="btn-not-invited" disabled>Not invited</button>
            </td>

            <td>
                <div class="btn-group dropleft">
                    <button type="button" class="btn btn-outline-*" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="bi bi-three-dots-vertical dropdown-btn"></i>
                    </button>
                    <div class="dropdown-menu">
                       <button class="dropdown-item" >Remove Participant</button>
                    </div>
                    </div>
                
            </td>
            
</template>

<script>
export default {
    name:"participantRow",
    props:["data"]
}
</script>

<style scoped>

.last-column{
    width: 100px;
}
.checkbox-size{
    height: 25px;
    width: 25px;
}

.form-check{
    margin-top: 5px;
}

.table .thead-light th {
    color: #898A95;
    background-color: #e9ecef;
    border-color: #dee2e6;
}
.dot {
  height: 45px;
  width: 45px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
    text-align: center;
    font-weight: bold;
    margin-right: 10px;
    margin-left: -15px;
}
.circle-p{
    margin-top: 10px;
}

.btn-outline-success.disabled, .btn-outline-success:disabled {
    color: #02D396;
    background-color: transparent;
    border: 2px solid #02D295;
    opacity: 1;
    font-size: 13px;
    font-weight: bold;
    width: 74px;
}

.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {
    color: #7C7D87;
    background-color: transparent;
    border: 2px solid #D7DEE4;
    opacity: 1;
    font-size: 13px;
    font-weight: bold;
    width: 74px;
}


.btn-invited{
    color: #02D396;
    background-color: transparent;
    border: 2px solid #02D295;
    opacity: 1;
    font-size: 13px;
    font-weight: bold;
    width: 100px;
    height: 36px;
    border-radius: 5px;
}

.btn-not-invited{
    color: #7C7D87;
    background-color: transparent;
    border: 2px solid #D7DEE4;
    opacity: 1;
    font-size: 13px;
    font-weight: bold;
    width: 100px;
    height: 36px;
    border-radius: 5px;
}

.btn, .btn-outline-{
border: 1px solid #DADDE7;
background:transparent;
}


.dropdown-btn{
    color:#CACDD8;
}


.name-span{
    font-weight: bold;
}
</style>