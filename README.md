# Hashtag Search (Front-end)
Front-end do projeto Hashtag Search, criado com **Ionic (Angular)** que permite que o usuário busque, selecione e salve tweets com determinada hashtag para exibição em telão de forma prática e rápida.

O sistema em sua versão inicial consiste em duas telas, responsivas e com componentes diferenciados com base no tamanho da tela e qual dispositivo está sendo usado. 

**Vídeo demostração**

[![](http://img.youtube.com/vi/sVYyRrcJRqk/0.jpg)](http://www.youtube.com/watch?v=sVYyRrcJRqk "Demostração - Buscador de hashtag")


**Tela 1: Buscador**

O usuário informa a hashtag e confirma, o aplicativo retorna os tweets mais recentes sobre essa hashtag. Após isso, o usuário pode escolher algum tweet para inserir no banco de dados para ser mostrado no telão.

**Tela2: Exibidos**

Tela que mostra os tweets exibidos no telão durante o dia, sendo os mais novos acima. O usuário também pode escolher algum tweet para ser mostrado novamente no telão.

# Instalação

1- Clone o repositório.

1- Instale o [Node.JS](https://nodejs.org/pt-br/).

2- Abra uma janela do CMD **na pasta do projeto** e execute os seguintes comandos (instalação do ionic e instalação do módulos npm): 

   **npm install -g @ionic/cli**
   **npm i**
   
   
3- *(Ignorar se o backend estiver rodando na mesma máquina)* 

   Altere o ip para o da máquina servidor no arquivo: 
   
   **src/app/services/api.service.ts**
   
4- Para iniciar um web server de desenvolvimento e testes, você pode usar o comando **ionic serve** no terminal na pasta do projeto.

Após isso, automaticamente será aberto uma página web com o projeto.
Seguindo os tutoriais do [Capacitor](https://capacitorjs.com), pode-se compilar o mesmo projeto para qualquer aplicação nativa de qualquer sistema, seja mobile ou desktop.

   


