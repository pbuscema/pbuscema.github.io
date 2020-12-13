//https://www.youtube.com/watch?v=2O3nm0Nvbi4&list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW&index=11 

var song;
var button;
var amp;
var fft;
var volhistory = [];
var w;

function preload(){
    song = loadSound('sound/alive.mp3');
}

function setup() {
    createCanvas(1600, 800);
    angleMode(DEGREES);
    colorMode(HSB);
    button = createButton("play");
    button.mousePressed(togglePlaying);
    console.log("loaded");
    
   fft = new p5.FFT(0, 64); 
   w = width / 64;
}

function draw() {
    background(0);

   var spectrum = fft.analyze();
   noStroke();
   for (var i = 0; i < spectrum.length; i++) {
       var amp = spectrum[i];
       var y = map(amp, 0, 256, height, 0);
       rect(i*w, y, height-y, amp/2, random(i), random(y));
       fill(i*2,255,255); 
   }
   /*if (spectrum.length > 100){
    fill(0,255,0);
   } else {
     fill(255,0,255);
   }*/   
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




  
  

