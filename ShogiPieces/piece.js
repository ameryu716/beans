window.addEventListener("load",()=>{
    const rotater = document.getElementById("rotater");
    const piecename = document.getElementById("piecename");
    const piecesize = document.getElementById("piecesize");
    const piecedirec = document.getElementById("piecedirec");
    const direcb = document.getElementById("direc-b"); 
    const amounter = document.getElementById("r-amount");
    const amountspan = document.getElementById("amouterspan");
    const namedSurface = document.getElementById("named-surface");
    const topmarger = document.getElementById("topmarger");
    const topmargerspan = document.getElementById("margertopspan");
    const leftmarger = document.getElementById("leftmarger");
    const leftmargerspan = document.getElementById("margerleftspan");
    const sizer = document.getElementById("sizer");


    let degr =20;
    let piecedirecNum = 1;

    document.addEventListener('keydown', (event) => {
        if(event.key=="z"){
            event.preventDefault();
            degr = degr + 2;
        }
        if(event.key=="x"){
            event.preventDefault();
            degr = degr - 2;
        }
    }, false);

    setInterval(()=>{
        rotater.style.transform = "rotate3d("+piecedirecNum+","+piecedirecNum+",0,"+degr+"deg)";
    },20);

    piecename.oninput = (ev)=>{
        if(ev.data !== null){
            if(piecename.value.length == 1||piecename.value.length == 0){
                namedSurface.innerHTML = "<span>"+piecename.value+"</span>";
            }else{
                let burnedString = "";
                for(let i=0;i<piecename.value.length;i++){
                    burnedString = burnedString + piecename.value[i] + "<br>";
                }
                namedSurface.innerHTML = "<span>"+burnedString+"</span>";
            }
        }
    }

    piecesize.onchange = ()=>{
        document.getElementsByClassName("surface1")[0].getElementsByTagName("span")[0].style.fontSize = piecesize.value + "px";
        sizer.innerText = piecesize.value+"px";
    }

    piecedirec.onchange = (ev)=>{
        if(piecedirec.checked){
            piecedirecNum = 1;
            direcb.innerText = "正";
        }else {
            piecedirecNum = -1;
            direcb.innerText = "負";
        }
    }

    amounter.onchange = ()=>{
        degr = amounter.value;
        amountspan.innerText = amounter.value + "deg";
    }

    topmarger.onchange = ()=>{
        document.getElementsByClassName("surface1")[0].getElementsByTagName("span")[0].style.paddingTop = topmarger.value + "%";
        topmargerspan.innerText = topmarger.value + "%";
    }
    leftmarger.onchange = ()=>{
        document.getElementsByClassName("surface1")[0].getElementsByTagName("span")[0].style.paddingLeft = leftmarger.value + "%";
        leftmargerspan.innerText = leftmarger.value + "%";
    }
})
