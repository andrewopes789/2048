$(function () {
  let filters = {};

  const checkboxes = $('.all-analytics input[type=checkbox]');

  checkboxes.click(function () {
    let that = $(this);
    let specName = that.attr('name');

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

  function renderErrorPage() {
    let page = $('.error');
    page.addClass('visible');
  }

  function createQueryHash(queryFilters) {
    if(!$.isEmptyObject(queryFilters)) {
      window.location.hash = '#filter/' + JSON.stringify(queryFilters);
    } else {
      window.location.hash = '#';
    }
  }
});
