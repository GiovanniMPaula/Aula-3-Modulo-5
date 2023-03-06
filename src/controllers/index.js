const express = require('express')
const app = express()
const rotaTarefa = require('./controller/tarefa-controller')
const rotaUsuario = require('./controller/usuario-controller')
const port = 3000

app.get ('/', (req,res) => {
  res.send('<h1>Homepage</h1>')  
})

app.get('/usuario', (req, res) => {
  res.send(rotaUsuario)
})

app.get('/tarefa',(req, res) => {
    res.send(rotaTarefa)
})

app.listen(port, () => {
  console.log(`Aplicação executando na porta ${port}`)
})
