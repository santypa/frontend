<template>
  <Navbar />

  <router-view />
</template>


<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "app",
  components: {
    Navbar,
  },
};
</script>

<style type="text/css">
body {
  background: -webkit-linear-gradient(left, #060706, #c55d5d);
  background: linear-gradient(to right, #79837e, #edeef1);
  font-family: "Roboto", sans-serif;
}
/* /ESTILO BOTON INGRESAR/ */
.boton_ingresar {
  text-decoration: none;
  padding: 10px;
  font-weight: 400;
  font-size: 10px;
  width: 10%;
  color: white;
  background-color: rgb(65, 64, 64);
  border-radius: 6px;
  border: 2px solid black;
  font-size: small;
}
.boton_ingresar:hover {
  color: white;
  background-color: #77a3e6;
  font-size: small;
}
/*   /ESTILO BOTON REGISTRAR USUARIO/ */
.boton_registrarusuario {
  text-decoration: none;
  padding: 10px;
  font-weight: 400;
  font-size: 10px;
  width: 13%;
  color: white;
  background-color: rgb(65, 64, 64);
  border-radius: 6px;
  border: 2px solid black;
  font-size: small;
}
.boton_registrarusuario:hover {
  color: white;
  background-color: #77a3e6;
  font-size: small;
}
/* /IMAGEN DE FONDO REGISTRAR/ */
.fondo_ingreg {
  background: url("assets/fondos/fondo1.jpg");
}
/* /COLOR DE LETRA/ */
.letra_blanca {
  font-family: Arial, Helvetica, sans-serif;
  font-size: medium;
  color: white;
}
/* /BOTON CERRAR DE INGRESAR Y DE REGISTRAR/ */
.boton_cerrar {
  text-decoration: none;
  padding: 10px;
  font-weight: 400;
  font-size: 10px;
  width: 13%;
  color: white;
  background-color: rgb(83, 81, 81);
  border-radius: 6px;
  border: 2px solid black;
  font-size: small;
}
.boton_cerrar:hover {
  color: white;
  background-color: rgb(248, 70, 70);
  font-size: small;
}
.tamaño_img {
  height: 90%;
  width: 80%;
  border: 1px solid rgb(32, 32, 34);
}


h1 {
  font-size: 30px;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px;
}
table {
  width: 100%;
  table-layout: fixed;
}
.tbl-header {
  background-color: rgba(0, 0, 0, 0.3);
}
.tbl-content {
  height: 500px;
  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
.tbl-content2 {
  height: 250px;
  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(0, 0, 0, 0.3);
}

th {
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
}
td {
  padding: 15px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 15px;
  color: rgb(0, 0, 0);
  border-bottom: solid 1px rgb(136, 136, 136);
}

/* demo styles */

@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);

section {
  margin: 50px;
}
</style>