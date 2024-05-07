# README

Este é um exemplo simples de como usar o Sequelize para criar e gerenciar um banco de dados em um projeto Node.js.

## Configuração do Banco de Dados

Antes de começar, você precisará configurar o banco de dados. Este projeto utiliza o Sequelize, um ORM para Node.js, para interagir com o banco de dados.

1. Execute o comando

```bash
npx sequelize-cli db:create
```

2. Em seguida, execute para inicializar a configuração do Sequelize.

```bash
npx sequelize-cli init
```

## Criação de Migrações

As migrações são usadas para gerenciar o esquema do banco de dados. Aqui está um exemplo de como criar uma migração para criar uma tabela de usuários:

```bash
npx sequelize-cli migration:create --name create-users
```

## Executando Migrações

Depois de criar as migrações, você precisa aplicá-las ao banco de dados. Execute o seguinte comando:

```bash
npx sequelize-cli db:migrate
```
