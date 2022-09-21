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
* houver interações complexas de componentes: o reducer atualiza o store e o store notifica todos os subscritos
* algo não estiver funcionando: é uma ótima ferramenta que nos ajuda a ver actions e state.

##### Não Use NgRx Quando
* o time é novo em Angular: melhor aprender Angular e RxJS Observables primeriro
* a aplicação for simples: o código extra necessário para o NgRx pode não valer o esforço
* seu time tem um bom padrão de gerenciamento de estado


#### Getting the Most from This Course
[Github: Deborah Kurata - Angular NgRx Getting Started](https://github.com/DeborahK/Angular-NgRx-GettingStarted)



### The Redux Pattern
#### Introduction
##### Redux Principles
* Há apenas uma única fonte de verdade para o estado do aplicativo chamada Store
* State é somente leitura e a única maneira de alterar o estado é com dispatch de actions
* As mudanças no Store são feitas por funções puras chamadas reducers


#### Store
Store é o objeto que contém todo o estado do projeto

##### What Should Not Go in the Store?
* State não compartilhado ou disponibilizado nas rotas
* Forms também não pertecem ao Store
* Estruturas que ñao podem ser serializadas não devem esr colocadas no Store. Por exemplo, toda a rota não deve ser colocada no Store, porque não é serializada

#### Actions
##### Dispatch an Action to Change State
Exemplos de dispatch de actions
* uma ação de login após envio de um formulário
* uma ação de menu lateral após clicar no botão
* recuperar a ação de dados ao inicializar seu componente
* iniciar uma ação giratória global ao salvar dados

Actions possuem atributos *type* que descrevem a action e podem ter dados opcionais associados a eles
Exemplo de objeto: 
{
    type: 'LOGIN',
    user: { username: 'Duncan', password: 'secret' }
}


#### Reducers
##### Use Reducers to Change State
Reducer são funções que especificam alterações no State em resposta a uma action.
O que podemos fazer em reducer:
* definir uma propriedade userDetails no login
* definir a propriedade sideMenuVisible para true ao clicar no botão do menu lateral
* definir sucesso nos dados recuperados na inicialização do componente
* definir a propriedade globalSpinnerVisible para verdadeiro enquanto salva uma data

##### Actions with Side Effects
Reducers não podem ter efeitos colaterais

##### Reducers Are Pure Functions
Reducer é responsável por lidar com transições de um estado para o próximo estado da aplicação.
Cada função reducer assume o estado inicial e uma seleção de funções que manipulam alterações de estado para suas associadas.
Essas funções pegam o state atual e uma action e retornam um novo state

##### Pure and Impure Functions
Função pura é uma função que dados os mesmos argumentos, sempre retornará o mesmo valor sem efeitos colaterais observáveis.

**Função Pura**
function sum(a, b) {
    const result = a + b;
    return result;
}

**Função Impura**
let c = 1;

function sum(a, b) {
    result = a + b + c;
    return result;
}


#### Advantages of the Redux Pattern
* Ter uma árvore de estados imutáveis e centralizada, isso torna as alterações mais explícitas e previsíveis
* Performance
* Facilita a escrita de testes unitários
* Ferramental é um grande benefício do Redux
* Facilita a comunicação e direcionamento de componentes


### First Look at NgRx
#### Demo: Setting up the Sample Application
Na aplicação não há um servidor back-end para esse aplicativo. Em vez disso, estamos usando uma biblioteca [Angular in-memory-web-api](https://github.com/angular/in-memory-web-api) que emula um servidor back-end e dá espaço a uma multidão ou cria operações de leitura, atualizaçao e exclusão. Esta é a mesma biblioteca usada pela documentação Angular. Vamos usar essa aplicação para não precisar configurar e instalar um servidor back-end.
Como estamos usando o in-memory-web-api, quaisquer alterações feitas nesses dados são only-in-memory e eles serão perdidos se atualizarmos o navegador ou reiniciar o aplicativo.


#### Installing the Store
NgRx é composto por um conjunto de pacotes
O único pacote requerido é o [@ngrx/store](https://ngrx.io/guide/store)

**Store** fornece um contêiner na mamória pra o **State** do aplicativo. Esse **Store** fornece uma única fonte de confiável para o aplicativo, pois é o único local em que o estado está armazenado, por consequência, o único local para ler esse estado. Isso garante resultados consistentes.

O **Store** é runtime-onlye, para que o estado não seja mantido se o usuário atualizar a página ou se o usuário sair da aplicação.

O **store** é simplemente um JSON que contém o estado da aplicação

#### Initializing the Store
Quando configuramos o NgRx na aplicação, inicializamos o store com seu reducer.
**Obs.:** o reducer executa uma action no state existente, cria um novo state e atualiza o armazenamento com esse novo state.
Ou seja, faz sentido associar o Store ao seu Reducer que cria um state para esse store.

Código para inicializar o Store
StoreModule.forRoot(reducer)
StoreModule.forRoot({}, {})

O ideal é organizar o state por feature criando hierarquia de propriedades. Para isso, vamos criar vários reducers um para cada slice (ou seja, um para products, um para users, etc) de state das features.

##### Feature Module State Composition
Técnica utilizada para compor nosso estado da aplicação a partir de nossos reducers de módulos de feature.
Sendo assim, no App Module inicializamos com StoreModule.forRoot(reducer), como o nosso reducer inicial
E depois em cada Module, por exemplo, Product Module inserimos StoreModule.forFeature('products', productReducer)

Ainda podemos dividir um reducer em reducers menores, principalmente quando o state dessa classe é muito grande.Por exemplo, Products tem ProductList e ProductData, podemos fazer:
StoreModule.forFeature('products', 
    {
        productList: listReducer,
        productData: dataReducer
    }
)


#### Demo: Initializing the Store
O StoreModule.forRoot({}, {}) recebe dois parâmetros
* O primeiro é o reducer
* o segundo é opcional, sendo um objeto configuração


#### Defining the State and Actions
Precisamos de um propriedade showProductCode no state e podemos criar uma action chamada toggleProductCode (ao invés de criar duas chamadas showProductCode e hideProductCode), mas não importa escolher uma ou duas actions nesse cenário.

#### Building a Reducer to Process Actions
Ao dar dispatch numa action, ele acionará um reducer que fará todo o processo, clonará o state, mas o novo state com as alteração da action desejada. Depois o reducer substitui o slice do objeto.

Cada transição de estado deve ser síncrona


#### Dispatching an Action to Change State
O Store inicializou nosso state e nossa action para encontrar o nosso reducer implementado, mas nada acontece até dar dispatch na action. 

##### Dispatching an Action
Antes de dar dispatch de uma action em um componente devemos injear o Store nesse componente, como qualquer outro serviço.


#### Subscribing to the Store to Get State Changes
this.store.select('products'): Usamos os método select que especifica qual slice do estado que desejamos.
Ou, como store é um observable, podemos usar o método pipe **this.store.pipe(select('products'))** 
Porém o recomendado é usar o select **this.store.select('products')** e modelar os resultados no selector, não no componente.


### Developer Tools and Debugging
#### Installing the Tools
##### Steps to Install the Redux Store Dev Tools
* Instalar a extensão para navegador [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
* Instalar [@ngrx/store-devtools](https://ngrx.io/guide/store-devtools/install)
* Inicializar @ngrx/store-devtools Module

Para inicializar o DevTools no Module, precisa inserir
StoreDevtoolsModule.instrument({
    name: 'APM Demo App DevTools' - o nome da aplicação
    age: 25 - ou seja, passando esse limite as ações mais antigas são removidas
    logOnly: environment.production - desativa todos os recursos de extensão, como debugging
})


### Strongly Typing the State
#### Extending the State Interface for Lazy Loading features
Quando criamos um módulo lazy loading, esse pacote é empacotado independentemente, e quando o usuário acessa a aplicação, ele é baixado do servidor, separado do pacote principal de aplicativos.

Se usarmos:
export interface State {
    products: ProductState;
    users: UserState;
}
perderemos nosso lazy loading. Sendo assim, para mantê-lo, podemos usar da seguinte forma:
Nesse caso, podemos deixar apenas o User, pois não é lazy loading
export interface State {
    users: UserState;
}

então, em products podemos usar a seguinte forma para incluir nosso Product no state
import * as AppState from '../../state/app.state'; 

export interface State extends AppState.State {
    products: ProductState;
}

**import * as AppState** ao invés de importar cada interface individual do nosso arquivo state, nós importamos * que importa todos os membros exportados e para facilitar o acesso à interface definimos o nome AppState que é uma palavra-chave.


#### Setting Initial State Values
Quando um componente faz subscribe pela primeira vez no Store, ele obtém o valor atual do slice do state solicitado.

#### Building selectors
* Se mudarmos a estrutura do Store, reorganizando-a em sub-slices, por exemplo, teremos que encontrar cada selector e atualizar o código.
* Como o código de select está atualmente, o código observa alteraçãos em qualquer propriedade no slice de state do produto. Ou seja, esse código é notificado mesmo que a propriedade showProductCode não tenha sido alterada.
this.store.select('products').subscribe(
      products => this.displayCode = products.showProductCode
    );

**Selector** é uma consulta reutilizável do Store. O selector nos permite manter uma cópia do state do store, mas projetada em diferentes formas, o que facilita o acessos por nossos componentes e serviços.

##### Benefits of selectors
* Fornece uma API fortemente tipada
* Separa o store dos componentes, para que eles não precisem saber sobre a estrutura do store. Isso permite reorganizar ou dividir o state de maneiras diferentes ao longo do tempo, sem precisar atualizar todos os componentes.
* Pode encapsular transformações complexas de dados.
* É reutilizável, então qualquer componente pode acessar o mesmo pedaço do state da mesma maneira.
* São minimizados, ou seja, os dados são cache, exceto se o state for alterado.

Existem dois tipos de selectors fornecidos pelo NgRx
* o primeiro é um seletor de recurso de criação. Essa função nos permite obter um slice de uma feature no state, simplemente informando seu nome.

const getProductFeatureState = createFeatureSelector< ProductState >('products');

* o segundo é uma seletor de criação. Essa função nos permite obter qualquer estado, compondo seletores para navegar na árvore de estados. Quando usamos essa função, ele seleciona o pedaço especificado do estado e retorna seu valor.

export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showProductCode
);


Caso o store sofra alguma mudança de estrutura, basta alterar no selector e o componente continuará tendo a mesma resposta.

Um selector deve ser uma **função pura**.


#### Composing Selectors
Cada selector com o createSelector é composto a partir do selector de features, mas não estamos limitados a um. Podemos compor vários seletores para criar um único seletor.
Vamos supor que ao invés de eu mandar o currentProduct fosse currentProductId, porém eu gostaria de mandar o currentProduct todo e não apenas o Id. Podemos criar:

const getProductFeatureState = createFeatureSelector< ProductState >('products');

export const getCurrentProductId = createSelector(
    getProductFeatureState,
    state => state.currentProductId
);

export const getCurrentProduct = createSelector(
    getProductFeatureState,
    getCurrentProductId,
    (state, currentProductId) => 
        state.products.find(p => p.id === currentProductId)
);





