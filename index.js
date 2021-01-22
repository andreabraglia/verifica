const express = require("express")
const app = new express()

const path = require("path")

app.use(express.static(path.join(__dirname, "public")))
app.use(require("body-parser").json())

// localhost:8080/?name=pippo
app.get("/", (req, res) => {
  const query = req.query  // { name: "pippo" }
  const headers = req.headers // headers della richiesta

  res.send("<h1>Ciao</h1>") // manda una risposta
})

// localhost:8080/post/1
app.get("/post/:id", (req, res) => {
  const params = req.params // { id: 1 }

  res.send("Il parametro inserito è:" + params.id)
})

// Endpoint in post
app.post("/nome", (req, res) => {
  const body = req.body  // body della request

  res.send("Esempio di endpoint in post")
})

// Endpoint che restituisce la pagina HTMl che è presente in public e si chiama index.html
app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"))
})

app.listen(8080, console.log("Server port: 8080 \nServer link: http://localhost:8080"))