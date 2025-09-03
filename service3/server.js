const express = require('express');
const app = express();

app.get('/api/service3', (req, res) => {
  res.json({
    message: 'Olá do Serviço 3!',
    timestamp: new Date().toISOString(),
    status: 'active',
  });
});

app.listen(3003, () => console.log('Serviço 3 rodando na porta 3003'));
