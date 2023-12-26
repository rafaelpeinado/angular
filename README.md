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



### Angular CLI: ng lint, ng test, ng e2e



### Angular CLI: Estrutura do projeto



### Angular CLI: Gerando build de produção



### Angular CLI: instalando bibliotecas (bootstrap, jquery, materialize, lodash)





