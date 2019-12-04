<template>
  <div>
    <div class="card" style="width: 40rem;">
      <img class="card-img-top" src="../assets/logo.jpg" alt="Card image cap">
      <div class="card-body">
        <label>Backend Address</label><br/>
        <input type="text" class="form-control" v-model="backendAddress" />
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backendAddress: "http://localhost:8081"
    };
  }
};
</script>
