# ECOLETA
Repositório com a versão completa do projeto Ecoleta. A estrutura contém as versões Web, Mobile e o Server.

O app foi desenvolvido durante o bootcamp #NextLevelWeek da [RocketSeat](https://rocketseat.com.br/) utilizando uma stack com React, React Native, NodeJS e SQLite.

## Versão Web

![Web app](https://i.ibb.co/TbcGnfW/Capturar.png)

## Versão Mobile 

![Web app](https://i.ibb.co/7gs4bTh/Capturar2.png)


# Instalação

> **NOTA:** Antes de prosseguir, lembre-se de entrar nas pastas dos projetos e rodar o comando **npm install** para instalar todas as dependências necessárias.

## Server    

Após clonar este repositório, entre na pasta server e rode os seguintes comandos no terminal:
  
  > Estes comandos irão preparar o banco de dados com as infos necessárias para a aplicação funcionar e o último comando inicia o servidor e o mantém rodando

  - **npm run knex:migrate**
  
  - **npm run knex:seed**
  
  - **npm run start**
  
Caso queira conferir a lista dos pontos de coleta, pode fazê-lo no arquivo **create_items.ts** na pasta **database > seeds**, mas caso queira alterar ou adicionar algum, precisará fornecer as images dos pontos extras.

  
## Web

Entre na pasta web e rode o comando abaixo:
  
  > Este comando ira iniciar e abrir a aplicação em **http://localhost:3333**. Caso seja necessário, pode mudar a porta no arquivo **api.ts** dentro da pasta **services**.
  
  - **npm run start**
  
## Mobile    

Para testar a aplicação mobile será necessário **baixar o app Expo** no seu dispositivo.
  
  > Este comando iniciará o Expo no navegador e irá criar um **QR Code** na janela do terminal e no próprio browser. Para abrir a aplicação no seu dispositivo, **instale o app do Expo** e escaneie o código com um leitor de **QR** *(ou com a câmera, no caso de dispositivos iOS)*.
  
  - **npm run start**
  
  
# Tecnologias Utilizadas

Algumas das tecnologias que foram utilizadas durante o desenvolvimento da aplicação em cada projeto:
  
  - **Server**
    - *Typescript*;
    - *NodeJS*;
    - *Express*;
    - *SQLite*;
    - *Knex*;
    
   - **Web**
     - *React (Hooks)*;
     - *Typescript*;
     - *Axios*;
    
   - **Mobile**
     - *React Native*;
     - *Typescript*;
     - *Axios*;
     - *Expo*;
   
# Links

*[LinkedIn](https://www.linkedin.com/in/mrodrigolira/)*

# Licença

*[MIT](https://tldrlegal.com/license/mit-license)*
