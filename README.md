# **Pocket Control**

> Um aplicativo híbrido para controle de despesas pessoais, desenvolvido com **React Native** no frontend e **.NET Core** no backend.

---

## **Descrição do Projeto**

O **Pocket Control** é um aplicativo que auxilia os usuários a gerenciar suas finanças pessoais de maneira simples e eficiente. Ele permite registrar despesas com nome, categoria e data, além de exibir uma lista de todas as despesas cadastradas, ajudando no controle e planejamento financeiro.

---

## **Funcionalidades**

- Cadastro de despesas com nome, categoria e data.
- Exibição de uma lista detalhada das despesas cadastradas.
- Navegação simples entre as telas de cadastro e listagem.
- Comunicação em tempo real com uma API RESTful para gerenciamento dos dados.

---

## **Arquitetura**

O projeto utiliza uma arquitetura cliente-servidor distribuída, com as seguintes camadas:

- **Frontend**: Aplicação híbrida desenvolvida em **React Native**, garantindo compatibilidade com Android e iOS.
- **Backend**: API RESTful desenvolvida em **.NET Core**, responsável pelo gerenciamento das despesas.
- **Banco de Dados**: Banco local **SQLite**, acessado via **Entity Framework Core**.

---

## **Tecnologias Utilizadas**

### **Frontend**
- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **React Navigation**: Biblioteca para navegação entre telas.
- **Axios**: Cliente HTTP para integração com o backend.
- **Expo**: Plataforma para desenvolvimento e execução do aplicativo.

### **Backend**
- **ASP.NET Core**: Framework para construção da API.
- **Entity Framework Core**: ORM para gerenciamento do banco de dados.
- **SQLite**: Banco de dados leve e embutido.

---

## **Pré-requisitos**

- **Node.js** (para rodar o frontend)
- **Expo CLI** (para desenvolvimento React Native)
- **.NET SDK** (para rodar o backend)
- Emulador ou dispositivo Android/iOS para testes.
