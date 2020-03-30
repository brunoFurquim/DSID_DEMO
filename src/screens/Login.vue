<template>
  <div>
    <Sidebar v-bind:titulo="titulo" subtitulo="Faça login para continuar." />

    <LoginBackground />

    <div id="main">
      <b-row class="no-gutters" style="margin-top: 30vh !important">
        <b-col lg="12" md="12" class="d-flex justify-content-center align-items-center">
          <b-card class="p-5" id="card">
            <b-row id="halfWidth">
              <b-col
                md="4"
                class="align-self-center d-flex justify-content-center justify-content-sm-center"
              >
                <b-img class="imagemCard" :src="require('@/assets/logoescuro.png')" />
              </b-col>

              <b-col md="8">
                <div class="ml-5 verticalLine pt-3 leftMar">
                  <div class="ml-5">
                    <b-form-group>
                      <float-label>
                        <input
                          type="text"
                          class="form-control simplebox"
                          name="login"
                          placeholder="Login"
                          v-model="formData.login"
                        />
                      </float-label>
                    </b-form-group>
                    <b-form-group class="mt-4">
                      <float-label>
                        <input
                          type="password"
                          name="password"
                          class="form-control simplebox"
                          placeholder="Senha"
                          v-model="formData.password"
                        />
                      </float-label>
                    </b-form-group>

                    <div class="row">
                      <div class="col-6">
                        <router-link to="/Recuperar" class="text-light">
                          <button class="btn btn-md btn-outline-success">
                            Recuperar
                            <!-- <i class="nav-link-icon fa fa-lock ml-2"></i> -->
                          </button>
                        </router-link>
                      </div>

                      <div class="col-6">
                        <b-button
                          v-on:click="login"
                          variant="success"
                          size="md"
                          class="float-right"
                        >
                          <div>
                            Entrar
                            <b-spinner v-if="loading" small label="Loading..." class="ml-2"></b-spinner>

                            <i v-else class="fa fa-sign-in"></i>
                          </div>
                        </b-button>
                      </div>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// import { login } from "@/Merchant/Inputs.js";
// import { inputFormat } from "@/_utils/utils";

import Sidebar from "@/components/Sidebar.vue";
import LoginBackground from "@/components/LoginBackground.vue";

export default {
  components: {
    Sidebar,
    LoginBackground
  },
  props: {},
  data() {
    return {
      loading: false,
      titulo: "Bem-vindo a DemoVue!",
      formData: {
        login: "",
        password: ""
      },
      perfis: []
    };
  },
  methods: {
    async login() {
      this.loading = true;

      var loginValido = this.validaCampo(this.formData.login);
      var passwordValido = this.validaCampo(this.formData.password);

      if (loginValido && passwordValido) {
        //Fazer requisicao HTTP do tipo POST, usando axios
        setTimeout(() => {
          this.$toast.success("Login feito com sucesso!", "Atenção", {
            position: "topRight"
          });
          this.loading = false;
        }, 3000);
      } else {
        //Avisar usuario que um dos campos esta invalido
        this.$toast.warning(
          "Verifique se ambos os campos estão preenchidos corretamente!",
          "Atenção",
          {
            position: "topRight"
          }
        );
        this.loading = false;
      }
    },
    validaCampo(campo) {
      return campo != "" && campo != undefined;
    }
  },
  watch: {
    Senha(valorNovo) {
      if (valorNovo.length > 10)
        this.$toast.warning(
          "Tamanho máximo excedido para o campo Senha!",
          "Atenção",
          {
            position: "topRight"
          }
        );
    }
  },
  computed: {
    Email() {
      return this.formData.login;
    },
    Senha() {
      return this.formData.password;
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

.simplebox {
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
}

#card {
  margin-right: 4vw;
}

.verticalLine {
  border-left-width: 1px;
}

.iconTitle {
  font-size: 125%;
}

.center {
  top: 50%;
}

.teste {
  padding-bottom: 10%;
}
</style>

<style>
.simplebox {
  outline: none !important;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
}

.vfl-label-on-input {
  margin-bottom: 10%;
}
</style>