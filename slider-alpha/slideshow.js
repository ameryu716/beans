const slider = document.getElementsByClassName("slider")[0];
const slidiv = slider.getElementsByTagName("div");

//cssset
for(let i=1;i<slidiv.length;i++){
    slidiv[i].style.position = "absolute";
    slidiv[i].style.display = "none";
}
function Faderun(interval,pare){
    const chil = pare.children;
    let i = 0;
    setTimeout(() => {
        DelayFadeout(0.5,chil[0]);
        setInterval(() => {
            i++;
            if(i>chil.length-1){
                i=0;
            }
            DelayFadein(0.5,chil[i]);
            setTimeout(() => {
                DelayFadeout(0.5,chil[i]);
            }, interval*1000/1.4);
        }, interval*1000);
    }, interval*1000/1.7);
}

const DelayFadein = (delay,...node)=>{
    if(delay<10){
        for(let i=0;i<node.length;i++){
            node[i].style.display = "block";
            node[i].style.opacity = "0";
            node[i].style.transition = delay+"s";
            setTimeout(()=>{
                node[i].style.opacity = "1";
            },100)
        }
    }else{
        console.error("フェード秒数が長すぎます");
    }
}//※フェード秒数は10秒以内です

const DelayFadeout = (delay,...node)=>{
    if(delay<10){
        for(let i=0;i<node.length;i++){
            node[i].style.transition = delay+"s";
            node[i].style.opacity = "0";
            setTimeout(()=>{
                node[i].style.display = "none";
            },delay*900)
        }
    }else{
        console.error("フェード秒数が長すぎます");
    }
}//※フェード秒数は10秒以内です


window.onload = ()=>{
    Faderun(3,slider);
}