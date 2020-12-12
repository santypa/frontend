<template>
<!--carrucel nuevo-->
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
  <div class="carousel-caption d-none d-md-block">
        <h1 class="display-3"> <b>BIENVENIDOS</b></h1>
        <p class=" h4"> <i>Todas las experiencias las puedes encontrar en un solo lugar.</i></p>
      </div>
    <div class="carousel-item active">
      <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s6d7954848f1c7d92/image/i37cf18a400e509f4/version/1603853534/image.jpg" class="d-block w-100 "  alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s6d7954848f1c7d92/image/ic0967dbf8feb6b22/version/1603853534/image.jpg" class="d-block w-100 " alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s6d7954848f1c7d92/image/ic0967dbf8feb6b22/version/1603853534/image.jpg" class="d-block w-100 "  alt="...">
    </div>
  </div>
 
</div>

{{sms}}

</template>

<script>
export default {
  name: 'Carrusel',
  props: {
    sms: this
  }
}

</script>

<style>
.carousel-inner {
  height: 300px;
  align-content: center;
  border: 10px;
}

</style>
