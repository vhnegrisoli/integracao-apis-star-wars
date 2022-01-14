# Projeto: Integração Entre APIs via HTTP Client

Sou leitor e colecionador de quadrinhos há mais de 8 anos, e também sou desenvolvedor back-end há 5 anos.

Recentemente, criei meu canal no YouTube chamado [Comics & Code](https://www.youtube.com/channel/UCtDl5evCzPavgyFz7EQ80Gg) que trata sobre:

* Quadrinhos/HQs
* Filmes e super-heróis
* Análises, críticas, guias, dicas e recomendações de leituras e materiais
* Programação (Java, Javascript, Python, Node, etc)
* Desenvolvimento de projetos e tutoriais

![Logo Canal](https://github.com/vhnegrisoli/integracao-apis-star-wars/blob/master/Comics%20%26%20Code.png)

E o primeiro projeto de desenvolvimento do canal foi este repositório!

Para conferir o desenvolvimento, só acessar essa [playlist](https://www.youtube.com/playlist?list=PLTnZgkfXPBX41-H686Xag-igi6dwUqOV_) com  5 vídeos!

## Objetivos

O objetivo era criar um projeto simples realizando integração entre APIs, ou seja, 2 APIs consumiriam uma API externa, a Star Wars API:

https://swapi.dev/

Para consultar os filmes e os personagens da série de filmes Star Wars.

E, por fim, criar um API Gateway que fizesse o roteamento entre essas 2 APIs.

## Tecnologias

* Java 11
* Spring Boot
* Spring Cloud OpenFeign
* Javascript ES6
* Node.js 14x
* Express.js
* Express HTTP Proxy
* Axios

## Arquitetura

A arquitetura desenhada foi a representada na imagem abaixo:

![Arquitetura](https://github.com/vhnegrisoli/integracao-apis-star-wars/blob/master/Arquitetura.png)

Essa arquitetura conta com 3 serviços, 2 APIs e um API Gateway.

O Gateway mapeará as chamadas ao endpoint **/api/movies** para a API de filmes (**films-api**) na porta 8081, e o endpoint **/api/characters** para a API de personagens (**character-api**) na porta 8082.

* O serviço films-api foi desenvolvido em Java com Spring Boot e Spring Cloud OpenFeign para realizar o client HTTP com a API externa (Star Wars API)
* O serviço character-api foi desenvolvido em Node.js com Express.js e Axios para realizar o client HTTP com a API externa (Star Wars API)
* O serviço api-gateway foi desenvolvido em Node.js com Express.js e Express HTTP Proxy para realizar o proxy entre as aplicações e redirecionar os endpoints

## Requisitos

É necessário possuir as seguintes ferramentas:

* Java 11
* Gradle
* Node.js 14x
* Yarn

## Executando

Para rodar o serviço Java, rode o comando:

``gradle bootRun``

Poderá acessar em: http://localhost:8082 (character-api) e http://localhost:8081 (films-api)

Para rodar os serviços Node.js, rode o comando:

``yarn start``

Poderá acessar em: http://localhost:8082 (character-api) e http://localhost:3000 (api-gateway) 

## Acessando os endpoints

São 2 endpoints em cada uma das aplicações, e que podem ser acessados via Gateway.

### Filmes API

São dois endpoints principais:

#### Buscar todos os filmes

```
Método: GET
Endpoint: http://localhost:8081
```

Resposta: 

```json
{
  "results": [
    {
      "title": "A New Hope",
      "director": "George Lucas",
      "producer": "Gary Kurtz, Rick McCallum",
      "episode_id": 4,
      "release_date": "1977-05-25"
    },
    {
      "title": "The Empire Strikes Back",
      "director": "Irvin Kershner",
      "producer": "Gary Kurtz, Rick McCallum",
      "episode_id": 5,
      "release_date": "1980-05-17"
    },
    {
      "title": "Return of the Jedi",
      "director": "Richard Marquand",
      "producer": "Howard G. Kazanjian, George Lucas, Rick McCallum",
      "episode_id": 6,
      "release_date": "1983-05-25"
    },
    {
      "title": "The Phantom Menace",
      "director": "George Lucas",
      "producer": "Rick McCallum",
      "episode_id": 1,
      "release_date": "1999-05-19"
    },
    {
      "title": "Attack of the Clones",
      "director": "George Lucas",
      "producer": "Rick McCallum",
      "episode_id": 2,
      "release_date": "2002-05-16"
    },
    {
      "title": "Revenge of the Sith",
      "director": "George Lucas",
      "producer": "Rick McCallum",
      "episode_id": 3,
      "release_date": "2005-05-19"
    }
  ]
}
```

#### Buscar filmes por título

```
Método: GET
Endpoint: http://localhost:8081/title/{title}
```

Resposta para title = "Empire": 

```json
{
  "results": [
    {
      "title": "The Empire Strikes Back",
      "director": "Irvin Kershner",
      "producer": "Gary Kurtz, Rick McCallum",
      "episode_id": 5,
      "release_date": "1980-05-17"
    }
  ]
}
```

### Personagens API

São dois endpoints principais:

#### Buscar todos os personagens

```
Método: GET
Endpoint: http://localhost:8082
```

Resposta: 

```json
{
  "results": [
    {
      "name": "Luke Skywalker",
      "height": "172",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
      ]
    },
    {
      "name": "C-3PO",
      "height": "167",
      "birth_year": "112BBY",
      "gender": "n/a",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ]
    },
    {
      "name": "R2-D2",
      "height": "96",
      "birth_year": "33BBY",
      "gender": "n/a",
      "homeworld": "https://swapi.dev/api/planets/8/",
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ]
    },
    {
      "name": "Darth Vader",
      "height": "202",
      "birth_year": "41.9BBY",
      "gender": "male",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
      ]
    },
    {
      "name": "Leia Organa",
      "height": "150",
      "birth_year": "19BBY",
      "gender": "female",
      "homeworld": "https://swapi.dev/api/planets/2/",
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
      ]
    },
    {
      "name": "Owen Lars",
      "height": "178",
      "birth_year": "52BBY",
      "gender": "male",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ]
    },
    {
      "name": "Beru Whitesun lars",
      "height": "165",
      "birth_year": "47BBY",
      "gender": "female",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ]
    },
    {
      "name": "R5-D4",
      "height": "97",
      "birth_year": "unknown",
      "gender": "n/a",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "films": [
        "https://swapi.dev/api/films/1/"
      ]
    },
    {
      "name": "Biggs Darklighter",
      "height": "183",
      "birth_year": "24BBY",
      "gender": "male",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "films": [
        "https://swapi.dev/api/films/1/"
      ]
    },
    {
      "name": "Obi-Wan Kenobi",
      "height": "182",
      "birth_year": "57BBY",
      "gender": "male",
      "homeworld": "https://swapi.dev/api/planets/20/",
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ]
    }
  ]
}
```

#### Buscar personagens por nome

```
Método: GET
Endpoint: http://localhost:8082/name/{name}
```

Resposta para name = "Skywalker": 

```json
{
  "results": [
    {
      "name": "Luke Skywalker",
      "height": "172",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
      ]
    },
    {
      "name": "Anakin Skywalker",
      "height": "188",
      "birth_year": "41.9BBY",
      "gender": "male",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "films": [
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ]
    },
    {
      "name": "Shmi Skywalker",
      "height": "163",
      "birth_year": "72BBY",
      "gender": "female",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "films": [
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/"
      ]
    }
  ]
}
```

#### API Gateway

Para redirecionar para a API de personagens:

```
Método: GET
Endpoint: http://localhost:3000/api/characters
```

Para redirecionar para a API de filmes:

```
Método: GET
Endpoint: http://localhost:3000/api/movies
```

Exemplos de respostas do Gateway:

http://localhost:300/api/movies/title/Clones

```json
{
  "results": [
    {
      "title": "Attack of the Clones",
      "director": "George Lucas",
      "producer": "Rick McCallum",
      "episode_id": 2,
      "release_date": "2002-05-16"
    }
  ]
}
```

http://localhost:3000/api/characters/name/Luke

```json
{
  "results": [
    {
      "name": "Luke Skywalker",
      "height": "172",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
      ]
    }
  ]
}
```

### Autor

* **Victor Hugo Negrisoli**
* **Desenvolvedor Back-End Sênior**
