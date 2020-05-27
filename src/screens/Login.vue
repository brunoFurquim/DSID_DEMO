<template>
  <div>
    <Sidebar v-bind:titulo="titulo" subtitulo="Faça login para continuar." />

    <Background />

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
                <div
                  class="ml-5 verticalLine pt-3 leftMar"
                  style="border-left: 1px solid rgba(0, 0, 0, 0.5)"
                >
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
                      <div class="col-6 float-left">
                        <b-button @click="buscar" variant="info" size="md" class="float-left">
                          <div>
                            Buscar (GET)
                            <b-spinner v-if="loadingBuscar" small label="Loading..." class="ml-2"></b-spinner>

                            <i v-else class="fa fa-sign-in"></i>
                          </div>
                        </b-button>
                      </div>
                      <div class="col-6 float-right">
                        <b-button @click="login" variant="success" size="md" class="float-right">
                          <div>
                            Entrar (POST)
                            <b-spinner v-if="loading" small label="Loading..." class="ml-2"></b-spinner>

                            <i v-else class="fa fa-sign-in"></i>
                          </div>
                        </b-button>
                      </div>
                    </div>
                    <!--<div class="row mt-2">
                      <div class="col-6 float-left">
                        <b-button
                          @click="apagar"
                          variant="danger"
                          size="md"
                          class="float-left"
                        >Apagar (DELETE)</b-button>
                      </div>
                      <div class="col-6 float-right">
                        <b-button
                          v-on:click="atualizar"
                          variant="primary"
                          size="md"
                          class="float-right"
                        >
                          <div>
                            Atualizar (PUT)
                            <b-spinner v-if="loading" small label="Loading..." class="ml-2"></b-spinner>

                            <i v-else class="fa fa-sign-in"></i>
                          </div>
                        </b-button>
                      </div>
                    </div>-->
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
import Sidebar from "@/components/Sidebar.vue";
import Background from "@/components/Background.vue";

export default {
  components: {
    Sidebar,
    Background
  },
  created() {
    var response = this.axios
      .get("https://dsid-server.herokuapp.com/info")
      .then(response => {
        console.log(response);
      });
  },
  props: {},
  data() {
    return {
      loading: false,
      loadingBuscar: false,
      titulo: "Bem-vindo a DemoVue!",
      formData: {
        login: "",
        password: ""
      },
      perfis: []
    };
  },
  methods: {
    async atualizar() {
      this.loading = true;
      var objs = await this.buscar();
      console.log("Objs: ", objs);

      var id = this.findId(objs, this.formData.login);
      console.log(id);

      var loginValido = this.validaCampo(this.formData.login);
      var passwordValido = this.validaCampo(this.formData.password);

      if (loginValido && passwordValido) {
        var response = await this.axios
          .put("http://localhost:3000/users/" + id, {
            id: id,
            login: this.formData.login,
            password: this.formData.password
          })
          .then(response => {
            return response;
          });
        console.log(response);
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
    async buscar() {
      this.loadingBuscar = true;

      var response = await this.axios
        .get("https://dsid-server.herokuapp.com/users")
        .then(response => {
          response.data.users.forEach(element => {
            console.log(element.login);
          });
          this.loadingBuscar = false;
          return response;
        });
      return response.data;
    },
    findId(objs, login) {
      var obj = objs.find(element => element.login == login);
      console.log(obj.id);
      return obj.id;
    },
    async apagar() {
      this.loading = true;

      var loginValido = this.validaCampo(this.formData.login);
      var passwordValido = this.validaCampo(this.formData.password);

      if (loginValido && passwordValido) {
        //Fazer requisicao HTTP do tipo POST, usando axios
        var objs = await this.buscar();

        var id = this.findId(objs, this.formData.login);
        console.log(id);
        await this.axios
          .delete("http://localhost:3000/users/" + id)
          .then(response => {
            console.log(response.data);
            this.loading = false;
            this.$toast.error("Registro apagado com sucesso!", "Atenção", {
              position: "topRight"
            });
          });
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
    async login() {
      this.loading = true;

      var loginValido = this.validaCampo(this.formData.login);
      var passwordValido = this.validaCampo(this.formData.password);

      if (loginValido && passwordValido) {
        //Fazer requisicao HTTP do tipo POST, usando axios
        await this.axios
          .post("https://dsid-server.herokuapp.com/login", {
            login: this.formData.login,
            password: this.formData.password
          })
          .then(response => {
            console.log(response.data);
            this.loading = false;
            if (response.data.auth) {
              this.$toast.success("Login feito com sucesso!", "Atenção", {
                position: "topRight"
              });
            } else {
              this.$toast.error(response.data.mensagem, "Atenção", {
                position: "topRight"
              });
            }
          });
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
      if (valorNovo.length > 15)
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