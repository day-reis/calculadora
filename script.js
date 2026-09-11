function insert(num){
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;
}
function clean(){
    document.getElementById('resultado').innerHTML =  "";
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML =resultado.substring( 0, resultado.length -1);
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}
function porcentagem(){
    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado){
        document.getElementById('resultado').innerHTML = resultado / 100;
    }
}
const btnTema = document.getElementById('tema');
const bolinha = document.querySelector('.bolinha');

btnTema.addEventListener('click', function() {
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
        bolinha.innerHTML = '🌙';
    } else {
        bolinha.innerHTML = '☀️';
    }
});