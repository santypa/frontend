<template>
  
    <Carrusel  />

    <div class="c1 container p-3 mt-3 ">

    <div class="c2 container" id="im"  style="display: block">
       <div class="row">
       <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 "  v-for="empresa in empresas" :key="empresa.id"> 
      
           <div  class="btn card m-1 tamaño_img">  
            <img :src="'http://localhost:1337'+empresa.img.url" alt="" @click="producto(empresa.id)"  id="image" class="card-img-top" >
              <div class="card-body">  
               <p> {{ empresa.nombre }} </p>
               <!-- <p> {{ empresa.id }} </p> -->
               <!-- <p> Nombre: {{ empresa.img.url}} </p> -->
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
        name: "home",
     props:{
        nav: "",
    },

    data(){
        return{
            empresas: [],
            sms:"hola",
            smsid:'',
            nombr:'',
            direccion:'',
        }
    },
    components:{
        Carrusel,
       
    },

    methods: {
        producto(nombre){
            this.nombr = nombre
           /*  console.log(this.nombr) */
            this.direccion = "/producto/"+nombre,
            /* console.log(this.direccion) */
            this.$router.push(this.direccion);

        },
    },

    mounted() {

        axios.get("http://localhost:1337/empresas")
        .then((res) => {
            this.empresas = res.data;
        });
         
         
    },

   

}
</script>