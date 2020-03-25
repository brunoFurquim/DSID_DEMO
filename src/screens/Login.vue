<template>
  <div>
    <!-- Exemplos de como um pedaço de código pode ser transformado em componente para que se torne reutilizavel -->
    <LoginSidebar v-bind:titulo="titulo" subtitulo="Faça login para continuar." />

    <LoginBackground />
    <!-- Coloca um componente responsavel por renderizar o Background dentro da pagina Login.vue-->

    <div id="main">
      <b-row class="no-gutters" style="margin-top: 30vh !important">
        <b-col lg="12" md="12" class="d-flex justify-content-center align-items-center">
          <b-card class="p-5" id="card">
            <b-row id="imageTop" class="justify-content-center">
              <b-img :src="require('@/assets/logoescuro.png')" />
            </b-row>

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
                        <!-- <router-link to="/Recuperar" class="text-light">
                                            
                        </router-link>-->

                        <button class="btn btn-md btn-outline-success">
                          Recuperar
                          <!-- <i class="nav-link-icon fa fa-lock ml-2"></i> -->
                        </button>
                      </div>

                      <div class="col-6">
                        <b-button @click="login" variant="success" size="md" class="float-right">
                          <div>
                            Entrar
                            <!-- <b-spinner v-if="loading" small label="Loading..." class="ml-2"></b-spinner> -->

                            <i class="fa fa-sign-in"></i>
                          </div>
                        </b-button>
                      </div>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>

            <!-- <div id="fullWidth">
                <div class="row mt-4">
                  <div class="col-12">
                    <GenericInput
                      ref="cpfcnpj"
                      :schema="inputEmailLogin"
                      :formData="formData"
                      @keyup.enter.native="login"
                    />
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-12">
                    <GenericInput
                      :schema="inputSenha"
                      :formData="formData"
                      @keyup.enter.native="login"
                    />
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-6">
                    <router-link to="/Recuperar" class="text-light">
                      <button class="btn btn-md btn-primary">
                        Recuperar
                        <i class="nav-link-icon fa fa-lock ml-2"></i>
                      </button>
                    </router-link>
                  </div>

                  <div class="col-6">
                    <b-button @click="login" variant="primary" size="md" class="float-right">
                      <div>
                        Entrar
                        <b-spinner v-if="loading" small label="Loading..." class="ml-2"></b-spinner>

                        <i v-else class="nav-link-icon fa fa-sign-in ml-2"></i>
                      </div>
                    </b-button>
                  </div>
                </div>
            </div>-->
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// import { login } from "@/Merchant/Inputs.js";
// import { inputFormat } from "@/_utils/utils";

import LoginSidebar from "@/components/LoginSidebar.vue";
import LoginBackground from "@/components/LoginBackground.vue";

export default {
  components: {
    LoginSidebar,
    LoginBackground
  },
  mounted() {
    //this.$refs.cpfcnpj.$el.children[0].children[1].focus();
    // this.inputEmailLogin.valor = "bruno.f@inttecnologia.com.br";
    // this.inputSenha.valor = "Senha123!";
  },
  data() {
    return {
      //   ...login,
      loading: false,
      titulo: "Bem-vindo a DemoVue!", //Exemplo de como os dados podem vir da instancia do vue de um componente e ser mandados para outro componente
      formData: {
        login: "",
        password: ""
      },
      perfis: []
      //   regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    };
  },
  beforeDestroy() {},
  methods: {
    async login() {
      //   this.loading = true;
      //   var emailValido = inputFormat.validarCampo(this.formData.Email);
      //   var senhaValida = inputFormat.validarCampo(this.formData.Senha);
      //   if (!emailValido) inputFormat.error(this.inputEmailLogin);
      //   if (!senhaValida) inputFormat.error(this.inputSenha);
      //   if (!(emailValido && senhaValida)) {
      //     this.$toast.warning(
      //       "Necessário informar o(s) campos abaixo!",
      //       "Atenção",
      //       { position: "topRight" }
      //     );
      //     this.loading = false;
      //     return;
      //   }
      //   var usuario = {
      //     email: this.formData.Email,
      //     senha: this.formData.Senha
      //   };
      //   await this.$store.dispatch("authentication/login", usuario);
      //   if (this.$store.getters["authentication/status"].loggedIn == false) {
      //     this.$toast.warning("Usuário e/ou senha inválidos", "Atenção", {
      //       position: "topRight"
      //     });
      //     this.loading = false;
      //   }
    }
  },
  watch: {
    // Email(novo) {
    //   if (inputFormat.validarCampo(novo)) {
    //     inputFormat.resetarInput(this.inputEmailLogin);
    //     if (this.regex.test(novo)) inputFormat.success(this.inputEmailLogin);
    //   } else inputFormat.resetarInput(this.inputEmailLogin);
    // },
    // Senha(novo) {
    //   if (novo == "123123") {
    //     this.inputEmailLogin.valor = "bruno.f@inttecnologia.com.br";
    //     this.inputSenha.valor = "Senha123!";
    //     this.formData.Email = "bruno.f@inttecnologia.com.br";
    //     this.formData.Senha = "Senha123!";
    //     this.login();
    //   }
    //   if (inputFormat.validarCampo(novo))
    //     inputFormat.resetarInput(this.inputSenha);
    // }
  },
  computed: {
    // Email() {
    //   return this.formData.Email;
    // },
    // Senha() {
    //   return this.formData.Senha;
    // }
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

/* de 0 ate 425 */

@media (max-width: 552px) {
  #imageTop {
    transform: scale(0.5);
  }
  #card {
    padding: 0% !important;
    margin-right: 4vw !important;
    margin-left: 4vw !important;
    width: 75vw !important;
  }
}

/* de 552 ate 1130 */

@media (max-width: 1130px) {
  .sidebar {
    display: none !important;
  }
  .imgBg {
    left: 0px !important;
    min-width: 100% !important;
  }
  #halfWidth {
    display: none;
  }
  #card {
    width: 75vw !important;
  }
}

/* de 1130 ate ... */

@media screen and (min-width: 1131px) {
  .verticalLine {
    border-left: solid #1001;
  }
  .imagemCard {
    width: 20vw !important;
  }
  #fullWidth {
    display: none;
  }
  #card {
    margin-right: 4vw;
  }
  #imageTop {
    display: none;
  }
}
</style>