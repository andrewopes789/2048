import $ from 'jquery';
let salestrends = [];

export const fetchAnalytics = (zipCode, year=2017) => (
  $.ajax({
    method: "GET",
    url:
    `https://search.onboard-apis.com/propertyapi/v1.0.0/salestrend/snapshot?geoid=ZI${zipCode}&interval=monthly&startyear=${year}&endyear=${year}&startmonth=january&endmonth=december`,
    headers: {
      apikey: 'df2bd3344e508b7456d06799d8e08f44',
      Accept: 'application/json'
    },
    dataType: 'json',
    success: function (data) {
      console.log('from ajax', data);
      salestrends = data.salestrends;
      console.log('salestrends', salestrends);
    },
    error: 'Unable to fetch data'
  })
);
