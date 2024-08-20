interface Data {
  pt: string;
  ptContrarias: string;
  pi: string;
  ptInteressadas: string;
  cnj: string;
  cnjNumber: string;
  pep: string;
  pepNumber: string;
  status: string;
  statusDescription: string;
  andamento: string;
  ultimoAndamento: string;
  dtl: string;
}

let contador: number = 0;

function fetchDataAndRender(): void {
  fetch("/mock/db.json").then((response) => {
    response.json().then((db) => {
      const container = document.getElementById("demarest-container");

      // Verificar a largura da tela
      const isMobile = window.innerWidth <= 768;

      // Limitar o número de cards a exibir (por exemplo, 4)
      const numCardsParaExibir = isMobile ? 1 : 4;
      const inicio = contador;
      const fim = inicio + numCardsParaExibir;

      if (inicio >= db.dados.length) {
        contador = 0;
        return fetchDataAndRender();
      }

      const cardsParaExibir = db.dados.slice(inicio, fim);

      if (container) {
        container.innerHTML = " ";

        cardsParaExibir.forEach((data): void => {
          // CRIANDO O CARD
          const card = document.createElement("div");
          card.classList.add("card");

          // CRIANDO AS DESCRIÇÕES E EXTRAINDO DO DB.JSON
          const pt = document.createElement("p");
          pt.textContent = data.pt;
          pt.textContent = data.pt;

          // CRIANDO AS PARTES CONTRÁRIAS
          const ptContrarias = document.createElement("h6");
          ptContrarias.textContent = data.ptContrarias;
          ptContrarias.style.color = "var(--orange)";

          // PARTE INTERESSADA
          const pi = document.createElement("p");
          pi.textContent = data.pi;
          const ptInteressadas = document.createElement("h6");
          ptInteressadas.textContent = data.ptInteressadas;
          ptInteressadas.style.color = "var(--orange)";

          // CNJ
          const cnj = document.createElement("p");
          cnj.textContent = data.cnj;
          const cnjNumber = document.createElement("h6");
          cnjNumber.textContent = data.cnjNumber;

          // PEP
          const pep = document.createElement("p");
          pep.textContent = data.pep;
          const pepNumber = document.createElement("h6");
          pepNumber.textContent = data.pepNumber;

          // STATUS
          const status = document.createElement("p");
          status.textContent = data.status;
          const statusDescription = document.createElement("h6");
          statusDescription.textContent = data.statusDescription;

          // ANDAMENTO
          const andamento = document.createElement("p");
          andamento.textContent = data.andamento;
          const ultimoAndamento = document.createElement("h6");
          ultimoAndamento.textContent = data.ultimoAndamento;

          const dtl = document.createElement("a");
          dtl.textContent = data.dtl;

          // EXIBIR NO PROJETO
          card.appendChild(pt);
          card.appendChild(ptContrarias);
          card.appendChild(pi);
          card.appendChild(ptInteressadas);
          card.appendChild(cnj);
          card.appendChild(cnjNumber);
          card.appendChild(pep);
          card.appendChild(pepNumber);
          card.appendChild(status);
          card.appendChild(statusDescription);
          card.appendChild(andamento);
          card.appendChild(ultimoAndamento);
          card.appendChild(dtl);

          container.appendChild(card);
        });
      }
    });
  });
}

function backCards(): void {
  const isMobile = window.innerWidth <= 768;
  const numCardsParaExibir = isMobile ? 1 : 4;
  contador -= numCardsParaExibir;
  if (contador < 0) {
    contador = 0;
  }
  fetchDataAndRender();
}

function nextCards(): void {
  const isMobile = window.innerWidth <= 768;
  const numCardsParaExibir = isMobile ? 1 : 4;
  contador += numCardsParaExibir;
  fetchDataAndRender();
}

document.getElementById("back-button").onclick = backCards;
document.getElementById("next-button").onclick = nextCards;
