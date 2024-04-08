
      
        var options = {
            series: [60],
            chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '60',
              }
            },
          },
          labels: ['Total'],
          };
  
          var chart = new ApexCharts(document.querySelector("#chart_round"), options);
          chart.render();
        