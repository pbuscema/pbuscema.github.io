
//https://www.youtube.com/watch?v=jEwAMgcCgOA&list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW&index=9&t=679s

var song;
var button;
var amp;
var volhistory = [];


function preload(){
    song = loadSound('sound/stupidlove.mp3');
}

function setup() {
    createCanvas(1600, 800);
    colorMode(HSB);
    angleMode(DEGREES);
    
    button = createButton("play");
    button.mousePressed(togglePlaying);
    console.log("loaded");
    
    amp = new p5.Amplitude();
}

function draw() {
    background(i,255,255);
    var vol = amp.getLevel();
    volhistory.push(vol);
    stroke(0);
    
    for (var i = 0; i < volhistory.length; i++){
        var y = map(volhistory[i], 0, 1, height/2, 0);
        fill(i, 255,255);
        rect(i, y, volhistory.length/2, i/2); 

    }
    if (volhistory.length > width){
        volhistory.splice(0,1);
        translate(100,100)
        fill(i, 255,255);
    }
}

function togglePlaying() {
    if(!song.isPlaying()){
        song.play();
        song.setVolume(0.5);
        button.html("pause");
        } else {
        song.pause();
        button.html("play");
    }
}




  
  

