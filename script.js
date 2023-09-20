function toggleMode() {
  const html = document.documentElement
  //  if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  //}
  // se contém e for verdadeiro, ele remove o light, se for falso, ele adiciona o light.
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, add img light
    img.setAttribute("src", "./assets/assets/Avatar-light.png")
  } else {
    // se tiver sem light mode, manter a img normal
    img.setAttribute("src", "./assets/assets/Avatar.png")
  }
}
