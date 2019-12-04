<template>
  <div>
    <div class="card" style="width: 40rem;">
      <img class="card-img-top" src="../assets/logo.jpg" alt="Card image cap">
      <input type="text" id="backendAddressInput" v-model="backendAddress" />
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
