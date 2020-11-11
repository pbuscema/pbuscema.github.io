


/*https://www.w3schools.com/howto/howto_js_typewriter.asp*/
var i = 0;
var txt = 'What are we reading? What are we consuming? When did private become public? TV is desensitizing the children. Living in an age of anxiety brought upon by doing the jobs of today with the concepts of yesterday. Generations are alienated by technology. Who is the media? Governments are polarizing. We are increasingly hpyer-aware of each other. Oversharing. We are far apart and yet deeply interconnected. Media is effective in its invasive function. Media touches every part of our being. What is media an extension of? Words and printing is a hot commodity extending our perceptions of reality. How do you base your truth? We live in a global village. Why do we not treat it that way? Our inventions dominate us. We adapt.'; 
var speed = 50; /* The speed/duration of the effect in milliseconds */
var letterSize = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

