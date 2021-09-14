var table;
var industries = {};
var bill_loc = {}
var sortedBillionaires = {};

function preload(){
	table = loadTable('billionaires.csv', 'csv', 'header'); 
}

function processData(){
	let rct = table.getRowCount();
	let cct = table.getColumnCount();
 
	// loop through all industry types
	for(let i = 0; i < rct; i++){
		// count up every industry
		let industry = table.get(i,18);
		let addedAlready = industries[industry];
		if(!addedAlready){
			industries[industry] = 1
		}else{
			industries[industry] += 1
		}

		// billionaires per country
		let country = table.get(i, 13);
		let addedCountry = bill_loc[country];
		if(!addedCountry){
			bill_loc[country] = 1
		}else{
			bill_loc[country] += 1
		}
	}
	industries["0"]

	// sort billionaires
	sortedBillionaires = Object.fromEntries(
		Object.entries(bill_loc).sort((a,b) => b[1]-a[1])
	);
	print("Industries: ", industries);
	print("country count: ", bill_loc);
	console.log("sorted: ", sortedBillionaires);
}

function histogram(){
	// Histogram - Worth 75% 
	let billCT = Object.values(sortedBillionaires);
	let billCTY = Object.keys(sortedBillionaires);
	fill(30, 30, 30);
	textSize(22);
	text("Histogram: # Of Billionaires - 1:1 Ratio", 220, 50);
	fill(300, 100, 100);
	let barWidth = 35; 
	let filter = 8;
	let xpos = 200;
	let ypos = 400;
	translate(610, -150);
	rotate(radians(90));
	for(let i = 1; i < filter; i++){
		textSize(14);
		rect(xpos+(i*45), ypos, barWidth, -billCT[i], 5);
		rotate(radians(-90));
		fill(30, 30, 30);
		text(billCTY[i], xpos-770, ypos+(i*45)-180);
		textSize(12);
		fill(255,255,255);
		text(billCT[i], xpos-597, ypos+(i*45)-180);
		fill(300, 100, 100);
		rotate(radians(90));

	}
}

function boxplot(){
	// Box Plot - Worth 85%
}

function stripchart(){
	// Strip Chart - Worth 95%
}

function ECDF(){
	// ECDF - Worth 100%
}


//runs once when program starts
function setup(){
	createCanvas(1400,500); //width,height in pixels
	processData();
	
}
  
//run continuously after setup
function draw(){
	//rendering loop
	background(230);
	histogram();
}