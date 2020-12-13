<template>
 <div class="c1 container p-3 mt-3 ">

    <div class="c2 container" id="im"  style="display: block">
       <div class="row">

       <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"  v-for="image in imagenes" :key="image.id"> 
      
           <div class="card m-1">  
            <img :src="'http://localhost:1337'+image.url.url" alt="" id="image" class="card-img-top" >
              <div class="card-body">  
                <p> Usuario: {{ user.username }} </p>
                <p> Descripcion: <br> {{ image.descripcion }} </p>
              
               <input type="submit" class="bg-dark text-white" @click="eliminar(image.id)"  value="Eliminar">

               </div>
            </div> 
       </div>
       </div>
    </div>

  </div> 
</template>
<script>
import axios from 'axios'; 
export default {
    name: "Productos",
    
    data(){
        return{
            imagenes: [],
        }
    },
    
    mounted() {
    this.user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token')
    fetch('http://localhost:1337/imagenes/ver',{
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    })
    .then(res => res.json())
    .then(data => {
        this.imagenes = data;
        /* console.log(data) */
    })
    
         
    },
    methods: {
      
      eliminar(id){

            axios.delete("http://localhost:1337/imagenes/"+ id, {
                headers: {
                    Authorization: "Bearer "  + localStorage.getItem('token') 
                } 
            }),then((response)=>{
               /*  this.imagenes =  response.data */
               /*  console.log("se elimino correctamente") */
                this.$router.push("/");
               
            });
        }
    }
    
    
}
</script>