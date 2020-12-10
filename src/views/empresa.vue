<template>
<container class="container">
  <div class="con text-center m-4 p-4">

    <h1>Registro de la empresa</h1>

    <form @submit.prevent="guardar" enctype="multipart/form-data">
      <div class="row">
        <div class="col col-lg-4 col-xl-3">
          <label for="nombre">Nombre de la empresa</label> <br>
          <input type="text" placeholder="Nombre completo..." v-model="nombre" name="nombre" required>
        </div>
        <div class="col col-lg-4 col-xl-3">
          <label for="correo">Email</label> <br>
          <input type="text" placeholder="Correo..." v-model="correo" name="correo" required>
        </div>
        <div class="col col-lg-4 col-xl-3">
          <label for="telefono">Telefono</label> <br>
          <input type="text" placeholder="celular..." v-model="telefono" name="telefono" required>
        </div>

        <div class="col col-lg-4 col-xl-3">
          <label for="direccion">direccion</label> <br>
          <input type="text" placeholder="Direccion residencia..." v-model="direccion" name="direccion" required>
        </div>

      </div> <br>

          <label for=""><p class="p1">selecciona una imagen</p> </label> <br>
          <div class="d-flex justify-content-center">
                <div class="b2 row ">
                  <input type="file" ref="file" id="imagen" @change="cambiarArchivo" placeholder="" accept="image/jpeg, image/png, image/jpg, image/gif" required >
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

      error: false,
    }
  },

  methods: {
    
      cambiarArchivo(e){
        this.imagen = e.target.files[0]
        console.log(this.imagen)
    },

    
    guardar() {
      const tokens = localStorage.getItem("token");

      let form = new FormData()
      
      form.append('data', JSON.stringify({
          nombre: this.nombre,
          correo: this.correo,
          telefono: this.telefono,
          direccion: this.direccion
        },)),
/* 
      form.append("files.imagen", this.verimagen); */
      form.append("files.img" , this.imagen)

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
