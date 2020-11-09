<template>
<!--carrucel nuevo-->
<div id="carouselExampleCaptions" class="carousel ancho slide mb-5" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s6d7954848f1c7d92/image/i37cf18a400e509f4/version/1603853534/image.jpg" class="d-block w-100" style="max-height: 480px;" alt="asas">
      <div class="carousel-caption d-none d-md-block">
        <h1 class="display-3"> <b>BIENVENIDOS</b></h1>
        <p class=" h4"> <i>Todas las experiencias las puedes encontrar en un solo lugar.</i></p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s6d7954848f1c7d92/image/ic0967dbf8feb6b22/version/1603853534/image.jpg" class="d-block w-100" style="max-height: 480px;" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1> ENTRETENIMIENTO</h1>
        <p class="h5"><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i></p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s6d7954848f1c7d92/image/i07a21a07e3c2d184/version/1603853534/image.jpg" class="d-block w-100" style="max-height: 480px;" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1> LUGARES GENIALES</h1>
        <p class="h5"><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Carrusel',
  props: {
    imagen: String
  }
}
</script>

<style>
/* .carousel-inner {
  height: 500px;
  align-content: center;
  border: 10px;

} */
</style>
