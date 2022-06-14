// colando os elementos na tag <p>
function insert(num){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}
// limpando os elementos da tag <p>
function clean(){
    document.getElementById('resultado').innerHTML = ""
}
// Mostra o resultado da equação quando se é clicado no botão "="
function calc(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
    else{
        document.getElementById('resultado').innerHTML = 'Digite valores!'
    }
}
// tirando o ultimo caractere da tag <p>
function back(){
    var resultado = document.getElementById('resultado').innerHTML 
    document.getElementById('resultado').innerHTML  = resultado.substring(0, resultado.length - 1)
}