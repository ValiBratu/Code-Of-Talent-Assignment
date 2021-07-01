<template>
       


            <div class="container card-container">
                <img class=" img-fluid card-image" src="../../../assets/image-placeholder.jpg" alt="Card image cap">
                
                <div class="card-block">
                    <h4 class="card-title title">{{data.title}}</h4>
                    <div class="container">
                    <p class="parahraph"  >{{data.description}}</p>
                    </div>
                </div>
            </div>


            
</template>

<script>
export default {
    name:"ProgramCard",
    props:["data"]
}
</script>

<style scoped>

.card-image{
    height: 170px;  
    margin-top: 20px;
    border-radius: 20px;
    margin-bottom: 20px;
    width: 300px;
}

.card-container{
    background-color: white;
    width: 400px;
    border-radius: 15px;
    height: 320px;
}
.parahraph{
overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.title{
    text-align: center;
}
</style>