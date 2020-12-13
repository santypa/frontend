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


</style>