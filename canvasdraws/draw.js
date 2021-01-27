function drawstart(){
    const canvas = document.createElement("canvas");
    const img = document.getElementById("horoimg");
    canvas.width = 370.8;
    canvas.height = 190;
    let ctx = canvas.getContext('2d');
    
    const startx = document.getElementById("startx");
    const starty = document.getElementById("starty");
    const rangex = document.getElementById("rangex");
    const rangey = document.getElementById("rangex");
    const altstartx = document.getElementById("altstartx");
    const altstarty = document.getElementById("altstarty");
    const altrangex = document.getElementById("altrangex");
    const altrangey = document.getElementById("altrangey");

    // ctx.drawImage(img, startx, starty, rangex, rangey, altstartx, altstarty, altrangex, altrangey);
    ctx.drawImage(img,         0,    856,   1080,    208,         0,         0,     370.8,       190);
    document.body.appendChild(canvas);
}