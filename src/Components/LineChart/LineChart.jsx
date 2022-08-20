import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {

    const state ={
            series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }],
            options: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              title: {
                align: 'left'
              },
              grid: {
                row: {
                  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                  opacity: 0
                },
              },
              xaxis: {
                // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              }
            },
          
          
          };
   
          return (
            

      <div id="chart" style={{
        width: '170px'
      }}>
  <ReactApexChart options={state.options} series={state.series} type="line" height={120} />
</div>
            );
        
        }

 export default LineChart;   