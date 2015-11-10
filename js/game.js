var frames = 0, gravidade = 0.4, velocidade = 1;
var wolf = document.getElementById('wolf');
function clique(evt){
     atualiza();
}

function main(){
  
    
    document.addEventListener('mousedown', clique);
    roda();
}

function roda(){
   
    window.requestAnimationFrame(roda);
}

function atualiza(){
    velocidade += gravidade;
    wolf.style.top = '100px';
}
main();


