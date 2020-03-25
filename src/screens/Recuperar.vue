<template>
  <div>    
    <div class="imgBg">
      <div id="main">
        <div class="row htheme-100">
          <div class="col-12 d-flex justify-content-center align-items-center">
            <div class="card p-3">
              <div class="card-body">
                <h5 class="card-title">Esqueceu sua senha?</h5>
                <h6 class="card-subtitle">Informe seu e-mail para recuperá-la</h6>
                <div class="row mt-4">
                  <div class="col-12">
                    <b-form-group>
                      <GenericInput
                        ref="senha"
                        :schema="inputEmailLogin"
                        :formData="formData"
                        @keyup.enter.native="enviarEmail"
                      />
                    </b-form-group>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <button @click="voltar" class="btn btn-md float-left btn-outline-primary">
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
    <div class="sidebar">
      <div class="row justify-content-center" style="margin-top: 15%">
        <b-img :src="require('@/assets/images/logofundoazul.png')" style="transform: scale(0.80)"/>
      </div>
    </div>
  </div>
</template>


<script>
import { setTimeout } from "timers";
import { inputEmailLogin } from "./../Inputs";
export default {
  mounted() {
    this.$refs.senha.$el.childNodes[1].focus();
  },
  data: () => ({
    loading: false,
    inputEmailLogin,
    formData: {
      Email: undefined
    }
  }),

  methods: {
    voltar: function() {
      this.$router.back();
    },
    async enviarEmail() {
      this.loading = true;

      var requestObject = JSON.stringify(this.formData.Email);

      var response = await this.axios.post(
        "/Conta/RecuperarSenha",
        requestObject
      );

      if (response.data.status) {
        this.$toast.success(
          "Link de recuperação de senha enviado.",
          "Sucesso",
          {
            position: "topRight"
          }
        );

        this.$router.push("/");
      } else {
        this.$toast.error("Endereço de e-mail não está cadastrado!", "Atenção", {
          position: "topRight"
        });
      }

      this.loading = false;
    }
  },

  computed: {
    isEmailValid: function() {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
      return reg.test(this.formData.Email);
    }
  }
};
</script>

<style scoped>
/* de 0 ate 425 */
@media (max-width: 552px) {
  .card {
    width: 90vw !important;
  }
}

/* de 552 ate 1106 */
@media (max-width: 1106px) {
  .card {
    width: 75vw !important;
  }
}

/* de 1107 ate 1700px */
@media (max-width: 1700px) {
  .card {
    width: 50vw !important;
  }
}

/* de 1701 ate ...px */
@media (min-width: 1701px) {
  .card {
    width: 40vw !important;
  }
}

.sidebar {
  z-index: 0;
  min-width: 25%;
  min-height: 100%;
  position: fixed;
  left: 75%;

  background-position: center;
  background-color: rgba(120, 194, 214, 1);
}

.imgBg {
  min-height: 100%;
  min-width: 75%;

  position: fixed;
  top: 0px;
  right: 25%;

  background-size: cover;
  background-position: center;
  background-image: url("fundoRecuperar.jpg");
}
</style>

