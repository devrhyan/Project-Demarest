function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
  /*if (html.classList.contains("light")) {
      html.classList.remove("light")
    } else {
      html.classList.add("light")
    }*/

  /*Troca de imagem*/
  /*pegar a tag img*/
  const img = document.querySelector("#profile img");

  /*substituir a imagem*/
  if (html.classList.contains("light")) {
    /*se estiver light mode, adicionar a imagem light*/
    // img.setAttribute("src", "./imagens/ideiayescuro.png.png")
  } else {
    /*se estiver sem light, manter a imagem nornmal*/
    // img.setAttribute("src", "./imagens/imagem.ideiay.png.jpg")
  }
}
