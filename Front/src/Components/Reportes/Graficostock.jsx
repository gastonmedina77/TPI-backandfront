import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5percent from "@amcharts/amcharts5/percent";
import  {  useLayoutEffect } from 'react';

const Graficostock = () => {
    useLayoutEffect(() => {
    
        let root = am5.Root.new("chartstock");
    
        root.setThemes([
            am5themes_Animated.new(root)
          ]);
          
          // Create chart
          let chart = root.container.children.push(
            am5percent.PieChart.new(root, {
              endAngle: 270
            })
          );
          
          // Create series
          let series = chart.series.push(
            am5percent.PieSeries.new(root, {
              valueField: "value",
              categoryField: "category",
              endAngle: 270
            })
          );
          
          series.states.create("hidden", {
            endAngle: -90
          });
          
          // Set data
          series.data.setAll([{
            category: "PRODUCIDOS",
            value: 501.9
          }, {
            category: "INSUMOS",
            value: 301.9
          },  ]);
          
          series.appear(1000, 100);
    
        // Add legend
        let legend = chart.children.push(am5.Legend.new(root, {}));
        legend.data.setAll(chart.series.values);
    
        // Add cursor
        chart.set("cursor", am5xy.XYCursor.new(root, {}));
    
        return () => {
          root.dispose();
        };
      }, []);
    
      return (
        
        <div id="chartstock" style={{ width: "100%", height: "500px" }}></div>
      );
}

export default Graficostock