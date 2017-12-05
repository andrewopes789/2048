import { fetchAnalytics } from './api_util/fetch_data';

let zipInput = document.getElementById('zipInput');
let zipSubmit = document.getElementById('zipSubmit');

let selectArea = document.getElementById('selectArea');
let allAnalytics = document.getElementById('allAnalytics');
let header = document.getElementById('header');


zipSubmit.addEventListener('click', function(e) {
  e.preventDefault();

  if (zipInput.value !== '') {
    let result = fetchAnalytics(zipInput.value);
    console.log('result', result);
    console.log('result.salestrends',result.salestrends);
    allAnalytics.style.display = 'flex';
    selectArea.style.display = 'none';
    header.style.display = 'flex';
  }
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
