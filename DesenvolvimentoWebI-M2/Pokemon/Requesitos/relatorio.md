# Relatório - Desenvolvimento Web 1

## 1. Introdução
No âmbito da disciplina **Desenvolvimento Web 1**, foi desenvolvida uma aplicação modular para gerir recursos relacionados com Pokémon, Treinadores, Tipos e Equipas. Este relatório detalha a arquitetura e o funcionamento do sistema, com suporte nos seguintes arquivos fornecidos:

1. **Pokemon.postman_collection**: Testes automatizados e exemplos de requisições para os endpoints da API.
2. **database.sql**: Script de criação e gestão da base de dados.
3. **docker-compose.yml**: Configuração para execução de containers Docker, simulando o ambiente de desenvolvimento.

A aplicação apresenta uma implementação robusta baseada em princípios de modularidade, separação de responsabilidades e boas práticas de desenvolvimento web.

---

## 2. Estrutura Geral do Sistema
A aplicação utiliza uma arquitetura em camadas, separando responsabilidades em:

1. **Controladores**: Ponto de entrada para requisições HTTP.
2. **Serviços**: Responsáveis pela lógica de negócio e manipulação de dados.
3. **Base de Dados**: Armazena informações sobre Pokémon, treinadores e suas relações.

Essa estrutura é complementada por ferramentas como o Docker, que automatiza a configuração do ambiente, e o Postman, para validação de APIs.

---

## 3. Controladores
Os controladores funcionam como intermediários entre as requisições do cliente e os serviços do sistema. Abaixo detalhamos os principais módulos.

### 3.1. Controlador Pokémon (PokemonController.js)
Este controlador fornece endpoints para gerir as entidades Pokémon:

- **Funções Disponíveis**:  
  - `createPokemon(req, res)`: Insere um novo Pokémon no sistema com base nos dados recebidos.
  - `retrievePokemon(req, res)`: Retorna uma lista de todos os Pokémon cadastrados.
  - `retrievePokemonID(req, res)`: Busca um Pokémon específico pelo seu identificador.
  - `updatePokemon(req, res)`: Atualiza os dados de um Pokémon.
  - `deletePokemon(req, res)`: Remove um Pokémon pelo ID fornecido.

- **Endpoints no Postman**:  
  - **POST /pokemon** - Testado com dados de exemplo:
    ```json
    {
      "nome": "Charmander",
      "id_tipo": 2
    }
    ```
  - **GET /pokemon**: Retorna uma lista completa de Pokémon com os tipos associados.

### 3.2. Controlador Treinador (TrainerController.js)
Administra operações relacionadas com Treinadores:

- **Funções Disponíveis**:  
  - `createTrainer`, `retrieveTrainer`, `retrieveTrainerID`, `updateTrainer`, `deleteTrainer`.

- **Exemplo de Operação**:
  ```json
  {
    "nome": "Ash Ketchum",
    "idade": 15
  }
## 3.3. Controlador Tipos (TipoController.js)

Lida com a gestão de Tipos de Pokémon:

- **Funções**:
  - Criar, listar, atualizar e excluir tipos (ex.: `createTipo`, `retrieveTipo`).
  
- **Exemplo de Tipo**:
  - Fogo, Água, Elétrico.

---

## 3.4. Controlador Equipas (TeamController.js)

Fornece endpoints para gestão de equipas de Pokémon:

- **Endpoints Importantes**:
  - `POST /team`: Criação de uma equipa.
  - `DELETE /team/:id_team`: Exclusão de uma equipa pelo seu identificador.
  
- **Exemplo de Corpo de Requisição (POST)**:
  ```json
  {
    "id_trainer": 1,
    "pokemons": [1, 2, 3]
  }

## 4. Base de Dados

A base de dados, configurada com o arquivo `database.sql`, é o núcleo da aplicação, armazenando informações críticas de Pokémon, treinadores, tipos e equipas.

### 4.1. Estrutura

A estrutura inclui as seguintes tabelas:

1. **pokemon**:
   - **Campos**: `id_pokemon`, `nome`, `id_tipo`.
   - **Exemplo**:
     ```sql
     INSERT INTO pokemon (nome, id_tipo) VALUES ('Bulbasaur', 1);
     ```

2. **trainer**:
   - **Campos**: `id_trainer`, `nome`, `idade`.
   - **Exemplo**:
     ```sql
     INSERT INTO trainer (nome, idade) VALUES ('Misty', 16);
     ```

3. **tipo**:
   - **Campos**: `id_tipo`, `descricao`.
   - **Exemplo**:
     ```sql
     INSERT INTO tipo (descricao) VALUES ('Água');
     ```

4. **team**:
   - **Campos**: `id_team`, `id_trainer`.
   - **Relaciona** treinadores com Pokémon.

### 4.2. Relacionamentos

- `pokemon.id_tipo` ↔ `tipo.id_tipo`: Define o tipo de cada Pokémon.
- `team.id_team` ↔ `trainer.id_trainer`: Vincula treinadores às suas equipas.

---

## 5. Configuração do Ambiente

O arquivo `docker-compose.yml` define um ambiente padronizado para desenvolvimento e execução do sistema.

### 5.1. Estrutura

- **Serviços**:
  - **db**: Container para banco de dados MySQL.
  - **api**: Container para a aplicação Node.js.

- **Configuração de Portas**:
  - Banco de Dados: Porta **3306**.
  - API: Porta **3000**.

### 5.2. Exemplo de Configuração
services:
  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: pokemon_db
  api:
    build:
      context: .
    ports:
      - "3000:3000"
    depends_on:
      - db
### 5.3. Execução
    •	Comando para inicializar o ambiente: 
    •	docker-compose up
    •	Após a execução, a API estará disponível em http://localhost:3000.
________________________________________
### 6. Testes e Validação
O arquivo Pokemon.postman_collection fornece um conjunto de testes para os endpoints da API:
    •	Coleção de Testes Inclui: 
    •	Criar Pokémon: Testa a funcionalidade POST /pokemon.
    •	Consultar Equipas: Valida o endpoint GET /team.
    •	Automatização: Pode ser executada como uma forma de validação contínua.
Exemplo de Teste Automatizado:
•	Descrição: Validar resposta ao criar Pokémon.
•	Resultado Esperado: 
•	{
•	  "id_pokemon": 1,
•	  "nome": "Pikachu",
•	  "id_tipo": 3
•	}
________________________________________
### 7. Conclusão e Recomendações
    A aplicação implementa um sistema funcional, com modularidade e integração bem definidas. A separação de responsabilidades facilita a manutenção e escalabilidade.

Pontos Fortes:
1.	**Boas Práticas**: Uso de controladores, serviços e utilitários padronizados.
2.	**Ambiente Consistente**: Docker garante portabilidade e uniformidade.
3.	**Validação de Funcionalidades**: Testes no Postman asseguram o funcionamento da API.
