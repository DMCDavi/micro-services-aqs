const express = require('express');
const app = express();

app.get('/api/service2', (req, res) => {
  res.json({ message: 'Olá do Serviço 2!' });
});

app.listen(3002, () => console.log('Serviço 2 rodando na porta 3002'));
