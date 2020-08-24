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

### Mostrando o comando utilizado para criar a tabela

* show create table *nome da tabela*;

### Mostrando o comando utilizado para criar o banco de dados

* show create database *nome do banco*;

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
  where *nome de uma coluna* between '*valor inicial*' and '*valor final*' **Todos os registros que tenham o valor na *coluna tal* entre o *valor inicial* e o *valor final***
  order by *nome de uma coluna* desc, *nome de outra coluna*;

### Selecionar colunas filtrando por linhas

* select * from *nome da tabela*
  where *nome da coluna* between '*valor inicial*' and '*valor final*'; **Todos os registros que tenham o valor na *coluna tal* entre o *valor inicial* e o *valor final***
* select * from *nome da tebala*
  where *nome da coluna* in (2014, 2016); **Todos os registros que tenham o valor na *coluna tal* iguais aos valores dentro do *in ()***
* select * from *nome da tabela*
  where *nome da coluna* > *valor* and *nome de outra coluna* < *outro valor*
* select * from *nome da tabela*
  where *nome da coluna* > *valor* or *nome de outra coluna* < *outro valor*
* select * from *nome da tabela*
  where *nome de uma coluna* like '*valor dela*%'; **Todos os registros que começem com o valor tal**
* select * from *nome da tabela*
  where *nome de uma coluna* like '%*valor dela*'; **Todos os registros que terminem com o valor tal**
* select * from *nome da tabela*
  where *nome de uma coluna* like '%*valor dela*%'; **Todos os registros que tenham o valor tal naquela coluna**

### Selecionar colunas distinguindo seus valores

* select distinct *nome da coluna* from *nome da tabela*; **Seleciona todos os registros, mas sem repetição de nenhum deles**

### Contar registros

* select count(*) from *nome da tabela*;
* select count(*) from *nome da tabela*
  where *nome da coluna* = '*valor dela*'; 

### Pegar o maior valor de uma coluna

* select max(*nome da coluna*) from *nome da tabela*;

### Pegar o menor valor de uma coluna

* select min(*nome da coluna*) from *nome da tabela*;

### Somar todos os valores de uma coluna

* select sum(*nome da coluna*) from *nome da tabela*;

### Pegar a média dos valores de uma coluna

* select avg(*nome da coluna*) from *nome da tabela*;