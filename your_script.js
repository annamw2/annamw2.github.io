const data = [
  { ID: 1, Name: "John", Team: "Team A" },
  { ID: 2, Name: "Jane", Team: "Team B" },
  { ID: 3, Name: "Mike", Team: "Team A" },
  { ID: 4, Name: "Anna", Team: "Team C" },
  { ID: 5, Name: "John", Team: "Team B" },
  { ID: 6, Name: "John", Team: "Team D" }
];

// Count the occurrences of each name in each team
const teamNameCounts = {};

data.forEach(entry => {
  const team = entry.Team;
  teamNameCounts[team] = (teamNameCounts[team] || 0) + 1;
});

// Set the dimensions of the canvas
const width = 600;
const height = 400;

// Create the SVG canvas
const svg = d3.select("#barGraph")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Create a scale for the x-axis (teams)
const xScale = d3.scaleBand()
  .domain(Object.keys(teamNameCounts))
  .range([0, width])
  .padding(0.1);

// Create a scale for the y-axis (count of names)
const yScale = d3.scaleLinear()
  .domain([0, d3.max(Object.values(teamNameCounts))])
  .range([height, 0]);

// Create the bars
svg.selectAll("rect")
  .data(Object.entries(teamNameCounts))
  .enter()
  .append("rect")
  .attr("x", d => xScale(d[0]))
  .attr("y", d => yScale(d[1]))
  .attr("width", xScale.bandwidth())
  .attr("height", d => height - yScale(d[1]))
  .attr("fill", "steelblue");

// Add x-axis
svg.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(xScale));

// Add y-axis
svg.append("g")
  .call(d3.axisLeft(yScale));
