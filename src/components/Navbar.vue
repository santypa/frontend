<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">

    <div>
        <b-navbar variant="faded" type="light">
          <b-navbar-brand href="#">
            <img src="https://placekitten.com/g/30/30" style="border-radius:40px" >
          </b-navbar-brand>
        </b-navbar>
    </div>


  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
 <!-- /////////////////////////// -->


<!-- //////////////COLLAPSE ////////////// -->

  <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/"> <h3>Inicio </h3> <span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <!-- ////////////VER CARACTERISTICAS EMPRESA/////////////// -->

    <div class="btn-group" id="mi" style="display: block">
      <button type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Mi Empresa
      </button>
      <div class="dropdown-menu">
           
            <a class="dropdown-item" href="/productos">Ver Mis productos</a>
            <a class="dropdown-item" href="/agregar">Agregar Producto</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" @click="salirempresa()">cerrar secion</a>
      </div>
    </div>
<!-- ////////////////////////INGRESAR USUARIO O EMPRESA /////////////////////7 -->

     <div class="btn-group m-2" id="ing" style="display: block">   

      <button type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Ingresar
      </button>

        <form class="dropdown-menu p-3 mt-2 " style="width: 100%;" @submit.prevent="login" >
      <div class="form-group">
          <label for="email">Email </label>
           <input type="email" v-model="email"  class="form-control" id="email" placeholder="email@example.com">
       </div>
      <div class="form-group">
         <label for="password">Password</label>
         <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
       </div>
      <div  v-if="error" class="bg-primary" >
         <samp >las credenciales no son coreectas</samp>
      </div>
         <button type="submit"  >Iniciar Sesion</button>
      </form>
      </div>
      <!-- /////////////////////////// -->
    
      <a class="btn btn-dark m-2"  href="/empresa">Registrarse<span class="sr-only">(current)</span></a>
      

<!-- //////////////////// BUSCADOR BARRA ////////////// -->

    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
<!-- //////////////////////////// -->

  </div>
<!-- ////////////////////////////////// -->


  
  
    

</nav>
    <!-- <Carrusel imagen="h"/> -->
</template>

<script>


import Carrusel from '@/components/Carrusel.vue'

export default {
    name: "Navbar",

    data(){
        return{
            Empresas: [],
            imagenes: [], 
            usuario:[],
            email: '',
            password: '',
            error: false,
        };
    },
     mounted() {
      
        /* this.traerEmpresa() */
        this.consulta()
    },
    methods:{
        consulta(){

        console.log(localStorage.getItem('token'))
        if (localStorage.getItem('token')==null) {
          document.getElementById("ing").style.display="block"
          document.getElementById("mi").style.display="none"
        } else {
          document.getElementById("mi").style.display="block"
          document.getElementById("ing").style.display="none"
        }
          
      },

      login(){
      this.error=false
      fetch('http://localhost:1337/auth/local',{
        method: "POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({
          identifier: this.email,
	        password: this.password,
        }),
      }).then(async (response)=>{
          if(!response.ok){
            throw await response.json()
          }
          document.getElementById("mi").style.display="block"
          document.getElementById("ing").style.display="none"
          return response.json()
      })
      .then((data) => {
          localStorage.setItem('token', data.jwt)
          localStorage.setItem('user', JSON.stringify(data.user))  
          this.$router.push('/')
          
     })
      .catch((err)=> {
          this.error = true
      });
    },

        salirempresa(){
          document.getElementById("ing").style.display="block"
           document.getElementById("mi").style.display="none"
           localStorage.removeItem('token'),
           localStorage.removeItem('user'),
           this.$router.push('/')
        },

    }
    
}
</script>

<style >

</style>