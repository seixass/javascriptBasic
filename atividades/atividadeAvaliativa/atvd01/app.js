const inClube = document.getElementById("time");
const btnAdicionar = document.getElementById("adicionar");
const btnListarClube = document.getElementById("listar");
const btnListarTabela = document.getElementById("listarTabela");
const outLista = document.getElementById("outLista");
const clubes = [];

const adicionarClube = () => {
  const clube = time.value;
  if (clube === "") {
    alert("Preencha o campo");
    time.focus();
    return;
  }
  clubes.push(clube);
  console.log(clubes);
  inClube.value = "";
  inClube.focus();
};

btnAdicionar.addEventListener("click", adicionarClube);

const listarClube = () => {
  if (clubes.length === 0) {
    alert("não existe clubes cadastrados");
    return;
  }

  let lista = "";
  clubes.forEach((clube, index) => {
    return (lista += `${index + 1}. ${clube}\n`);
  });
  outLista.textContent = lista;
};

btnListarClube.addEventListener("click", listarClube);

const montarJogos = () => {
  if (clubes.length % 2 != 0 || clubes.length === 0) {
    alert("Impossivel fazer a tabulação com essa quantidade de elementos");
    return;
  }

  const metadeInicio = clubes.slice(0, clubes.length / 2);
  const metadeFim = clubes.slice(clubes.length / 2, clubes.length).reverse();

  let lista = "";
  for (let i = 0; i < metadeInicio.length; i++) {
    lista += `${i + 1}° Jogo  ${metadeInicio[i]} X ${metadeFim[i]}\n`;
  }
  outLista.textContent = lista;
};
btnListarTabela.addEventListener("click", montarJogos);
