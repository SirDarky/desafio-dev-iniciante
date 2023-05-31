# Solução Omnichannel Desafio Bemol

Criação de uma aplicação web com API e Chat Real-time.

## 🚀 Começando

Para este projeto, possuo a finalidade de apresenta uma solução para o Desafio Vaga Dev Iniciante.

### 📋 Pré-requisitos

- Ter o Node.
- Ter o npm.


### 🔧 Instalação

Para a instalação do projeto, utilizamos o NPM.

Para instalar o site, utilize o comando no seu terminal:
```
cd ./backend
npm install
npm run dev
```

Após o download de todas as dependências o necessitamos iniciar o servidor, abra outro terminal na pasta raiz do projeto e digite o comando no seu terminal:

```
cd ./frontend
npm install
```

Após o download de todas as dependências que necessitamos iniciar a aplicação web, digite o comando no seu terminal:

```
npm run dev
```

### Obs: É necessario no back-end um arquivo ".env" para a executação de alguns comandos: Envio de e-mail, criação de senhas criptografadas e verificação do JWT. Não deixei no arquivo, pois contém informações confidenciais.

### Obs2: Caso queira criar um arquivo .env para executar com precisão, é necessário ter nesse arquivo essas informações:

no arquivo ".env" nas pasta backend
```
DB_USERNAME='deviniciante'
DB_PASSWORD='AIzbIzzXH7FASv4u'
PASSWORD='desafio_tech'
PORT=3005
```
A assinatura e assinaturasenha são importante para a criação e verificação do JWT, ambas não devem ser alteradas de nenhuma forma.

## ⚙️ Executando os testes

### PARA INICIAR:
Deve-se acessar ao menu inicial, na URL: http://localhost:3005/
Lá você será redirecionado para tela de login caso não esteja logado.
Você poderá se registrar para utilizar o serviço.

Para acessar o serviços de chat, é necessario que o Usuario crie vinculo com outro.
Pode-se abrir dois navegadores diferentes, ambos no endereço URL: http://localhost:3005/ para testar a funcionalidade de chat.

Desta forma você irá ver a comunicação entre os dois usuários.

## 📦 Implantação

Esse serviço serve apenas para carater demonstrativo para o desafio técnico.

### Detalhes sobre o desenvolvimento

Foi exigido a implementação o sistema de back-end no NodeJs, tive facilidade com tal, pois além de dominar a tecnologia, conhecia as funcionalidades e já obtive bastante experiência no mesmo, logo conseguia tratar de bugs mais complexos.

Utilizei o JWT e Bcrypt, para a criptografica de token(realização de login) e senhas, respectivamente, pela facilidade na comunicação e implementação.

No front-end, utilizei React e Tailwind, ambas as tecnologias possuo grande experiência o que facilitou algumas ocorrências não esperadas.

## 📌 Versão

Versão 1.0
