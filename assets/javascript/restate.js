import { fetchAnalytics } from './api_util/fetch_data';
import $ from 'jquery';

import {
  updatePriceChart,
  updateCountChart
} from './chart';

let zipInput = document.getElementById('zipInput');
let zipSubmit = document.getElementById('zipSubmit');

let selectArea = document.getElementById('selectArea');
let allAnalytics = document.getElementById('allAnalytics');
let header = document.getElementById('header');

let analyticsIdentifier = document.getElementById('analytics-identifier');

let zipError = document.getElementById('zipError');

let numOfSales = [[], [], [], [], [], [], [], [], [], [], []];
let avgSalePrice = [[], [], [], [], [], [], [], [], [], [], []];
let medSalePrice = [[], [], [], [], [], [], [], [], [], [], []];
let xAxis = [[], [], [], [], [], [], [], [], [], [], []];

let currYear;
let currZip;

zipSubmit.addEventListener('click', function(e) {
  e.preventDefault();
  if (parseInt(zipInput.value) < 9999) {
    zipError.innerHTML = 'Please input a valid zipcode';
  } else if (zipInput.value !== '') {
    zipError.innerHTML = null;
    fetchAnalytics(zipInput.value).then( data => {
        for (var i = 0; i < data.salestrends.length; i++) {
          if(data.salestrends[i].daterange.start.includes('January')) {
            xAxis[0] = (data.salestrends[i].daterange.start);
            numOfSales[0] = (data.salestrends[i].SalesTrend.homesalecount);
            avgSalePrice[0] = (data.salestrends[i].SalesTrend.avgsaleprice);
            medSalePrice[0] = (data.salestrends[i].SalesTrend.medsaleprice);
          } else if (data.salestrends[i].daterange.start.includes('February')) {
            xAxis[1] = (data.salestrends[i].daterange.start);
            numOfSales[1] = (data.salestrends[i].SalesTrend.homesalecount);
            avgSalePrice[1] = (data.salestrends[i].SalesTrend.avgsaleprice);
            medSalePrice[1] = (data.salestrends[i].SalesTrend.medsaleprice);
          } else if (data.salestrends[i].daterange.start.includes('March')) {
            xAxis[2] = (data.salestrends[i].daterange.start);
            numOfSales[2] = (data.salestrends[i].SalesTrend.homesalecount);
            avgSalePrice[2] = (data.salestrends[i].SalesTrend.avgsaleprice);
            medSalePrice[2] = (data.salestrends[i].SalesTrend.medsaleprice);
          } else if (data.salestrends[i].daterange.start.includes('April')) {
            xAxis[3] = (data.salestrends[i].daterange.start);
            numOfSales[3] = (data.salestrends[i].SalesTrend.homesalecount);
            avgSalePrice[3] = (data.salestrends[i].SalesTrend.avgsaleprice);
            medSalePrice[3] = (data.salestrends[i].SalesTrend.medsaleprice);
          } else if (data.salestrends[i].daterange.start.includes('May')) {
            xAxis[4] = (data.salestrends[i].daterange.start);
            numOfSales[4] = (data.salestrends[i].SalesTrend.homesalecount);
            avgSalePrice[4] = (data.salestrends[i].SalesTrend.avgsaleprice);
            medSalePrice[4] = (data.salestrends[i].SalesTrend.medsaleprice);
          } else if (data.salestrends[i].daterange.start.includes('June')) {
            xAxis[5] = (data.salestrends[i].daterange.start);
            numOfSales[5] = (data.salestrends[i].SalesTrend.homesalecount);
            avgSalePrice[5] = (data.salestrends[i].SalesTrend.avgsaleprice);
            medSalePrice[5] = (data.salestrends[i].SalesTrend.medsaleprice);
          } else if (data.salestrends[i].daterange.start.includes('July')) {
            xAxis[6] = (data.salestrends[i].daterange.start);
            numOfSales[6] = (data.salestrends[i].SalesTrend.homesalecount);
            avgSalePrice[6] = (data.salestrends[i].SalesTrend.avgsaleprice);
            medSalePrice[6] = (data.salestrends[i].SalesTrend.medsaleprice);
          } else if (data.salestrends[i].daterange.start.includes('August')) {
            xAxis[7] = (data.salestrends[i].daterange.start);
            numOfSales[7] = (data.salestrends[i].SalesTrend.homesalecount);
            avgSalePrice[7] = (data.salestrends[i].SalesTrend.avgsaleprice);
            medSalePrice[7] = (data.salestrends[i].SalesTrend.medsaleprice);
          } else if (data.salestrends[i].daterange.start.includes('September')) {
            xAxis[8] = (data.salestrends[i].daterange.start);
            numOfSales[8] = (data.salestrends[i].SalesTrend.homesalecount);
            avgSalePrice[8] = (data.salestrends[i].SalesTrend.avgsaleprice);
            medSalePrice[8] = (data.salestrends[i].SalesTrend.medsaleprice);
          } else if (data.salestrends[i].daterange.start.includes('October')) {
            xAxis[9] = (data.salestrends[i].daterange.start);
            numOfSales[9] = (data.salestrends[i].SalesTrend.homesalecount);
            avgSalePrice[9] = (data.salestrends[i].SalesTrend.avgsaleprice);
            medSalePrice[9] = (data.salestrends[i].SalesTrend.medsaleprice);
          } else if (data.salestrends[i].daterange.start.includes('November')) {
            xAxis[10] = (data.salestrends[i].daterange.start);
            numOfSales[10] = (data.salestrends[i].SalesTrend.homesalecount);
            avgSalePrice[10] = (data.salestrends[i].SalesTrend.avgsaleprice);
            medSalePrice[10] = (data.salestrends[i].SalesTrend.medsaleprice);
          } else if (data.salestrends[i].daterange.start.includes('December')) {
            xAxis[11] = (data.salestrends[i].daterange.start);
            numOfSales[11] = (data.salestrends[i].SalesTrend.homesalecount);
            avgSalePrice[11] = (data.salestrends[i].SalesTrend.avgsaleprice);
            medSalePrice[11] = (data.salestrends[i].SalesTrend.medsaleprice);
          }
        }

        xAxis = [].concat.apply([], xAxis);
        numOfSales = [].concat.apply([], numOfSales);
        avgSalePrice = [].concat.apply([], avgSalePrice);
        medSalePrice = [].concat.apply([], medSalePrice);

        updatePriceChart(xAxis, avgSalePrice, medSalePrice);
        updateCountChart(xAxis, numOfSales);

        currZip = data.salestrends[0].location.geoID
        .slice(data.salestrends[0].location.geoID.length - 5);
        currYear = xAxis[0].slice(xAxis[0].length-5);

        analyticsIdentifier.innerHTML =
        `Analytics for ${currZip} in ${currYear}`;

        allAnalytics.style.display = 'flex';
        selectArea.style.display = 'none';
        header.style.display = 'flex';
      });
    }
});

document.addEventListener('DOMContentLoaded', function() {
  allAnalytics.style.display = 'none';
  header.style.display = 'none';
  cbAvgSalePrice.setAttribute('checked', 'true');
  cbMedSalePrice.setAttribute('checked', 'true');
});

let newSearch = document.getElementById('newSearch');

newSearch.addEventListener('click', function(e) {
  e.preventDefault();
  allAnalytics.style.display = 'none';
  selectArea.style.display = 'flex';
  header.style.display = 'none';
});

let newYear = document.getElementById('newYear');
let yearInput = document.getElementById('yearInput');

newYear.addEventListener('click', function(e) {
  e.preventDefault();
  if (yearInput.value < 2011 || yearInput.value > 2018) {
    yearInput
    .setAttribute('value', 'Please enter a year between 2011 and 2018');
  } else if (zipInput.value !== '' && yearInput.value !== '') {
    fetchAnalytics(zipInput.value, yearInput.value).then( data => {
      for (var i = 0; i < data.salestrends.length; i++) {
        if(data.salestrends[i].daterange.start.includes('January')) {
          xAxis[0] = (data.salestrends[i].daterange.start);
          numOfSales[0] = (data.salestrends[i].SalesTrend.homesalecount);
          avgSalePrice[0] = (data.salestrends[i].SalesTrend.avgsaleprice);
          medSalePrice[0] = (data.salestrends[i].SalesTrend.medsaleprice);
        } else if (data.salestrends[i].daterange.start.includes('February')) {
          xAxis[1] = (data.salestrends[i].daterange.start);
          numOfSales[1] = (data.salestrends[i].SalesTrend.homesalecount);
          avgSalePrice[1] = (data.salestrends[i].SalesTrend.avgsaleprice);
          medSalePrice[1] = (data.salestrends[i].SalesTrend.medsaleprice);
        } else if (data.salestrends[i].daterange.start.includes('March')) {
          xAxis[2] = (data.salestrends[i].daterange.start);
          numOfSales[2] = (data.salestrends[i].SalesTrend.homesalecount);
          avgSalePrice[2] = (data.salestrends[i].SalesTrend.avgsaleprice);
          medSalePrice[2] = (data.salestrends[i].SalesTrend.medsaleprice);
        } else if (data.salestrends[i].daterange.start.includes('April')) {
          xAxis[3] = (data.salestrends[i].daterange.start);
          numOfSales[3] = (data.salestrends[i].SalesTrend.homesalecount);
          avgSalePrice[3] = (data.salestrends[i].SalesTrend.avgsaleprice);
          medSalePrice[3] = (data.salestrends[i].SalesTrend.medsaleprice);
        } else if (data.salestrends[i].daterange.start.includes('May')) {
          xAxis[4] = (data.salestrends[i].daterange.start);
          numOfSales[4] = (data.salestrends[i].SalesTrend.homesalecount);
          avgSalePrice[4] = (data.salestrends[i].SalesTrend.avgsaleprice);
          medSalePrice[4] = (data.salestrends[i].SalesTrend.medsaleprice);
        } else if (data.salestrends[i].daterange.start.includes('June')) {
          xAxis[5] = (data.salestrends[i].daterange.start);
          numOfSales[5] = (data.salestrends[i].SalesTrend.homesalecount);
          avgSalePrice[5] = (data.salestrends[i].SalesTrend.avgsaleprice);
          medSalePrice[5] = (data.salestrends[i].SalesTrend.medsaleprice);
        } else if (data.salestrends[i].daterange.start.includes('July')) {
          xAxis[6] = (data.salestrends[i].daterange.start);
          numOfSales[6] = (data.salestrends[i].SalesTrend.homesalecount);
          avgSalePrice[6] = (data.salestrends[i].SalesTrend.avgsaleprice);
          medSalePrice[6] = (data.salestrends[i].SalesTrend.medsaleprice);
        } else if (data.salestrends[i].daterange.start.includes('August')) {
          xAxis[7] = (data.salestrends[i].daterange.start);
          numOfSales[7] = (data.salestrends[i].SalesTrend.homesalecount);
          avgSalePrice[7] = (data.salestrends[i].SalesTrend.avgsaleprice);
          medSalePrice[7] = (data.salestrends[i].SalesTrend.medsaleprice);
        } else if (data.salestrends[i].daterange.start.includes('September')) {
          xAxis[8] = (data.salestrends[i].daterange.start);
          numOfSales[8] = (data.salestrends[i].SalesTrend.homesalecount);
          avgSalePrice[8] = (data.salestrends[i].SalesTrend.avgsaleprice);
          medSalePrice[8] = (data.salestrends[i].SalesTrend.medsaleprice);
        } else if (data.salestrends[i].daterange.start.includes('October')) {
          xAxis[9] = (data.salestrends[i].daterange.start);
          numOfSales[9] = (data.salestrends[i].SalesTrend.homesalecount);
          avgSalePrice[9] = (data.salestrends[i].SalesTrend.avgsaleprice);
          medSalePrice[9] = (data.salestrends[i].SalesTrend.medsaleprice);
        } else if (data.salestrends[i].daterange.start.includes('November')) {
          xAxis[10] = (data.salestrends[i].daterange.start);
          numOfSales[10] = (data.salestrends[i].SalesTrend.homesalecount);
          avgSalePrice[10] = (data.salestrends[i].SalesTrend.avgsaleprice);
          medSalePrice[10] = (data.salestrends[i].SalesTrend.medsaleprice);
        } else if (data.salestrends[i].daterange.start.includes('December')) {
          xAxis[11] = (data.salestrends[i].daterange.start);
          numOfSales[11] = (data.salestrends[i].SalesTrend.homesalecount);
          avgSalePrice[11] = (data.salestrends[i].SalesTrend.avgsaleprice);
          medSalePrice[11] = (data.salestrends[i].SalesTrend.medsaleprice);
        }
      }
      updatePriceChart([], [], []);
      updateCountChart([], []);

      xAxis = [].concat.apply([], xAxis);
      numOfSales = [].concat.apply([], numOfSales);
      avgSalePrice = [].concat.apply([], avgSalePrice);
      medSalePrice = [].concat.apply([], medSalePrice);

      updatePriceChart(xAxis, avgSalePrice, medSalePrice);
      updateCountChart(xAxis, numOfSales);

      currZip = data.salestrends[0].location.geoID
      .slice(data.salestrends[0].location.geoID.length - 5);
      currYear = xAxis[0].slice(xAxis[0].length-5);

      analyticsIdentifier.innerHTML =
      `Analytics for ${currZip} in ${currYear}`;
    });
}});

let cbAvgSalePrice = document.getElementById('cbAvgSalePrice');
let cbMedSalePrice = document.getElementById('cbMedSalePrice');

cbAvgSalePrice.addEventListener('change', () => {
  if (cbAvgSalePrice.checked && !cbMedSalePrice.checked) {
    updatePriceChart(xAxis, avgSalePrice, []);
  } else if (!cbAvgSalePrice.checked && cbMedSalePrice.checked) {
    updatePriceChart(xAxis, [], medSalePrice);
  } else if (!cbAvgSalePrice.checked && !cbMedSalePrice.checked) {
    updatePriceChart(xAxis, [], []);
  } else {
    updatePriceChart(xAxis, avgSalePrice, medSalePrice);
  }
});

cbMedSalePrice.addEventListener('change', () => {
  if (cbAvgSalePrice.checked && !cbMedSalePrice.checked) {
    updatePriceChart(xAxis, avgSalePrice, []);
  } else if (!cbAvgSalePrice.checked && cbMedSalePrice.checked) {
    updatePriceChart(xAxis, [], medSalePrice);
  } else if (!cbAvgSalePrice.checked && !cbMedSalePrice.checked) {
    updatePriceChart(xAxis, [], []);
  } else {
    updatePriceChart(xAxis, avgSalePrice, medSalePrice);
  }
});
