//unshift -> inicio da array
//shift -> final da array

const paciente = []
//Referência para entrada de dados
const inPaciente = document.getElementById('inPaciente');

//Saída de dados
const outAtendimento = document.getElementById('outAtendimento');
const outLista = document.getElementById('outLista');

//botões
const btnAdicionar = document.getElementById('btnAdicionar');
const btnUrgencia = document.getElementById('btnUrgencia');
const btnAtender = document.getElementById('btnAtender');

const adicionarPaciente = () => {
    let nome = inPaciente.value;
    if(nome === ''){
        alert('Informe o nome do paciente');
        return
    }
    paciente.push(nome);

    let lista = "";
    paciente.map((paciente, index)=>{
        return (lista += `${index+1} - ${paciente}\n`);
    });

    outLista.textContent = lista;
    inPaciente.value = "";

};
btnAdicionar.addEventListener("click", adicionarPaciente)

const adicionarUrgencia = () => {
    let nome = inPaciente.value;
    if(nome === ''){
        alert('Informe o nome do paciente');
        return
    }
    paciente.unshift(nome);

    let lista = ``
    paciente.map((paciente, index)=>{
        return (lista += `${index+1} - ${paciente}\n`);
    })

    outLista.textContent = lista;
    inPaciente.value = '';

};
btnUrgencia.addEventListener("click", adicionarPaciente)

const atenderPaciente = () =>{
    if(paciente.length === 0){
        alert('Não existe atendente na fila!');
        return;
    }
    let atender = paciente.shift()
    outAtendimento.textContent = atender
};
btnAtender.addEventListener('click', atenderPaciente)
