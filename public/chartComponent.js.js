function renderChart(container, data, width, height) {
    const spec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "data": {
          "url": "https://API_URL/v1/chartdata/total-transaction-amount-by-industry-class",
        },
        "encoding": {
          "color": {
            "field": "industry_class_name",
            "title": "Industry Class",
            "type": "nominal"
          },
          "x": {
            "field": "data_date",
            "title": "Date",
            "type": "temporal"
          },
          "y": {
            "field": "total_amt",
            "title": "Total Amount",
            "type": "quantitative",
            "scale": {
              "domain": [
                63377236,
                111769084607
              ]
            }
          }
        },
        "mark": "line",
        "title": "Trend of Total Transaction Amount by Industry Class",
        "width": "container",
        "height": "container",
        "autosize": {
          "type": "pad",
          "resize": true,
          "contains": "padding"
        }
      };

    vegaEmbed(container, spec, {actions: false, width, height}).catch(console.error);
}
