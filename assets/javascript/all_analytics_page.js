export const allAnalyticsPage = `
<div class="all-analytics page">
  <div class="filters-container">
    <div class="filters">
      <form>

        <div class="filter-criteria">
          <span>Analytics</span>
          <label>
            <input
            type="checkbox"
            name="analytics"
            value="homesalecount">
            Number of Sales
          </label>

          <label>
            <input
            type="checkbox"
            name="analytics"
            value="avgsaleprice">
            Average Sale Price
          </label>

          <label>
            <input
            type="checkbox"
            name="analytics"
            value="medsaleprice">
            Median Sale Price
          </label>

          <label>
            <input
              class="year-input"
              type="text"
              name="year"
              placeholder="Enter a year after 2010..."
            />
          </label>
        </div>

        <button>Clear Filters</button>

      </form>

    </div>

    <div id='graph' class="analytics-graph">
      <canvas id='analyticsLineChart' height='500' width='800'></canvas>
    </div>
  </div>
</div>
`;
