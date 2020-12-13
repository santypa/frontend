<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div>
      <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#">
          <img
            src="https://placekitten.com/g/30/30"
            style="border-radius: 40px; height: 40px; width: 40px"
          />
        </b-navbar-brand>
      </b-navbar>
    </div>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- /////////////////////////// -->

    <!-- //////////////COLLAPSE ////////////// -->

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">
            <h3>Inicio</h3>
            <span class="sr-only">(current)</span>
          </a>
        </li>
      </ul>
      <!-- ////////////VER CARACTERISTICAS EMPRESA/////////////// -->

      <div class="btn-group" id="mi" style="display: block">
        <button
          type="button"
          class="btn btn-dark dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Mi Empresa
        </button>
        <div class="dropdown-menu fondo_ingreg">
          <a class="dropdown-item letra_blanca" href="/productos"
            >Ver Mis productos</a
          >
          <a class="dropdown-item letra_blanca" href="/agregar"
            >Agregar Producto</a
          >

          <div class="dropdown-divider"></div>
          <a class="dropdown-item letra_blanca" href="#" @click="salirempresa()"
            >cerrar secion</a
          >
        </div>
      </div>
      <!-- ///////////////////// INGRESAR CON EL USUARIO /////////////////////// -->
      <a
        class="btn btn-dark m-2 boton_ingresar"
        id="ing"
        style="display: block"
        data-toggle="modal"
        data-target="#login"
        >Ingresar<span class="sr-only">(current)</span></a
      >

      <div
        class="modal fade"
        id="login"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header fondo_ingreg">
              <div class="d-flex justify-content-center">
                <img
                  src="https://previews.123rf.com/images/faysalfarhan/faysalfarhan1205/faysalfarhan120500022/13809767-ingresar-el-icono-en-el-bot%C3%B3n-redondo-verde-brillante.jpg"
                  style="width: 60px; height: 60px"
                />
              </div>
              <h5 class="modal-title" id="exampleModalLabel"></h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body fondo_ingreg">
              <form @submit.prevent="login">
                <div class="col letra_blanca">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    v-model="email"
                    class="form-control"
                    id="email"
                    placeholder="ejemplo@example.com"
                  />

                  <label for="password">Password</label>
                  <input
                    type="password"
                    v-model="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>

                <div v-if="error" class="spamf p-2 m-2 col-lg-6 aling-center">
                  <samp class=""
                    >las credenciales no son errones, verifique los
                    datos...</samp
                  >
                </div>
                <div v-if="guardo" class="spamv p-2 m-2 col-lg-6 aling-center">
                  <samp class="">Ingreso Correcto</samp>
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary boton_cerrar"
                    data-dismiss="modal"
                  >
                    Cerrar
                  </button>
                  <button type="submit" class="btn btn-primary">
                    Iniciar Sesion
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- ////////////////////////INGRESAR USUARIO O EMPRESA /////////////////////7 -->

      <a class="btn btn-dark m-2" id="re" href="/empresa"
        >Registrar Empresa<span class="sr-only">(current)</span></a
      >
      <!--/////////////////// Button trigger modal /////////////////////-->
      <a
        class="btn btn-dark m-2 boton_registrarusuario"
        id="ru"
        data-toggle="modal"
        data-target="#registra"
        >Registrar Usuario<span class="sr-only">(current)</span></a
      >

      <div
        class="modal fade"
        id="registra"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header fondo_ingreg letra_blanca">
              <h5 class="modal-title" id="exampleModalLabel">
                Registrarte Aqui
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body fondo_ingreg letra_blanca">
              <form @submit.prevent="guardar">
                <div class="col">
                  <label for="nombre">Nombre</label> <br />
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nombre completo..."
                    v-model="nombre"
                    id="nombre"
                  />

                  <label for="correo">Email</label> <br />
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Correo..."
                    v-model="correo"
                    id="correo"
                  />

                  <label for="clave">Password</label> <br />
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Contraseña..."
                    v-model="clave"
                    id="clave"
                  />
                </div>

                <div v-if="error" class="spamf p-2 m-2 col-lg-6 aling-center">
                  <samp class=""
                    >las credenciales no son errones, verifique los
                    datos...</samp
                  >
                </div>
                <div v-if="guardo" class="spamv p-2 m-2 col-lg-6 aling-center">
                  <samp class="">Ingreso Correcto</samp>
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary boton_cerrar"
                    data-dismiss="modal"
                  >
                    Cerrar
                  </button>
                  <button type="submit" class="btn btn-primary">
                    Registrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- //////////////////// BUSCADOR BARRA ////////////// -->

      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
        <button
          class="btn btn-sm btn-default"
          @click="$router.push('/categoria')"
          style="color: #767676"
        >
          Mis Categorias
        </button>
      </form>
      <!-- //////////////////////////// -->
    </div>
    <!-- ////////////////////////////////// -->
  </nav>
</template>

<script>
import Carrusel from "@/components/Carrusel.vue";
import axios from "axios";

export default {
  name: "Navbar",

  data() {
    return {
      Empresas: [],
      imagenes: [],
      usuario: [],
      email: "",
      password: "",

      error: false,
      guardo: false,

      nombre: "",
      correo: "",
      clave: "",
    };
  },
  mounted() {
    /* this.traerEmpresa() */
    this.consulta();
  },
  methods: {
    consulta() {
      if (localStorage.getItem("token") == null) {
        document.getElementById("ing").style.display = "block";
        document.getElementById("mi").style.display = "none";
        document.getElementById("re").style.display = "none";
        document.getElementById("ru").style.display = "Block";
      } else {
        document.getElementById("mi").style.display = "block";
        document.getElementById("ing").style.display = "none";
        document.getElementById("re").style.display = "Block";
        document.getElementById("ru").style.display = "none";
      }
    },
    guardar() {
      axios
        .post("http://localhost:1337/auth/local/register", {
          username: this.nombre,
          email: this.correo,
          password: this.clave,
        })
        .then((response) => {
          this.$router.push("/");
        });
    },

    login() {
      this.error = false;
      this.guardo = false;
      fetch("http://localhost:1337/auth/local", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          identifier: this.email,
          password: this.password,
        }),
      })
        .then(async (response) => {
          if (!response.ok) {
            throw await response.json();
          }
          document.getElementById("mi").style.display = "block";
          document.getElementById("ing").style.display = "none";
          document.getElementById("re").style.display = "Block";
          document.getElementById("ru").style.display = "none";
          return response.json();
        })
        .then((data) => {
          localStorage.setItem("token", data.jwt);
          this.guardo = true;
          localStorage.setItem("user", JSON.stringify(data.user));
          this.$router.push("/");
        })
        .catch((err) => {
          this.error = true;
        });
    },

    salirempresa() {
      document.getElementById("ing").style.display = "block";
      document.getElementById("mi").style.display = "none";
      document.getElementById("re").style.display = "none";
      document.getElementById("ru").style.display = "Block";
      localStorage.removeItem("token"),
        localStorage.removeItem("user"),
        this.$router.push("/");
    },
  },
};
</script>

<style >
.spamv {
  background: rgb(74, 191, 226);
  border-radius: 20px;
  position: relative;
}
.spamf {
  background: rgb(74, 191, 226);
  border-radius: 20px;
  position: relative;
}
</style>