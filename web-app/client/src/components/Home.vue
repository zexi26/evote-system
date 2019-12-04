<template>
  <div>
  <div class="card-body">
    <form v-on:submit="validateVoter">
      <label for="inputNation">Enter game username to vote</label>
      <b-form-input type="text" class="form-control" v-model="loginData.voterId" placeholder="Game username"></b-form-input>
      <button type="submit" class="btn btn-primary">Login</button>
      <br>
      <br>
      <span v-if="loginReponse">
        <b>{{ loginReponse.data }}</b>
      </span>
      <br>
    </form>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">New voter register</li>
  </ul>
  <div class="card-body">
      <form v-on:submit="registerVoter">
        <div class="form-group">
        <label for="inputId">Game User Name</label>
        <b-form-input type="text" class="form-control" v-model="registerData.voterId" placeholder="Game Username"></b-form-input>
        
        <label for="inputNation">Nation</label>
        <b-form-input type="text" class="form-control" v-model="registerData.nationId" placeholder="Nation"></b-form-input>
    
        <div class="row">
        <div class="col">
        <label for="firstname">First name</label>
        <b-form-input type="text" class="form-control" v-model="registerData.firstName" placeholder="First name"></b-form-input>
        </div>
        <div class="col">
        <label for="lastname">Last name</label>
        <b-form-input type="text" class="form-control" v-model="registerData.lastName" placeholder="Last name"></b-form-input>
        </div>
        </div>
        <label for="inputEmail">Email</label>
        <b-form-input type="email" class="form-control" v-model="registerData.email" aria-describedby="emailHelp" placeholder="name@example.com"></b-form-input>
        
        <label for="inputNumber">Phone number</label>
        <b-form-input type="text" class="form-control" v-model="registerData.number" placeholder="Phone number"></b-form-input>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>     
    </form>
    <br>
    <span v-if="registerReponse">
      <b>{{ registerReponse.data }}</b>
    </span>
    <br>
    <vue-instant-loading-spinner id='loader' ref="Spinner"></vue-instant-loading-spinner>
    </div>
  </div>

</template>

<script>
import PostsService from "@/services/apiService";
import VueInstantLoadingSpinner from "vue-instant-loading-spinner/src/components/VueInstantLoadingSpinner.vue";

export default {
  name: "response",
  data() {
    return {
      loginData: {},
      registerData: {},
      registerReponse: {
        data: ""
      },
      loginReponse: {
        data: ""
      }
    };
  },
  components: {
    VueInstantLoadingSpinner
  },
  methods: {
    async registerVoter() {

      await this.runSpinner();
      const apiResponse = await PostsService.registerVoter(
        this.$parent.backendAddress,
        this.registerData.voterId,
        this.registerData.nationId,
        this.registerData.firstName,
        this.registerData.lastName,
        this.registerData.email,
        this.registerData.number
      );

      console.log(apiResponse);
      this.registerReponse = apiResponse;
      await this.hideSpinner();
    },

    async validateVoter() {
      await this.runSpinner();

      if (!this.loginData.voterId) {
        console.log("!thislogin");
        let response = 'Please enter a game username';
        this.loginReponse.data = response;
        await this.hideSpinner();
      } else {
        const apiResponse = await PostsService.validateVoter(
          this.$parent.backendAddress,
          this.loginData.voterId
        );
        console.log("apiResponse");
        console.log(apiResponse.data);

        if (apiResponse.data.error) {
          // console.log(apiResponse);
          console.log(apiResponse.data.error);
          this.loginReponse = apiResponse.data.error;
        } else {
          this.$router.push("castBallot");
        }

        console.log(apiResponse);
        this.loginReponse = apiResponse;
        // this.$router.push('castBallot')
        await this.hideSpinner();
      }
    },
    async runSpinner() {
      this.$refs.Spinner.show();
    },
    async hideSpinner() {
      this.$refs.Spinner.hide();
    }
  }
};
</script>
