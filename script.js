const memories = [

{
title:"Kenangan ke-1",
text:"",
img:"photo 1.jpg"
},

{
title:"Kenangan-1",
text:"ini pas retret trakhir kita pas kelas 1222222222222222222, dimana pas disitu kalian enak bisa bertiga meanwhile i stuck sama si pemilik raynation itu lagi",
img:"photo 2.jpg"
},

{
title:"Kenangan-2",
text:"kenang-kenangan dan awalnya terbentuk whwuwuwwuw, gacor sekali grup ini pas masih ori (dan skr jg).. awalnya dari kapan ya? dari pas ke bandung itu kan? eh ato itu beda ya, gatau ah capek mikir, anyways kenangan ke 2 yang awalnya cuman kita bertiga wrwrr.",
img:"photo 3.jpg"
},

{
title:"Kenangan-3",
text:"foto yang paling baru nihh (maap ga berurutan), tapi ya begitulah ya, ini huehuenya jejes keberapa gatau tapi dia huehue ges, our last gbk trip, moga diingat2 pas ke malay itu",
img:"photo 4.jpg"
},

{
title:"Kenangan-4",
text:"perlukah i menjelaskan ni, TRIP KE GBK KEMARINNNNNNNNN (tuh kan ga berurutan)",
img:"photo 5.jpg"
},

{
title:"Kenangan-5",
text:"dannnnn kita balik lagi ke senjon ya ges, poto bareng2 kita, kenang-kenangan lagi yg harus diinget jejes, giluyy kita banyak juga memoriesnya",
img:"photo 6.jpg"
},

{
title:"all i want to say is terima gajih jejes",
text:"ingat sehebat, sekeren, senoraebuddy, segacor apa temen u ini. ngga cuman i doang sih, yang lain juga (terutama i), smoga disana u gud brok cari2 noraebang siapa tau i bisa ikut pas disana wwrwrw, ok bye",
img:"photo 6.jpg"
}

];

let current = 0;

const title = document.getElementById("title");
const text = document.getElementById("text");
const photo = document.getElementById("photo");
const counter = document.getElementById("counter");

function updateMemory(){

title.innerHTML = memories[current].title;
text.innerHTML = memories[current].text;
photo.src = memories[current].img;

counter.innerHTML = (current+1) + " / " + memories.length;

photo.style.opacity = "0";
photo.style.transform = "scale(.95) rotate(-4deg)";

setTimeout(()=>{

photo.style.opacity="1";
photo.style.transform="scale(1) rotate(-2deg)";

},200);

}

function nextMemory(){

if(current == memories.length-1){

showEnding();

return;

}

current++;

updateMemory();

}

function prevMemory(){

if(current==0)return;

current--;

updateMemory();

}

const introText =
"ik its not much tapi atleast i bikin sesuatu lah yeah buat kau.\n\nini smua poto-poto buat kenang-kenangan ❤️";

let typeIndex=0;

const typing=document.getElementById("typing");

function typeWriter(){

if(typeIndex<introText.length){

typing.innerHTML += introText.charAt(typeIndex);

typeIndex++;

setTimeout(typeWriter,35);

}

}

typeWriter();

document.getElementById("startBtn").onclick=function(){

document.getElementById("opening").style.display="none";

document.getElementById("memoryPage").classList.remove("hidden");

updateMemory();

};

for(let i=0;i<180;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.width=Math.random()*3+2+"px";

star.style.height=star.style.width;

star.style.animationDelay=Math.random()*4+"s";

document.querySelector(".stars").appendChild(star);

}

for(let i=0;i<70;i++){

let p=document.createElement("div");

p.className="particle";

p.style.left=Math.random()*100+"%";

p.style.animationDuration=(Math.random()*10+12)+"s";

p.style.animationDelay=Math.random()*8+"s";

document.querySelector(".particles").appendChild(p);

}

function showEnding(){

const fade=document.getElementById("transitionScreen");

fade.style.pointerEvents="all";

fade.style.opacity="1";

setTimeout(()=>{

document.getElementById("memoryPage").style.display="none";

document.getElementById("memoryWall").style.display="block";

fade.style.opacity="0";

},3500);

}
