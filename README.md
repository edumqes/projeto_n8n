# Projeto de Automação com n8n, API de Cadastro e IA (OpenAI)

Este projeto automatiza um fluxo de teste de sistema de cadastro utilizando:

- **n8n** (orquestrador de automações)
- **API Node.js** (simula cadastro/autenticação)
- **OpenAI** (processamento via IA generativa)
- **Envio de e-mails** (em caso de falha)

---

## Estrutura do Projeto

```plaintext
📁 projeto-n8n
├── docker-compose.yml
├── api/
│   ├── index.js
│   └── package.json
└── fluxos/
    └── fluxo-cadastro-com-ia.json

## Estrutura do Projeto

1. Pré-requisitos
Docker + Docker Compose instalados

Conta e chave da API OpenAI (https://platform.openai.com/account/api-keys)

2. Subir os containers
bash
Copiar
Editar
docker-compose up --build
Acesse o n8n em: http://localhost:5678

Fluxo Automatizado (n8n)
Etapas:
Cadastro: GET /api/cadastro gera ID aleatório.

Autenticação: GET /api/auth/:id valida o ID.

Condição:

Se sucesso, envia prompt para OpenAI.

Se falha, envia e-mail de notificação.

Resposta da IA: exibida no log ou encaminhada por e-mail.

Variáveis e credenciais
OpenAI API Key: Configurar no nó "IA - OpenAI" ou salvar via n8n > Credentials.

E-mail: Configure SMTP no nó de envio.

Fluxo Automatizado (n8n)
Etapas:
Cadastro: GET /api/cadastro gera ID aleatório.

Autenticação: GET /api/auth/:id valida o ID.

Condição:

Se sucesso, envia prompt para OpenAI.

Se falha, envia e-mail de notificação.

Resposta da IA: exibida no log ou encaminhada por e-mail.

Variáveis e credenciais
OpenAI API Key: Configurar no nó "IA - OpenAI" ou salvar via n8n > Credentials.

E-mail: Configure SMTP no nó de envio.

🛠 Exemplo de testes
Teste de cadastro e autenticação:
bash
Copiar
Editar
curl http://localhost:3000/api/cadastro
curl http://localhost:3000/api/auth/1234

Fluxo n8n
Importar arquivo:

bash
Copiar
Editar
fluxos/fluxo-cadastro-com-ia.json

✅ Status
 API funcional com autenticação

 Fluxo automatizado no n8n

 Integração com OpenAI

 Envio de e-mail em caso de falha

📬 Contato
Em caso de dúvidas ou melhorias, entre em contato!

