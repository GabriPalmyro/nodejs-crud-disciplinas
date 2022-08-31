# Nodejs CRUD Disciplinas

# Váriaveis de Ambiente
O projeto usa as seguintes váriaveis de ambiente:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|CORS           | Cors accepted values            | "*"      |


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 8.0.0


# Getting started
- Clone the repository
```
git clone (https://github.com/GabriPalmyro/nodejs-crud-disciplinas)
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
node src/server.js
```
  Navigate to `http://localhost:4200`
 
# Chamadas  
- GET - http://localhost:4200/disciplinas - Retorna lista de disciplinas
- POST - http://localhost:4200/disciplina/create - MODEL DISCIPLINA - Cria disciplina
- POST - http://localhost:4200/disciplina/delete - ID - Deleta disciplina
