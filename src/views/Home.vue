<template>
  
    <Carrusel/>

</template>



<script>
import Carrusel from '@/components/Carrusel.vue'

export default {
        name: "home",
     props:{
        nav: "",
    },
    components:{
        Carrusel,
    },
}
</script>