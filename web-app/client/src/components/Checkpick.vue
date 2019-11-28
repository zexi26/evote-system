<template>
  <!-- <div class="posts">
    <h1>Check your pick</h1>
    <form v-on:submit="Checkpick">
      <input type="text" v-model="input.key" placeholder="Enter game user name to check">
      <br>

      <input type="submit" value="Query">
      <br>
      <br>
      <span v-if="input">
        <b>{{ input.data }}</b>
      </span>  
      <br>
    </form> -->


 <div class="card" style="width: 40rem;">
   <img class="card-img-top" src="../assets/logo.jpg" alt="Card image cap">
    <div class="card-body">
        <form v-on:submit="Checkpick">
        <div class="form-group">
        <label for="inputId">Enter Game Username</label>
        <b-form-input type="text" class="form-control" v-model="input.key"></b-form-input>
        <button type="submit" class="btn btn-primary">Submit</button>
        </div>
   

      <!-- <span v-if="input">
      <div class="card-text">
      {{ input.data}}
      </div>
      </span>   -->
    </form>
    
    <tbody v-if="input">
          <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Public key</th>
          <th>Result</th>
          </tr>
        <tr>
        <td>{{ input.data.firstName }}</td>
        <td>{{ input.data.lastName }}</td>
        <td>{{ input.data.ballot }}</td>
        <td>{{ input.data.ballotCreated }}</td>
        </tr>
    </tbody>
    <!-- <b-table v-if="input" small :fields="fields" :items = "input" responsive="sm">

      <template v-slot:cell(publickey)="data">
        {{ input.data.ballot }}
      </template>


      <template v-slot:cell(name)="data">
        <b class="text-info">{{ input.data.lastName.toUpperCase() }}</b>, <b>{{ input.data.firstName }}</b>
      </template>


      <template>
        <b class="text-info">{{ input.data.picked }}</b>
      </template>
    </b-table> -->
  
    </div>
 

    <br>
    <vue-instant-loading-spinner id='loader' ref="Spinner"></vue-instant-loading-spinner>
  </div>
</template>

<script>
import PostsService from "@/services/apiService";
import VueInstantLoadingSpinner from 'vue-instant-loading-spinner/src/components/VueInstantLoadingSpinner.vue'

export default {
  name: "response",
  data() {
    return {
     input: {
        data: ""
      },
    fields:['name', 'publicId', 'vote for'],
    };
    
  },
  name: 'app',
  components: {
    VueInstantLoadingSpinner
  },
  methods: {
    async Checkpick() {
        this.runSpinner();
      console.log('this.input: ');
      console.log(this.input);
      if (!this.input.key) {
        console.log('this.input$#: ');
        let response = 'Please enter a Key to query for.';
        this.input.data = response;
        this.hideSpinner();
      } else {
        this.runSpinner();
        const apiResponse = await PostsService.Checkpick(this.input.key);
        console.log(apiResponse);
        this.input = apiResponse;
        this.hideSpinner();
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
