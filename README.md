# Sistema de Gerenciamento de Prontuários Eletrônicos (SGPE)

# ✅ Checklist de Implantação da Arquitetura

**Stack:** Next.js + Prisma ORM + MariaDB via Docker  
**Ambiente:** Local

---

## 🧱 Estrutura Base do Projeto

- [x] Criar projeto com Next.js  

---

## 📦 Instalação e Configuração do Prisma

- [ ] Instalar dependências do Prisma  
- [ ] Inicializar o Prisma no projeto  
- [ ] Verificar a criação da pasta `/prisma` e do arquivo `schema.prisma`

---

## 🐬 Configuração do MariaDB com Docker

- [ ] Criar o arquivo `docker-compose.yml`  
- [ ] Definir os serviços com imagem do MariaDB, variáveis de ambiente e volume  
- [ ] Iniciar os containers com Docker

---

## 🔌 Conectar Prisma ao MariaDB

- [ ] Editar o `.env` para configurar a URL de conexão do banco  
- [ ] Definir o modelo inicial no arquivo `schema.prisma`  
- [ ] Rodar a migração inicial do banco de dados  
- [ ] (Opcional) Visualizar os dados com Prisma Studio

---

## 🧪 Testes locais e validação

- [ ] Criar rota API de exemplo usando Prisma  
- [ ] Testar operações de CRUD básicas  
- [ ] Confirmar persistência correta dos dados no banco MariaDB

---

## 📂 Organização de Pastas e Convenções

- [ ] Criar pastas padrão: `/lib`, `/services`, `/prisma`, `/components`, `/pages/api`  
- [ ] Definir padrão para nomeação de arquivos e funções  
- [ ] Adotar estrutura modular para escalar o projeto

---


## 📦 Distribuição e Empacotamento

- [ ] Adicionar Dockerfile para empacotamento da aplicação Next.js  
- [ ] Ajustar `docker-compose.yml` para incluir o app Next.js como serviço  
- [ ] Validar build local do projeto completo via Docker

---

## 🔁 Backup e Persistência de Dados

- [ ] Criar rotina/documentação para exportação manual do banco  
- [ ] (Opcional) Criar script de backup automático local

---

# ✅ Checklist de Construção dos Requisitos Funcionais

**Objetivo:** Desenvolver o sistema por funcionalidade, completando cada uma antes de avançar para a próxima.

---

## 📋 Preparação Inicial

- [x] Definir escopo geral e objetivos do sistema  
- [x] Levantar atores envolvidos (apenas o médico)  
- [x] Definir requisitos não funcionais  
- [x] Documentar todos os requisitos funcionais levantados

---

## 🧠 Funcionalidade 1: Cadastro de Pacientes

- [ ] Levantar requisitos detalhados  
- [ ] Criar modelo no banco de dados (Paciente)  
- [ ] Implementar telas de criação, edição, listagem e exclusão  
- [ ] Validar dados obrigatórios e formatos  
- [ ] Testar e revisar a funcionalidade

---

## 🗂️ Funcionalidade 2: Registro de Atendimentos

- [ ] Levantar requisitos detalhados  
- [ ] Criar modelo no banco de dados (Atendimento)  
- [ ] Relacionar com paciente  
- [ ] Implementar tela de registro do atendimento  
- [ ] Incluir campos de anamnese, diagnóstico, conduta etc.  
- [ ] Testar e revisar a funcionalidade

---

## 📅 Funcionalidade 3: Agendamento de Consultas

- [ ] Levantar requisitos detalhados  
- [ ] Criar modelo no banco de dados (Consulta)  
- [ ] Relacionar com paciente  
- [ ] Implementar tela de calendário e agendamento  
- [ ] Validar sobreposição de horários  
- [ ] Testar e revisar a funcionalidade

---

## 🔍 Funcionalidade 4: Busca e Filtros

- [ ] Levantar requisitos detalhados  
- [ ] Adicionar campo de busca por nome, CPF, data, etc.  
- [ ] Permitir filtros por tipo de atendimento, período, etc.  
- [ ] Testar e revisar a funcionalidade

---

## 📊 Funcionalidade 5: Visualização e Relatórios

- [ ] Levantar requisitos detalhados  
- [ ] Criar relatórios simples (PDF, tabela exportável)  
- [ ] Permitir visualização do histórico de atendimentos  
- [ ] Testar e revisar a funcionalidade

---

## 🔒 Funcionalidade 6: Autenticação (opcional para ambiente local)

- [ ] Levantar requisitos (senha de acesso, biometria, etc.)  
- [ ] Implementar proteção básica de acesso ao sistema  
- [ ] Testar fluxo de login/localStorage

---

## 📄 Finalização

- [ ] Validar integração entre todas as funcionalidades  
- [ ] Realizar testes de usabilidade  
- [ ] Documentar uso básico para o médico  
- [ ] Fazer backup do banco de dados local

---

# 📘 Requisitos Funcionais - Sistema de Gerenciamento de Prontuários Eletrônicos (Uso Local)

**Mini-mundo:** Sistema local, voltado para um único médico, para controle pessoal dos atendimentos.

---

## 1. Autenticação simples

- Login com nome de usuário e senha  
- Alteração de senha pelo médico

---

## 2. Cadastro de pacientes

- Nome, nascimento, sexo, CPF, telefone, endereço  
- Editar/excluir dados  
- Listar pacientes

---

## 3. Gerenciamento de prontuários

- Criar registros com data/hora, queixa, histórico, diagnóstico, conduta, observações  
- Editar/excluir prontuários  
- Histórico cronológico por paciente

---

## 4. Prescrições médicas

- Registrar prescrições dentro do prontuário  
- Exportar/imprimir PDF

---

## 5. Busca e filtragem

- Buscar pacientes por nome  
- Buscar atendimentos por data ou palavra-chave

---

## 6. Agenda simplificada (opcional)

- Registrar consultas futuras  
- Associar paciente/data/horário  
- Exibir lista ou calendário

---

## 7. Backup e recuperação

- Exportar dados localmente  
- Importar para restauração

---


## 🚀 Sobre o Projeto

SGPE é uma aplicação local para controle e gerenciamento dos prontuários médicos de um profissional. O sistema permite cadastro de pacientes, registro de atendimentos, agendamento de consultas, busca avançada e geração de relatórios simples.

---

## 🛠️ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)  
- [Prisma ORM](https://www.prisma.io/)  
- [MariaDB](https://mariadb.org/)  
- [Docker](https://www.docker.com/)

# 📘 Documentação Técnica do Projeto Next.js

Este projeto foi criado com [Next.js](https://nextjs.org) usando o comando [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## ▶️ Primeiros Passos

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```
