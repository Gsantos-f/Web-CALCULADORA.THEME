// colando os elementos na tag <p>
function insert(num){
    let numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}
// limpando os elementos da tag <p>
function clean(){
    document.getElementById('resultado').innerHTML = ""
}
// Mostra o resultado da equação quando se é clicado no botão "="
function calc(){
    let resultado = document.getElementById('resultado').innerHTML
    let historicoDaCalculadora = document.getElementById('historico').innerHTML
    try {
        if(resultado){
            document.getElementById('resultado').innerHTML = eval(resultado)
            document.getElementById('historico').innerHTML = (historicoDaCalculadora + resultado + ' = ' + eval(resultado) + "\n") //adicionando ao historico o resultado com quebra de linha "\n"
        }
        else{
            document.getElementById('resultado').innerHTML = 'Vazio!'
        }     
    } catch (error) {
        function sumir(){
            // Função para tirar a msg de alerta
            document.getElementById('caixa-alerta').style = "display: none;"
        }
        // Mostrar a caixa de alerta quando uma função aperecer errada no "resultado"
        document.getElementById('caixa-alerta').style = "display: flex;"
        // Retorna a função "sumir()" fazendo com que depois de 2s ele mude pada display: none;
        setTimeout(sumir, 2000)      
    }
}
// Tirando o ultimo caractere da tag <p>
function back(){
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = resultado.innerHTML.substring(0, resultado.innerHTML.length - 1)   
}
// Mostrando e fechando a caixa do historico apertando o mesmo botão
function historico(){
    let historico = document.getElementById('historico').style
    let fecharHistorico = document.getElementById('botao-fechar-historico').style
    if(historico.display != "block"){ 
        historico.display = "block"
        fecharHistorico.display = "block"
    }
    else{
        historico.display = "none"    
        fecharHistorico.display = "none"
    }
}
// Botão que fecha a caixa do historico
function fecharHistorico(){
    document.getElementById('historico').style = "display: none;"
    document.getElementById('botao-fechar-historico').style = "display: none;"
}
