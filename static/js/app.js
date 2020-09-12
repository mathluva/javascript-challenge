// from data.js
var tableData = data;

var tbody = d3.select("tbody")

// Console.log the  data from data.js
    //console.log(data);

//Use d3 to update each cell's text with values 
function ufo(data){
  data.forEach(function(ufodata) {
      //console.log(ufodata);
      var row = tbody.append("tr");
      
      Object.entries(ufodata).forEach(function([key, value]) {
    //console.log(key, value);

    // Append a cell to the row for each value

    var cell = row.append("td");
    cell.text(value);
  });
  });
};
ufo(tableData);
// Select the button
var button = d3.select("#filter-btn");

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
    // Get the value property of the input element
  var inputElement = d3.select("#datetime");
  var inputCity = d3.select("#city").property("value");
  var inputState = d3.select("#state").property("value");
  var inputCountry = d3.select("#country").property("value");
  var inputShape = d3.select("#shape").property("value");

  //print input value in console log
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);
  
//filtered data
  var filteredData = tableData.filter(i => i.datetime === inputValue);
  var filteredCity = tableData.filter(i => i.city===inputCity);
  var filteredState = tableData.filter(i => i.state===inputState);
  var filteredCountry = tableData.filter(i => i.country===inputCountry);
  var filteredShape = tableData.filter(i =>i.shape===inputShape);


  console.log(filteredData);
  //clear table body
  tbody.html(""); 
//print only filtered data
  ufo(filteredData);
  ufo(filteredCity);
  ufo(filteredState);
  ufo(filteredCountry);
  ufo(filteredShape);
  };

