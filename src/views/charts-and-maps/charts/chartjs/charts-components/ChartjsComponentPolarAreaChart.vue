<!-- =========================================================================================
  File Name: ChartjsComponentPolarAreaChart.vue
  Description: Chartjs component - Polar Area Chart
  ----------------------------------------------------------------------------------------
  Item Name: Direksyon - CSMP
  Author: Robert Anthony Tribiana - Direksyon LLC
  Author URL: http://robtribiana.com
========================================================================================== -->


<script>
import { PolarArea } from 'vue-chartjs'

export default {
  extends: PolarArea,
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
