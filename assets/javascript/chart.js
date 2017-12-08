const analyticsLineChart = document.getElementById('analyticsLineChart');
const salesCountChart = document.getElementById('salesCountChart');

let pricesChart;
let countChart;

export const updatePriceChart = (xAxis, avgSalePrice, medSalePrice) => {
  if (pricesChart) {
    pricesChart.clear();
  }
  pricesChart = new Chart(analyticsLineChart, {
    type: 'line',
    data: {
          labels: xAxis,
          datasets: [{
              label: 'AVERAGE SALE PRICE',
              fill: false,
              data: avgSalePrice,
              backgroundColor: [
                  'rgba(102, 153, 255, 0.6)'
              ],
              borderColor: [
                  'rgba(102, 153, 255, 1)'
              ],
              borderWidth: 5,
              pointHoverRadius: 8,
              pointHoverBackgroundColor: '#e7e7e7',
              pointHoverBorderColor: '#C1B497'
          }, {
              label: 'MEDIAN SALE PRICE',
              fill: false,
              data: medSalePrice,
              backgroundColor: [
                  'rgba(255, 0, 0, 0.6)'
              ],
              borderColor: [
                  'rgba(255, 0, 0, 1)'
              ],
              borderWidth: 5,
              pointHoverRadius: 8,
              pointHoverBackgroundColor: '#e7e7e7',
              pointHoverBorderColor: '#C1B497'
          }]
      },
      options: {
          legend: {
              labels: {
                  fontColor: '#fff',
                  fontSize: 14
              }
          },
          scales: {
              yAxes: [{
                  gridLines: {
                    color: 'gray'
                  },
                  ticks: {
                    fontColor: '#fff',
                    fontFamily: 'Futura,"Helvetica","Arial",sans-serif',
                    fontSize: 14,
                    padding: 5
                  }
              }],
              xAxes: [{
                ticks: {
                  fontColor: '#fff',
                  fontFamily: 'Futura,"Helvetica","Arial",sans-serif',
                  fontSize: 14,
                  padding: 5
                }
              }]
          },
      }
  });
};

export const updateCountChart = (xAxis, numOfSales) => {
  if (countChart) {
    countChart.clear();
  }
  countChart = new Chart(salesCountChart, {
    type: 'line',
    data: {
          labels: xAxis,
          datasets: [{
              label: 'NUMBER OF SALES',
              fill: false,
              data: numOfSales,
              backgroundColor: [
                  'rgba(51, 204, 51, 0.6)'
              ],
              borderColor: [
                  'rgba(51, 204, 51, 1)'
              ],
              borderWidth: 5,
              pointHoverRadius: 8,
              pointHoverBackgroundColor: '#e7e7e7',
              pointHoverBorderColor: '#C1B497'
          }]
      },
      options: {
          legend: {
              labels: {
                  fontColor: '#fff',
                  fontSize: 14
              }
          },
          scales: {
              yAxes: [{
                  gridLines: {
                    color: 'gray'
                  },
                  ticks: {
                    fontColor: '#fff',
                    fontFamily: 'Futura,"Helvetica","Arial",sans-serif',
                    fontSize: 14,
                    padding: 5
                  }
              }],
              xAxes: [{
                ticks: {
                  fontColor: '#fff',
                  fontFamily: 'Futura,"Helvetica","Arial",sans-serif',
                  fontSize: 14,
                  padding: 5
                }
              }]
          },

      }
  });
};
