<template>
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
</template>

<script>
import PostsService from "@/services/apiService";
import VueInstantLoadingSpinner from "vue-instant-loading-spinner/src/components/VueInstantLoadingSpinner.vue";

export default {
  name: "response",
  props: [ 'backendAddress' ],
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
      const apiResponse = await PostsService.getCurrentStanding(this.$parent.backendAddress);

      this.chartOptions = {
          series: apiResponse.data.map(x => x.Record.count),

          labels: apiResponse.data.map(x => x.Record.description),
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
