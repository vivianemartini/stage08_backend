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
