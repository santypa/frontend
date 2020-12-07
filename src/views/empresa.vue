<template>
<div class="container">
  <div class="con text-center m-4 p-4">

    <h1>Registro de la empresa</h1>

    <form @submit.prevent="guardar" enctype="multipart/form-data">
      <div class="row">
        <div class="col col-lg-4 col-xl-3">
          <label for="nombre">Nombre de la empresa</label> <br>
          <input type="text" placeholder="Nombre completo..." v-model="nombre" name="nombre">
        </div>
        <div class="col col-lg-4 col-xl-3">
          <label for="correo">Email</label> <br>
          <input type="text" placeholder="Correo..." v-model="correo" name="correo">
        </div>
        <div class="col col-lg-4 col-xl-3">
          <label for="telefono">Telefono</label> <br>
          <input type="text" placeholder="celular..." v-model="telefono" name="telefono">
        </div>
        <div class="col col-lg-4 col-xl-3">
          <label for="clave">Password</label> <br>
          <input type="password" placeholder="Contraseña..." v-model="clave" name="clave">
        </div>

        <div class="col col-lg-4 col-xl-3">
          <label for="direccion">direccion</label> <br>
          <input type="text" placeholder="Direccion residencia..." v-model="direccion" name="direccion">
        </div>

      </div> <br>
      <div class="d-flex justify-content-center">
        <div class="b2 row ">
          <input type="file" ref="file" id="imagen" placeholder="" accept="image/*">
        </div>
      </div>
      <div class="col-12 col-md-6 text-center justify-content-center mx-auto" style="height: 500px">
        <p><b>Previsualizacion:</b></p>
        <br />
        <div v-if="imagen === ''"></div>
        <div>
          <img :src="imagen" alt="" height="400px" width="400px" />
        </div>
      </div>

      <div>
        <div v-if="error" class="nota p-2 m-2 col-lg-6 aling-center">
          <samp class="">las credenciales no son coreectas</samp>
        </div>
      </div>
      <button type="submit" class="row bg-dark text-white m-4">Registrar</button>
    </form>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'empresa',
  data() {
    return {
      nombre: '',
      correo: '',
      clave: '',
      verimagen: '',
      telefono: '',
      direccion: '',
      empresa: '',
      imagen: '',
      error: false,
    }
  },

  methods: {

    /* @change="prevista"    cambiarArchivo(e) {
         this.imagen = e.target.files[0]
         console.log(e.target.files[0])
       }, */
    /*   prevista(e) {
        this.imagen = URL.createObjectURL(e.target.files[0]);
        this.verimagen = e.target.files[0];
      }, */

    guardar() {
      this.error = false;
      const tokens = localStorage.getItem("token");
      let form = new FormData()
      form.append("files.imagen", this.verimagen);
      form.append('data', JSON.stringify({
          nombre: this.nombre,
          correo: this.correo,
          clave: this.clave,
          telefono: this.telefono,
          direccion: this.direccion,

        })),
        //console.log(this.verimagen);
        /* form.append('files.img', this.imagen) */

        axios.post("http://localhost:1337/empresas", form, {
          headers: {
            Authorization: "Bearer " + tokens,
            "Content-Type": "multipart/form-data",

          },

        }).then((response) => {
          console.log('se creo la empresa')
        }).catch((err) => {
          console.log("FALLO");
          this.error = true;
        });

      /*  axios.post("http://localhost:1337/auth/local/register", {
         "username": this.nombre,
         "email": this.correo,
         "password": this.clave
       }).then((response) => {
         this.$router.push('/')
       }); */
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
