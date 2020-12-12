<template>
     <Carrusel/>    

     
<div>   
    <div class="" style="display:none;">
        <h1> {{ this.ruta = $route.params.emp }} </h1>
    </div>
    
    <div class="c1 container p-3 mt-3 ">

    <div class="c2 container" id="im"  style="display: block">
       <div class="row">

       <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 "  v-for="empresa in empresas" :key="empresa.id"> 

        <div v-if="empresa.empresa.id==ruta">
           <div  class="card m-1  tamaño_img">  
                <img :src="'http://localhost:1337'+empresa.url.url" alt="" @click="producto(empresa.id)"  id="image" class="card-img-top" >
              <div class="card-body">
                 <p> {{ empresa.empresa.id }} </p>
              </div>
            </div>
         </div>
        

       </div>
       </div>
    </div>

  </div>

</div>


</template>
<script>
import axios from 'axios'; 
import Carrusel from '@/components/Carrusel.vue'

export default {

    name: "producto",
    data(){
        return{
            id:'',
            ruta:'',
            imagen:[],
            empresas: [],
        }
    },

    props: {
    smg: String
     },

    components:{
        Carrusel,
       
    },

    methods: {
        producto(){
          
        },
    },

    mounted() {
        
        console.log(this.ruta)

        axios.get("http://localhost:1337/imagenes")
        .then((res) => {
            this.empresas = res.data;
            console.log(this.empresas[1])


        });

        console.log(this.ruta)

    },

}
</script>