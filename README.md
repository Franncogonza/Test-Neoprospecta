# TesteNeoprospecta

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.9. and is part of a test, exam for the NeoProspecta company, to run the project on your pc, after downloading it, you must install the NPM dependencies with this cobsole command npm install
and then lift the server. Any questions you can write me.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

<!----------------------------------------------------- REQUIREMENTS   -------------------------------------------------------------------------------------->

DESAFIO PARA DESENVOLVEDOR FRONTEND DESCRIÇÃO:
Seguem as instruções para a realização do teste para a posição de Desenvolvedor
Frontend na Neoprospecta Microbiome Technologies.

O objetivo do teste é criar uma aplicação Angular que consulte uma API REST, exiba
uma lista de clientes na tela e que permita a edição deles.

REQUISITOS:
RF01: O endpoint a ser consultado (GET) é:
http://private-92a969-processoseletivo1.apiary-mock.com/customers (sempre retorna a mesma
lista);
RF02: A listagem de clientes deve ser apresentada em forma de “tabela” quando a tela
for maior ou igual a 768px e em forma de “cards” quando a tela for menor que 768px;
RF03: A listagem deve ser ordenável e filtrável por Id, nome, idade e cidade (front-side);
RF04: A listagem deve possuir paginação a cada 10 clientes (front-side);
RF05: Deve haver um botão de “editar” cliente em cada linha da tabela;
RF06: Ao clicar no botão de “editar” o usuário deve ser redirecionado para uma outra rota com
os dados do cliente em formato editável;
RF07: Deve ser adicionado na tela de edição um botão de “salvar” e um de “cancelar”;
RF08: Ao clicar no botão de “salvar” os dados atualizados do cliente devem ser enviados (PUT)
para o seguinte endpoint (ele sempre retorna sucesso no PUT, mas não salva de verdade :)
“https://private-92a969-processoseletivo1.apiary-mock.com/customers/{id_do_cliente}/”;
RF09: Sendo que, depois do retorno da requisição PUT o usuário deve ser redirecionado para
listagem e a aplicação deve apresentar a ele uma notificação dizendo “Cliente
{nome_do_cliente} atualizado com sucesso!”;
REQUISITOS NÃO FUNCIONAIS:
RNF01: A aplicação deve ser hospedada em algum servidor de sua preferência, podendo ser
bitbucket pages, github pages, gitlab pages, Amazon S3, Google Drive ou onde você achar
melhor;
RNF02: O código fonte deve ser publicado no github e o link deverá ser enviado como resposta
deste e-mail;
RNF03: Deve ser utilizado SASS na estilização.
BÔNUS:
RF10: Adicionar um validador reativo no input de idade para tamanho de no mínimo 1 e
máximo de 3 números (ReactiveFormsModule). Este validador só é acionado se o usuário tocar
no campo. Caso o usuário digite algum valor que seja errado o botão de salvar deve ficar
desabilitado;
<!-- TO DO -->
RNF04: Adicionar testes unitários nos principais componentes;
