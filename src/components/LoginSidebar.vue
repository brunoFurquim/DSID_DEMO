<template>
  <div class="sidebar">
    <div class="row justify-content-center" style="margin-top: 15%">
      <h3>{{titulo}}</h3>
    </div>

    <div class="row justify-content-center" v-if="subtitulo !== ''">
      <h5>{{subtitulo}}</h5>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        titulo: {
            type: String,
            required: true
        },
        subtitulo: {
            type: String,
            required: false,
            default: ""
        }
    }
};
</script>

<style>
.sidebar {
  font-family: "Comfortaa";
  color: white;
  z-index: 0;
  top: 0px;
  left: 0px;
  min-width: 30%;
  min-height: 100%;
  position: fixed;

  background-position: center;
  background-color: rgba(32, 189, 103, 1);
}
</style>