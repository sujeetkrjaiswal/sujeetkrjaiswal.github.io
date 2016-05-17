var particles = [];

// color: Math.random() > .5 ? "#000000" : Math.random() > .5 ? "#FF0000" : "#FFFF00"

var dots = Math.floor(window.innerWidth/25);

for( var i = 0; i < dots; i++ ) {
	particles.push({
		x:Math.random()*window.innerWidth,
		y:Math.random()*window.innerHeight,
		vx:Math.random()*0.1,
		vy:-1*Math.random()*0.5,
		history: [],
		size: 2,
		color: "#F9B379"
	});
}

var mouse = { x: 0, y: 0 };

var canvas = document.getElementById('canvasElement');

var points = [],
	width = canvas.width,
	height = canvas.height,
	intsy;

var MAX_DIST_2 = 100*100;
var circRadius = 4;//pix

if (canvas && canvas.getContext) {
	var context = canvas.getContext('2d');
	Initialize();
}

function Initialize() {
	canvas.addEventListener('mousemove', MouseMove, false);
	window.addEventListener('resize', ResizeCanvas, false);
	setInterval( TimeUpdate, 20 );
	context.beginPath();
	ResizeCanvas();
}

function TimeUpdate(e) {

	context.clearRect(0, 0, window.innerWidth, window.innerHeight);
	var i, j, ptCons = new Array(points.length);

	for(i = 0; i < particles.length; i++)
	{
		ptCons[i] = new Array(particles.length);

		for(j = 0; j < particles.length; j++)
		{
			ptCons[i][j] = 0;
		}
	}

	for( var i = 0; i < particles.length; i++ ) {

		particles[i].x += particles[i].vx;
		particles[i].y += particles[i].vy;

		if( particles[i].x > window.innerWidth ) {
			particles[i].vx = -1-Math.random();
		}
		else if ( particles[i].x < 0 ) {
			particles[i].vx = 1+Math.random();
		}
		else {
			particles[i].vx *= 1 + ((Math.random()-0.499)*0.005);
		}

		if( particles[i].y > window.innerHeight ) {
			particles[i].vy = -1-Math.random();
		}
		else if ( particles[i].y < 0 ) {
			particles[i].y = window.innerHeight;
			particles[i].vy = 1;
		}
		else {
			particles[i].vy *= 1 + ((Math.random()-0.499)*0.005);
		}

		context.strokeStyle = particles[i].color;
		context.beginPath();

		var min_dist_2 = MAX_DIST_2;

		particles.forEach(function(pt, j){
			var dist_2 = (Math.pow(pt.x - particles[i].x, 2) + Math.pow(pt.y - particles[i].y, 2));

			if(dist_2 < min_dist_2 && pt != particles[i])
				min_dist_2 = dist_2;

			if(pt == particles[i] || dist_2 > MAX_DIST_2 || ptCons[i][j])
				return;

			context.moveTo(particles[i].x, particles[i].y);
			var dirx = particles[i].x > pt.x ? particles[i].x : pt.x;
			var diry = particles[i].y < pt.y ? particles[i].y : pt.y;
			context.quadraticCurveTo(dirx, diry, pt.x, pt.y);
			context.strokeStyle = 'rgba(249,179,121,' + (1 - dist_2 / MAX_DIST_2) +' )'
			ptCons[i][j] = 1;
			ptCons[j][i] = 1;
		});
		context.stroke();

		var distanceFactor = DistanceBetween( mouse, particles[i] );
		distanceFactor = Math.max( Math.min( 15 - ( distanceFactor / 10 ), 10 ), 1 );

		context.fillStyle = particles[i].color;
		context.beginPath();
		context.arc(particles[i].x,particles[i].y,particles[i].size*distanceFactor,0,Math.PI*2,true);
		context.closePath();
		context.fill();

	}
}

function MouseMove(e) {
	mouse.x = e.layerX;
	mouse.y = e.layerY;
}

function Draw( x, y ) {
	context.strokeStyle = '#ff0000';
	context.lineWidth = 4;
	context.lineTo(x, y);
	context.stroke();
}

function ResizeCanvas(e) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function DistanceBetween(p1,p2) {
	var dx = p2.x-p1.x;
	var dy = p2.y-p1.y;
	return Math.sqrt(dx*dx + dy*dy);
}
