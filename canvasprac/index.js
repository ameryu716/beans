window.onload = (()=>{
const img = document.getElementById("innu")
const i3 = document.getElementById("canvasy");

// 同じサイズの <canvas> を作ります
let canvas = document.createElement('canvas');
canvas.width = img.clientWidth; //283
canvas.height = img.clientHeight; //178
let context = canvas.getContext('2d');

// 画像をコピーします (このメソッドで画像をカットすることができます)
context.drawImage(img, 0, 0);
document.body.appendChild(canvas);

const c2 = document.createElement('canvas');
c2.height = 283;
c2.width = 178;
const cc2 = c2.getContext("2d");
cc2.save();
// cc2.translate(parseInt(canvas.height/2), parseInt(canvas.width/2)); 
cc2.translate(0,10);//283
// cc2.rotate( 270 * Math.PI / 180 );
// cc2.rotate(250 * Math.PI / 180)
cc2.rotate(10*Math.PI / 180);
cc2.drawImage(canvas, 0, 0,canvas.width,canvas.height,0,0,283,178);
cc2.restore();
document.body.appendChild(c2);

//innuinnuinnnu









function canvascopy(img){
    const c = document.createElement('canvas');
    c.width = img.clientWidth;
    c.height = img.clientHeight;
    const ctx = c.getContext('2d');
    // 画像をコピーします (このメソッドで画像をカットすることができます)
    ctx.drawImage(img, 0, 0);
    document.body.appendChild(c);
}


canvascopy(img);
canvascopy(img);
canvascopy(img);
canvascopy(img);
canvascopy(i3);


function canvasRotate270(img){
    const canvas = document.createElement('canvas');
    canvas.width = img.clientHeight;
    canvas.height = img.clientWidth;
    //反転canvas
    const ctx = canvas.getContext('2d');

    ctx.save();
    // cc3.translate(parseInt(canvas.height/2), parseInt(canvas.width/2)); 
    ctx.translate(0,canvas.height);
    ctx.rotate( 270 * Math.PI / 180 );
    // ctx.drawImage(img2, 0, 0,c3.width,c3.height,0,0,c3.clientHeight,c3.clientWidth);
    // ctx.drawImage(img, 0, 0,c3.width,c3.height,0,0,1202,726);
    ctx.drawImage(img, 0, 0,canvas.height,canvas.width,0,0,canvas.height,canvas.width);
    ctx.restore();
    document.body.appendChild(canvas);
}
canvasRotate270(i3);
canvasRotate270(img);
})