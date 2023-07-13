import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5percent from "@amcharts/amcharts5/percent";
import  {  useLayoutEffect } from 'react';

const Graficocompras = () => {
    useLayoutEffect(() => {
    
        let root = am5.Root.new("chartcompras");

        root.setThemes([
            am5themes_Animated.new(root)
          ]);
          
          
          // Create chart
          // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
          let chart = root.container.children.push(am5percent.PieChart.new(root, {
            layout: root.verticalLayout
          }));
          
          
          // Create series
          // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
          let series = chart.series.push(am5percent.PieSeries.new(root, {
            alignLabels: true,
            calculateAggregates: true,
            valueField: "value",
            categoryField: "category"
          }));
          
          series.slices.template.setAll({
            strokeWidth: 3,
            stroke: am5.color(0xffffff)
          });
          
          series.labelsContainer.set("paddingTop", 30)
          
          
          // Set up adapters for variable slice radius
          // https://www.amcharts.com/docs/v5/concepts/settings/adapters/
          series.slices.template.adapters.add("radius", function (radius, target) {
            let dataItem = target.dataItem;
            let high = series.getPrivate("valueHigh");
          
            if (dataItem) {
              let value = target.dataItem.get("valueWorking", 0);
              return radius * value / high
            }
            return radius;
          });
          
          
          // Set data
          // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
          series.data.setAll([{
            value: 10,
            category: "Proveedor 1"
          }, {
            value: 9,
            category: "Proveedor 2"
          }, {
            value: 6,
            category: "Proveedor 3"
          }, {
            value: 5,
            category: "Proveedor 4"
          }, {
            value: 4,
            category: "Proveedor 5"
          }, {
            value: 3,
            category: "Proveedor 6"
          }]);
          
          
          // Create legend
          // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
          let legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.p50,
            x: am5.p50,
            marginTop: 15,
            marginBottom: 15
          }));
          
          legend.data.setAll(series.dataItems);
          
          
          // Play initial series animation
          // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
          series.appear(1000, 100);
      }, []);
    
      return (
        
        <div id="chartcompras" style={{ width: "100%", height: "500px" }}></div>
      );
}

export default Graficocompras