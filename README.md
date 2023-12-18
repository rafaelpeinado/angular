# Unit Testing in Angular 12
[Joe Eames](https://www.linkedin.com/in/joeeames/) - Web Developer

## Course Introduction
### The Demo Application
* [Demo](https://github.com/joeeames/PSAngularUnitTestingCourse/)

### Testing Overview
#### Automated Testing
Existem três tipos de testes automatizados:
* Testes unitários
* Testes E2E
* Testes de Integração ou Testes Funcionais

Testes unitários e E2E são bem definidos, e os testes de Integração ou Funcionais tendem a ser um pouco mais de um conceito vago que pode significar uma coias para uma pessoa e algo diferente para outra pessoa.


#### End to End Testing
* **Live running application:** é um tipo de teste feito em um aplicativo ativo e em execução. Isso significa que o aplicativo completo com um banco de dados, servidor e front-end dee uma live application.
* **Tests exercise live application:** isso geralmente é feito através da automação do navegador. Os testes são feitos para manipular o navegador de maneira automatizada, para fazer ações como clicar em botões, digitar valores em formulários, navegar por e tarefas semelhantes.

O benefício do teste E2E é que podemos validar que o aplicativo funciona como um todo. Há muitas desvantagens nos testes E2E, que têm a ver com velocidade e dificuldade de escrever testes, e geralmente os testes E2E tendem a ser menos confiáveis do que outros tipos de testes automatizados.


#### Unit Testing
* **A single "unit" of code:** é feito em uma única unidade de código. "Unit", porque unidade pode significar algo diferente para cada pessoa. Geralmente, a unidade de código aceita é uma única classe. Embora, algumas vezes podemos definir uma unidade como mais do que uma única classe.


#### Integration and Functional Testing
* **More than a unit, less than the complete application:** ou seja, são pelo menos duas unidades trabalhando juntas; muitas vezes, esses tipos de tests são usados para verificar se uma determinada parte do aplicativo funciona com outra parte do aplicativo.


#### Angular Integration Testing
Angular tem componentes, sendo assim, o Angular tem ferramentas que permitem um tipo especial de teste, que é chamado Teste de Integração. Este usa o modelo e o componente juntos para garantir que essas duas partes estejam funcionando corretamente juntas. 


### Mocking
Mocking nos permite ter certeza que estamos testando apenas uma única unidade de código por vez. Na maioria da vezes, uma classe não opera isoladamente, a maioria das classes ou componentes tem dependências.
Por exemplo, um componente pode ter um serviço injetado, porém quando escrevemos testes unitários não queremos usar o serviço de verdade, há muitas razões para isso.
* Primeiro, estamos tentando testar somente o componente, pois é um teste unitário.
* Também não queremos testar o serviço, e vamos escrever testes unitários separados para isso. Além disso, esse serviço pode fazer chamadas HTTP, que não queremos em um teste unitário.
User mockings serve para ue ao invés de usar o serviço de verdade, vamos fornecer um serviço simulado. Uma simulação (mock) é uma classe que se parece com a classe real, mas podemos controlar o que ela faz, o que seus métodos retornam e podemos fazer perguntas sobre quais métodos foram chamados durante um teste.


#### Types of Mocks
* **Dummies:** é o tipo mais simples e são apenas objetos que preenchem um lugar. Geralmente não fazem nada interessante, eles são usados apenas no lugar de um objeto real, como se uma chamada de método exigisse um parâmetro que fosse um objeto, mas não importa qual objeto, então dummy é perfeito para isso.
* **Stubs:** é um objeto que possui um comportamento controlável. Se chamarmos um determinado método em um stub, podemos decidir em nosso teste qual valor a chamada do método retornará. 
* **Spies:** é um objeto que monitora quais dos métodos foram chamados e quantas vezes foram chamados e quais parâmetros foram usados para cada chamada. 
* **True mocks:** são objetos mais complexos que verificam se foram usados exatamente de uma maneira específica. Por exemplo, eles podem verificar se apenas um método específico foi chamado, e isso foi chamado apenas uma vez, e ele tinha alguns parâmetros muito específicos, e eles são capazes de fazer isso para si mesmos. Eles são um pouco mais difíceis de se trabalhar e geralmente são excessivos para o que a maioria dos testes unitários precisam.

Na maioria das vezes, esses são tipos de objetos que usamos quando precisamos de uma simulação e muitas vezes os limites entre esses três podem ser um pouco confusos. Podemos usar objetos que tenham o comportamento de stubs e spies, por exemplo.


### Unit Test in Angular
#### Types of Unit Tests in Angular
* **Isolated:** o teste unitário básico é um teste isolado. É nisso que pensamos quando pensamos em um teste unitário. Em um teste isolado, simplesmente exercitamos uma única unidade de código, seja a classe de um componente ou a classe de um serviço, ou uma pipe, construímos essa classe manualmente e damos a ela seus parâmetros de construção.
* **Integration:** é um pouco mais complexo. Em um teste de integração Angular, criamos um módulo no qual colocamos apenas o código que vamos testar, geralmente apenas um componente, mas na verdade testamos isso no contexto de um módulo Angular. Isso é usado para que possamos testar o componente com seu template. Existem dois tipos de testes de integração:
  * **Shallow:** em que apenas testamos um único componente
  * **Deep:** a diferença é que muitos componentes realmente têm componentes filhos. Às vezes queremos testar o componente pai e o componente filho e como eles funcionam juntos. 

### Tools of Unit Testing with Angular
O CLI do Angular configura testes e usa duas ferramentas diferentes:
* **Karma:** é o executor de testes, é o que executa os testes em um navegador
* **Jasmine:** é a ferramenta que usamos para criar mocks e é a ferramenta que usamos para garantir que os testes funcionem da maneira que queremos que eles usem as expectativas.

Existem outras ferramentas de testes unitários que estão disponíveis para testes unitário no Angular:
* **Jest:** uma biblioteca muito popular que foi lançada pelo Facebook e é muito popular com outras frameworks, mas pode ser usada com o Angular.
* **Mocha/Chai/etc:** são substitutos para Jasmine. Eles são um pouco populares e são fáceis de incluir e substituir Jasmine.
* **Sinon:** é uma biblioteca especializada em mocks. Se acharmos que as capacidades de mock em Jasmine não são boas o suficiente, então podemos usar algo como Sinon.
* **TestDouble:** que é um concorrente do Sinon, que está ganhando popularidade, mas ainda é muito menos popular do que o Sinon.
* **Wallaby:** é uma ferramenta paga que permite ver a cobertura de código dos testes diretamente na IDE. É muito conveniente e está se tornando uma ferramente popular.
* **Cypress:** é tradicionalmente considerado uma ferramenta de teste E2E, mas eles estão desenvolvendo recursos para fazer mais tipos de integração de testes, de modo que, no futuro, possamos ver o Cypress se tornando mais popular com o Angular.
* **E2E tools:** há toneladas de ferramentas de teste E2E.

### Writing Your First Unit Test



### Running Your Unit Tests



### Writing Good Unit Tests




