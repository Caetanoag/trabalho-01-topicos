const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

let circulo = {
    r: 100,
    x: canvas.width/2,
    y: canvas.height/2
};

function criar_circulo() {
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(circulo.x, circulo.y, circulo.r, 0, Math.PI*2);
    ctx.stroke();
}

document.onmousemove = function(event) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "black"; // mudar isso depois?
    ctx.beginPath();
    ctx.arc(event.clientX, event.clientY, 10, 0, Math.PI*2);
    ctx.stroke(); ctx.fill();
    criar_circulo();
}

let ponto = {
    x: 0,
    y: 0
};
document.addEventListener("mousemove", (e) => {
    ponto.x = e.clientX;
    ponto.y = e.clientY;
});
let distance = ((ponto.x - circulo.x)**2 + (ponto.y - circulo.y)**2)**0.5;
if(distance <= circulo.r){
    console.log("Tem interseccção no ponto ( " + ponto.x + ", " + ponto.y + " )");
}
else{
    console.log("Sem intersecção");
}
console.log(`Distancia: ${distance}`);