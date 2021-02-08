var thing;
var things;
function computerPlay(){
    things = ['Rock', 'Paper', 'Scissor'];
    thing = things[Math.floor(Math.random()*things.length)];
    document.getElementById('rok').innerHTML=things[0];
    document.getElementById('ppr').innerHTML=things[1];
    document.getElementById('ssr').innerHTML=things[2];
    document.getElementById('res').innerHTML=thing;    
}

var score_man=0;
var score_cpu=0;
var draw=0;
function rockWin(){
    if (thing==things[2]){
        document.getElementById('man').innerHTML= ++score_man;
    }
    else if (thing==things[1]){
        document.getElementById('cpu').innerHTML= ++score_cpu;
    }
    else{
        draw++;
    }
}

function pprWin(){
    if (thing==things[0]){
        document.getElementById('man').innerHTML= ++score_man;
    }
    else if (thing==things[2]){
        document.getElementById('cpu').innerHTML= ++score_cpu;
    }
    else{
        draw++;
    }
}

function ssrWin(){
    if (thing==things[1]){
        document.getElementById('man').innerHTML= ++score_man;
    }
    else if (thing==things[0]){
        document.getElementById('cpu').innerHTML= score_cpu++;
    }
    else{
        draw++;
    }
}


function game(){
if(score_cpu + score_man + draw == 5){
    if (score_cpu==score_man){
        if(!alert('DRAW!! BETTER LUCK NEXT TIME...')){window.location.reload();}
    }
    else if(score_cpu>score_man){
        if(!alert('YOU LOSE!! SHAME! Lost By a mere AI bot...')){window.location.reload();}
    }
    else if(!alert('YOU WIN!! GG MATE! These Bots are nothin!')){window.location.reload();}
}
}
//AUDIO VOLUME
var aud = document.getElementById("playaudio");

function setVol(){
    aud.volume=0.5;
}
