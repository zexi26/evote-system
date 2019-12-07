<template>
    <div class="card-body">
    
      <b-form-group label="Cast your vote for your favorite player!">
        <b-form-radio v-model="picked" name="some-radios" value="Republican">HeroMarine (Germany)</b-form-radio>
        <b-form-radio v-model="picked" name="some-radios" value="Democrat">MaSa (Canada)</b-form-radio>
        <b-form-radio v-model="picked" name="some-radios" value="Green">Clem (France)</b-form-radio>
        <b-form-radio v-model="picked" name="some-radios" value="Independent">Kelazhur (Brazil)</b-form-radio>
        <b-form-radio v-model="picked" name="some-radios" value="Libertarian">uThermal (Netherlands)</b-form-radio>
      </b-form-group>

      <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
    
    <!-- <span v-if="picked">
      Picked:
      <b>{{ picked }}</b>
    </span> -->
    
    <!--span><b>{{ response }}</b></span><br /-->
    <form v-on:submit="castBallot">
      <b-form-input type="text" class="form-control" v-model="input.voterId" placeholder="Enter Game Username"></b-form-input>
      <!-- <input type="text" v-model="input.voterId" placeholder="Enter VoterId"> -->
      <button type="submit" class="btn btn-primary">Cast vote</button>
      <br>
    </form>

    <br>
    <span v-if="response">
      <b>{{ response }}</b>
    </span>
    <br>
    <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
    <vue-instant-loading-spinner id="loader" ref="Spinner"></vue-instant-loading-spinner>
  </div>
</template>

<script>
import PostsService from "@/services/apiService";
import VueInstantLoadingSpinner from "vue-instant-loading-spinner/src/components/VueInstantLoadingSpinner.vue";

export default {
  name: "response",
  props: [ 'backendAddress' ],
  data() {
    return {
      input: {},
      picked: null,
      response: null
    };
  },
  components: {
    VueInstantLoadingSpinner
  },
  methods: {
    async castBallot() {
      await this.runSpinner();

      let electionRes;
      try {
        electionRes = await PostsService.queryWithQueryString(this.$parent.backendAddress, 'election');
      } catch (e) {
        this.response = `Error contacting ${this.$parent.backendAddress}`;
        this.hideSpinner();
        console.log(e);
        return;
      }

      let electionId = electionRes.data[0].Key;

      console.log("picked: ");
      console.log(this.picked);
      console.log("voterId: ");
      console.log(this.input.voterId);
      this.response = null;

 

      //error checking for making sure to vote for a valid party
      if (this.picked === null ) {
        console.log('this.picked === null')

        let response = "You have to pick a player to vote for!";
        this.response = response;
        await this.hideSpinner();
      
      } else if (this.input.voterId === undefined) {
        console.log('this.voterId === undefined')

        let response = "You have to enter your username to cast a vote!";
        this.response = response;
        await this.hideSpinner();

      } else {
        let apiResponse;
        try {
          apiResponse = await PostsService.castBallot(
            this.$parent.backendAddress,
            electionId,
            this.input.voterId,
            this.picked
          );
        } catch (e) {
          this.response = `Error contacting ${this.$parent.backendAddress}`;
          this.hideSpinner();
          console.log(e);
          return;
        }

        console.log('apiResponse: &&&&&&&&&&&&&&&&&&&&&&&');
        console.log(apiResponse);

        if (apiResponse.data.error) {
          this.response= apiResponse.data.error;
          await this.hideSpinner();
        } else if (apiResponse.data.message) {
          this.response = `Could not find voter with username ${this.input.voterId}
            in the state. Make sure you are entering a valid username`;
          await this.hideSpinner();
        } 
        else {
          let response = `Successfully recorded vote for voter ${apiResponse.data.voterId}. Thanks for 
            your participation!`;

          this.response = response;

          console.log("cast the vote");
          console.log(this.input);
          await this.hideSpinner();
        }
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
