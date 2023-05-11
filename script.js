function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // o código de cima faz sozinho essa função toda aq

  // if (html.classList.contains('light')) {
  //  html.classList.remove('light')
  // } else {
  // html.classList.add('light')
  // }

  // AGORA A TROCA DE IMAGEM!
  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
