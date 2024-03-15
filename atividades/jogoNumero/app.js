// // Gerar um número aleatório entre 1 e 100
// const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
// let erros = 0;
// let chances = 6;

// document.getElementById('btnApostar').addEventListener('click', function() {
//     const numeroDigitado = parseInt(document.getElementById('inNumero').value);

//     if (isNaN(numeroDigitado) || numeroDigitado < 1 || numeroDigitado > 100) {
//         alert('Por favor, insira um número válido entre 1 e 100.');
//         return;
//     }

//     if (numeroDigitado === numeroAleatorio) {
//         alert(`Parabéns! Você acertou o número ${numeroAleatorio} em ${6 - chances + 1} tentativas.`);
//         reiniciarJogo();
//     } else {
//         erros++;
//         chances--;

//         document.getElementById('outErros').textContent = erros;
//         document.getElementById('outChances').textContent = chances;

//         let dica = '';

//         if (numeroDigitado < numeroAleatorio) {
//             dica = `Dica: O número é maior que ${numeroDigitado}.`;
//         } else {
//             dica = `Dica: O número é menor que ${numeroDigitado}.`;
//         }

//         document.getElementById('outDica').textContent = dica;

//         if (chances === 0) {
//             alert(`Game over! O número era ${numeroAleatorio}.`);
//             reiniciarJogo();
//         }
//     }

//     document.getElementById('inNumero').value = '';
// });



//CORREÇÃO PROF

const erros = [];
const numeroSorteado = Math.floor(Math.random() * 100) +1;
const tentativas = 6

const btnApostar = document.getElementById('btnApostar')
const btnJogar = document.getElementById('btnJogar')

const apostarNumero = () =>{
    const inNumero = document.getElementById('inNumero')
    let numero = Number(inNumero.value)

    if(numero <= 0 || isNaN(numero)){
        alert('Número inválido')
        inNumero.focus()
        return
    }

    const outErros = document.getElementById('outErros') 
    const outChances =  document.getElementById('outChances') 
    const outDica = document.getElementById('outDica') 

    //Lógica da aplicação

if(numero == numeroSorteado){
    alert ('Você acertou!!')
btnApostar.disable = true
    outDica.textConstent = `Parabéns! Número Sortedo${numeroSorteado}`
}else{
    if(erros.indexOf(numero) >= 0){
        alert(`Você ja apostou o ${numero}... Tente outro`)
    }
    else if ( numero > 100 ){
    alert(`Você nao pode apostar mais que 100`)
        return
}
    else{
        erros.push(numero)
        let numErros = erros.length
        let numChances = tentativas - numErros

        outErros.textContent = `${numErros} (${erros.join(', ')})`
        outChances.textContent = numChances
        if(numChances == 0){
            btnApostar.disable = true
            outDica.textContent = `Fim de jogo! Número sorteado ${numeroSorteado}`
        }else{
            let dica = numero < numeroSorteado ? "Maior": "Menor"
            outDica.textContent = `Dica: Tente um número ${dica} que ${numero}`
        }
    }
}
inNumero.value = ''
inNumero.focus()

}
btnApostar.addEventListener('click', apostarNumero)



function reiniciarJogo() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    document.getElementById('outErros').innerHTML = 0;
    document.getElementById('outChances').innerHTML = 6;
    document.getElementById('outDica').innerHTML = 'Dica: É um número entre 1 e 100';
}
let btnreniciar = document.getElementById("btnreniciar")
btnreniciar.addEventListener('click' , () =>{
    reiniciarJogo()
    })