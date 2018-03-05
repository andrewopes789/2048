import $ from 'jquery';

export const fetchAnalytics = (zipCode, year=2017) => (
  $.ajax({
    method: "GET",
    url:
    `https://search.onboard-apis.com/propertyapi/v1.0.0/salestrend/snapshot?geoid=ZI${zipCode}&interval=monthly&startyear=${year}&endyear=${year}&startmonth=january&endmonth=december`,
    headers: {
      apikey: 'ce18043e0f26fce1faddaf0253da4705',
      Accept: 'application/json'
    }
  })
);
