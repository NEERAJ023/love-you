let h1=document.querySelector(".h1");
let btn= document.querySelectorAll(".btn");
function clr(){
    for(let i=0; i<btn.length; i++){
        btn[i].remove();
    }
h1.innerHTML="Mtlb chance hai ...💛";
}


let no=document.querySelector("#no");
let card=document.querySelector(".card");
let nobtn=no.getBoundingClientRect();
let carddiv=card.getBoundingClientRect();

no.addEventListener("mouseover",()=>{
    let i= Math.floor(Math.random()*(carddiv.width-nobtn.width))+3;
    let j= Math.floor(Math.random()*(carddiv.height-nobtn.height))+3;
    no.style.top= j+'px';
    no.style.left= i+'px';
})