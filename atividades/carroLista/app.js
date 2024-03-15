const carros = []

const inModelo = document.getElementById ('inModelo')
const inPreco = document.getElementById ('inPreco')

const outLista = document.getElementById ('outLista')

const btnListar = document.getElementById ('btnListar')
const btnFiltrar = document.getElementById ('btnFiltrar')

const adicionarCarro = () =>{
    const modelo = inModelo.value
    const preco = Number(inPreco.value)

    if(modelo === '' || preco <= 0 || isNaN(preco)){
        alert('Informe os dados corretamente')
        inModelo.focus()
        return
    }

    carros.push({modelo: modelo, preco: preco });

    inModelo.value = "";
    inPreco.value = "";
};


btnListar.addEventListener("click", adicionarCarro)


const listarCarros = () => {
    if(carros.length === 0)
    alert ('Não tem carros cadastrados')
    inModelo.focus()
    return
}

btnFiltrar.addEventListener('click', listarCarros)

const filtrarPreco = () => {
    //filter , forEach
    const maximo = Number(prompt('Qual o valor máximo que cliente deseja pagar'))

    if(maximo === 0 || isNaN(maximo)){
        alert('Por favor, preencha os dados corretamente')
        return
    }

    const carrosFiltrados = carros.filter((carro)=>{
        return carro.preco <= maximo;
    })

    let lista = "";
    carrosFiltrados.forEach((carro)=>{ 
        return (lista += `${carro.modelo} --- ${carro.preco} \n`)
    });

};


btnFiltrar.addEventListener('click', filtrarPreco)
