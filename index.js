// ************************** SELETTORI *****************************
/* const primoDiv = document.getElementById("primo-div")

primoDiv.innerText = "Contenutoooooooooooooooooooooo"
primoDiv.style.background = "red"

const contenitori = document.getElementsByClassName("contenitore")

contenitori[0].style.background = "blue"
contenitori[0].style.background = "green"

const arrayDiH1 = document.getElementsByTagName("h1")

const primoDiv2 = document.querySelector("#primo-div") // primoDiv === primoDiv2
const contenitori2 = document.querySelectorAll(".contenitore") // contenitori === contenitori2
 */

const cambiaTestoH1 = nuovoTesto => {
  // Dato il nuovoTesto voglio sostituirlo al testo attuale dell'h1

  // 1. Seleziono con js l'h1
  /*   const listaDiH1 = document.getElementsByTagName("h1")

    const h1 = listaDiH1[0] */

  const h1 = document.getElementsByTagName("h1")[0]
  // alternativa const h1 = document.querySelector("h1")

  h1.innerText = nuovoTesto // Sovrascrivo il testo attuale con il testo passato come parametro
}
