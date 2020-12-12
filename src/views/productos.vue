<template>
     <Carrusel/>    

     <Emprod />
<div>
        <h1> {{ $route.params.emp }} </h1>

</div>
</template>
<script>
import Carrusel from '@/components/Carrusel.vue'

export default {

    name: "producto",
    data(){
        return{
            id:'',
        }
    },

    props: {
    smg: String
     },

    components:{
        Carrusel,
       
    },
}
</script>