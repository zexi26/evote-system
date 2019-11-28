<template>
  <div class="card" style="width: 40rem;">
  <img class="card-img-top" src="../assets/logo.jpg" alt="Card image cap">
  <div class="card-body">

    <b-button type=button class="btn btn-primary btn-lg btn-block" @click.prevent="getCurrentStanding()" >Check Poll</b-button>
    <br>
    <span v-if="response">
      <b>{{ response }}</b>
    </span>
    <br>
    <vue-instant-loading-spinner id='loader' ref="Spinner"></vue-instant-loading-spinner>
    <apexchart type=donut height=380 :options="chartOptions" :series="series" />
  
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
      response: null,
      chartOptions: {}
    };
  },
  components: {
    VueInstantLoadingSpinner
  },
  methods: {
    async getCurrentStanding() {
      this.response = null;
      
      this.runSpinner();

      // console.log(`this.selected ${this.selected}`);
      const apiResponse = await PostsService.getCurrentStanding();
      console.log("%%%%%%%%%%%%%%%%%%%%%%%%%");
      console.log(apiResponse);
      console.log(apiResponse.data[0].Record);
      let currentStanding = [];
      for (let i = 0; i < apiResponse.data.length; i++) {
        currentStanding[i] = apiResponse.data[i].Record.count;
      }
      console.log("curStanding: ");
      console.log(currentStanding);

      this.chartOptions = {
          series: currentStanding,

          labels: ["Germany", "Canada", "France", "Brazil", "Netherlands"],
          title: {text: "Current Poll Result"},
          chartOptions: {
          chart: {
            dropShadow: {
              enabled: true,
              color: '#111',
              top: -1,
              left: 3,
              blur: 3,
              opacity: 0.2
            }
          },
          stroke: {
            width: 0,
          },
          dataLabels: {
            dropShadow: {
              blur: 3,
              opacity: 0.8
            }
          },
                    plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  total: {
                    showAlways: true,
                    show: true
                  }
                }
              }
            }
          },
                    fill: {
            type: 'pattern',
            opacity: 1,
            pattern: {
              enabled: true,
              style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
            },
          },
          states: {
            hover: {
              enabled: false
            }
          },
          theme: {
            palette: 'palette2'
          },
                    responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }
      };
          
      // this.response = apiResponse.data;
      // this.renderChart(this.datacollection, this.options)
      this.hideSpinner();
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
