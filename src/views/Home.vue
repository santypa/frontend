<template>
  
    <Carrusel/>

    <div class="c1 container p-3 mt-3 ">

    <div class="c2 container" id="im"  style="display: block">
       <div class="row">
       <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"  v-for="empresa in empresas" :key="empresa.id"> 
      
           <div  class="btn card m-1">  
            <img :src="'http://localhost:1337'+empresa.img.url" alt="" @click="producto()"  id="image" class="card-img-top" >
              <div class="card-body">  
               <p> {{ empresa.nombre }} </p>
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
        }
    },
    components:{
        Carrusel,
    },

    methods: {
        producto(){
            this.$router.push("/producto");
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