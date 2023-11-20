const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
const port = 5232;


app.use(cors());


app.use(bodyParser.json());


app.post('/calcular_imposto', (req, res) => {

  const { nome_produto, valor_produto } = req.body;

 
  if (!nome_produto || !valor_produto) {
    return res.status(400).json({ erro: 'Dados incompletos' });
  }


  const valorProduto = parseFloat(valor_produto);

 
  if (isNaN(valorProduto)) {
    return res.status(400).json({ erro: 'Valor do produto inválido' });
  }

  
  const valorImposto = 3 * valorProduto;


  const resposta = {
    nome_produto,
    valor_produto: valorProduto,
    valor_imposto: valorImposto,
  };

  res.json(resposta);
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
