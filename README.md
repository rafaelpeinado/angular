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
[diretiva-ngClass](./projetos/diretivas/src/app/diretiva-ngstyle/)

### Diretivas: ngStyle
[diretiva-ngStyle](./projetos/diretivas/src/app/diretiva-ngstyle/)

### Operador Elvis
[Operador Elvis](./projetos/diretivas/src/app/operador-elvis/)
Uma maneira de fazer navegação segura entre objetos

### ng-content


### Criando uma diretiva de atributo: ElementRef e Renderer


### Diretivas: HostListener e HostBinding


### Diretivas: Input e Property Binding


### Criando uma diretiva de estrutura (ngElse)




