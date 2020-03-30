<template>
  <div>
    <Sidebar titulo="Recuperar senha" subtitulo="Informe seu E-mail para continuar." />
    <div class="imgBg"></div>
    <div id="main">
      <div
        class="row no-gutters justify-content-center align-items-center"
        style="margin-top: 30vh !important"
      >
        <div class="col-6">
          <div class="card p-3">
            <div class="card-body">
              <div class="row justify-content-center">
                <div class="col-auto">
                  <b-img
                    :src="require('@/assets/logoescuro.png')"
                    style="max-height: 20vh !important"
                  />
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-12">
                  <b-form-group>
                    <float-label>
                      <input
                        type="text"
                        class="form-control simplebox"
                        name="email"
                        placeholder="Email"
                        v-model="formData.Email"
                      />
                    </float-label>
                  </b-form-group>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <button @click="voltar" class="btn btn-md float-left btn-outline-success">
                    <i class="nav-link-icon fa fa-arrow-left mr-2"></i>
                    Voltar
                  </button>
                </div>
                <div class="col-6">
                  <button
                    @click="enviarEmail"
                    class="btn btn-md float-right"
                    :disabled="!isEmailValid"
                    :class="isEmailValid ? ['btn-success'] : ['btn-danger']"
                  >
                    <div>
                      Confirmar
                      <b-spinner v-if="loading" small label="Loading..." class="ml-2"></b-spinner>
                      <i
                        v-else
                        class="nav-link-icon fa fa-check ml-2"
                        :class="isEmailValid  ? ['fa-check'] : ['fa-times']"
                      ></i>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Sidebar from "../components/Sidebar.vue";

export default {
  components: {
    Sidebar
  },
  mounted() {
    //this.$refs.senha.$el.childNodes[1].focus();
  },
  data: () => ({
    loading: false,
    formData: {
      Email: ""
    }
  }),

  methods: {
    voltar: function() {
      this.$router.back();
    },
    async enviarEmail() {
      this.loading = true;

      setTimeout(() => {
        this.$toast.success(
          "Link de recuperação de senha enviado.",
          "Sucesso",
          {
            position: "topRight"
          }
        );
        this.loading = false;
      }, 3000);
    }
  },
  computed: {
    isEmailValid: function() {
      var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return regex.test(this.formData.Email);
    }
  }
};
</script>

<style scoped>
#main {
  z-index: 0;
  min-height: 100%;
  min-width: 100%;

  top: 0px;
  left: 0px;
  right: -30px;
}

.sidebar {
  z-index: 0;
  min-width: 30%;
  min-height: 100%;
  position: fixed;
  left: 70%;

  background-position: center;
  background-color: rgba(32, 189, 103, 1);
}

.imgBg {
  min-height: 100%;
  min-width: 70%;

  position: fixed;
  top: 0px;
  right: 30%;

  background-size: cover;
  background-position: center;
  background-image: url("fundoRecuperar.jpg");
}
</style>

