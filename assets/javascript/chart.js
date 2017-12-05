const CHART = document.getElementById('analyticsLineChart');

let analyticsLineChart = new Chart(CHART, {
  type: 'line',
  data: {
        labels: ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: 'Number of Sales',
            fill: false,
            data: [12, 19, 3, 5, 2, 3, 14, 1, 20, 25, 10, 11],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }, {
            label: 'Average Sale Price',
            fill: false,
            data: [20, 1, 5, 12, 8, 9, 10, 10, 20, 2, 5, 11],
            backgroundColor: [
                'rgba(45, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(45, 206, 86, 0.2)',
                'rgba(75, 45, 45, 0.2)',
                'rgba(153, 102, 45, 0.2)',
                'rgba(45, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(78,99,45,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(79, 206, 22, 1)',
                'rgba(75, 45, 45, 1)',
                'rgba(153, 25, 79, 1)',
                'rgba(79, 159, 64, 1)'
            ],
            borderWidth: 2
        }, {
            label: 'Median Sale Price',
            fill: false,
            data: [1, 10, 9, 8, 7, 14, 12, 12, 5, 16, 10, 3],
            backgroundColor: [
                'rgba(55, 99, 56, 0.2)',
                'rgba(54, 25, 57, 0.2)',
                'rgba(44, 45, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(44, 3, 44, 0.2)',
                'rgba(34, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(55,99,132,1)',
                'rgba(54, 45, 235, 1)',
                'rgba(55, 206, 86, 1)',
                'rgba(75, 33, 192, 1)',
                'rgba(153, 102, 55, 1)',
                'rgba(55, 159, 64, 1)'
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
