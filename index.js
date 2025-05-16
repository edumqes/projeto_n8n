const express = require('express');
const bodyParser = require('body-parser');
const { randomUUID } = require('crypto');

const app = express();
app.use(bodyParser.json());

const usuarios = new Map();

// Simula o cadastro e gera token
app.get('/api/cadastro', (req, res) => {
  const id = Math.floor(Math.random() * 10000);
  const token = randomUUID(); // gera token único
  usuarios.set(id.toString(), token);

  res.json({
    message: 'Cadastro efetuado com sucesso',
    id,
    token
  });
});

// Autentica via ID e token na querystring
app.get('/api/autenticar', (req, res) => {
  const { id, token } = req.query;

  if (!id || !token) {
    return res.status(400).json({ error: 'Parâmetros ausentes' });
  }

  const tokenValido = usuarios.get(id);
  if (tokenValido && tokenValido === token) {
    return res.json({ success: true, message: 'Autenticação bem-sucedida' });
  }

  return res.status(401).json({ error: 'ID inválido ou não autenticado' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});