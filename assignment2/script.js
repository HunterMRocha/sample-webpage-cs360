let table;
let vals = [];

function preload(){

	table = loadTable('covid.csv', 'csv', 'header'); 

}



function setup() {

	createCanvas(1200, 1200);
	// var numOfRows = table.getRowCount();
	// var numOfCols = table.getColumnCount();
	var numDeaths = table.getColumnCount("Data.Deaths");
	// var numCases = table.getColumn("Data.Cases");
	
	
	
	console.log("number of deaths: ", numDeaths);
	console.log('test');
	// print("number of cases: ", numCases);

}

function draw() {

	background(230); // Set the background to violet
	fill(0);

	// for(var i = 0; i < numOfRows; i++){
	// 	//place years along axis
	// 	text(table.getString(i,0), i*20+60, 420);
	// 	// grab data
	// 	vals[i] = table.getString(i, 1);
	// 	// draw graph
	// 	rect(i * 30 + 60, 400 - vals[i], 20, vals[i]);

	// }

}
