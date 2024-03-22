const canditados = []

const inCandidato = document.getElementById('inCandidato')
const inAcertos = document.getElementById('inAcertos')

const btnAdicionar = document.getElementById('btnAdicionar')
const btnListar = document.getElementById('btnListar')
const btnAprovados = document.getElementById('btnAprovados')

const outLista = document.getElementById('outLista')

const adicionarCanditado = () =>{
    const candidatos = inCandidato.value;
    const acertos = Number(inAcertos.value);

    if(candidatos === "" || acertos === 0 || isNaN(acertos)) {
        alert("Digite valores válidos");
        return
    }
    canditados.push({nome: candidatos, nota: acertos})

    let lista = ''
    candidatos.forEach((candidato)=>{
        return lista += `${candidato.nome} - ${candidato.nota} Nota\n`
    })
    outLista.textContent = lista
    console.log(candidatos)
};
btnAdicionar.addEventListener('click', adicionarCanditado)

const listarCandidato = () =>{
    if(canditados.length === 0)
    alert('Informe os dados')
    return
};
btnAdicionar.addEventListener('click', listarCandidato)

const aprovadoSegundaEtapa = () =>{
    const notaMinima = Number(prompt("Digite a nota para a 2° aprovação"))
    if(notaMinima == 0 || isNaN(notaMinima)){
        alert('Nota Inválida')
        return
    }

    const filtrarCandidatos = canditados.filter((candidato)=>{
        return candidato.nota >= notaMinima
    })
    const candidatosEmOrdem = filtrarCandidatos.sort((a,b)=>{
        return b.nota - a.nota
    })


    console.log(filtrarCandidatos)
    console.log(candidatosEmOrdem)

    let lista = ''
    candidatosEmOrdem.forEach((candidato)=>{
        return lista =+ `${candidato.nome} - ${candidato.nota}`
    })
};
btnAdicionar.addEventListener('click', aprovadoSegundaEtapa)

