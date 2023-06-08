//Tracery example by Allison Parrish
//But we'll also create a box to hold our lines as they move
particles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(50);
}

function draw() {
//This overlay will always take us back to black - try changing it
//The alpha of 3 controls the speed of the fade - try raising and lowering it
	//This moves the particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
	background(50,50,50,50);
}

//This draws the word with each mouse click
function mouseClicked() {
	var grammar = tracery.createGrammar(grammarSource); //set up tracery library
	grammar.addModifiers(tracery.baseEngModifiers); //set up English grammer properly (capitals and a/an)
	var output = grammar.flatten("#origin#"); //creates sentence from grammar source
	let p = new Particle(mouseX,mouseY,output);
    particles.push(p);

}

// grammerSource is generated using:
// http://tracery.io/ 
// See the tutorial here: http://www.crystalcodepalace.com/traceryTut.html
var grammarSource = {
	"origin": [
		"#sen2#\n #sen1#\n #sen3# #response#",
		"#sen1#\n #sen2#\n #sen3# #response#"
	],
	"sen3": [
		"What am I?",
		"What would a green house be made of?",
		"And yet never grows?",
		"How is this possible?",
		"And never in a thousand years?",
		"What is it?",
		"What is it?",
		"What is it?",
		"What is it?",
		"What am I?",
		"What are they?",
		"What is it?",
		"What am I?",
		"What is it?",
		"What is it?",
		"What am I?",
		"Are these sentences true or false?",
		"What are they?",
		"What am I?"
	],
	"sen2": [
		"To most people, I'm an obsession.",
		"A yellow house is made of yellow bricks.",
		"Is taller than trees.  Up, up it goes.",
		" Every girl takes an apple, yet one apple remains in the basket.",
		"Twice in a moment.",
		"What God never sees, what the king seldom sees, and what we see every day.",
		"Yet no man can hold it for long.",
		"He has not lungs nor throat, but still a mighty roaring call.",
		"Whoever takes it, knows it not.",
		"I bring enlightenment to some, while gripping others in the hand of fear.",
		"When they escape, you itch all day.",
		"But it cannot breathe, for it has no lungs.",
		"No one can reach me, not even the queen.",
		"Who buys it, has no use for it.",
		"The more it works the thinner it grows.",
		"I sit on the stove without burning myself.",
		"The preceding sentence is true.",
		"Walk on the dead, they mutter and grumble.",
		"I serve by being devoured."
	],
	"sen1": [
		"For some I go fast for others I'm slow.",
		"A blue house is made of blue bricks.",
		"What has roots that nobody sees.",
		"There are four girls, and four apples in a basket.",
		"What is once in a minute.",
		"Read my riddle, I pray.",
		"This is as light as a feather.",
		"This old one runs forever, but never moves at all. ",
		"Whoever makes it, tells it not.",
		"I come in darkness, but fill the mind with light.",
		"When they are caught, they are thrown away.",
		"You hear it speak, for it has a hard tongue.",
		"I am red, blue, and purple and green.",
		"Who makes it, has no need of it.",
		"You use it between your head and your toes.",
		"I go through the door without pinching myself.",
		"The following sentence is false.",
		"Walk on the living, they don't even mumble.",
		"My life can be measured in hours."
	],
	"response": [
		"Time.",
		"Glass.",
		"A Mountain.",
		"One girl took the basket. She took the last apple while it was in the basket.",
		"The letter M.",
		"An equal.",
		"A breath.",
		"A waterfall.",
		"Counterfeit money.",
		"Your dreams.",
		"Fleas.",
		"A bell.",
		"A rainbow.",
		"A coffin.",
		"A bar of soap.",
		"A ray of sun.",
		"Neither; it's a paradox.",
		"Fallen leaves.",
		"A candle."
	]
};

class Particle {
  constructor(x,y,text) {
		//This sets the x value to mouse position
    this.x = x;
		//This keeps the y at mouse position
    this.y = y;
		//This sets the range of x movement - try limiting it to + or -
    this.vx = random(-1, 1);
		//This sets the range of y movement - try limiting it to + or -
    this.vy = random(-1, 1);
		//This sets the text size to be consistent
		this.size = random(20,20);
		//This sets the current line to the particle
		this.text = text;
  }

  finished() {
		//Change this to 255 if you reverse the fade
    return (this.width < 0 || this.width > windowWidth);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

  show() {
    noStroke();
		textSize(this.size);
		//Try any web safe font
		textFont("Courier");
		//This centers the text on the click
		textAlign(CENTER, CENTER);
		//This sets the fill to a static color - can you make it random?
		//You can also add the outline
    //stroke(255);
		//This keeps R and G values at 255 to allow for yellows
		//Try changing it!
    fill("green");
		//This positions the text
    text(this.text, this.x, this.y);
  }
}