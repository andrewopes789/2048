const pricesChart = document.getElementById('analyticsLineChart');
const salesCountChart = document.getElementById('salesCountChart');

export const updatePriceChart = (xAxis, avgSalePrice, medSalePrice) => {
  new Chart(pricesChart, {
    type: 'line',
    data: {
          labels: xAxis,
          datasets: [{
              label: 'Average Sale Price',
              fill: false,
              data: avgSalePrice,
              backgroundColor: [
                  'rgba(102, 153, 255, 0.2)'
              ],
              borderColor: [
                  'rgba(102, 153, 255, 1)'
              ],
              borderWidth: 2,
              pointHoverBackgroundColor: [
                'rgba(0, 0, 204, 0.2)'
              ],
              pointHoverBorderColor: [
                'rgba(0, 0, 204, 1)'
              ]
          }, {
              label: 'Median Sale Price',
              fill: false,
              data: medSalePrice,
              backgroundColor: [
                  'rgba(255, 0, 0, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 0, 0, 1)'
              ],
              borderWidth: 2,
              pointHoverBackgroundColor: [
                'rgba(128, 0, 0, 0.2)'
              ],
              pointHoverBorderColor: [
                'rgba(128, 0, 0, 1)'
              ]
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:false
                  }
              }]
          }
      }
  });
};

export const updateCountChart = (xAxis, numOfSales) => {
  new Chart(salesCountChart, {
    type: 'line',
    data: {
          labels: xAxis,
          datasets: [{
              label: 'Number of Sales',
              fill: false,
              data: numOfSales,
              backgroundColor: [
                  'rgba(51, 204, 51, 0.2)'
              ],
              borderColor: [
                  'rgba(51, 204, 51, 1)'
              ],
              borderWidth: 2,
              pointHoverBackgroundColor: [
                'rgba(51, 153, 102, 0.2)'
              ],
              pointHoverBorderColor: [
                'rgba(51, 153, 102, 1)'
              ]
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:false
                  }
              }]
          }
      }
  });
};
