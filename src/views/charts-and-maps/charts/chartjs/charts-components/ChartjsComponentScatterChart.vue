<!-- =========================================================================================
  File Name: ChartjsComponentScatterChart.vue
  Description: Chartjs component - Scatter Chart
  ----------------------------------------------------------------------------------------
  Item Name: Direksyon - CSMP
  Author: Robert Anthony Tribiana - Direksyon LLC
  Author URL: http://robtribiana.com
========================================================================================== -->


<script>
import { Scatter } from 'vue-chartjs'

export default {
  extends: Scatter,
  props: {
    data: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
