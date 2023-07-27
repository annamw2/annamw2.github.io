const width = 600;
const height = 400;
const margin = { top: 20, right: 20, bottom: 50, left: 50 };
const graphWidth = width - margin.left - margin.right;
const graphHeight = height - margin.top - margin.bottom;
// https://github.com/annamw2/ProjectData/blob/3c964f46f1f0ce80a813135e714460b2e1785429/Athlete.xlsx
// Create the SVG canvas
const svg = d3.select("#scatterPlot")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Fetch data from the URL source
const dataURL = "https://gist.githubusercontent.com/annamw2/859de9d40a62a5709a893d1949846c9c/raw/37aafc2f7ed404b56fb7b6ccaf7064c7823f267c/Athlete"; // Replace with the actual URL source
d3.json(dataURL)
  .then(data => {
    // Assuming the fetched data is an array of objects with 'Age' and 'Height' properties

    // Create a scale for the x-axis (Age)
    const xScale = d3.scaleLinear()
      .domain(d3.extent(data, d => d.Age)) // Auto-scale to the min and max Age values
      .range([margin.left, width - margin.right]);

    // Create a scale for the y-axis (Height)
    const yScale = d3.scaleLinear()
      .domain(d3.extent(data, d => d.Height)) // Auto-scale to the min and max Height values
      .range([height - margin.bottom, margin.top]);

    // Create the scatter plot points
    svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", d => xScale(d.Age))
      .attr("cy", d => yScale(d.Height))
      .attr("r", 5)
      .attr("fill", "steelblue");
    
    // Add x-axis
    svg.append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    // Add y-axis
    svg.append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale));
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

