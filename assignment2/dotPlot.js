var table;
var deathByMonth = [0,0,0,0,0,0,0,0,0,0,0,0]
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


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

	for(let i = 0; i < 12; i++){
		print(deathByMonth[i] / 1000);
	}
	
	// print("Death by month array count: ", deathByMonth);

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
	text("Covid Deaths/Month - Worldwide (DOT PLOT)", width/scale, 100);
	textStyle(NORMAL);

	// draw bars and dates
	fill(150, 10, 50);
	translate(100, 150);
	let max = 200;

	for(let i = 0; i < 12; i++){

		text(months[i], i*69+17, 650);
		circle(i*70+30, -((deathByMonth[i]/1000 + (i*45))-600),10);
		if(max >= 0){
			text(max + "K", -60, 50*i);
			max -= 18;
		}
	}
}
