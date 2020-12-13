<template>
  <!-- <input type="button" id="f2" class="bt m-2"  @click="ocformulario()" value="OCULTAR FORMULARIO " style="display: block">
     <input type="button" id="f1" class="bt m-2" @click="verformulario()" value="VER FORMULARIO " style="display: none" > -->

    
  

    

  <div class="container p-4">
    
  <div class="alert alert-danger" id="alert" style="display: none" role="alert" data-alerts="alerts">
    SE CREO UNA NUEVA CATEGORIA ....
  </div>

    <div class="r1 row">
      <div class="r2 col">

        <label for=""> <h2>Agregar una Imagen</h2></label>
        <div class="b2 row">
          <input
            type="file"
            ref="file"
            id="imagen"
            @change="cambiarArchivo"
            placeholder=""
            accept="image/jpeg, image/png, image/jpg, image/gif"
            required
          />
        </div>
      </div>

      <div class="r2 col">
          <h4> Crear o Elige una Categoria</h4>
         
            <form action="" @submit.prevent="crearcategoria()" enctype="multipart/form-data">
            <div class="con">
             <div class="row">
               categorias: &nbsp; <br>
                <div class="row" style="border-radius: 10%" v-for="categ in categorias" :key="categ.id"> 
                   <div  class="col">  
                      <label for="jack">&nbsp;{{categ.nombre}}  &nbsp;</label><br>
                   </div>
                </div>
             </div>
        
           <input  class="" type="text" placeholder="categoria del producto..." v-model="cat"  id="cat" required/><br />
              </div>

            <h4>Caracteristicas</h4>

            <input class="ten" type="text" placeholder="Aregar una descripcion del producto..." v-model="descripcion"  id="descripcion" required/><br />
            <button type="submit" id="bt" class="bt btn-info m-4 p-1 border-dark">Seleccinar</button>
      
        </form>

       
               
      
      </div>
    </div>
  </div>
 
</template>

<script>
import axios from "axios";

export default {
  name: "agregar",

  data() {
    return {
      descripcion: "",
      imagen: null,
      user: "",
      empresas: [],
      nam: "",
      ides: "",
      val: "",
      cat: "",
      cate: "",
      categorias:'',

      fo: "",
      fa: "",
      fi: "",
      fo: "",
      j: "",
      i:"",
      l:'',
    };
  },

  mounted() {
    

    document.getElementById("alert").style.display = "none";

    const usi = localStorage.getItem("user");
    var divisio = usi.split(",", 2);
    var nombrepersona = divisio[1];
    var nom = nombrepersona.split(":");
    this.nam = nom[1].replace(/['"]+/g, "");

    axios.get("http://localhost:1337/empresas").then((res) => {
      this.empresas = res.data;
      var ar = res.data.length;

      for (var t = 0; t <= res.data.length; t++) {
        if (this.nam == res.data[t].user["username"]) {
          this.val = 2;
          this.ides = res.data[0].id;
          t = res.data.length;
        } else {
          this.val = 3;
        }
      }
    });

    axios
        .get("http://localhost:1337/categorias/ve", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.categorias = response.data;
        });

  },

  methods: {
    cambiarArchivo(e) {
      this.imagen = e.target.files[0];
      /* console.log(e.target.files[0]); */
      /* console.log(this.val)
         console.log(this.ides) */
    },


    crearcategoria(){

     const tokens = localStorage.getItem("token");
        axios.get("http://localhost:1337/categorias").then((res) => {
        this.cate = res.data;
        this.fo = res.data.length;
        this.j=this.fo+1
        this.fi = 0;

        for (var fe = 0; fe < this.fo; fe++) {
          if (this.cate[fe].nombre == this.cat) {
            this.fi = this.cate[fe].id;
            this.i = 1;
            fe = this.j
          } else {
            this.i = 2;
          }
        }

        if (this.i == 1) {
            console.log("si hay categorias ")
            document.getElementById("bt").style.display = "none";

            ////////////////////////////////////////////
          let form = new FormData();
          form.append("files.url", this.imagen);

          form.append(
            "data",
            JSON.stringify({
              descripcion: this.descripcion,
              user: this.user,
              empresa: this.ides,
              categoria: this.fi,
            })
          );
          axios
              .post("http://localhost:1337/imagenes", form, {
                headers: {
                  Authorization: "Bearer " + tokens,
                },
              })
              .then((response) => {
                
                this.l = 0
                console.log(" guardar");
                this.$router.push("/productos");

              });

            ///////////////////////////////////////////

        } else{

            console.log("no hay categorias ")
            axios
         .post(
           "http://localhost:1337/categorias",
           { nombre: this.cat },
           { headers: { Authorization: "Bearer " + tokens } }
         )
            /* document.getElementById("bt").style.display = "none";
            document.getElementById("cat").style.display = "none";
            document.getElementById("alert").style.display = "block";
            window.location.reload(); */
            this.crear()

        }
      });   
    },

/* 
    guardar() {
      
    },
 */
    crear(){
      console.log("hola mundo")
      const tokens = localStorage.getItem("token");

      axios.get("http://localhost:1337/categorias").then((res) => {
        this.cate = res.data;
        this.fo = res.data.length;
        this.j=this.fo+1
        this.fi = 0;

        for (var fe = 0; fe < this.fo; fe++) {
          if (this.cate[fe].nombre == this.cat) {
            this.fi = this.cate[fe].id;
            this.i = 1;
            fe = this.j
          } else {
            this.i = 2;
          }
        }

        if (this.i == 1) {
            console.log("si hay categorias ")
            document.getElementById("bt").style.display = "none";

            ////////////////////////////////////////////
          let form = new FormData();
          form.append("files.url", this.imagen);

          form.append(
            "data",
            JSON.stringify({
              descripcion: this.descripcion,
              user: this.user,
              empresa: this.ides,
              categoria: this.fi,
            })
          );
          axios
              .post("http://localhost:1337/imagenes", form, {
                headers: {
                  Authorization: "Bearer " + tokens,
                },
              })
              .then((response) => {
                this.l = 0
                console.log(" guardar");
                this.$router.push("/productos");
                
              });

            ///////////////////////////////////////////
        } 
      });
    }
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
.container {
  background: silver;
  border-radius: 2%;
  /*  float: center; */
}
.ten {
  background: white;
  width: 100%;
  height: 30%;
}
/* .b2{
  background: red;
} */
.r1 {
  padding-top: 0%;
  padding-right: 5%;
}
.r2 {
  padding: 5%;
}

body {
  background: url("");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.con{
  padding-left: 10%;
  padding-block: 3% ;
}

</style>