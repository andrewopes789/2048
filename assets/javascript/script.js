$(function () {

  let area = [];
  let filters = {};

  const checkboxes = $(".all-analytics input[type=checkbox]");

  checkboxes.click(function () {
    let that = $(this);
    let specName = that.attr("name");

    if(that.is(":checked")) {

      if(!(filters[specName] && filters[specName].length)) {
        filters[specName] = [];
      }

      filters[specName].push(that.val());

      createQueryHash(filters);

    }

    if(!that.is(":checked")) {

      if(filters[specName] && filters[specName].length
        && (filters[specName].indexOf(that.val()) !== -1 )) {

          let index = filters[specName].indexOf(that.val());

          filters[specName].splice(index, 1);

          if(!filters[specName].length) {
            delete filters[specName];
          }
        }

      createQueryHash(filters);
    }
  });

  $(".filters button").click(function(e) {
    e.preventDefault();
    window.location.hash = "#";
  });
  //
  // let selectArea = $('.select-area');
  //
  // selectArea.on('click', function (e) {
  //   if (selectArea.hasClass('visible')) {
  //     let clicked = $(e.target);
  //   }
  // });

  $(window).on('hashchange', function() {
    render(decodeURI(window.location.hash));
  });

  function render(url) {
    let temp = url.split("/")[0];

    $(".main-content .page").removeClass("visible");

    let map = {
      '': function() {
        renderAreaPage();
      },
      '#chart': function() {

        filters = {};
        checkboxes.prop("checked", false);

        renderAnalyticsChart(area);
      },

      '#filter': function() {
        url = url.split("#filter/")[1].trim();

        try {
          filters = JSON.parse(url);
        }

        catch(err) {
          window.location.hash="#";
          return;
        }

        renderFilterResults(filters, area);
      }
    };

    if(map[temp]){
      map[temp]();
    } else {
      renderErrorPage();
    }
  }

  function renderAreaPage() {
    let page = $('.select-area');
  }

  function renderAnalyticsChart(inputArea) {
    let page = $('.all-analytics');
  }

  function renderFilterResults(inputFilters, inputArea){
    let criteria = ['analytics', 'property-type'];
    let results = [];
    let isFiltered = false;

    checkboxes.prop("checked", false);

    criteria.forEach(function (criterion) {
      if(filters[criterion] && filters[criterion].length){
        if(isFiltered){
          area = results;
          results = [];
        }

      }
    });

    renderAnalyticsChart(inputArea);
  }

  function renderErrorPage() {
    let page = $(".error");
    page.addClass("visible");
  }

  function createQueryHash(queryFilters) {
    if(!$.isEmptyObject(queryFilters)) {
      window.location.hash = "#filter/" + JSON.stringify(queryFilters);
    } else {
      window.location.hash = "#";
    }
  }

});
