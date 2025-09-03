# 🚀 Microsserviços com Gateway - Projeto StackBlitz

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Uma aplicação demonstrativa de arquitetura de microsserviços com gateway, desenvolvida para rodar completamente no navegador usando StackBlitz.

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Arquitetura](#-arquitetura)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Como Executar](#-como-executar)
- [Como Acessar o Frontend](#-como-acessar-o-frontend)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Endpoints Disponíveis](#-endpoints-disponíveis)
- [Testando a Aplicação](#-testando-a-aplicação)
- [Solução de Problemas](#-solução-de-problemas)

## 🎯 Sobre o Projeto

Este projeto demonstra uma arquitetura simples de microsserviços composta por:

- **Frontend**: Interface web em HTML/JavaScript
- **Gateway**: Servidor proxy que roteia requisições (simula NGINX)
- **Microsserviço 1**: API REST que retorna mensagens
- **Microsserviço 2**: API REST que retorna mensagens
- **Comunicação**: Todas as requisições passam pelo gateway

### 🎨 Características

- ✅ **Zero Instalação**: Roda completamente no navegador
- ✅ **Arquitetura Real**: Simula ambiente de produção
- ✅ **Proxy Inteligente**: Gateway roteia automaticamente
- ✅ **Interface Responsiva**: Frontend moderno e intuitivo
- ✅ **Logs Detalhados**: Monitoramento em tempo real

## 🏗️ Arquitetura

```
┌─────────────────┐    ┌─────────────────┐
│    Frontend     │────│     Gateway     │
│   (Port 3000)   │    │   (Port 3000)   │
└─────────────────┘    └─────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
            ┌───────▼──────┐    ┌───────▼──────┐
            │  Service 1   │    │  Service 2   │
            │ (Port 3001)  │    │ (Port 3002)  │
            └──────────────┘    └──────────────┘
```

### 🔄 Fluxo de Requisições

1. **Frontend** faz requisição para `/service1/api/service1`
2. **Gateway** recebe e roteia para `http://localhost:3001/api/service1`
3. **Microsserviço 1** processa e retorna resposta
4. **Gateway** retorna resposta para o **Frontend**

## 📋 Pré-requisitos

- **Navegador Web** (Chrome, Firefox, Safari, Edge)
- **Conta no StackBlitz** (gratuita)
- **Conexão com Internet**

> 💡 **Não é necessário instalar Node.js, npm ou qualquer ferramenta localmente!**

## 🚀 Instalação

### 1. **Criar Projeto no StackBlitz**

1. Acesse [https://stackblitz.com](https://stackblitz.com){target=\"_blank\"}
2. Clique em **\"Create Project\"**
3. Selecione **\"Node.js\"** como template
4. Nomeie o projeto (ex: `microsservicos-gateway`)

### 2. **Criar Estrutura de Pastas**

Crie a seguinte estrutura no painel esquerdo:

```
projeto/
├── frontend/
│   └── index.html
├── gateway/
│   └── server.js
├── service1/
│   └── server.js
├── service2/
│   └── server.js
├── package.json
├── .gitignore
└── README.md
```

### 3. **Instalar Dependências**

No terminal integrado do StackBlitz:

```bash
npm install express http-proxy-middleware
```

### 4. **Copiar Código dos Arquivos**

Copie o código de cada arquivo conforme descrito no [guia de implementação](#).

## ▶️ Como Executar

### **⚠️ IMPORTANTE: Ordem de Execução**

Execute os comandos **EM TERMINAIS SEPARADOS** na seguinte ordem:

### **1. Terminal 1 - Microsserviço 1**
```bash
node service1/server.js
```
**Aguarde ver:** `Serviço 1 rodando na porta 3001`

### **2. Terminal 2 - Microsserviço 2**
```bash
node service2/server.js
```
**Aguarde ver:** `Serviço 2 rodando na porta 3002`

### **3. Terminal 3 - Gateway**
```bash
node gateway/server.js
```
**Aguarde ver:** 
```
🚀 Gateway rodando na porta 3000
📱 Frontend disponível em: http://localhost:3000
```

### **🔧 Como Abrir Múltiplos Terminais no StackBlitz**

1. **Clique** no ícone **\"+\"** ao lado da aba do terminal
2. **Ou** use o atalho **Ctrl+Shift+`** (Windows/Linux) ou **Cmd+Shift+`** (Mac)
3. **Repita** para ter 3 terminais abertos

## 🌐 Como Acessar o Frontend

### **✅ MÉTODO CORRETO**

1. **Execute** todos os 3 serviços conforme descrito acima
2. **Aguarde** o StackBlitz gerar a URL pública
3. **Clique** na URL que aparece no painel direito (algo como: `https://stackblitz-starters-abc123.stackblitz.io`)
4. **Ou** clique no botão **\"Open in New Tab\"** 

### **❌ MÉTODOS INCORRETOS**

- ❌ **NÃO** abra o arquivo `index.html` diretamente
- ❌ **NÃO** use `file://` no navegador
- ❌ **NÃO** acesse apenas um dos microsserviços

### **🔍 Como Verificar se Está Correto**

**URL correta deve ser algo como:**
```
https://stackblitz-starters-abc123.stackblitz.io
```

**Console do navegador (F12) deve mostrar:**
```
URL atual: https://stackblitz-starters-abc123.stackblitz.io
✅ Rodando corretamente via gateway
```

## 📁 Estrutura do Projeto

```
projeto/
├── 📁 frontend/                 # Interface do usuário
│   └── 📄 index.html           # Página principal
├── 📁 gateway/                  # Servidor proxy
│   └── 📄 server.js            # Configuração do gateway
├── 📁 service1/                 # Primeiro microsserviço
│   └── 📄 server.js            # API do serviço 1
├── 📁 service2/                 # Segundo microsserviço
│   └── 📄 server.js            # API do serviço 2
├── 📄 package.json             # Dependências do projeto
├── 📄 .gitignore              # Arquivos ignorados pelo Git
└── 📄 README.md               # Este arquivo
```

## 🔗 Endpoints Disponíveis

### **🌐 Frontend**
- **GET** `/` - Página principal da aplicação

### **📡 Microsserviço 1**
- **GET** `/service1/api/service1` - Retorna mensagem do serviço 1

### **🔧 Microsserviço 2**
- **GET** `/service2/api/service2` - Retorna mensagem do serviço 2

### **📋 Exemplos de Resposta**

**Serviço 1:**
```json
{
  \"message\": \"Olá do Serviço 1!\"
}
```

**Serviço 2:**
```json
{
  \"message\": \"Olá do Serviço 2!\"
}
```

## 🧪 Testando a Aplicação

### **1. Teste Visual**
1. **Acesse** a URL do StackBlitz
2. **Veja** a interface com botões coloridos
3. **Clique** em \"📡 Chamar Serviço 1\"
4. **Observe** a resposta JSON aparecer

### **2. Teste via Console**
Abra o console do navegador (F12) e execute:

```javascript
// Testar Serviço 1
fetch('/service1/api/service1')
  .then(res => res.json())
  .then(data => console.log('Serviço 1:', data));

// Testar Serviço 2
fetch('/service2/api/service2')
  .then(res => res.json())
  .then(data => console.log('Serviço 2:', data));
```

### **3. Teste de Conectividade**
Use o botão **\"🔍 Testar Gateway\"** para verificar se tudo está funcionando.

## 🚨 Solução de Problemas

### **Problema: \"fetch failed\" ou URLs com `file://`**

**Causa:** Frontend sendo acessado diretamente, não via gateway.

**Solução:**
1. ✅ **Execute** todos os 3 serviços
2. ✅ **Acesse** APENAS pela URL do StackBlitz
3. ✅ **Nunca** abra `index.html` diretamente

### **Problema: \"Cannot GET /service1/api/service1\"**

**Causa:** Microsserviços não estão rodando.

**Solução:**
1. ✅ **Verifique** se todos os 3 terminais estão ativos
2. ✅ **Reinicie** os serviços na ordem correta
3. ✅ **Aguarde** cada serviço inicializar completamente

### **Problema: \"Port already in use\"**

**Causa:** Porta já está sendo usada.

**Solução:**
1. ✅ **Pare** todos os processos (Ctrl+C)
2. ✅ **Aguarde** alguns segundos
3. ✅ **Execute** novamente na ordem

### **Problema: Página em branco**

**Causa:** Gateway não está servindo o frontend corretamente.

**Solução:**
1. ✅ **Verifique** se o gateway está rodando
2. ✅ **Confira** se o arquivo `index.html` existe
3. ✅ **Recarregue** a página (F5)

### **Problema: CORS Error**

**Causa:** Requisições entre diferentes origens.

**Solução:**
✅ **Já resolvido** - O gateway tem `changeOrigin: true` configurado