<template>
    
     <!-- <input type="button" id="f2" class="bt m-2"  @click="ocformulario()" value="OCULTAR FORMULARIO " style="display: block">
     <input type="button" id="f1" class="bt m-2" @click="verformulario()" value="VER FORMULARIO " style="display: none" > -->

    <div  class="container p-4 " >
       
          <label for=""><p class="p1">selecciona una imagen</p> </label> <br>
          <div class="d-flex justify-content-center">
                <div class="b2 row ">
                  <input type="file" ref="file" id="imagen" @change="cambiarArchivo" placeholder="" accept="image/jpeg, image/png, image/jpg, image/gif" >
                </div>
          </div>
           
           <h4>caracteristicas del producto</h4>
           <input class="ten" type="text" placeholder="Aregar una descripcion del producto..." v-model="descripcion" id="descripcion"><br>

          <input type="button" @click="guardar" class="bt m-4 p-1 border-dark" value="Guardar Imagen"> <br>


    </div>
        
</template>

<script>
import axios from 'axios';

export default {
  name: 'agregar',

    data() {
    return{
      descripcion: "",
      imagen: null,
    }
    },

  methods: {


      cambiarArchivo(e){
        this.imagen = e.target.files[0]
        console.log(e.target.files[0])
    },

    guardar(){

      let form = new FormData()
      form.append('files.url', this.imagen)
      form.append('data', JSON.stringify({ "descripcion": this.descripcion,})),
      
      axios.post("http://localhost:1337/imagenes", form, {
        headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      }).then((response) => {
               /*  console.log(this.imagen) */
                /* console.log('se agrago una imagen') */
                this.push('/productos') 
             });  
  },
  },

};
</script>

<style >

/* #checkboxes input{
  display: inline-block;
  margin-right: 10px;

}
#checkboxes label{
  display: inline-block;
} */
.ten{
    background: silver;
    width: 300px;
    height: 200px;
}
</style>