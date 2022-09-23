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


### Strongly Typing Action with Action Creators
#### Building Action Creators
##### Benefits of Strongly Typed Actions
* Ajuda a evitar erros ortográficos ou de digitação
* Melhora a experiência das ferramentas
* Documenta um conjunto bem definido de ações válidas

##### Action Creators Using createAction
export const toggleProductCode = createAction('[ Product ] Toggle Product Code');

[ Product ] - slice que a action está modificando no state. Também podemos ser mais específicos usando também o nome da API ou o nome do componente, por exemplo [ Product API ] ou [ Product Edit Page ]

##### Defining Actions with Data
Algumas ações requerem dados associativos, por exemplo, quando o usuário clica em produto para exibir detalhes, é possível editar o produto selecionado. Ou seja, a ação do currentProduct precisa especificar o produto selecionado para que o reducer possa adicionar a seleção ao store. As páginas de edição do produto são notificadas e podem ler essa seleção do store para exibir o produto apropriado para a edição.
Nós indicamos que temos dados associados usando um segundo argumento no createAction. Por exemplo:

export const setCurrentProduct = createAction(
    '[ Product ] Set Current Product',
    props< { product: Product } >()
)

#### Using Strongly Typed Actions
Devemos importar todos os membros exportados e, para facilitar o acesso, usamos ProductActions

##### Processing an Action with Data
Para acessar as actions que tenham dados de associação a partir do nosso reducer, fazemos da seguinte forma:
on(ProductActions.setCurrentProduct, (state, action): ProductState => {
    return {
        ...state,
        currentProduct: action.product
    };
})

##### Dispatching an Action
this.store.dispatch(ProductActions.toggleProductCode());

##### Dispatching an Action with Data
productSelected(product: Product): void {
    this.store.dispatch(ProductActions.setCurrentProduct(
        { product: product }
    ));
}
Se o nome da chave for igual ao da variável, podemos simplicar usando a sintaxe abreviada da seguinte forma: 
productSelected(product: Product): void {
    this.store.dispatch(ProductActions.setCurrentProduct({ product }));
}


#### Demo: Using Strongly Typed Actions
* O primeiro argumento da função **on** é a action.
* o segundo argumento é o manipulador que executa a alteração de estado necessária para a ação específica que é executada no estado atual do armazenamento. E, **caso a ação tenha dados associados**, devemos inserí-los.


#### Using Actions and Selectors for Component Communication
##### Component Communication
Quando queremos fazer comunicação entre componentes, podemos dar o seguinte exemplo:
Quando o usuário seleciona um produto o List Component dá um dispatch na action de currentProduct. O reducer processa a action e atualiza o store com o currentProduct. Os componentes List Component e Edit Component são inscritos por meio de um selector e são notificados quando há alguma mudança.


#### Demo: Communicating with the Edit Component
A implementação original usava:
private selectedProductSource = new BehaviorSubject< Product | null >(null);
selectedProductChanges$ = this.selectedProductSource.asObservable();
O BehaviorSubject retém o último valor selecionado e transmite as notificações de alteração para qualquer assinante.
changeSelectedProduct(selectedProduct: Product | null): void {
    this.selectedProductSource.next(selectedProduct);
}

**Curso para mais detalhes: Angular Component Communications**



#### Defining Actions for Complex Operations
As vezes, nossas actions invocam operações mais complexas, como chamar um servidor backend como, por exemplo, load, update, create e delete.
Para actions mais complexas, apenas uma única ação não é suficiente. Iniciamos a operação complexa e configuramos ações para responder com base no resultado dessa operação.

O caminho para requisitar uma informação do servidor é:
O componente dá dispatch em uma action. O reducer processa essa ação, mas como não possue dados, não gera um novo state. O reducer chama um service para emitir um http request. O servidor retorna essas informações para o service e o service **faz um novo dispatch para action de sucesso**, pois os reducers são funções puras. O reducer processa essa action e é gerado um novo state e atualiza o store.

**Geralmente definimos três actions para operações complexas:**
* uma para a operação em si
* uma para conclusão bem-sucedida da operação
* e outra para um erro ou falha


### Working with Effects
#### Introduction
As vezes, nossas ações precisam de operações assíncronas ou outras com efeitos colaterais. Por exemplo, recuperar ou salvar dados em um servidor back-end.

Há partes do código que terão efeitos colaterais por design e é por isso que usamos a biblioteca [@ngrx/effects](https://ngrx.io/guide/effects/install).


#### What Are Effects?
Nesse caso, um efeito colateral é uma operação que depende ou interage com um fonte externa, como dispositivos de estados ou uma API. Usar o request http para acessá-lo novamente no servidor, é um exemplo de efeito colateral.

Podemos usar a biblioteca effects do NgRx para manter os componentes puros.


##### Effects Keep Components Pure
A maioria dos aplicativos precisam recuperar dados.
* Os componentes não são os melhores lugares para gerenciar códigos com efeitos colaterais.
* Não desejamos lidar com efeitos colaterais em funções reducer, na verdade, nem podemos dar dispatch em uma action em uma função reducer.
* **O melhor lugar para gerenciar efeitos colaterais** é o effects que funciona executando uma ação, realiza algum trabalho e da dispatch uma nova action, geralmente um sucesso ou de falha.

Sendo assim, o novo diagrama ficaria:
O componente dá dispatch em uma action. A action pode ser processada por dois lugares. O próprio reducer ou pelo effects. Nesse caso será o effects que processará essa action após passar pelo reducer. O effects acionará o serviço que buscará as informações no servidor. Em caso de sucesso, o servidor retorna os dados para o serviço. O serviço transmite as informações para o effects que dá dispatch em outra action. Desta vez, uma action com carregamento de sucesso do produto. O reducer executa essa action com os produtos e atualiza o state como os produtos adicionados. Em seguida envia as informações para o selector. O componente inscrito recebe a notificação dessa alteração do store.


##### Benefits of Effects
* Mantém os componentes puros, removendo os eventos com efeitos colaterais
* Isola os efeitos colaterais em um local central
* E facilitam os testes dos efeitos colaterais isolados


#### Defining an Effect
* Effects é um tipo de serviço do Angular, então, no seu núcleo, ele é como qualquer outro serviço Angular com decorator Injectable no topo da classe do TypeScript.
* No constructor, injetamos as actions Observables da biblioteca NgRx que emitem uma action toda vez que uma sofre dispatch nossa aplicação após o reducer do último state.
* Também injetamos o serviço que queremos fazer a requisição http.
* Criamos uma varíavel assíncrona que recebe createEffect
* Usamos a action observable que injetamos no construtor e precisamos filtrar as actions que não estamos interessados, exceto a de carregar produtos. Podemos fazer isso usando um **operador** do NgRx, chamado [ofType](https://v7.ngrx.io/api/effects/ofType) que aceita as ações que você deseja executar. Depois continuamos com **mergeMap**. Ele mescla cada ação emitida, chamando um serviço do Angular que retorna um observable e depois mescla essa essa chamadas em um único fluxo.


##### Demo
EffectsModule.forRoot([]);
O efeitos são informado nessa matriz.


#### SwitchMap Versus MergeMap 
##### RxJS Operators
Frequentemente os efeitos são transmitidos aos fazer requisições de HTTP que retornam Observables. Dependendo do operador que escolhermos, podemos cancelar requisições em andamento ou fazer requests fora de ordem se novas ações são despachadas contra o mesmo efeito que usamos. 
Usamos o operador **mergeMap** em nosso effect para mapear as actions observables e mergear qualquer observable interno que é retornado do nosso serviço Angular dentro de um único fluxo observable.
Também poderia ter usado o operador **switchMap**. Mas escolher o operador errado, podemos criar condições inesperadas de corridas.

* **switchMap:** cancela a subscription/requisição atual se um novo valor for emitido e pode causar uma condição de corrida. Isso signifca que se alguém envia uma segunda ação do produto antes do primeiro produto, a solicitação HTTP retorna o seu efeito a primeira solicitação HTTP em andamento será cancelada e o produto pode não ser salvo, levando a uma possível condição de corrida. **Use esse operador para get requests ou cancelar requests de pesquisa.**

* **concatMap:** executa as subscriptions/requests em ordem e é menos performático. Ou seja, espera o término da última para começar a próxima. **Use esse operador para get, post and put requests quando a ordem for importante.**

* **mergeMap:** executa as subscriptions/requests em paralelo e é mais performático que o concatMap, mas não garante a ordem. **Use esse operador para get, put, post and delete requests quando a ordem não for importante.**

* **exhaustMap:** Ignora todas as subscriptions/requests subsequentes até que o request atual seja finalizado. **Use esse operador para login quando não queremos mais fazer ou enfileiras requisições até que a primeira esteja finalizada.**

Esses operadores pertencem à biblioteca [RxJS](https://rxjs.dev/).

#### Demo: Async Pipe 
O operador **tap** é uma maneira de manter o funcionamento anterior na nossa inscrição do método displayProduct, enquanto podemos utilizar o **pipe async** nos nossos componentes de template para manter o código limpo e a habilidade de auto desinscrever.














