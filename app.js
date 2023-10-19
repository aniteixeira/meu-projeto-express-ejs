const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "Previne Rastreamentos Indesejados", preco: "400", descricao: "AirTag", imagem: "produto1.jpg"},
  {id: 2, nome: "Previne Arranhões", preco: "719", descricao: "Capa de tecido para iPhone 15 Pro", imagem: "produto2.jpg"},
  {id: 3, nome: "Garante segurança", preco: "719", descricao: "Carteira de tecido para iPhone – Azul-Pacífico", imagem: "produto3.jpg"},
  {id: 4, nome: "Oferece Recarga Rápida", preco: "219", descricao: "Adaptador de energia USB-C", imagem: "produto4.jpg"},
  {id: 5, nome: "Mantém a Compatibilidade com o Padrão Qi", preco: "479", descricao: "Carregador MagSafe", imagem: "produto5.jpg"},
  {id: 6, nome: "Proteção ao seu Aparelho", preco: "569", descricao: "Capa de silicone para iPhone 15 ", imagem: "produto6.jpg"},
  {id: 7, nome: "Previne Rastreamentos Indesejados", preco: "400", descricao: "AirTag", imagem: "produto7.jpg"},
  {id: 8, nome: "Previne Rastreamentos Indesejados", preco: "400", descricao: "AirTag", imagem: "produto8.jpg"},
  {id: 9, nome: "Previne Rastreamentos Indesejados", preco: "400", descricao: "AirTag", imagem: "produto9.jpg"},
  {id: 10, nome: "Previne Rastreamentos Indesejados", preco: "400", descricao: "AirTag", imagem: "produto10.jpg"},
]


app.get('/', (req, res) => {
  res.render('index', { message: 'Olá, Mundo!' });
});

app.get('/produto', (req, res) => {
  res.render('produto', { message: 'Olá, Word!' });
});

app.get('/produto1', (req, res) => {
  res.render('produto1', { message: 'Olá, Word!' });
});

app.get('/produto2', (req, res) => {
  res.render('produto2', { message: 'Olá, Word!' });
});

app.get('/produto3', (req, res) => {
  res.render('produto3', { message: 'Olá, Word!' });
});

app.get('/produto4', (req, res) => {
  res.render('produto4', { message: 'Olá, Word!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

