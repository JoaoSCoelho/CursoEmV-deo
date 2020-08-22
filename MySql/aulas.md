# Banco de dados MySQL

---

# Aula 1

## O que é um banco de dados
Arquivos guardam tabelas, tabelas guardam registros.

Banco de dados deve ter: Base de dados, sistema gerenciador, linguagem de exploração e programas adicionais.

SQL (Structured Query Language) é uma linguagem de consulta.

## História

Antes os dados eram guardados em arquivos sequenciais.

Depois surgiram os discos, que eram um meio de armazenamento direto. (Arquivos de acesso direto)

**Cobol** foi criado pelo departamento de defesa do EUA. No evento Codasyl.

A **IBM** propôs a criação de dados hierárquicos e modelo de dados em rede. 

Edgar quote propôs o modelos relacional, que é o que iremos estudar.

## Alguns Bancos de dados gratuitos

 * MySQL
 * MariaDb
 * Firebird

---

# Aula 2

## História do MySQL

O MySQL nasceu em 1994 na Suécia, criado pelos programadores Michael Widenius e David Axmark, e logo de inicio além de ser um software gratis é livre.

Em 2007 a Sun microsistems comprou o **MySQL**, mas em 2009 a Oracle comprou a sun microsistens, mas isso deixou um dos criadores irritado e criou o **MariaDb** atravéz de um fork do **MySQL**.

## Solicitações do MySQL

* DML (Manipulação)
* DDL (Definição)
* DQL (Solicitações)
* DCL (Controle)
* DTL (Transações)

## Princípios do DICA
* Durabilidade
* Isolamento
* Consistencia
* Atomicidade

*O MySQL é compátível com todos esses princípios*

---

# Aula 3

## Objetivo

Registrar instâncias separadas com características semelhantes.

## Comandos

### Criar banco de dados

* Create database *nome do banco*;

### Usar banco de dados

* use *nome do banco*

### Criar tabelas

* create table *nome da tabela* (
    nome varchar(30),
    idade tinyint,
    sexo char(1),
    peso float,
    altura float,
    nacionalidade varchar(20)
);

### Descrever tabelas

* describe *nome da tabela*;
* desc *nome da tabela*;

### Mostrar bancos de dados criados

* show databases;

### Ver banco de dados atualmente aberto

* status;

### Mostrar tabelas

*show tables;

## Tipos primitivos do MySQL

* Numérico 
    * Inteiro
        * TinyInt
        * SmallInt
        * Int
        * MediumInt
        * BigInt
    * Real
        * Decimal
        * Float
        * Double
        * Real
    * Lógico
        * Bit
        * Boolean

* Data/Tempo
    * Date
    * DateTime
    * TimeStamp
    * Time
    * Year

* Literais
    * Caractere
        * Char *Fixo*
        * VarChar *Variante* 
    * Texto
        * TinyText
        * Text
        * MediumText
        * LongText
    * Binário
        * TinyBlob
        * Blob
        * MediumBlob
        * LongBlob
    * Coleção
        * Enum
        * Set

* Espacial
    * Geometry
    * Point
    * Polygon
    * MultiPolygon

---

# Aula 4

## Comandos

### Apagar banco de dados

* drop database *nome do banco*;

## Constrains

### padrinização de caracteres

* default character set utf8 
* default collate utf8_general_ci

### Outras

* not null ***Não pode ser nulo***
* default ***Define um padrão, caso o campo não seja preenchido***
* auto_increment ***Incrementa +1 automaticamente***

---

# Aula 5

## Comandos

### Inserir dados na tabela

* insert into *nome da tabela*
  (nome, nascimento, sexo, peso, altura, nacionalidade)
  values
  ('Godofredo','1984-01-02','M','78.5','1.83','Brasil');
* insert into *nome da tabela*
  (id, nome, nascimento, sexo, peso, altura, nacionalidade)
  values
  (DEFAULT,'Creuza','1920-12-30','F','55.2','1.65',DEFAULT);
* insert into *nome da tabela* values
  (DEFAULT,'Adalgiza','1930-11-02','F','63.2','1.75', 'Irlanda'); **Apenas para quando os dados estiverem na mesma ordem em que foram criados na tabela e não estiver nenhum omitido!**
* insert into *nome da tabela* values
  (DEFAULT, 'Cláudio', '1975-4-22', 'M', '99.0', '2.15', 'Brasil'),
  (default, 'Pedro', '1999-12-3', 'M', '87', '2', default),
  (DEFAULT, 'Janaína', '1987-11-12', 'F', '75.4', '1.66', 'EUA');

### Selecionar tudo de uma tabela

* select * from *nome da tabela*;

---

# Aula 6

## Comandos

### Adicionar colunas na tabela

* alter table *nome da tabela*
  add column profissao varchar(10);
* alter table *nome da tabela*
  add column profissao varchar(10) after nome; **Adiciona a nova coluna depois da coluna nome**
* alter table *nome da tabela*
  add column codigo int first; **Adiciona a nova coluna na primeira posição**
* alter table *nome da tabela*
  add codigo int first; **Adiciona a nova coluna na primeira posição**

### Remover uma coluna na tabela

* alter table *nome da tabela*
  drop column profissao;

### Modificar colunas na tabela

* alter table *nome da tabela*
  modify column profissao varchar(20) not null default '';
* alter table *nome da tabela*
  change column *nome antigo* *nome novo* varchar(20) not null default '';

### Modificar o nome da tabela

* alter table *nome da tabela*
  rename to *novo nome da tabela*;

### Criar tabelas 

* create table if not exists *nome da tabela* (
  nome varchar(30) not null unique,
  descricao text,
  carga int unsigned,
  totaulas int unsigned,
  ano year default '2016'
) default charset = utf8;

### Adicionando primary_key à tabela

* alter table *nome da tabela*
  add primary key (*nome da coluna que deve ser uma primary key*);

### Deletando uma tabela

* drop table *nome da tabela*;
* drop table if exists *nome da tabela*;

## Constrains

### Outras

* unique ***O valor não pode ser repetido, mas não significa que seja uma primary_key***

* unsigned ***O valor não pode ser negativo, logo não precisa de sinal, sendo assim, economiza espaço em disco***

---

# Aula 7

## Comandos

### Modificando uma coluna na linha

* update *nome da tabela*
  set *nome da coluna* = '*novo valor*'
  where *nome de outra coluna* = '*valor dela*';
* update *nome da tabela*
  set *nome da coluna* = '*novo valor*', *nome da coluna* = '*novo valor*'
  where *nome de outra coluna* = '*valor dela*';
* update *nome da tabela*
  set *nome da coluna* = '*novo valor*'
  where *nome de outra coluna* = '*valor dela*'
  limit 1;

### Deletando linhas/Registros

* delete from *nome da tabela*
  where *nome da coluna* = '*valor dela*';

### Deletando todos os registros de uma tabela

* truncate table *nome da tabela*;
* truncate *nome da tabela*;

# Aula 10

## Comandos

### Mostrando o comando utilizado para criar a tabela

* show create table *nome da tabela*;

### Mostrando o comando utilizado para criar o banco de dados

* show create database *nome do banco*;

# Aula 11

## Comandos

### Selecionar colunas ordenando por uma determinada coluna

* select * from *nome da tabela*
  order by *nome da coluna*; **De cima para baixo**
* select * from *nome da tabela*
  order by *nome da coluna* asc; **De cima para baixo também**
* select * from *nome da tabela*
  order by *nome da coluna* desc; **De baixo para cima**

### Selecionar colunas especificas ordenando por uma determinada coluna

* select *nome da coluna*, *nome de outra coluna*, *nome de outra coluna* from *nome da tabela*
  order by *nome de uma coluna*;

### Selecionar colunas especificas ordendando por mais de uma tabela

* select *nome da coluna*, *nome de outra coluna*, *nome de outra coluna* from *nome da tabela*
  order by *nome de uma coluna*, *nome de outra coluna*;

### Selecionar colunas ordenando por uma determinada tabela e filtrando por linhas

* select * from *nome da tabela*
  where *nome da coluna* = '*valor da coluna*'
  order by *nome de uma coluna*;
* select * from *nome da tabela*
  where *nome da coluna* <= '*valor da coluna*' **Não necessariamente precisa ser uma igualdade!**
  order by *nome de uma coluna*;
* select *nome da coluna*, *nome de outra coluna* from *nome da tabela*
  where *nome de uma coluna* between '*valor inicial*' and '*valor final*'
  order by *nome de uma coluna* desc, *nome de outra coluna*;

### Selecionar colunas filtrando por linhas

* select * from *nome da tabela*
  where *nome da coluna* between '*valor inicial*' and '*valor final*'; **Todos os registros que tenham o valor na *coluna tal* entre o *valor inicial* e o *valor final***

## Operadores lógicos

* **=** *igual*
* **!=** *diferente*
* **<>** *diferente*
* **>** *maior que*
* **<** *menor que*
* **>=** *maior ou igual a*
* **<=** *menor ou igual a* 