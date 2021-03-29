// const slider = document.getElementsByClassName("slider")[0];
const imgelem = slider.getElementsByTagName("img");
const coverbox = document.getElementsByClassName("coverbox")[0];


function createCover(img,coverbox){
    const coverimg = new Image();
    coverimg.src = img.src;
    coverbox.appendChild(coverimg);
    DelayFadein(0.5,coverbox);
}

for(let i=0;i<imgelem.length;i++){
    imgelem[i].addEventListener("click",()=>{
        createCover(imgelem[i],coverbox);
    })
}

coverbox.addEventListener("click",()=>{
    AsyncFadeout(0.5,coverbox)
    .then(r => {
        coverbox.removeChild(coverbox.firstElementChild);
    })
})

const DelayFadein = (delay,...node)=>{
        if(delay<10){
            for(let i=0;i<node.length;i++){
                node[i].style.display = "block";
                node[i].style.transition = 0;
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

const AsyncFadeout = (delay,...node)=>{
    return new Promise((resolve,reject)=>{
        if(delay<10){
            for(let i=0;i<node.length;i++){
                node[i].style.transition = 0;
                node[i].style.opacity = "1";
                node[i].style.transition = delay+"s";
                node[i].style.opacity = "0";
                setTimeout(()=>{
                    node[i].style.display = "none";
                    resolve();
                },delay*900)
            }
        }else{
            console.error("フェード秒数が長すぎます");
        }
    })
}//※フェード秒数は10秒以内です