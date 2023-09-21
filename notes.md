- framework Express - utilizado para lidar com requisições HTTP.

- node permite ir acrescentando os módulos que a gente precisa.

- métodos de requisição (GET, POST, PUT, DELETE, PATCH)
    - GET - leitura
    - POST - criação
    - PUT - Atualização
    - DELETE - Deleção
    - PATCH - Atualização parcial

- Route Params - utilizando recursos e parâmetros em nossa Rota
    ex. https://enderecoservidor.com.br/users/5
        user -> recurso
        5 -> parâmetro

- Query Params
    ex.https://enderecoservidor.com.br/users?page=2&limit=10
         depois ? é o query params
         add & para add um novo params

         ? -> separador
         page -> conteudo
        2 -> valor
        & -> separador
        limit ->  chave
        10 -> valor

A diferença entre eles é que no route params os valores são obrigatórios

- Recurso a biblioteca Nodemon. Com ele, não precisaremos ficar reiniciando o nosso servidor manualmente sempre que houver uma alteração.

- [Insomnia](https://insomnia.rest/)

- Body Params
    Quando usa o POST podemos enviar um cadastro através d corpo da requisição

- Controllers
    Camada - parte resposavel - por processar as requisições da aplicação, onde vamos ter as regras de negócio

- Servidor
    ponto de entrada da requisição

- HTTP Status Code
    Adiciona uma numeração na resposta que representa um estado

    1xx - informativo - a solicitação foi aceita ou o processamento continua em andamento
        ex. 102 processando

    2xx - sucesso
        ex. 200 requisição bem sucedida
        201 criado - geralmente utilizado para o POST após uma inserção

    3xx - redirecionamento
        ex. 301 movido permanentemente
        302 movido
    
    4xx - erro do cliente
        ex. 400 bad request
        401 not authorized
        404 not found

    5xx - erro no servidor - o servidor falhou ao concluir a solicitação
        ex. 500 erro interno

- `Middleware`é uma função que consegue interceptar a requisição
    - tem acesso ao objeto de solicitação (requisição), o objeto de resposta (resposta), e a próxima função de middleware no ciclo solicitação-resposta do aplicativo.
    - A próxima função de middleware é comumente denotada por uma variável chamada `next`
    - Podem:
        - Executar qualquer código
        - Fazer mudanças nos objetos de solicitação e resposta
        - Encerrar o ciclo de solicitação-resposta
        - Chamar o póximo middleware na pilha

- Banco de Dados
    são as suas propriedades/estruturas como: Tabela, linha, coluna, tipo de dado

    id - int (tipo de dado)
    name - varchar (texto)
    o ? significa que é opcional

    ![Tabelas](./assets/tabelas.png)

    ![Tabela exemplo](./assets/tableex.png)

 - Banco de dados `Relacional`

    ![banco de dados relacional](./assets/relacional.png)

    o simbolo de chave é chamdo de `chave primaria` resgistra como unico dentro da tabela, não se repete

    cada usurio tem seu proprio id

    `foreign key` vem de outra tabela, ela é uma chave "visitante"

    `cardinalidade` - qual a frequencia que uma tabela se relaciona com outra

- Estrutura do Banco de Dados

    ![Estrutura do Banco de Dados](./assets/estrutura-bd.png)

    id  - garante um identificador unico

- Banco SQLite

- SGBD - Sistema Gerenciador de Banco de Dados
    ferramenta para visualizar o que esta dentro do banco

    - ferramenta `beekeper`

    ![databse](./assets/database.png)

- SQL - Strcuture Query Language, ou Linguagem de Consulta Estruturada
    é a linguagem padrão para o banco de dados relacionais

    grupos de comando: 
    - DDL (Data Definition Language) - INSERT, SELECT, UPDATE,DELETE, CREATE, DROP, ALTER

    ALTER - alterar o nome das tabelas, adicionar e deletar colunas do banco de dados.
    ![Alt text](./assets/alter.png)

    Comandos `DML - Data Manipulation Language`

    C - Create -> INSERT (comando sql)
    R - Read -> SELECT
    U - Update - UPDATE
    D - Delete -> DELETE

    Qualquer aplicação tem essas operações

    ![DML](./assets/dml.png)

- Migrations

- `SQL Query Builder`
    Um construtor de consulta
    Permite que você construa instruções SQL independente do banco de dados utilizado

    Se usa o query builder e ele vai gerar o código para o banco de dados escolhido, automatizando o processo

- Migrations - é uma forma de versionar a base de dados
    Migrations trabalha na manipulação da base de dados: criando, alterando ou removendo.

    Métodos de uma migrations
    `Up` - método responsável por criar ou altear algo no bd
    `Down` - responsável pelo rollback, ou seja, desfazer as alterações realizadas pela migration

- NPX
    `NPM` - node package manager é o gerenciados de pacotes padrão para node.js
    Os pacoes e módulos necessários no projeto node são instalados usando npm
    E também utilizamos o npm para executar scripts e bibliotecas instaladas

    o `npx` significa Node Package Execute e vem com o npm acima da versão 5.2
    É um executados de pacotes npm que pode executar quaquer pacote que você quiser
    do registro npm sem sequer instalar esse pacote

    Resumindo:
    NPM - ferramenta paa instalar pacotes
    NPX - ferramenta para executar pacotes

- Primary key e Foreign key
  - chave primária possui um id único com ela na tabela, já a chave estrangeira faz a referência desse id da chave primária em outras tabelas

  ![chaves](./assets/keys.png)

- Cardinalidade
    a frequência que uma tabela se relaciona com a outra. Para isso, vamos visualizar a estrutura do nosso banco de dados.

- Migrations para Link e Tag
    mais duas migrations em nosso projeto que proverá as tabelas link e tags em nosso banco de dados.