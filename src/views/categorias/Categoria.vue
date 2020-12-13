<template>
  <section>
    <h1>Mis Categorias</h1>
    <div class="tbl-header">
      <table cellpadding="0" cellspacing="0" border="0">
        <thead>
          <tr class="d-flex justify-content-sm-around">
            <th>ID</th>
            <th>Nombre</th>
            <th>Accion</th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="tbl-content">
      <table cellpadding="0" cellspacing="0" border="0">
        <tbody>
          <tr v-for="categoria in categorias" :key="categoria.id">
            <td class="text-center">{{ categoria.id }}</td>
            <td class="text-center">{{ categoria.nombre }}</td>

            <td class="text-center">
              <a class="mr-2" :href="`/categorias/${categoria.id}/edit`">
                <button type="button" class="btn btn-outline-primary">
                  Editar
                </button></a
              >
              <a href="#" @click="eliminar(categoria.id)">
                <button type="button" class="btn btn-outline-danger">
                  Eliminar
                </button></a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import debounce from "debounce";
export default {
  name: "Categoria",
  data() {
    return {
      categorias: [],
    };
  },

  mounted() {
    this.traerCategorias();
  },
  /*Para buscar*/

  methods: {
    traerCategorias() {
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

    eliminar(id) {
      axios
        .delete("http://localhost:1337/categorias/" + id, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.traerCategorias();
        });
    },
  },
};
</script>
<style >
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