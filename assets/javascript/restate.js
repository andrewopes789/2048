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

let numOfSales = [];
let avgSalePrice = [];
let medSalePrice = [];
let xAxis = [];

zipSubmit.addEventListener('click', function(e) {
  e.preventDefault();
  if (zipInput.value !== '') {
    fetchAnalytics(zipInput.value).then( data => {
        console.log(data.salestrends[0].daterange.start);
        for (var i = 0; i < data.salestrends.length; i++) {
          xAxis.push(data.salestrends[i].daterange.start);
          numOfSales.push(data.salestrends[i].SalesTrend.homesalecount);
          avgSalePrice.push(data.salestrends[i].SalesTrend.avgsaleprice);
          medSalePrice.push(data.salestrends[i].SalesTrend.medsaleprice);
        }
        console.log(xAxis);
        console.log(numOfSales);
        console.log(avgSalePrice);
        console.log(medSalePrice);
        updatePriceChart(xAxis, avgSalePrice, medSalePrice);
        updateCountChart(xAxis, numOfSales);
      });
    }
    allAnalytics.style.display = 'flex';
    selectArea.style.display = 'none';
    header.style.display = 'flex';
});

document.addEventListener('DOMContentLoaded', function() {
  allAnalytics.style.display = 'none';
  header.style.display = 'none';
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
  if (zipInput.value !== '' && yearInput.value !== '') {
    fetchAnalytics(zipInput.value, yearInput.value).then( data => {
        for (var i = 0; i < data.salestrends.length; i++) {
          xAxis.push(data.salestrends[i].daterange.start);
          numOfSales.push(data.salestrends[i].SalesTrend.homesalecount);
          avgSalePrice.push(data.salestrends[i].SalesTrend.avgsaleprice);
          medSalePrice.push(data.salestrends[i].SalesTrend.medsaleprice);
        }
        updatePriceChart(xAxis, avgSalePrice, medSalePrice);
        updateCountChart(xAxis, numOfSales);
      });
    }
});
