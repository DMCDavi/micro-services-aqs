const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();

// Proxy para os serviços
app.use(
  '/service1',
  createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
  }),
);

app.use(
  '/service2',
  createProxyMiddleware({
    target: 'http://localhost:3002',
    changeOrigin: true,
  }),
);

// Servir o frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(3000, () => console.log('Gateway rodando na porta 3000'));
