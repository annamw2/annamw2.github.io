//const width = 600;
//const height = 400;
//const margin = { top: 20, right: 20, bottom: 50, left: 50 };
//const graphWidth = width - margin.left - margin.right;
//const graphHeight = height - margin.top - margin.bottom;
// https://github.com/annamw2/ProjectData/blob/3c964f46f1f0ce80a813135e714460b2e1785429/Athlete.xlsx
// Create the SVG canvas
//const svg = d3.select("#scatterPlot")
//  .append("svg")
 // .attr("width", width)
 // .attr("height", height);

// Fetch data from the URL source
//const dataURL = "https://gist.githubusercontent.com/annamw2/859de9d40a62a5709a893d1949846c9c/raw/37aafc2f7ed404b56fb7b6ccaf7064c7823f267c/Athlete"; // Replace with the actual URL source
data_raw = d3.csv(
  "https://gist.githubusercontent.com/annamw2/859de9d40a62a5709a893d1949846c9c/raw/37aafc2f7ed404b56fb7b6ccaf7064c7823f267c/Athlete"
)
barcode = {
  const svg = d3
    .create("svg")
    .attr("viewBox", [0, 0, width, 200])
    .style("overflow", "visible");

  svg
    .selectAll("rect")
    .data(data_raw)
    .join("rect")
    .attr("x", (d) => d.Age)
    .attr("y", 0)
    .attr("width", 0.3)
    .attr("height", 200);

  return svg.node();
}
