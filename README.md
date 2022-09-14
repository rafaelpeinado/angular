# angular

## Angular NgRx: Getting Started
### Introduction
#### Introduction
NgRx é uma biblioteca para organizar e gerenciar estados e interações com o estado em nossas aplicações Angular.

##### O que é State?
* Informações sobre a visualização, como exibir campos específicos ou seus elementos.
* Informações de usuários, como o nome do usuário e as funções usadas para adaptar o aplicativo ao estado do usuário.
* Podem ser dados da entidade, como informações do produto que são exibidas e manipuladas pela aplicação, mas originalmente recuperadas e armazenadas em um servidor backend.
* Pode ser a seleção e input do usuário, como produto atualmente selecionado ou a sequência de filtros inserida.
* Ou qualquer outra informação ou dado que o aplicativo rastreie.

##### Objetivo do NgRx
Fornecer um padrão formal para:
* organizar o estado
* gerenciamento de estado
* comunicação de mudança de estado, para que possa reagir de acordo


#### What Is NgRx?
[NgRx](https://ngrx.io/docs) é um Framework para construção de aplicações Angular reativas e direcionais que fornecem gerenciamento de estado, isolamento de efeitos colaterais, etc.

##### Redux Pattern
A **view** usa um event biding para notificar o **componente** sobre o evento do usuário.
O **componente** cria uma **action** que representa esse evento.
O **componente** dá um **dispatch** dessa ação para uma função chamada **reducer**.
O **reducer** usa a **action** e o **state** atual do **store** para definir um novo **state** e atualiza o **store** com esse **state**.
**Store** é um único contêiner de estado na memória do lado do cliente. O **Store** é imutável. Ou seja, o **reducer** cria um novo state a partir do state existente e da action definida, o que torna as alterações de estado muito mais explícitas.
Qualquer componente subscribe o Store, usando um **selector** para ser notificado sobre as alterações de estado específicas. **Selector** é um procedimento armazenado para o store e ele sabe como localizar e retornar os dados do store.


#### Why Use NgRx?
Quando o sistema vai crescendo, encontramos dezenas de pequenos serviços. Com NgRx não preciamos de um serviço para cada parte do estado. Em vez disso, temos um armazenamento único para o estado do aplicativo, facilitando a localização e recuperação dos valores do estado.
Quando chamamos um serviço em um componente e navegamos para fora e voltamos, o serviço vai ser requisitado novamente. Alguns dados não precisam e não são atualizados com frequência, então não precisamos obtê-los novamente e novamente. Porém, o NgRx fornece um cache do lado do cliente, ou seja, não precisamos recuperar as informações do servidor toda vez que o componente é inicializado.

##### Use NgRx Quando
* há muito estado em serviços: o store fornece um local conveniente.
* houver excesso de solicitações HTTP: o store fornece um cache do lado do cliente para ser usado quando necessário
* houver interações complexas de componentes: o redcuer atualiza o store e o store notifica todos os subscritos
* algo não estiver funcionando: é uma ótima ferramenta que nos ajuda a ver actions e state.

##### Não Use NgRx Quando
* o time é novo em Angular: melhor aprender Angular e RxJS Observables primeriro
* a aplicação for simples: o código extra necessário para o NgRx pode não valer o esforço
* seu time tem um bom padrão de gerenciamento de estado


#### Getting the Most from This Course
[Github: Deborah Kurata - Angular NgRx Getting Started](https://github.com/DeborahK/Angular-NgRx-GettingStarted)

