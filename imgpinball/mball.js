window.addEventListener("load",()=>{
    alert("mobile!");
    const ball = document.getElementById("ball");
    let ballx = 0;
    let bally = 0;
    let arrowx = 1;
    let arrowy = 1;
    let startin;
    function start(){
        startin = setInterval(() => {
            if(ballx < 0 || ballx > window.outerWidth){
                
                arrowx = -1*arrowx;
                if(ballx < 0){
                    ballx = 10;
                }
                if(ballx > window.outerWidth){
                    ballx = window.outerWidth - 10;
                }
            }
            if(bally <0||bally > window.outerHeight){
                
                arrowy = -1*arrowy;
                if(bally < 0){
                    bally = 10;
                }
                if(bally > window.outerHeight){
                    bally = window.outerHeight;
                }
            }
            ballx = ballx + 10*arrowx;
            bally = bally + 10*arrowy;
        }, 10);
    }
    function end(){
        clearInterval(startin);
    }

    const draw = setInterval(() => {
        ball.style.top = bally+"px";
        ball.style.left = ballx+"px";
    }, 10);//描画開始

    document.getElementById("move").onclick = start();
    document.getElementById("stop").onclick = end();
    
    //画像最適化
    function imgOptimization(){
        const uploadlabel = document.getElementById("uploadlabel");
        const imguploads = document.getElementById("imguploads");
        const imageicon = document.getElementsByClassName("imageicon");
        const imageplusicon = document.getElementsByClassName("imageplus-icon");
        
        imguploads.addEventListener('change',()=>{
            const prevzone = document.getElementById("imgprev");
            const sizelimit = 3000000;
            function previewFile(file) {
                const reader = new FileReader();
                // URLとして読み込まれたときに実行する処理
                reader.onload = function (e) {
                    const imageUrl = e.target.result; // URLはevent.target.resultで呼び出せる
                    const img = new Image(); // img要素を作成
                    img.src = imageUrl; // URLをimg要素にセット
                    if(prevzone.hasChildNodes()){
                        prevzone.removeChild(prevzone.firstChild);
                    }
                    ball.style.border = "none";
                    prevzone.appendChild(img); // #previewの中に追加
    
                }
                reader.readAsDataURL(file);
            }
            
            const handleImageSelect = ()=>{
                const im = imguploads.files[0];
                if(im.size>sizelimit){
                    alert("ファイルが大きすぎます");
                }else if(im.size<=sizelimit){
                    console.log(im);
                    previewFile(im);
                }
            }
    
            handleImageSelect();
            imageicon[0].style.opacity = "0";
            imageplusicon[0].style.opacity = "0";
            uploadlabel.addEventListener("mouseover",()=>{
                imageicon[0].style.opacity = "1";
                imageplusicon[0].style.opacity = "1";
            })
            uploadlabel.addEventListener("mouseleave",()=>{
                imageicon[0].style.opacity = "0";
                imageplusicon[0].style.opacity = "0";
            })
        });
    }
    imgOptimization();

})