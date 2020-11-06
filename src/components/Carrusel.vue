<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.pinimg.com/originals/9e/38/13/9e3813503c31c068146fbb8cd18db0de.jpg" class="d-block" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://blog.expansive.mx/wp-content/uploads/2018/02/Que-es-un-desarrollo-vertical-y-un-desarrollo-horizontal-al-invertir-en-Bienes-Raices.jpg" class="d-block" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" class="d-block" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
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

.carousel-inner{
  height: 250px;
  align-content: center;
  border: 10px;
}
</style>