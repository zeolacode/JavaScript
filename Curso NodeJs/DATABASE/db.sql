/* mysql -h localhost -u root -p */

/* Criar database */
CREATE DATABASE nomeDatabase;

/* Acessar database */
USE nomeDatabase;

/* Criar tabelas */
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

/* DESCRIBE - estrutura da tabela */

/* Inserir dados */
INSERT INTO usuarios(nome, email, idade) values(
    "Pedro Zeola Lopes",
    "teste@gmail.com",
    24
);

/* visualizar dados da table */
SELECT * FROM nomeDaTabela;

/* WHERE */
SELECT * FROM usuarios WHERE idade = 24;
SELECT * FROM usuarios WHERE nome = "Pedro Zeola Lopes";
SELECT * FROM usuarios WHERE idade >= 30;

/* DELETE */
DELETE FROM usuarios; /* deleta toda a tabela */
DELETE FROM usuarios WHERE nome = "Victor";

/* Modificar dado */
UPDATE usuarios SET nome = "Nome Teste" WHERE nome = "Victor";