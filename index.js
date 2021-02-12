// NON CANCELLARE QUESTA RIGHE
const express = require("express"); const app = new express(); app.use(express.json())
// NON CANCELLARE LE RIGHE PRECEDENTI


// INSERISCI IL NOME!!!!!!!!!
const nome = "inserisci il tuo nome"
const cognome = "inserisci il tuo cognome"
// INSERISCI IL NOME!!!!!!!!!


// NON CANCELLARE QUESTA RIGHE
if (nome === "inserisci il tuo nome" || cognome === "inserisci il tuo cognome") { return console.log("inserisci nome e cognome tra le virgolette a riga 7 e 8") }
// NON CANCELLARE LE RIGHE PRECEDENTI

// PER ACCREDITARSI USARE QUESTO ENDPOINT
app.get("/accreditamento", (req, res) => {
  if (nome !== "inserisci il tuo nome" && cognome !== "inserisci il tuo cognome") {
    res.send({
      nome, cognome
    })
  }
})

// AGGIUNGERE QUI GLI ALTRI ENDPOINT !!!!!!!!!



// NON CANCELLARE LA PROSSIMA RIGA
app.listen(8080, console.log("Server port: 8080 \nServer link: http://localhost:8080")) // NON CANCELLARE