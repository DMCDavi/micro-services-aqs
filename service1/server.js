const express = require("express");
const app = express();

app.get("/api/service1", (req, res) => {
  res.json({ message: "Olá do Serviço 1!" });
});

app.listen(3001, () => console.log("Serviço 1 rodando na porta 3001"));
