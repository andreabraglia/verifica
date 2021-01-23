// NON CANCELLARE QUESTE RIGHE
const express = require("express") // NON CANCELLARE
const app = new express() // NON CANCELLARE
app.use(require("body-parser").json()) // NON CANCELLARE
// NON CANCELLARE LE RIGHE PRECEDENTI

// PER ACCREDITARSI USARE QUESTO ENDPOINT
app.get("/accreditamento", (req, res) => {
  res.send({ nome: "esempio", cognome: "esempio" })
})

// AGGIUNGERE QUI GLI ALTRI ENDPOINT !!!!!!!!!



// NON CANCELLARE LA PROSSIMA RIGA
app.listen(8080, console.log("Server port: 8080 \nServer link: http://localhost:8080")) // NON CANCELLARE