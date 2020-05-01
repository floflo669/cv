import { Radar, mixins } from 'vue-chartjs-typescript'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ChartData, ChartOptions } from 'chart.js'

@Component<RadarChart>({
  extends: Radar,
  mixins: [
    mixins.reactiveProp
  ]
})
export default class RadarChart extends Vue {
  @Prop({ required: true })
  chartData !: ChartData;

  @Prop({ required: true })
  chartOptions !: ChartOptions;

  public renderChart!: (chartData: ChartData, options: ChartOptions) => void

  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  }
}
