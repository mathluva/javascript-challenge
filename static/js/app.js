// from data.js
var tableData = data;

var tbody = d3.select("tbody")

// Console.log the  data from data.js
    console.log(data);

//Use d3 to update each cell's text with values 

data.forEach(function(ufodata) {
    console.log(ufodata);
    var row = tbody.append("tr");
    
    Object.entries(ufodata).forEach(function([key, value]) {
   console.log(key, value);

   // Append a cell to the row for each value

var cell = row.append("td");
    cell.text(value);
 });
});
// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

// Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(i => i.datetime === inputValue);

console.log(filteredData);
var list = d3.select(".summary");


  // append stats to the list
  list.append(filteredData);
};
