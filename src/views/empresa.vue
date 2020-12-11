<template>
<container class="container">


    <div class="alert alert-danger" id="alert" style="display:none; "   role="alert" data-alerts="alerts" data-fade="2000">
         EL USUARIO YA TIENE REGISTRADA UNA EMPRESA
      </div>
       



  <div class="con text-center m-4 p-4">

    <h1>Registro de la empresa</h1>

    <form @submit.prevent="guardar" enctype="multipart/form-data">
     <label for=""><p class="p1">selecciona una imagen</p> </label> <br>
          <div class="d-flex justify-content-center">
                <div class="b2 row ">
                  <input type="file" ref="file" id="imagen" @change="cambiarArchivo" placeholder="" accept="image/jpeg, image/png, image/jpg, image/gif" required >
                </div>
          </div>
      <div class="row">
        <div class="col col-lg-4 col-xl-3">
          <label for="nombre">Nombre de la empresa</label> <br>
          <input id="a"  type="text" placeholder="Nombre completo..." v-model="nombre" name="nombre" required>
        </div>
        <div class="col col-lg-4 col-xl-3">
          <label for="correo">Email</label> <br>
          <input id="b" type="text" placeholder="Correo..." v-model="correo" name="correo" required>
        </div>
        <div class="col col-lg-4 col-xl-3">
          <label for="telefono">Telefono</label> <br>
          <input id="c" type="text" placeholder="celular..." v-model="telefono" name="telefono" required>
        </div>

        <div class="col col-lg-4 col-xl-3">
          <label for="direccion">direccion</label> <br>
          <input id="d" type="text" placeholder="Direccion residencia..." v-model="direccion" name="direccion" required>
        </div>

       

      </div> <br>

      <div class="row" >

       <div class="row col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" style="border-radius: 10%" v-for="forma in formato" :key="forma.id"> 
           <div  class="card m-1">  
             <p> formato {{forma.id}} </p>

              <div class="card-body">  
                <img :src="'http://localhost:1337' + forma.formato.url"  id="image" @click="formatoes(forma.id)" class="card-img-top" >
              </div>
          </div>

        </div>
      </div>


      <button type="submit" class="row bg-dark text-white m-4">Registrar</button>
    </form>
  </div>
</container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'empresa',
  data() {
    return {
      nombre: '',
      correo: '',
      verimagen: '',
      telefono: '',
      direccion: '',
      empresa: '',
      image: '',
      imagen: null,
      user:'',
      error: false,
      use:[],
      empresas:'',
      nam:'',
      empre:0,

      formato:[],
      form:0,
     
    }
  },

  methods: {
      formatoes(fort){
        this.form=0;

        if(fort==1){
            this.form = 1
            console.log(this.form)
        }
        else{
            this.form = 2
            console.log(this.form)
        }
          
      },

      vacio(){
        document.getElementById("alert").style.display="none"
      },
    
      cambiarArchivo(e){
        this.imagen = e.target.files[0]
        /* console.log(this.imagen) */
      
      const usi =  localStorage.getItem('user');


      
         var divisio = usi.split(",",2)
        var nombrepersona = divisio[1]
        var nom = nombrepersona.split(":")
         this.nam = nom[1].replace(/['"]+/g, '')
      

        axios.get("http://localhost:1337/formatoes")
        .then((res) => {
            this.formato = res.data;
            console.log(this.formato)
        });

    },

    
    guardar() {

      const tokens = localStorage.getItem("token");

      let form = new FormData()
      
      form.append('data', JSON.stringify({
          nombre: this.nombre,
          correo: this.correo,
          telefono: this.telefono,
          direccion: this.direccion,
          user: this.user,
          formato : this.form

        },)),
  
      form.append("files.img" , this.imagen)

       axios.get("http://localhost:1337/empresas")
        .then((res) => {
            this.empresas = res.data;
            for(var a=0; a<(res.data).length;a++){

                
                console.log(res.data[a].user["username"])
                console.log(this.nam)
                if(this.nam = res.data[a].user["username"])
                {
                    this.empre = 2,
                    a=(res.data).length
                    
                }else{
                    this.empre=3
                }
            }
        });

          if (this.empre == 3 ){

                 axios.post("http://localhost:1337/empresas", form, {
          headers: {
            Authorization: "Bearer " + tokens,
            "Content-Type": "multipart/form-data",
          },

        }).then((response) => {
          console.log('se creo un usuario publico')

          this.$router.push("/");
        }).catch((err) => {
          this.$router.push("/empresa");
          console.log("FALLO")
        });

          }else{
            console.log(" EL USUARIO YA TIENE UNA EMPRESA")
            document.getElementById("alert").style.display="block"

            document.getElementById("d").value = "";
            document.getElementById("c").value = "";
            document.getElementById("b").value = "";
            document.getElementById("a").value = "";
           
          }
     
    },


  },

}











</script>

<style>
.con {
  background: rgb(221, 218, 218);
  border-block: 10px;
  border-block-color: black;
  border-radius: 20px;

}

input {
  border-radius: 7px;
  border-block-end: lightseagreen;
  transition: inherit;

}

button {
  border-top: khaki;
  border-radius: 10px;
}

.nota {
  border-radius: 30px;
  height: 200px;
  background: rgb(126, 200, 230);

}

.b2 {
  background-size: 300px;
  height: 150px;
  background: url('img/fond.png');
  border-radius: 10px;
  text-align: center;
}

input#imagen {
  justify-content: center;
  width: 300px;
  height: 300px;
  opacity: 0;
}

</style>
