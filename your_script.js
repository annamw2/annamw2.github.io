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
//const data_raw =
//d3.csv(dataURL)
data = d3.csv(
  "https://gist.githubusercontent.com/annamw2/859de9d40a62a5709a893d1949846c9c/raw/37aafc2f7ed404b56fb7b6ccaf7064c7823f267c/Athlete"
)
  // Create a scale for the x-axis (using index for simplicity)
  const xScale = d3.scaleBand()
    .domain(data.map((d, i) => i))
    .range([0, width])
    .padding(0.1);

  // Create a scale for the y-axis (using the "Height" field)
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => +d.Height)])
    .range([height, 0]);

  // Create the bars
  svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", 1)
    .attr("y",2)
    .attr("width",1)
    .attr("height", 2)
    .attr("fill", "steelblue");
