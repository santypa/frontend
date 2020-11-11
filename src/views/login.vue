<template>
   <container class="container" >
    <div class="con text-center m-4 p-4">

      <h1>Registrar </h1>

      <form @submit="guardar">
        <div class="row">
             <div class="col col-lg-4 col-xl-3">
              <label for="nombre">Nombre</label> <br>
              <input type="text" placeholder="Nombre completo..." v-model="nombre" id="nombre"> 
             </div>
            <div class="col col-lg-4 col-xl-3">
              <label for="correo">Email</label> <br>
              <input type="text" placeholder="Correo..." v-model="gmail" id="gmail">
            </div>
            <div class="col col-lg-4 col-xl-3">
              <label for="clave">Password</label> <br>
              <input type="password" placeholder="Contraseña..." v-model="password" id="password"> 
            </div>
        </div> 
          

           <div>   
          <div  v-if="error" class="nota p-2 m-2 col-lg-6 aling-center" >
            <samp class="">las credenciales no son coreectas</samp>
          </div> 
         
            
          </div>
          
            <button type="submit" class="row bg-dark text-white m-4">Registrar</button>
      </form>
    </div>
  </container>
</template>

<script>
export default {
    name: "login",
    data(){
      return{
          nombre:"",
          gmail:"",
          password:""
      }
    }, 

methods: {
    guardar(){

      axios.post("http://localhost:1337/auth/local/register",{
               "username": this.nombre,
	           "email": this.gmail,
	           "password": this.password
        }
        ).then((response) => {  
                this.$router.push('/')
        });  
        },

    },

}

</script>