import $ from 'jquery';

export const fetchAnalytics = (zipCode, year=2017) => (
  $.ajax({
    method: "GET",
    url:
    `https://search.onboard-apis.com/propertyapi/v1.0.0/salestrend/snapshot?geoid=ZI${zipCode}&interval=monthly&startyear=${year}&endyear=${year}&startmonth=january&endmonth=december`,
    headers: {
      apikey: '2fd32fee9e14d8088d4675daa34e1332',
      Accept: 'application/json'
    }
  })
);
