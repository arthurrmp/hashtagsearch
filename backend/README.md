# Hashtag Search (Back-end)
Back-end do projeto Hashtag Search, criado com **Node.JS** que contém as funções necessárias para a comunicação com a Twitter API e o banco SQLite para busca e armazenamento dos tweets.

O sistema em sua versão inicial contém: 
  - ConfigTwitter.js -> Comunicação com a Twitter API. (Obter tweets recentes filtrados por uma hashtag, com informações e foto do usuário que tweetou). Para maior facilidade no teste e desenvolvimento, estou cedendo minha chave da API do Twitter já configurada, que funcionará até os testes serem realizados.
  - ConfigBanco.js   -> Comunicação com o banco SQLite (Inserir novo tweet no banco, Obter último tweet inserido (Usado no telão), obter tweets exibidos hoje)
  - ConfigCors.js    -> Configuração do CORS, que para fins de facilitar o desenvolvimento, está permitindo a requisição da API de qualquer origem.

Também possui uma tela localizada em (public -> index.html) que mostra informações do último tweet inserido no banco e do usuário que tweetou, 
atualizando automaticamente a cada 3s, ideal para uso demonstração do telão.

# ATENÇÃO

Para obter os Tweets, você precisa obter uma chave da [API do twitter](https://developer.twitter.com) e inserir as suas credenciais na variável **client** do arquivo [configTwitter.js](https://github.com/arthurrmp/hashtagsearch_backend/blob/master/configTwitter.js).

Após isso, o projeto pode ser usado em conjunto do [Hashtag Search (aplicativo/front-end)](https://github.com/arthurrmp/hashtagsearch), conforme mostrado no vídeo abaixo.

**Vídeo demonstração**

[![](http://img.youtube.com/vi/sVYyRrcJRqk/0.jpg)](http://www.youtube.com/watch?v=sVYyRrcJRqk "demonstração - Buscador de hashtag")

# Instalação

1- Clone o repositório.

1- Instale o [Node.JS](https://nodejs.org/pt-br/).

2- Abra uma janela do terminal na pasta do projeto e execute o comando de instalação dos módulos npm: 

   **npm i**
     
4- Para iniciar o web server, use o comando **node app.js**.

Deixe a janela do terminal aberta. Após isso, você pode fazer as requisições pelo [Hashtag Search (aplicativo/front-end)](https://github.com/arthurrmp/hashtagsearch) e também acompanhar qual o último tweet aceito pela moderação no **http://localhost:3000**.

   


