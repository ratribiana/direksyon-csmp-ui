<!-- =========================================================================================
  File Name: ChartjsComponentBubbleChart.vue
  Description: Chartjs component - Bubble Chart
  ----------------------------------------------------------------------------------------
  Item Name: Direksyon - CSMP
  Author: Robert Anthony Tribiana - Direksyon LLC
  Author URL: http://robtribiana.com
========================================================================================== -->

<script>
import { Bubble } from 'vue-chartjs'

export default {
  extends: Bubble,
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
