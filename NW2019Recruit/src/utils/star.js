let star = {};

star.RandomTwinkle = function(star){
    // var ctx = canvas.getContext('2d');
   
    let width = window.innerWidth; 
    let height = window.innerHeight/2;
    
    function draw(){
        let x = (Math.random()*(width));
        let y = (Math.random()*(height));
        let alpha = 0.001;
        // console.log(x+','+y)
        var circle1 = document.createElement("circle");
        circle1.setAttribute("style","fill:#ffffff");
        circle1.setAttribute("cx","30");
        circle1.setAttribute("cy","30");
        circle1.setAttribute("r","2");
        star.appendChild(circle1);
        
        // ctx.endPath();
        // console.log(1);
    }
    draw();
    // for(let i = 0;i < 7;i++){
    //     draw();
    // }
    
}

// let star = {}

// star.go = function(canvas,status){
// 	var ctx = canvas.getContext('2d'); 
// 	canvas.width = window.innerWidth; 
// 	canvas.height = window.innerHeight;

// 	var dots = {
// 		nb: 400,
// 		array: []
// 	};

// 	function Dot() {
// 		this.x = Math.random() * canvas.width;
// 		this.y = Math.random() * canvas.height;

// 		this.vx = -0.5 + Math.random();
// 		this.vy = -0.5 + Math.random();

// 		this.radius = Math.random() * .8;
// 		//透明度
// 		this.alpha = Math.random();
// 	}

// 	Dot.prototype = {
// 		draw: function() {
// 			let bling = Math.floor(Math.random() * 10);
// 			ctx.fillStyle = 'rgba(255,255,255, 1)';
// 			if(this.alpha > .2 && bling > 5)
// 				this.alpha -= .03;
// 			else if(this.alpha < 1 && bling < 5)
// 				this.alpha += .03;
// 			ctx.beginPath();
// 			ctx.globalAlpha = this.alpha;
// 			ctx.globalCompositeOperation = 'lighter';
// 			ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
// 			ctx.fill();
// 		}
// 	};

// 	function createDots() {
// 		for (var i = 0; i < dots.nb; i++) {
// 			dots.array.push(new Dot());
// 		}
// 	}

// 	function drawDots() {
// 		ctx.clearRect(0,0,canvas.width,canvas.height);
// 		ctx.globalAlpha = 0.8;
// 		for (let i = 0; i < dots.nb; i++) {
// 			let dot = dots.array[i];
// 			dot.draw();
// 		}
// 		if(status){
// 			setTimeout(drawDots, 200);
// 		}
		
// 	}

// 	createDots();
// 	drawDots(); //画星星

// }


export default star
