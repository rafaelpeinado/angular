# Loiane Angular
[Git Loiane](https://github.com/loiane/curso-angular)

## Introdução
### Introdução ao Angular
* [Documentação Angular](https://angular.io/)
* Parceria Google + Microsoft: A Google mantém o Angular, e usa o TypeScript que é da Microsoft
* Open Source (código no Github)
* O Angular 2 é uma nova framework. Não é continuação da versão 1 e foi reescrito
* Essas mudanças aconteceram para usar padrões de web e Web Components

#### Blocos Principais
* Componentes
* Diretivas
* Roteamento
* Serviços
* Template
* Metadata
* Data Binding
* Injeção de Dependência

##### Componente
Encapsula:
* Template
* Metadata: processamento de classes
* Dado a ser mostrado na tela (Data Binding)
* Comportamento da VIEW

Em Angular, a programação é orientado a componentes

##### Serviços
Podem ser injetados nos componentes

##### Roteamento 
* Responsável pela navegação
* Podemos ter várias páginas diferentes no SPA

##### Diretiva
* Responsável por modificar elementos DOM e/ou seu comportamento
* Por exemplo, podemos ter uma diretiva chamada **autoGrow**, que assim que dermos foco para o input, esse input pode crescer de tamanho.

### Ambiente de Desenvolvimento
* Node.JS
* TypeScript
* Angular CLI

### Hello, World! Criando primeiro projeto e o primeiro Componente
* ng new primeiro-projeto

Para criar um componente do zero precisa
* Criar o diretório meu-primeiro
* Criar o arquivo meu-primeiro.component.ts
  * criar class MeuPrimeiroComponent {}
  * definir o decorator @Component() (recebe como parâmetros os metadados), que nesse caso vamos passar para o Transpiling que é o compilador do TypeScript (é igual anotação do Java, que é uma maneira de passar informações adicionais para o compilador)
    * @Component() é importado do @angular/core
* ng g c meu-primeiro2: usa o Angular CLI para criar um componente

### Introdução ao TypeScript para Angular
* **tsc main.ts:** comando para compilar o arquivo TypeScript
  * vai gerar o arquivo main.js

* ECMAScript 2015 usamos o let no lugar no var
* [Documentação ES6 sobre novas features](http://es6-features.org/#Constants)
* Programação Funcional
* Para usar ECMAScript precisamos de um Transpiler, e um dos mais usados é o [Babel](https://babeljs.io/): ele transforma em JavaScript puro
* Toda classe Angular possui algum decorator

### Módulos (ngModule)
É o arquivo que vai ajudar a organizar a aplicação e a modularizar
* um module temos um export class e é nomeado module.ts
* @NgModule (para representar uma módulo), importado do @angular/core
* **BrowserModule:** prepara a aplicação para ser rodada em um browser
* **FormsModule:** para formulários e two-way data binding
* **HttpModule:** http para fazer chamadas http
* **providers:** no AppModule o ideal é inserir serviços que serão de uso global da aplicação
* O metadado **bootstrap**: qual componente deve ser instanciado quando iniciarmos a aplicação

* ng g m cursos: para criar um módulo

* **CommonModule:** não importa o BrowserModule, mas sim o CommonModule que contém as diretivas e as pipes mais comuns 
* Plugin VSCode Auto Import steoates

### Templates
* Podemos usar inline se o componente tiver até 3 linhas, mais que isso é recomendado usar um arquivo separado.

### Serviços (Services) e Injeção de dependência (DI)
* ng g s cursos/cursos
* Os services tem um decorator chamado Injectable, dizendo que essa classe pode ser injetada
* Fornecer uma instância de uma classe para o componente

### Dicas de plugins Angular para Atom e VS Code
Atom:
  * angular typescript snippets
  * atom typescript
  * linter
  * file icons
  * open recent
  * pigments

VS Code:
  * Angular Extension Pack da Loiane

## Data binding 
### Property Binding e Interpolação
#### Data binding
É uma forma de associar informações que estão no componente para o template e vice-versa. Ou seja, se temos uma variável, um atributo ou um método que retorna um valor conseguimos mostrar essas informações no template e quando o usuário interage com o HTML que vão ser disparados alguns eventos, também conseguimos escutar esses eventos no componente e executar alguma lógica que seja necessária.
* Interpolação ({{ valor }}): é o valor de um atributo ou de um método e conseguimos exibir a saída no template.
  * do componente para o template
* Property binding ([propriedade]="valor"): também é saída do componente para o template
* Event binding ((evento)="handler"): Do contrário, também conseguimos escutar eventos do template com click no botão, com foco em algum input para assim executar algum método no componente para executar a lógica de programação necessária.
* Two-way data binding ([(ngModel)]="propriedade"): conseguimos manter tanto o template quanto o componente atualizados ao mesmo tempo, útil para formulários


[Para pegar imagens gratuitas](http://lorempixel.com.br/)

* A interpolação também é uma forma de property binding, porém as tags p ou div, por exemplo, não temos nenhuma propriedade para indicar um conteúdo, então usamos interpolação.
* Há momentos que poderemos usar apenas property binding
* Quando usamos os colchetes [src] o que o Angular faz é usar o bind-src
* Quando não existe uma propriedade no elemento, usa-se [attr.colspan]

### Class e Style binding
[How to Add Bootstrap to an Angular CLI project](https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/)

* Class e Style binding também são property bindings
* Criar variável local de template usando #classe, por exemplo
* [class.alert-success]="classe.value == 'alert-success'", ou seja, adiciona alert-success no class, caso a variável de template classe.value for igual a alert-success
* [style.display]="classe.value == 'alert-danger' ? 'block' : 'none'"
  * style.[propriedade que quer mudar] = lógica e valores da propriedades

### Event binding
* [Documentação de Eventos](https://developer.mozilla.org/en-US/docs/Web/Events)
* [Bootstrap widgets Angular CLI](https://ng-bootstrap.github.io/#/getting-started)
* Para properties usamos [], para events usamos ()
* keyup: lança um evento toda vez que um botão do teclado é usado
  * para mandar o texto que está sendo recebido pelo evento, podemos usar a variável $event
* blur: quando o campo perde focos


### Two-way data binding
* Atualizar valor do template para o Componente e vice-versa
* Usa-se binding de eventos + propriedades
* (input): emite um evento sempre que o campo é atualizado 
* ngModel: representa uma entidade, por exemplo, nome ou qualquer outro objeto (ou atributo simples)
* Sintaxe "banana na caixa" ou banana in a box [()] = ngModel
  * ngModel é uma diretiva que pertence ao module **FormsModule**

### Input properties
O input property tem um objetivo das diretivas, em projetos reais usaríamos a input property para criar componentes e organizar melhor o projeto

### Output properties
Componente customizado.
Objetivo: disparar um evento "mudou" toda vez que o usuário clicar nos botões + ou -.
Evento recebe novo valor do input

Quando for um harded code, não precisamos usar [valor]=10, podemos usar valor=10


### Ciclo de vida (life-cycle) do Componente
| # | Evento (Hooks)        | Quando?                                                |
|:--|:---------------------:|-------------------------------------------------------:|
| 1 | ngOnChanges           | Antes #2 e quando valor property-binding é atualizado  |
| 2 | ngOnInit              | Quando Component é inicializado                        |
| 3 | ngDoCheck             | A cada ciclo de verificação de mudanças                |
| 4 | ngAfterContentInit    | Depois de inserir conteúdo externo na view             |
| 5 | ngAfterContentChecked | A cada verificação de conteúdo inserido                |
| 6 | ngAfterViewChecked    | A cada verificação de conteúdo/conteúdo filho          |
| 7 | ngOnDestroy           | Antes da diretiva/component ser destruído              |

* **ngOnChanges:** para input properties, quando este muda

Se muda o input property, somente o ngOnChanges é disparado na mudança. Sendo assim, se tiver input properties é melhor usar ngOnChanges, senão, é melhor usar ngOnInit

## Angular CLI
### Angular CLI: Instalação e criação de projetos: ng new e ng serve
* Requer node
* npm install -g @angular/cli
* node -v
* [Git Angular CLI](https://github.com/angular/angular-cli)
* ng new diretivas
* cd diretivas
* ng serve (similar ao npm start)
  * ng serve --port 4201 --live-reload-port 49153

Outra opção de criar um projeto é:
* mkdir diretivas
* cd diretivas
* ng init
* ng serve


### Angular CLI: Criando componentes, services: ng generate
* ng generate component diretiva-ngif
  * ng g c diretiva-ngif
* ng generate service diretiva-ngif (geralmente criamos um serviço para o componente com o mesmo nome)
  * ng g s diretiva-ngif 

Arquivos são gerados usando o padrão de nomenclatura e boas práticas segundo o **Style Guide**

| Tipo Arquivo | Comando                        |
|:-------------|-------------------------------:|
| Component    | ng g component meu-component   |
| Service      | ng g service meu-servico       |
| Directive    | ng g directive minha-diretiva  |
| Pipe         | ng g pipe meu-pipe             |
| Class        | ng g class minha-classe        |
| Interface    | ng g interface minha-interface |
| Enum         | ng g enum meu-enum             |


### Angular CLI: Usando pré-processadores (Sass, Less, Stylus)
Ao gerar um novo projeto
* ng new meu-projeto --style=sass
* ng new meu-projeto --style=less
* ng new meu-projeto --style=stylus

Em um projeto existente
* ng set defaults.styleExt scss
* ng set defaults.styleExt less
* ng set defaults.styleExt styl
  * Porém, os arquivos existentes não são migrados


### Angular CLI: ng lint, ng test, ng e2e
* ng lint (escaneia o código e procura erros, como ; faltando etc)
  * ng add @angular-eslint/schematics
  * [Style Guide](https://angular.io/guide/styleguide)
* ng test
  * usa TypeScript
  * Usa Jasmine (BDD): testes orientados a comportamento
  * test.ts carrega todos os providers e busca todos os arquivos spec.ts
  * Karma: é uma ferramenta de testes que permite executar cada linha de código teste em diferentes browser (assim podemos emular e verificar a compatibilidade cross-browser da app)
* ng e2e
  * Protractor para ferramentas de integração

### Angular CLI: Estrutura do projeto
#### Para que serve o Angular CLI?
* Cria toda a estrutura do projeto
* Gera página HTML inicial, arquivos Typescript iniciais, arquivos CSS e arquivos de testes unitários
* Cria arquivo package.json com todas as dependências do Angular
* Instala todas as dependências do node (npm install)
* Configura o Karma para executar os testes unitários com Jasmine
* Configura Protractor para executar os testes end-to-end (E2E)
* Inicializa um repositório git no projeto e faz commit inicial
* Cria todos os arquivos necessários para fazer o build da aplicação para produção

O Angular CLI utiliza o [Ember CLI](https://emberjs.com/) por baixo, e essa ferramenta faz a criação de diretórios, prepara tudo para build etc


#### Estrutura Diretórios do Projeto
* **config:** diretório que contém configuração para deploy/build e teste
* **dist:** diretório onde é gerado o build da aplicação. Ignorado pelo git
* **e2e:** diretório que contém os scripts para testes end-to-end
* **node_modules:** diretório que contém os pacotes npm da app (package.json). Também ignorado pelo git
* **public:** diretório genérico que contém um arquivo .npmignore
* **src:** diretório do código fonte da aplicação. Contém código typescript/javascript, CSS, imagens e templates HTML
* **angular-cli.json:** arquivo que contém informações sobre o projeto e build de produção, como nome do projeto, config de onde encontrar os arquivos fontes da app, config de testes, etc.
* **tslint.json:** arquivo que contém configurações para fazer lint da app


#### Estrutura do Código Fonte (src)
* **index.html:** página HTML principal da aplicação, que faz o startup.
* **main.ts:** é o código que carrega a aplicação. Somente deve ser editado caso seja necessário adicionar mais módulos na app (que não dê para fazer via angular-cli.json).
* **polyfills.ts:** contém os imports de libs para compatibilidade com ES6 (biblioteca de suporte)
* **tsconfig.json:** contém as configurações do compilador do typescript (por exemplo, pega o "module": "es2020" e compila para "target": "es2017")
* **typings.d.ts:** é usado para declarações de tipos que a app usa + módulo
* **index.ts:** contém o export de todos os arquivos do módulo


#### Estrutura package.json
Dependencies x devDependencies
* **dependencies:** dependências necessárias para executar a aplicação
* **devDependencies:** dependências necessárias para desenvolver a aplicação (não necessárias após o build de produção)


##### Dependencies
* **@angular/core:** pacote principal do framework Angular. Contém decorators e metadados, Component, Directive, injeção de dependência e os hooks de ciclo de vida do Component.
* **@angular/common:** Serviços, pipes e diretivas comuns fornecidas pelo time de dev do Angular.
* **@angular/compiler:** Template de compilação do Angular. Entende o código dos templates e converte em código que faz a app ser executada e renderizada. Desenvolvedores não interagem com esse pacote diretamente (apenas usamos seu código).
* **@angular/forms:** contém todo o código para construção de formulários no Angular.
* **@angular/platform-browser:** contém todo o código relacionado ao DOM e ao browser, especialmente as partes que ajudam a renderizar o DOM. Esse pacote também contém o método para fazer o bootstrap da aplicação para builds de produção que pré-compila os templates. (faz tratamento de diretivas, por exemplo)
* **@angular/platform-browser-dynamic:** contém os Providers e o método para iniciar as aplicações que compilam templates no lado cliente. Não usa compilação offline. Usada para fazer bootstrap durante desenvolvimento e exemplos plunker.
* **@angular/http:** fornece o cliente HTTP
* **@angular/router:** classes de roteamento.


##### Dependencies polyfills
* **core-js:** biblioteca que permite compatibilidade de engines JS antigas com a especificação do ES 2015, ou seja, emula as funcionalidades do ES 2015 (ES6) E ES 7 em browsers que suportam somente ES5.
* **reflect-metadata:** dependência compartilhada entre o Angular e o compilador TypeScript. Permite o uso de decorators no código (annotations). Isso permite aos desenvolvedores para fazer upgrade no TypeScript sem precisar de fazer upgrade no Angular. Esse é o motivo desta ser uma dependência da aplicação e não do Angular
* **rxjs:** extensão para a especificação do Observables (programação assíncrona). Reactive extensions for JavaScript
* **ts-helpers:** biblioteca auxiliar que permite otimização do código typescript quando o mesmo é compilado para ES 5.
* **zone-js:** extensão (plugins) útil para tarefas assíncronas (chamadas de Zones).


##### devDependencies 
* **@types/jasmine:** definição jasmine para typescript (antigo typings)
* **@types/protractor:** definição protractor para typescript (antigo typings)
* **angular-cli:** ferramenta de linha de comando para gerenciar projetos Angular
* **codelyzer:** lint (análise de código) para Angular
* **jasmine-core:** arquivos principais jasmine para node.js
* **jasmine-spec-reporter:** relatório em tempo real para BDD com Jasmine
* **karma:** ferramenta de testes que cria um web server e executa código de teste para cada um dos browsers conectados
* **karma-chrome-launcher:** launcher do karma para o chrome
* **karma-jasmine:** adaptador para o jasmine
* **karma-remap-istanbul:** adaptador para code coverage (relatório)
* **protractor:** framework de teste end to end (integração) para Angular
* **ts-node:** módulo typescript para node.js
* **tslint:** lint (análise de código) para typescript
* **typescript:** compilador typescript


### Angular CLI: Gerando build de produção
#### Gerando o build para desenvolvimento (as 4 fazem a mesma coisa): 
* ng build --target=development --environment=dev
* ng build --dev --e=dev
* ng build --dev
* ng build


#### Build de dev
* útil para integrar o código Angular com o projeto de backend (PHP, Java, .NET, Python, Ruby etc)
* Código que dá para debugar
* Arquivo main.bundle.js contém todo o código do projeto + CSS + HTML (legível)


#### Gerando o build de produção (as 3 fazem a mesma coisa): 
* ng build --target=production --environment=prod
* ng build --prod --env=prod
* ng build --prod


#### Build de prod
* Ofusca e minifica o código JS da aplicação
* CSS e templates HTML já minificados e incluídos em main.bundle.js
Além disso, os arquivos contém um número no nome, isso ajuda na hora de cache. Quando o arquivo muda, é necessário fazer um novo download, o que garante que a aplicação esteja sempre atualizada. Por exemplo, main.52f367401ec1fd37b6ba.js, enquanto dev ficaria main.js

* **npm install http-server -g:** para servir no browser para carregar arquivos do dist


### Angular CLI: instalando bibliotecas (bootstrap, jquery, materialize, lodash)
* [angular-cli-libs-externas](./projetos/angular-cli-libs-externas/)
* npm i --save bootstrap
  * jquery é dependência do bootstrap
  * tether é o que faz o meio de campo entre jquery e o bootstrap
* [Materialize](https://materializecss.com/)
  * precisa de jquery instalado para alguns casos de javascript
  * para [Angular](https://www.npmjs.com/package/materialize-angular)
* [Lodash](https://lodash.com/)
  * npm i --save lodash
  * **npm i --save @types/lodash:** precisa instalar para fazer a ponte entre o lodash e o typescript

## Diretivas
### Introdução e tipos de diretivas no Angular
* Diretivas são instruções
Por exemplo, looping for que diz: itere todos os cursos, e a cada iteração, atribua o valor do elemento atual à uma variável curso. Replique também o elemento <li> com o valor da variável curso a cada iteração.

* Componentes também são diretivas com template

Tipos de diretivas:
* Diretivas Estruturais: interagem com a view e modificam a estrutura do DOM e/ou código HTML - *ngFor, *ngIf
* Diretivas de atributos: interagem com o elemento em que foram aplicados - ng-class, ng-style


### Diretivas: ngIf
* Tem o mesmo comportamento que a condicional if nas linguagens de programação
Como o ngIf destrói a parte do código que é falsa, isso pode impactar a performance. Dependendo do caso, o ideal é usar hidden

#### *ngIf x hidden
* Hidden: recomendado para árvore de elementos pequenas
  * é menos custoso usar [hidden] caso o custo de criar a árvore de elementos seja grande
* *ngIf: recomendado para árvore de elementos grandes
  * quando envolve segurança, a opção a ser usada é o *ngIf


### Diretivas: ngSwitch, ngSwitchCase e ngSwitchDefault
* **(click)="aba = 'lista'"**: a variável recebe valor ao dar um click
* **[ngSwitch]:** usa property binding, porque vamos precisar ficar escutando o valor da expressão

### Diretivas: ngFor
Parecido com laço for

### Diretivas: sobre o * e template
Quando usamos o *, a tradução do Angular é usar a tag ng-template

### Diretivas: ngClass
[diretiva-ngClass](./projetos/diretivas/src/app/diretiva-ngclass/)

### Diretivas: ngStyle
[diretiva-ngStyle](./projetos/diretivas/src/app/diretiva-ngstyle/)

### Operador Elvis
[Operador Elvis](./projetos/diretivas/src/app/operador-elvis/)
Uma maneira de fazer navegação segura entre objetos

### ng-content
* Nem sempre poderemos usar o @Input para enviar algum dado, as vezes precisamos enviar um conteúdo
* <ng-content> é o componente pai quem vai enviar
* Se quisermos enviar um conteúdo específico, informamos a partir de um selector


### Criando uma diretiva de atributo: ElementRef e Renderer
* A diretiva é como se fosse um component sem template.
* ng g d shared/fundo-amarelo
* Decorator de Directive
* ng g c diretivas-customizadas
* Diretivas também ficam dentro de Declarations

* **ElementRef:** classe que representa a referência de qualquer elemento ou qualquer tag do DOM
* Se eu quiser que a diretiva seja inserida em tags específicas, por exemplo, em parágrafos eu devo fazer **selector: 'p[fundoAmarelo]'**

* Devemos evitar a utilização do ElementRef, porque ele acessa diretamente a tag, no exemplo a tag p, do DOM e isso pode trazer vulnerabilidade para aplicação, como ataques XSS, que são de cross-site scripting. Ou seja, a melhor prática é o Renderer

### Diretivas: HostListener e HostBinding
* **HostListener:** escutar o evento do elemento hospedeiro, que no caso do exemplo é o p 
* **HostBinding:** permite que façamos a ligação/associação de determinado atributo da diretiva a um determinado atributo do elemento HTML

### Diretivas: Input e Property Binding
[Diretiva Highlight](./projetos/diretivas/src/app/shared/highlight.directive.ts)

### Criando uma diretiva de estrutura (ngElse)
* A tag <ng-template> é um conceito de web components
* **TemplateRef:** que faz referência ao template
* **ViewContainerRef:** faz referência ao container da view
* Nós podemos usar o *, pois Angular consegue fazer a abstração do web component
* [Documentação ngIf do Angular](https://github.com/angular/angular/blob/d315e2c4fa178dfbd41bc25259605bb999fa302e/packages/common/src/directives/ng_if.ts#L155)




## Serviços
### Introdução a Serviços
* **Buscar/enviar dados para o servidor:** Componente -> Serviço -> Backend
* **DRY: Don't Repeat Yourself:** também é usado para não repetir códigos e criar classes de serviços
  * Fornece lógica de negócio e evita código duplicado
* O ideal é que toda lógica de negócio fique na classe de serviço, para que os componentes apenas peguem os dados e exibam na tela
* **Classes utilitárias**
* [API Pokemon](https://pokeapi.co/)

### Criando um serviço (Service)
* ng g c cursos
* ng g s cursos/cursos

### Injeção de Dependência (DI) + como usar um serviço em um componente
O que é dependência?
* Classe1 precisa da OutraClasse para funcionar
  * Classe1 <- Outra Classe
* Podemos fazer a Injeção de Dependências de três formas:
  * Construtores
  * Métodos setters
  * Atributos

### Escopo de instâncias de serviços e módulos (singleton e várias instâncias)
Qual a diferença entre ter várias instâncias ou apenas uma instância da classe?

Quando colocamos a classe no providers do Módulo, ela vai ser instanciada apenas uma vez, mesmo inserindo em vários providers (isso é o padrão Singleton, pois terei apenas uma instância da classe, independente de onde eu inserir esse serviço)

* Se eu quiser um escopo global, eu insiro no providers do AppModule, se eu quiser mais restrito, eu insiro apenas no providers do Module desejado
  * Além disso, quando inserimos o providers dentro daquele módulo, todos os declarations tem acesso àquele serviço. Sendo assim, se quisermos que o serviço seja usado apenas por um determinado componente, podemos usar providers do Decorator Component e importar a classe, conforme [exemplo](./projetos/servicos/src/app/criar-curso/criar-curso.component.ts), porém, isso cria mais instâncias do serviço
    * **Quando é apenas uma instância todos os componentes são atualizados caso o serviço seja alterado. Quando temos mais de uma instância, apenas aquela instância vai ser atualizada, caso o serviço seja alterado.**

* **[CommonModule e BrowserModule](./projetos/servicos/src/app/criar-curso/criar-curso.module.ts)**

### Comunicação entre componentes usando serviços (broadcast de eventos)
* Quando não temos componentes pai e filho, no caso componentes completamente independentes, usamos serviço para fazer a comunicação entre componentes.

* No exemplo, o receber-curso-criado é filho do criar-curso, sendo assim, ele herda também o provider do criar-curso, usando apenas uma instância

* Quando definimos um atributo ou método como static, dizemos que não precisamos da instância da Classe para poder acessá-lo

### Injetando um serviço em outro serviço
[Exemplo](./projetos/servicos/src/app/shared/log.service.ts)


## Pipes (Filtros)
### Pipes (usando pipes, parâmetros e pipes aninhados)
* Transforma um valor e exibe o valor transformado dentro do template
* [Documentação Pipes](https://angular.io/api?query=pipe)
* Todos pipes fazem parte do pacote @angular/common e não precisa importar, pois faz parte do **BrowserModule e CommonModule**

### Criando um Pipe
* ng g p camel-case
* Ele também precisa ser declarado no module em que foi criado

### Aplicando Locale (internacionalização) nos Pipes
* Do padrão 4.5 para 4,5
* O Angular já vem como padrão o Inglês Americano

* No módulo principal precisamos fazer um provider do LOCALE_ID, que é um Token. Quando criamos tokens, é para não criar colisão na aplicação
  * Existem três formas de fazer a injeção de dependências:
    * **useValue:** podemos passar apenas um valor
    * **useClass:** nome da classe
    * **useFactory:** usa o padrão de projeto Factory

O ideal é criar um serviço de Settings para configurações globais, como por exemplo, configurações da aplicação, nome do usuário etc, melhor criar um serviço global

### Pipes: Criando um Pipe Puro
* No AngularJS existia um filtro para filtrar valores de array e orderby, porém eles não vieram para o Angular 2 como pipes, pois o time do Angular informou que por questão de performance e minificação.

* **Obs.: o filtroArray criado no exemplo não deve ser usado em projetos reais. A intenção apenas conhecer um pipe puro e um pipe impuro**

* Um pipe puro não olha as modificações do valor que é passado como parâmetro no método transform do Pipe
No caso do exemplo, ao filtrar a lista e adicionar um novo curso, ainda assim só serão exibidos os valores anteriores, exceto os adicionados. Para conseguir visualiza os novo, precisa digitar um novo valor no filtro.

### Pipes: Criando um Pipe Impuro
O ideal para fazer esses filtros dos array em um projeto real, devemos seguir o que foi feito na tag Maneira correta de usar filtros em projetos.

### Pipes: Async (Assíncrono)
Pipe async serve tanto para Promise, quanto para Observable


## Rotas
### Rotas: Introdução
* **Single Page Applications (SPA):** 
  * mudamos o conteúdo, fazemos navegação e a página não faz refresh. Ele apenas altera as hashes (endereço das páginas)
  * Se fizesse refresh, ele recarregaria tudo novamente como nas páginas tradicionais.
* Como funciona: 
  * http://meuprojeto.com.br/usuarios
    * **usuarios:** vai carregar um componente, por exemplo, ListaUsuariosComponent
  * http://meuprojeto.com.br/usuarios/2/edit
    * o Angular lê e identifica a rota
    * **usuarios:** vai carregar um componente, por exemplo, ListaUsuariosComponent
    * **2:** /usuarios/:id - UsuárioDetalhesComponent
    * **edit:** UsuarioFormComponent

### Rotas: Configurando rotas simples
* **forRoot:** rotas para toda a aplicação, são rotas raiz da aplicação: página inicial, login ou de não encontrado
* **forChild** para funcionalidades
* **tag <router-outlet>:** é o que permite ter suporte a rotas
* No index.html temos uma tag base href que já aponta para /. Podemos mudar o valor do href para configurar um namespace para as rotas. Se colocarmos href="/login" não significa que irá redirecionar para a rota de login. É apenas o nome do namespace. Nesse caso a app ficaria localhost:4200/login/login - caso a rota de login seja ativada.

### Rotas: RouterLink: definindo rotas no template
* routerLink direciona para as rotas cadastradas em routing

### Rotas: Aplicando CSS em rotas ativas
* routerLinkActive: quando a rota estiver ativa, o item ficará marcado.

### Rotas: Definindo e extraindo parâmetros de roteamento
Para passar parâmetros para a rota, usamos por exemplo, cursos/**:id**
* ao usar [routerLink] login, cursos e curso/:id são rotas raiz do projeto, então a / é opcional
* **ActivatedRoute:** podemos injetar no construtor para pegar detalhes da rota como, por exemplo, os parâmetros


### Escutando mudanças nos parâmetros de roteamento
* não acontece mudanças, pois estamos usando no construtor e além disso, snapshot pega a foto apenas da primeira rota, ou seja, quando tem mudanças nos parâmetros do roteamento, por exemplo no ID do curso a casse já foi inicializada e não conseguimos obter o valor do novo parâmetro.
* O **[this.activatedRoute.params](./projetos/rotas/src/app/curso-detalhe/curso-detalhe.component.ts)** é do tipo **Subscription** e por questão de boa prática, devemos usar o Subscription. 
  * Já que this.activatedRoute.params retorna um BehaviorSubject, retorna um objeto de inscrição que podemos fazer um subscribe e ficar escutando, então por boa prática devemos usar o Subscription e quando o objeto for destruído, devemos fazer um unsubscribe.


### Rotas Imperativas: Redirecionamento via código
* this.router.navigate(['/nao-encontrado']);

### Rotas: Definindo e extraindo parâmetros de url (query)
* localhost:4200/cursos?pagina=1
  * **?pagina=1:** é o parâmetro de query e também é uma forma de passar parâmetros opcionais para a rota
  * usamos a diretiva **[queryParams]**


### Criando um módulo de rotas
* Atualmente o Angular CLI já cria as rotas dessa forma
* As diretivas routerLink, routerLinkActive etc, pertencem ao RouterModule


### Criando um módulo de funcionalidade
Refatorando código para garantir que cursos seja um módulo

### Criando um módulo de rotas de funcionalidade
Refatorando o AppRoutingModule e gerando um módulo de routing para Cursos


### Rotas Filhas
* Como todas as rotas repetem a parte /alunos, nós podemos criar rotas filhas. 
* Além disso, se for rotas comuns sempre será apenas um componente renderizado, porém com rotas filhas podemos renderizar componentes pai e componentes filhos. 
* Precisa colocar o <router-outlet> dentro do alunos componente

### Rotas Filhas: desenvolvendo as telas
* Inseri o provide do service Alunos no providedIn do Serviço
* Não é possível passar um objeto por rotas no Angular


### Rotas: Dica de Performance: Carregamento sob demanda (lazy loading)
A primeira coisa que a aplicação faz é baixar todos os arquivos do servidor. E quanto maior o arquivo é, mais demora para baixar e renderizar.
* Ganha performance, pois o main fica menor
* Segurança

* Primeiro passo é organizar a aplicação em módulos
  * é usado o loadChildren para fazer o carregamento do módulo com o **caminho completo** # Nome do Modulo
  * Quando usamos o lazy loading, não podemos usar o import CursosModule no AppModule, por exemplo, mas não pode estar em nenhum outro lugar. **É necessário deletar o import e o CursosModule**
  * No cursos routing, necessário apagar a rota cursos, porque o principal já foi configurado no AppModule

* Toda vez que usar o lazy loading, as rotas precisam manter um padrão, o que vai ser alterado em cursos, por exemplo


### Rotas: Tela de Login e como não mostrar o Menu
* Como não mostrar o menu já que estamos usando roteamento e estamos usando o router-outlet no nosso app component


### Usando Guarda de Rotas: CanActivate
* Pode separar em qualquer lugar, mas o ideal é separar tudo em uma pasta chamada guards
* Guarda de rota é um serviço então, ng g s guards/auth-guard


### Usando Guarda de Rotas: CanActivateChild
* A diferença entre CanActivate e CanActivateChild é que a guarda de rotas filhas é mais específica para proteger o que o usuário pode ou não fazer naquele componente. Por exemplo, as vezes o usuário pode consultar, mas não pode excluir, editar ou criar.

* Podemos criar uma guarda de rotas filhas genérica, em que fazemos a consulta no servidor ou então podemos criar um específico para cada módulo do projeto.

* Se quisermos que o canActivateChild faça a verificação para todos, inclusive o componente pai, devemos inserir o Guard dentro do AppModule e AppRoutingModule.
* Se quisermos só nas filhas, podemos inserir dentro do module Alunos, por exemplo.


### Usando Guarda de Rotas: CanDeactivate
* É para verificar se o usuário pode desativar a rota
* Serve, por exemplo, quando o usuário está preenchendo um formulário e quando ele clica para ir para outro link, perguntar antes de quer perder as mudanças

* Object<any>
  * **<any>** é o diamond operator que serve para definir o tipo da classe, no caso do CanDeactivate é para definir o componente que estamos tentando desativar


### Usando Guarda de Rotas: CanDeactivate com Interface Genérica
* Para reutilizar em vários componentes.


### Usando Guarda de Rotas: Resolve: carregando dados antes da rota ser ativada
* Quando acessamos detalhes do aluno, os dados só são carregados depois que o componente é renderizado pela rota do :id.
* As vezes, o tempo de carregamento das informações pode ser sensível ao projeto e temos a necessidade de estar com tudo pronto antes do componente ser criado e renderizado na tela.

* Nesse exemplo, o objeto a ser carregado vai ser aluno.

* De acordo com a aula, a sequência que está sendo seguida é
  1. Após fazer o login, quando acessamos a home é chamado o AuthGuard
  2. Ao clicar em Alunos, chama novamente AuthGuard
  3. Ao clicar em um aluno:
     1. AlunosGuard
     2. AlunoDetalhesResolver
     3. ngOnInit: AlunoDetalhesComponent
     4. Recebendo obj Aluno do resolver


### Usando Guarda de Rotas: CanLoad: como não carregar o módulo sem permissão
* No projeto atual, se entrarmos na url localhost:4200/alunos, o módulo alunos será baixado e em seguida será redirecionado para a tela de login, por causa do AuthGuard. Se o usuário não tinha permissão para acessar o módulo, ele foi carregado mesmo na memória mesmo assim.
  
* o canLoad precisa ser aplicado em todos os módulos que são lazy loading


### Definindo rota padrão e wildcard (rota não encontrada)
* Caso não tenha uma rota padrão para página não encontrada, é exibido um erro no console, pois ele verifica as rotas e se não achar, ele exibe um erro.

* Quando entramos em uma rota para ser verificada e validada pelo Angular, ele vai verificar se a rota que foi entrada, se ela precisa ser validada como toda ou, quando são rotas filhas, alunos/1, podemos usar o prefixo da rota, com alunos, por exemplo.

* [Angular Router: Empty paths, componentless, routes, and redirects](https://vsavkin.tumblr.com/post/146722301646/angular-router-empty-paths-componentless-routes)


### Estilo de url: HTML5 e usando #
Não usar o hash (#) é padrão de roteamento do HTML5, porém quando começamos a trabalhar com backend pode ser que a linguagem não aceite o padrão HTML5 e não vai reconhecer o link, ou quando é uma url de roteamento e quando é para fazer uma chamada ajax. Por isso, podemos usar a hash no projeto.
* Basta inserir no AppRoutingModule
  * imports: [RouterModule.forRoot(routes, { useHash: true })],


