
import React from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {

    const state ={
          
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }],
      // , {
      //   name: 'Revenue',
      //   data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      // }, {
      //   name: 'Free Cash Flow',
      //   data: [35, 41, 36, 26, 45, 48, 52, 53, 41] 
      // }
      options: {
        chart: {
          type: 'bar',
          height: 350,
          colors:['#FBA526'],
          zoom: {
            enabled: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
            
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 3.45,
          colors: ['#FBA526','white','#FFFF','#EFFF']
        },
        xaxis: {
          // categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          // title: {
          //   text: '$ (thousands)'
          // }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          // y: {
          //   formatter: function (val) {
          //     return "$ " + val + " thousands"
          //   }
          // }
        }
      },
    
    
    };
    return (
<div id="chart" style={{
  width: '170px'
}}>
  <ReactApexChart  options={state.options} series={state.series} type="bar" height={120} />
</div>
    
    );
}

export default BarChart;