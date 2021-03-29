const slider = document.getElementsByClassName("slider")[0];
const isleft = document.getElementById("isleft");
const isright = document.getElementById("isright");

let rx = 0;
let flag = true;
let scrollLimit = 0;

function browslide(box,isleft,isright,tag){
   //// slider.transfrom
   const slidiv = box.getElementsByTagName(tag);
   scrollLimit = slidiv[0].clientWidth * slidiv.length;
   console.log("LIMIT:"+scrollLimit);
   isleft.onclick = ()=>{
      rx -= 530;
      for(let i=0;i<slidiv.length;i++){
         slidiv[i].style.transform = "translate(-"+rx+"px)";
      }
      if(rx>scrollLimit){
         rx=0;
         for(let i=0;i<slidiv.length;i++){
            slidiv[i].style.transform = "translate(-"+rx+"px)";
         }
      }
      flag = false;
   }
   isright.onclick = ()=>{
      rx += 530;
      for(let i=0;i<slidiv.length;i++){
         slidiv[i].style.transform = "translate(-"+rx+"px)";
      }
      if(rx>scrollLimit){
         rx=0;
         for(let i=0;i<slidiv.length;i++){
            slidiv[i].style.transform = "translate(-"+rx+"px)";
         }
      }
      flag = false;
   }
   setTimeout(() => {
      autoslide(slidiv);
   }, 2000);
}

function autoslide(slidiv){
   setInterval(() => {
      if(flag){
         rx += 530;
         for(let i=0;i<slidiv.length;i++){
            slidiv[i].style.transform = "translate(-"+rx+"px)";
         }
      }
      if(rx>scrollLimit){
         rx=0;
         for(let i=0;i<slidiv.length;i++){
            slidiv[i].style.transform = "translate(-"+rx+"px)";
         }
      }
      flag = true;
   }, 3000);
}

browslide(slider,isleft,isright,"div");