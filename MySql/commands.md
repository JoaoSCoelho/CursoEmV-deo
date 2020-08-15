## Aviso

**Para criar bancos, tabelas, campos... que contenham espaços nos nomes, deve-se coloca-los entre crases**

---

### Criar banco de dados

* create database *nome do banco*;
* create database *nome do banco*
  default character set utf8
  default collate utf8_general_ci;

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
* create table *nome da tabela* (
    id int not null auto_increment,
    nome varchar(30) not null,
    nascimento date,
    sexo enum('M', 'F'),
    peso decimal(5, 2),
    altura decimal(3, 2),
    nacionalidade varchar(20) default 'Brasil',
    primary key (id)
) default charset = utf8;
* create table if not exists *nome da tabela* (
  nome varchar(30) not null unique,
  descricao text,
  carga int unsigned,
  totaulas int unsigned,
  ano year default '2016'
) default charset = utf8;

### Descrever tabelas

* describe *nome da tabela*;
* desc *nome da tabela*;

### Mostrar bancos de dados criados

* show databases;

### Ver banco de dados atualmente aberto

* status;

### Mostrar tabelas

* show tables;

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
  modify profissao varchar(20) not null default '';
* alter table *nome da tabela*
  change column *nome antigo* *nome novo* varchar(20) not null default '';

### Modificar o nome da tabela

* alter table *nome da tabela*
  rename to *novo nome da tabela*;

### Adicionando primary_key à tabela

* alter table *nome da tabela*
  add primary key (*nome da coluna que deve ser uma primary key*);

### Deletando uma tabela

* drop table *nome da tabela*;
* drop table if exists *nome da tabela*;