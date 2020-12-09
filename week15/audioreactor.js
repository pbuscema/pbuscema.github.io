var song;
//var slider;
var button;
var amp;
var fft;

var volhistory = [];

function setup() {
    createCanvas(1600, 800);
    angleMode(DEGREES);
    song = loadSound("headsroll.mp3", loaded);
   //slider = createSlider(0, 1, 0.5, 0.01);
   //amp = new p5.Amplitude();  
   fft = new p5.FFT(0, 512); 
}

function loaded() {
    button = createButton("play");
    button.mousePressed(togglePlaying);
    console.log("loaded");
}

function draw() {
    background(0);

    //var vol = amp.getLevel();
    //diam = map(vol, 0, 0.5, 10, 500)
   // volhistory.push(vol);

   var spectrum = fft.analyze();
   stroke(255,0,255);
   for (var i = 0; i < spectrum.length; i++) {
       var amp = spectrum[i];
       var y = map(amp, 0, 255, height, 0);
       line(i, height, i, y);
   }
   //console.log(spectrum.length);
    stroke(255,0,255);
    noFill();
    
   /* translate(width/2, height/2);
    beginShape();
    for (var i = 0; i < 360; i++) {
        var r = map(volhistory[i], 0, 1, 10, 1000);
        var x = r * cos(i);
        var y = r * sin(i);

        //var y = map(volhistory[i], 0, 1, height/2, 0);
        //vertex(i, y);
        vertex(x,y);
    }
    endShape();

    if (volhistory,length > 360) {
        volhistory.splice(0,1);
    }*/
    /*beginShape();
    for (var i = 0; i < volhistory.length; i++) {
        var y = map(volhistory[i], 0, 1, height/2, 0);
        vertex(i, y);
    }
    endShape();

    if (volhistory,length > width){
        volhistory.splice(0,1);
    }*/
    /*fill(255, 0, 255);
    ellipse(width/2, height/2, 200, vol * 200);
    song.setVolume(slider.value());*/

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




  
  

