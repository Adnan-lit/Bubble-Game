
let timer = 30;
let score = 0;
let hitrn;

function increaseScore(){
  score += 10;
  document.querySelector("#scoreVal").textContent = score;

}

let panelWidth = Number(document.querySelector("#pbtm").clientWidth)-60;
let panelHeignt = Number(document.querySelector("#pbtm").clientHeight)-60;



function makeBubble() {
  let clutter = "";
  for (let i = 1; i < panelHeignt/70; i++) {
  for (let i = 1; i < panelWidth/70; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
}

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerInt = setInterval(()=>{
        if(timer>0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = "";
        }
    },1000); 
}

function getNewHit(){
  hitrn = Math.floor(Math.random()*10);
  document.querySelector("#hitVal").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener("click", (details)=>{
  let clickednum = Number(details.target.textContent);
  if(clickednum === hitrn ){
    increaseScore();
    makeBubble();
    getNewHit();
  }
})


runTimer();
makeBubble();
getNewHit();

