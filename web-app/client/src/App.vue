<template>
  
    <b-container id="app">
    <b-row>
      <b-col>
        <navbar/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <router-view/>
      </b-col>
    </b-row>
  </b-container>

  
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: red; */
  margin-top: 50px;

}


body{
  background-color:#000000;
  background-image: url(./assets/image.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: 100% 100%;
  position: relative;
}

/* .posts{
    margin-top: 150px;
} */

.card{
    margin-top: 50px;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}


/* .chart-wrapper {
  width: 100%;
  height: 700px;
} */
/* .echarts {
  width: 100%;
  height: 100%;
} */

#loader {
  position:fixed;
  padding-top: 1000px;
}

.chart-wrapper {
  position:fixed;
  padding-left:32%;
}


</style>
