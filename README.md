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
* Two-way data binding ([(ngModel)]="propriedade"): conseguimos manter tanto o template quanto o componente atualizados ao mesmo tempo

### Class e Style binding


### Event binding


### Two-way data binding


### Input properties


### Output properties


### Ciclo de vida (life-cycle) do Componente


### Acesso ao DOM e ao Template com ViewChild



