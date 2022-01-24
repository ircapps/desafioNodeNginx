# Desafio 02 - Docker node + nginx + mysql

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

## Instruções:

**Clone o repositório:**

```bash
git clone https://github.com/ircapps/desafioNodeNginx.git .
```

**Baixe a imagem do DockerHub**

```bash
docker pull ircarvalho/fullnode
```

**Execute**

```bash
docker-compose up -d
```
**Acesso ao APP**

[http://localhost:8080]()
