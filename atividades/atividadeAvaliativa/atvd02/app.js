// 2) - Elaborar um programa que adicione números a um vetor. O programa deve impedir a inclusão de números repetidos. Exibir a lista de números a cada inclusão. Ao clicar no botão Verificar Ordem, o programa deve analisar o conteúdo do vetor e informar se os números estão ou não em ordem crescente.

let numeros = [];

function adicionarNumero() {
    const newNumber =
parseInt(document.getElementById("numero").value);
    if (!isNaN(newNumber)) {
        if(!numeros.incluides(newNumber)){
            numeros.push(newNumber);
            exibirNumero();
    } else {
            alert("Este Número já foi adicionado");
        }
    }
}

    function exibirNumero(){
        const numerosDiv = document.getElementById("numeros");
        numerosDiv.innerHTML = `Numeros adicionados <br>`;
        numeros.forEach(numero =>{
            numerosDiv.innerHTML += numero + "<br>";
    });
}

function verificarOrdem(){
    let ordenado = true; 
    for (let i = 0; i < numeros.length - 1; i++) {
        if (numeros[i] > numeros[i + 1]) {
            ordenado = false;
            break;
        }
    }
    if (ordenado) {
        alert("Os números estão em ordem crescente");
    } else {
        alert ("Os números estão em ordem decrescente");
    }
    
}
    
