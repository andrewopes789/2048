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
              borderWidth: 2
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
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
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
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
};
