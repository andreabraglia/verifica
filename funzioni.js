// Questa funziona dato un array ne restituisce uno con solo i numeri pari
// ESEMPIO: numeriPari(array)
// LEGENDA: numeriPari(array)
const numeriPari = (data) => data.filter(e => (e - 1) % 2)

// Questa funziona dato un array ne restituisce uno con solo i numeri pari
// ESEMPIO: numeriDispari(array)
// LEGENDA: numeriDispari(array)
const numeriDispari = (data) => data.filter(e => e % 2)

// Questa funziona dato un array ne restituisce uno con solo le parole sono più lunghe di un tot
// ESEMPIO: contaCaratteriMax(array, 5)
// LEGENDA: contaCaratteriMax(array, numero-minimo-di-caratteri)
const contaCaratteriMax = (data, min) => data.filter(e => e.length > min)

// Questa funziona dato un array ne restituisce uno con solo le parole che sono più corte di un tot
// ESEMPIO: contaCaratteriMin(array, 5)
// LEGENDA: contaCaratteriMin(array, numero-massimo-di-caratteri)
const contaCaratteriMin = (data, max) => data.filter(e => e.length < max)

// Questa funzione dato un array restituisce la somma di tutti i numeri
// ESEMPIO: somma(array)
// LEGENDA: somma(array)
const somma = data.reduce((acc, e) => acc += e, 0)

// Questa funzione dato un id restituisce i commenti
// ESEMPIO: commenti(id).then(data => {
//              console.log(data)
//          })
// LEGENDA: commenti(id-del-post)
const commenti = async (id) => {
  try {
    let res = await fetch(`https://jsonplaceholder.typicode.com/post/${id}/comments`)
    res = await res.json()
    return res
  } catch (err) {
    console.log(err)
  }
}

// Questa funzione restituisce tutti i post
// ESEMPIO: post().then(data => {
//              console.log(data)
//          })
// LEGENDA: commenti()
const post = async () => {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts")
    res = await res.json()
    return res
  } catch (err) {
    console.log(err)
  }
}