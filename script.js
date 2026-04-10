// @type {HTMLCanvasElement}
const canvas = document.getElementById('canvas1');
// @type {CanvasRenderingContext2D}
const ctx = canvas.getContext('2d');

let circulo = {
    r: 100,
    x: canvas.width/2,
    y: canvas.height/2
};
let ponto = {
    x: 0,
    y: 0
};
function criar_circulo() {
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(circulo.x, circulo.y, circulo.r, 0, Math.PI*2);
    ctx.stroke();
}
function criar_ponto(ponto) {   
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(ponto.x, ponto.y, 5, 0, Math.PI*2);
    ctx.stroke(); ctx.fill();
    ctx.closePath();
}
document.addEventListener("mousemove", (e) => {
    ponto.x = e.clientX;
    ponto.y = e.clientY;
});
function desenhar(circulo, ponto) { // responsavel pelo desenho na tela
    criar_circulo(circulo);
    criar_ponto(ponto);
}
function main(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    desenhar(circulo, ponto)
    
    let distance = ((ponto.x - circulo.x)**2 + (ponto.y - circulo.y)**2)**0.5;
    if(distance <= circulo.r){
        console.log("Tem interseccção no ponto ( " + ponto.x + ", " + ponto.y + " )");
    }
    else{
        console.log("Sem intersecção");
    }
    requestAnimationFrame(main);
}
requestAnimationFrame(main);