function insert(num){
    var numero = document.getElementById('calcular').innerHTML
    document.getElementById('calcular').innerHTML = numero + num
}
function limpar(){
    document.getElementById('calcular').innerHTML = ""
}
function calcular(){
    var resultado = document.getElementById('calcular').innerHTML
    if(resultado){
        document.getElementById('calcular').innerHTML = eval(resultado)
    }
    else{
        document.getElementById('calcular').innerHTML = "Faça alguma função"
    }
}
