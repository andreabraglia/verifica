const fetch = require("node-fetch")

fetch("https://jsonplaceholder.typicode.com/posts") // tra le virgolette ci va l'url da chiamare
  .then(res => res.json()) // questo ci va sempre
  .then(res => console.log(res)) // qua si esegue quello che si vuole con la risposta che ci viene data
  .catch(err => console.error(err)) // questo ci va sempre (gestisce eventuali errori)

const chiamata = async() => {
  try {
    let res = fetch("https://jsonplaceholder.typicode.com/posts") // tra le virgolette ci va l'url da chiamare
    res = await res.json() // questo ci va sempre
    return res // fate cioò che vi tira
  } catch (err) {
    console.error(err) // questo ci va sempre
  }
}