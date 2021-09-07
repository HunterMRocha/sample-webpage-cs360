var table;
var deathByMonth = [0,0,0,0,0,0,0,0,0,0,0,0]
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const SPACING = 50;
var pos;


function preload(){
	table = loadTable('covid.csv', 'csv', 'header'); 
}

function calcDeathByMonth(r){
	let numRows = table.getRowCount();
	for(let r = 0; r < numRows; r++){
		let month = parseInt(table.getString(r, 1))-1;
		let monthDeaths = parseInt(table.getString(r, 4));
		deathByMonth[month] += monthDeaths;
	}

}



function setup() {

	createCanvas(1500, 1200);
	background('lightgray');
	calcDeathByMonth();
	// stroke('yello');
	// strokeWeight(SPACING * 0.8);
	// pos = createVector(0,0);
	// const cv createVector;
	


	var totalDeaths = table.getColumn("Data.Deaths")
		.reduce(function (accu, curr){
			return parseInt(accu) + parseInt(curr);
	});


	
}

function draw() {
	background(230); // Set the background to violet

	let scale = 6;
	textSize(20);
	textStyle(BOLD);
	text("Covid Deaths/Month - Worldwide (Heat map)", width/scale, 100);
	textStyle(NORMAL);

	
}
