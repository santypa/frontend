
<template>
  <div>
    <div class="flex-container mt-4">
      <div class="row mx-0">
        <div id="tamcrearcat" class="container-fluid">
          <h1 class="texttitulo">Editar Categoria</h1>
          <form class="main" @submit.prevent="guardar">
            <label class="mr-2" for="nombre">Nombre</label>
            <input
              class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-2"
              type="text"
              v-model="nombre"
            />
            <br />

            <b-button
              class="mt-2"
              type="submit"
              @click="showAlert"
              id="color"
              block
              variant="dark"
              onsubmit="setTimeout(function () { window.location.reload(); }, 10)"
            >
              Guardar
            </b-button>
            <!--  <b-button  class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-4" type="submit" variant="success">Guardar</b-button> -->
          </form>
          <div v-if="loading">
            <b-alert
              :show="dismissCountDown"
              dismissible
              variant="success"
              @dismissed="dismissCountDown = 0"
              @dismiss-count-down="countDownChanged"
            >
              <p>Producto editado Correctamente</p>
              <b-progress
                variant="success"
                :max="dismissSecs"
                :value="dismissCountDown"
                height="4px"
              ></b-progress>
            </b-alert>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateCategoria",
  data() {
    return {
      nombre: "",
      id: null,
      token: null,
      loading: false,
      dismissSecs: 2,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    };
  },

  mounted() {
    this.token = localStorage.getItem("token");
    this.id = this.$route.params.id;
    axios
      .get("http://localhost:1337/categorias/" + this.id, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
      .then((response) => {
        this.nombre = response.data.nombre;
      });
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    guardar() {
      this.loading = false;
      axios
        .put(
          "http://localhost:1337/categorias/" + this.id,
          {
            nombre: this.nombre,
          },
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        )

        .then((response) => {
          this.loading = true;

          redireccionar();
        });
      function redireccionar() {
        setTimeout("location.href='/categoria'", 3000);
      }
    },
  },
};
</script>