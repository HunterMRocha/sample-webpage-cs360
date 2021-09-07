var table;
var deathByMonth = [0,0,0,0,0,0,0,0,0,0,0,0]
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


function preload(){
	table = loadTable('covid.csv', 'csv', 'header'); 
}

function calcDeathByMonth(){
	let numRows = table.getRowCount();
	for(let r = 0; r < numRows; r++){
		let month = parseInt(table.getString(r, 1))-1;
		let monthDeaths = parseInt(table.getString(r, 4));
		deathByMonth[month] += monthDeaths;
	}
	print("Death by month array count: ", deathByMonth);

}



function setup() {

	createCanvas(1500, 1200);
	calcDeathByMonth();


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
	text("Covid Deaths By Month - Worldwide", width/scale, 100);
	textStyle(NORMAL);

	// draw bars and dates
	fill(150, 10, 50);
	translate(100, 150);
	let max = 200000;
	for(var i = 0; i < 12; i++){
		text(months[i], i*50, 570);
		text(max, -65, 45*i);
		max -= 16667;
		rect(i*50, 550, 20, -deathByMonth[i]/355);
		fill(100, 130, 170);
		line(1, 45*i, 610, 45*i);
		fill(150, 10, 50);

	}
}
