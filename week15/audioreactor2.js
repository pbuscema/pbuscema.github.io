var song;
var button;
var amp;
var fft;

var w;

function preload(){
    song = loadSound('sound/watslove.mp3');
}

function setup() {
    createCanvas(1600, 800);
    
    angleMode(DEGREES);
    
    button = createButton("play");
    button.mousePressed(togglePlaying);
    console.log("loaded");
    
   
   fft = new p5.FFT(0, 64); 
   w = width / 64;
}

function draw() {
    background(0);

   var spectrum = fft.analyze();
   
   for (var i = 0; i < spectrum.length; i++) {
       var amp = spectrum[i];
       var y = map(amp, 0, 256, height, 0);
    
       circle(amp, length, random(height-y)); 

       translate(100,100);
       translate(p5.Vector.fromAngle(millis() / 2000, 40));
       
       
       if (y < height){
        noStroke();
        r = random(255,0); 
        g = random(0,255,0); 
        b = random(0,255); 
        a = random(10,255); 
        fill(r, g, b, a);
       } else {
           noStroke();
           fill(255,255,0);
       }
   }
}

function togglePlaying() {
    if(!song.isPlaying()){
        song.play();
        song.setVolume(0.5);
        button.html("pause");
    }   else {
        song.pause();
        button.html("play");
    }
}




  
  

