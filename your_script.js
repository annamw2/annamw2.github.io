const data = [
  { country: "Country 1", value: 100 },
  { country: "Country 2", value: 150 },
  { country: "Country 3", value: 200 },
  // Add more data points here as needed
];

// Set the dimensions of the canvas
const width = 600;
const height = 400;
const margin = { top: 20, right: 20, bottom: 50, left: 50 };
const graphWidth = width - margin.left - margin.right;
const graphHeight = height - margin.top - margin.bottom;

// Create the SVG canvas
const svg = d3.select("#barGraph")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Create a scale for the x-axis
const xScale = d3.scaleBand()
  .domain(data.map(d => d.country))
  .range([margin.left, width - margin.right])
  .paddingInner(0.1);

// Create a scale for the y-axis
const yScale = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)])
  .range([height - margin.bottom, margin.top]);

// Create the bars
svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", d => xScale(d.country))
  .attr("y", d => yScale(d.value))
  .attr("width", xScale.bandwidth())
  .attr("height", d => height - margin.bottom - yScale(d.value))
  .attr("fill", "steelblue");