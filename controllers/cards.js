
    /*function fetchDataAndRender(direcao) {
      fetch("/mock/db.json").then((response) => {
        response.json().then((db) => {
          const container = document.getElementById("demarest-container");

          const numCardsParaExibir = 4;
          const cardsParaExibir = db.dados.slice(0, numCardsParaExibir);

          cardsParaExibir.forEach((data) => {


            console.log("Dados ..", db.dados);
            db.dados.map((data) => {
              //CRIANDO O CARD
              const card = document.createElement("div")
              card.classList.add("card")

              //CRIANDO AS DESCRIÇÕES E EXTRAINDO DO DB.JSON
              const pt = document.createElement("p")
              pt.textContent = data.pt

              //CRIANDO AS PARTES CONTRÁRIAS
              const ptContrarias = document.createElement("h6")
              ptContrarias.textContent = data.ptContrarias
              ptContrarias.style.color = 'var(--orange)';

              //PARTE INTERESSADA
              const pi = document.createElement("p")
              pi.textContent = data.pi
              const ptInteressadas = document.createElement("h6")
              ptInteressadas.textContent = data.ptInteressadas
              ptInteressadas.style.color = 'var(--orange)';

              //CNJ
              const cnj = document.createElement("p")
              cnj.textContent = data.cnj
              const cnjNumber = document.createElement("h6")
              cnjNumber.textContent = data.cnjNumber

              //PEP
              const pep = document.createElement("p")
              pep.textContent = data.pep
              const pepNumber = document.createElement("h6")
              pepNumber.textContent = data.pepNumber

              //STATUS
              const status = document.createElement("p")
              status.textContent = data.status
              const statusDescription = document.createElement("h6")
              statusDescription.textContent = data.statusDescription

              //ANDAMENTO
              const andamento = document.createElement("p")
              andamento.textContent = data.andamento
              const ultimoAndamento = document.createElement("h6")
              ultimoAndamento.textContent = data.ultimoAndamento

              const dtl = document.createElement("a")
              dtl.textContent = data.dtl

              //EXIBIR NO PROJETO
              card.appendChild(pt)
              card.appendChild(ptContrarias)
              card.appendChild(pi)
              card.appendChild(ptInteressadas)
              card.appendChild(cnj)
              card.appendChild(cnjNumber)
              card.appendChild(pep)
              card.appendChild(pepNumber)
              card.appendChild(status)
              card.appendChild(statusDescription)
              card.appendChild(andamento)
              card.appendChild(ultimoAndamento)
              card.appendChild(dtl)

              container.appendChild(card)
            })
          })
        })
      })
    }
    fetchDataAndRender(document.getElementById('demarest-container2'));


    function mensagem() {
      alert("A função foi chamada!")
    }*/
    function fetchDataAndRender(direcao) {
        fetch("/mock/db.json").then((response) => {
          response.json().then((db) => {
            const container = document.getElementById("demarest-container");
  
            // Limitar o número de cards a exibir (por exemplo, 4)
            const numCardsParaExibir = 4;
            const cardsParaExibir = db.dados.slice(0, numCardsParaExibir);
  
            container.innerHTML = "";
  
            cardsParaExibir.forEach((data) => {
              // CRIANDO O CARD
              const card = document.createElement("div");
              card.classList.add("card");
  
              // CRIANDO AS DESCRIÇÕES E EXTRAINDO DO DB.JSON
              const pt = document.createElement("p");
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
          });
        });
      }
  
  
      fetchDataAndRender2(document.getElementById("demarest-container2"));
  
      function fetchDataAndRender2(direcao) {
        fetch("/mock/db-two.json").then((response) => {
          response.json().then((db) => {
            const container = document.getElementById("demarest-container2");
  
            const numCardsParaExibir = 4;
            const cardsParaExibir = db.dados2.slice(0, numCardsParaExibir);
  
            container.innerHTML = "";
  
            cardsParaExibir.forEach((data) => {
  
              const card2 = document.createElement("div");
              card2.classList.add("card2");
  
  
              const fat = document.createElement("a");
              fat.textContent = data.fat;
  
              const valor = document.createElement("h3");
              valor.textContent = data.valor;
              valor.style.color = "var(--orange)";
  
              const date = document.createElement("p");
              date.textContent = data.data;
  
              const pagamento = document.createElement("button");
              pagamento.textContent = data.pagamento;
              pagamento.style.color = "white";
  
              card2.appendChild(fat);
              card2.appendChild(valor);
              card2.appendChild(date);
              card2.appendChild(pagamento);
  
  
              container.appendChild(card2);
            });
          });
        });
      }
  
      fetchDataAndRender(document.getElementById("demarest-container2"));
      function adicionarMaisCards() {
        const container = document.getElementById("demarest-container2");
        const numCardsParaAdicionar = 4;
        const cardsParaAdicionar = db.dados2.slice(numCardsParaAdicionar, numCardsParaAdicionar + numCardsParaExibir);
      
        cardsParaAdicionar.forEach((data) => {
          const card2 = document.createElement("div");
          card2.classList.add("card2");
      
          const fat = document.createElement("a");
          fat.textContent = data.fat;
      
          const valor = document.createElement("h3");
          valor.textContent = data.valor;
          valor.style.color = "var(--orange)";
      
          const date = document.createElement("p");
          date.textContent = data.data;
      
          const pagamento = document.createElement("button");
          pagamento.textContent = data.pagamento;
          pagamento.style.color = "white";
      
          card2.appendChild(fat);
          card2.appendChild(valor);
          card2.appendChild(date);
          card2.appendChild(pagamento);
      
          container.appendChild(card2);
        });
      }
      
      // Supondo que haja um botão com id "load-more-button" que aciona a função adicionarMaisCards
      const loadMoreButton = document.getElementById("load-more-button");
      loadMoreButton.addEventListener("click", adicionarMaisCards);