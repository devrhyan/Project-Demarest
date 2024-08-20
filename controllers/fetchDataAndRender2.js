let contador2 = 0;

function fetchDataAndRender2() {
  fetch("/mock/db-two.json").then((response) => {
    response.json().then((db) => {
      const container = document.getElementById("demarest-container2");

      const isMobile2 = window.innerWidth <= 768;
      const numCardsParaExibir2 = isMobile2 ? 1 : 4;
      const inicio = contador2;
      const fim = inicio + numCardsParaExibir2;

      if (inicio >= db.dados2.length) {
        contador2 = 0;
        return fetchDataAndRender2();
      }

      const cardsParaExibir2 = db.dados2.slice(inicio, fim);

      container.innerHTML = "";

      cardsParaExibir2.forEach((data) => {
        const card3 = document.createElement("div");
        card3.classList.add("card3");

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

        card3.appendChild(fat);
        card3.appendChild(valor);
        card3.appendChild(date);
        card3.appendChild(pagamento);

        container.appendChild(card3);
      });

      contador2 += numCardsParaExibir2;
    });
  });
}

fetchDataAndRender2();

function backCards2() {
  const isMobile2 = window.innerWidth <= 768;
  const numCardsParaExibir2 = isMobile2 ? 1 : 4;
  contador2 -= numCardsParaExibir2;
  if (contador2 < 0) {
    contador2 = 0;
  }
  fetchDataAndRender2();
  console.log("Está funcionando!");
}

document.getElementById("back-button2").addEventListener("onclick", backCards2);

fetchDataAndRender2();
