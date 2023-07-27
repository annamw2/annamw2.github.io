
const width = 600;
const height = 400;

// Create the SVG canvas
const svg = d3.select("#barChart")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Fetch data from the URL
const dataURL = "https://flunky.github.io/cars2017.csv"; // Replace with the actual URL
d3.json(dataURL)
  .then(data => {
    // Assuming the fetched data is an array of objects with 'label' and 'value' properties

    // Create a scale for the x-axis
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.label))
      .range([0, width])
      .padding(0.1);

    // Create a scale for the y-axis
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([height, 0]);

    // Create the bars
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d.label))
      .attr("y", d => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - yScale(d.value))
      .attr("fill", "steelblue");
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

