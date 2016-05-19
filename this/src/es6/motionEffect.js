/*
	Expected constructor
	1. Canvas ID :[Mandatory]
	2. Config Obj : [Optional]
		key:value[default] [Explanation]
		{	
			color	: '#F9B379' Color of each Dot
			rad 	: 4			Size of circle radius in pixels
			dis 	: 10000		Square of Max Distance between two points
		}
*/
class ConstalationEffect{
	/*
		List of intance variables used in the class
		1. canvasId
		2. mouse
		3. context
		4. particles


		List of function under this class
		[Format of comment
			X. Functions
				y. helper functions
		]
		1. initializeDefaults
			a. addParticle

	*/
	constructor(canvasId,config){
		this.canvasId = canvasId;
		let {color='#F9B379',rad=4,dis=100} = config;
		this.config = {
			MAX_DIST_SQ:dis*dis,
			DOT_COLOR:color,
			CIR_RAD:rad
		}
		//console.log('config',this.config)
		//Initialize the particles with default position
		this.initializeDefaults();
	}
	//HELPER FUNCTION FOR initializeDefaults
	addParticle(){
		
		/*
			Helper function for initializeDefaults
			This will generate the required data for a single particle

			x: denotes the x coordinate of position
			y: denotes the y coordinate of position
			vx: denotes the velocity in x direction
			vy: denotes the velocity in y direction
			size: denotes the size of the dot in pixel
			color: denotes the color of the dot
			history: array of 
		*/
		return {
			x:Math.random()*window.innerWidth,
			y:Math.random()*window.innerHeight,
			vx:Math.random()*0.1,
			vy:-1*Math.random()*0.5,
			size: 2,
			color: "#F9B379",
			history: []			
		}
	}
	initializeDefaults(){
		/*
		This function does the following
			1. initialize mouse postion coordinate object
			This function will initialize the particles to
			a random position all over the canvas and values
		*/
		//1. Setting up mouse postion object
		this.mouse = {
			x:0, //x-coordinate of mouse position
			y:0  //y-coordinate of mouse position
		}
		//2. Setting up the canvas
		this.canvas = document.getElementById(this.canvasId);
		this.context = this.canvas.getContext('2d');
		this.context.strokeStyle = this.config.DOT_COLOR;
		this.context.fillStyle = this.config.DOT_COLOR;
		//3. Setting up particles
		this.particles = [];
			//set number of particles based on screen size
		let dots = Math.floor(window.innerWidth/25);
			//Adding particles in the array (equal to number of dots)
		for(let i=0;i<dots;i++){
			//get the data for particle add push to particles array
			this.particles.push(this.addParticle())
		}
		//4. Attaching event listners
			//Attach mouse move handler to enlarge dots
		this.canvas.addEventListener('mousemove', (e)=>{this.mouseMoveHandler(e)}, false);
			//Attach window resize handler to adjust size of window
		window.addEventListener('resize', (e)=>{this.resizeHandler(e)}, false);
			//Call a redraw according to frameRate
		//setInterval( ()=>{this.redraw()}, 20 );
		this.redraw();
		this.context.beginPath();
		this.resizeHandler();	

	}
	//HELPER FUNCTION FOR REDRAW -> disBtwSq
	disBtwSq(p1,p2){
		/*	
			Accepts two point object each having x and y coordinate
			Returns square of distance between two given points
			p1 | p2 => {
				x: X-Coordinate of the dot
				y: Y-Coordinate of the dot
			}
			dx = p2.x-p1.x
			dy = p2.y-p1.y
			distance = (dx^2+dx^2)^(1/2)
			^ denotes power [^2 - Square :: ^(1/2) - Square root] 
			will return (dx^2+dx^2)
		*/

		return Math.pow(p2.x-p1.x,2)+Math.pow(p2.y-p1.y,2);
	}
	//HELPER FUNCTION FOR REDRAW
	drawLine(p1,p2){
		/*
			Draw line between the two points.
			The opacity of line is based on the distance between the points
			If the distance is more than the MAX_DIST_SQ, we will not draw
		*/
		let dist = this.disBtwSq(p1,p2);
		if(dist < this.config.MAX_DIST_SQ){
			this.context.moveTo(p1.x,p1.y);
			let dirx = p1.x > p2.x ? p1.x : p2.x;
			let diry = p1.y < p2.y ? p1.y : p2.y;
			/*
				Understanding quadraticCurve
				point1 : x1,y1 [Move to]
				point2 : x2,y2
				control Point : x3,y3 => x3=max(x1,x2) & y3=min(y1,y2)
				quadraticCurveTo(x3,y3,x2,y2)
			*/
			this.context.quadraticCurveTo(dirx,diry,p2.x,p2.y);
			this.context.strokeStyle = 'rgba(249,179,121,' + (1 - dist / this.config.MAX_DIST_SQ) +' )';
		}
				
	}
	drawDot(particle){
		/*
			Draws the dots based on the distance between the mouse
			and the point. It is decided by distFact
			*/
		let disFact = Math.sqrt(this.disBtwSq(this.mouse,particle));
		disFact = Math.max( Math.min( 15 - ( disFact / 10 ), 10 ), 1 );
		
		this.context.beginPath();
		this.context.arc(particle.x,particle.y,particle.size*disFact,0,Math.PI*2)
		this.context.closePath();
		this.context.fill();		
	}
	//HELPER FUNCTION FOR REDRAW -> updateParicle
	updateParticle(p,maxWidth,maxHeight){
		/*
			Takes the following :
			particle object : read and update in place
			maxWidth : max boundary for particle (equals window.innerWidth)
			maxHeight: max Y boundary for particle (equals window.innerHeight)
			Update the following properties of the particle
			1. X-Coordinate : based on the last add the speed in x-direction
			2. Y-Coordinate : based on the last add the speed in y-direction
			3. Speed in X direction : -ive for moving left and +ive for right
			4. Speed in Y directio : -ive for moving up and +ive for down
		 */
		//1&2 - updating current position
		p.x += p.vx;
		p.y += p.vy;
		// updating velocity in x-direction
		if(p.x > maxWidth){
			//out of viewport on Right -> Bring to left (Vx = -ive)
			p.vx = -1-Math.random();
		}else if(p.x < 0){
			//out of viewport on Left -> Bring to Right (vx = +ive)
			p.vx = 1+Math.random();
		}else{
			//particle inside view port
			/* Increase or decrease the speed by some multiplier
				Math.random()-0.499 => 50% chances of +ive or -ive
				1 + someMultiplier => will increase or decrease proportionally
				someMultiplier = (+ive or -ive chance) * increment/decrement factor
				
				This value is randomly choosen to suit the speed
			 */
			p.vx *= 1+((Math.random()-0.499)*0.005);
		}
		//updating velocity in y-direction
		if(p.y > maxHeight){
			//out of view -> below the screen - bring above : speed -ive
			p.vy = -1-Math.random();
		}else if(p.y < 0){
			//out of view , above top. move to bootom and make spped 1
			p.y = maxHeight;
			p.vy = 1;
		}else{
			//in view. Randomize similar to velocity in x
			p.vx *= 1+((Math.random()-0.499)*0.005);
		}
		
	}
	/*
	getConnMatrix(size){
		//Uses Object instead of Array
		//Which makes it faster 
		//As accessing object is faster than Object
		let connMatrix = {}
		for(let i=0,len=size;i<len;i++){
			connMatrix[i] = {}
		}
		/* Generated Matrix will be of following type
			Originally created object will be
			{
				'0':{},
				'1':{}
			}
			Since all the properties will be undefined
			accessing connMatrix[0][1] == undefined == false
		

		 * /
		return connMatrix;	
	}*/
	redraw(){
		requestAnimationFrame(()=>{this.redraw()});
		/*
		This will  redraw the cavas, by updating the
		particle postions.
		*/
		//Clear the canvas before redrawing
		this.context.clearRect(0,0,window.innerWidth,window.innerHeight);
		//Update all the particles
		let maxWidth = window.innerWidth;
		let maxHeight = window.innerHeight;
		this.particles.forEach((particle,index,particles)=>{
			this.updateParticle(particle,maxWidth,maxHeight);
		})
		
		/*
			To draw lines between the points, we need to maintain the record
			of all the connected dots in a matrix.
			so if a is connected to b, (a,b) and (b,a) will become true
		 */				
		
		//Running a nested loop for particles
		//it matches every particle with other to draw else
		this.particles.forEach((particle,rowIndex,arr)=>{
			this.context.beginPath();
			
			for(let colIndex=0;colIndex<rowIndex;colIndex++){
				/* Checking for only half of the matrix
					X | 0 | 1 | 2 | 3 | ...
					0   x   x   x   x   ...
					1   -   x   x   x   ...
					2   -   -   x   x   ...
					3   -   -   -   x   ...
					...
					This will ensure the following
					1. No element is checked with itself 
					2. for 2&1, only 2,1 will be processed not 1,2
				*/
				//Drow line if required between the two points
				this.drawLine(particle,arr[colIndex]);
			}
			this.context.stroke();
			this.context.fillStyle = this.config.DOT_COLOR;	
			this.drawDot(particle);
		})
		
		
	}
	
	mouseMoveHandler(e){
		//Update the current mouse position in the mouse object
		this.mouse.x = e.layerX;
		this.mouse.y = e.layerY;
	}
	
	resizeHandler(e){
		//Resize the canvas according to current window size
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
	}
}
//export default ConstalationEffect;