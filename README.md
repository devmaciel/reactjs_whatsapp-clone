# WhatsApp Clone (Chat App)

## Começando

Simplesmente podemos iniciar com

> npm start

Ou você pode entrar pelo link do webapp com firebase, caso esteja down, pode dar um aviso por gentileza :)
https://whatsapp-clone-be638.web.app

### Algumas imagens do projeto

Página Login com GoogleAUTH (firebase)
[![](https://imgur.com/syGXuJn.png)](https://imgur.com/syGXuJn.png)

<br />

Página do App, Chat Group e Adicionar Chat Rooms
[![](https://imgur.com/Rt9CemM.png)](https://imgur.com/Rt9CemM.png)

<br /><br />

#### Tecnologias Utilizadas

-   HTML5
-   CSS3
-   Javascript
-   Firebase/Firestore

#### Ferramentas Utilizadas

-   React JS <br />
    -- material/ui-core <br />
    -- material/ui-icons <br />
    -- react hooks and context api <br />
	-- react-router-dom <br />
-   Avatars Dicebar ([Random Avatars](https://avatars.dicebear.com "Random Avatars"))
- 	Firebase Tools
-   VSCode
-   GIT

<br />

##### Mais sobre o projeto

Um projeto clonando a interface do WhatsApp, onde podemos fazer Log In com a própria conta da google, com GoogleAUTH da Firebase, podemos criar Salas de Chat e conversar nelas com todos outros usuários logados. Temos a interface parecida com a do WhatsApp porém não temos todas funcionalidades implementadas, somente para criar ChatRooms e conversar nelas com outros usuários.

###### _Relato de bugs_

Pequeno bug quando criamos a sala, quando não existe nenhuma mensagem, fica invalid date, correção rápida com operação ternárias e optional chaining do js. Temos algo que não é bug, mas não foi implementado como existe no projeto da spotify, o AuthToken para se manter logado no Context, então cada refresh precisa refazer o login. Também não é bug porém para ressaltar que a maioria dos ícones é para estética e não foi implementado as funções, já que é um projeto para chat.