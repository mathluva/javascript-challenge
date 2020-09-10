// from data.js
var tableData = data;
//reference the table body from html file
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
