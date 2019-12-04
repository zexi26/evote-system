<template>
  <b-navbar
    toggleable="md" type="dark" variant="transparent">
    <b-navbar-brand :to="{ name: 'Home' }">Home</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item :to="{ name: 'Checkpick' }">Check your pick</b-nav-item>
      <b-nav-item :to="{ name: 'GetCurrentStanding' }">Tally the votes</b-nav-item>
    </b-navbar-nav>
  </b-navbar>


</template>
<script>
export default {
  name: 'Navbar'
};
</script>