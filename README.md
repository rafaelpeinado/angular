# Unit Testing in Angular 12
## Configurando aplicação via Docker
* [Running Angular Unit Tests in Docker Container](https://cquelle.com/running-angular-unit-tests-in-docker-container/)
* Criar um arquivo [compose.yaml](./02/demos/compose.yaml)
* Criar arquivo [Dockerfile](./02/demos/Module2-StartingCode/Dockerfile)
  * Instalar a versão alpine para ter o **apk** disponível
  * Instalar o chromium para ser possível fazer testes unitários
  * Inserir a variável CHROME_BIN
* Alterar parâmetros do [karma.conf.js](./02/demos/Module2-StartingCode/karma.conf.js)
  * Alterar singleRun para true
  * Alterar browsers para ChromeHeadless
  * Inserir customLauncher
* **docker-compose up -d --build**
* **docker exec -it Module2-StartingCode bash:** para rodar o bash

[Joe Eames](https://www.linkedin.com/in/joeeames/) * Web Developer

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
* git clone https://github.com/joeeames/PSAngularUnitTestingCourse.git **ngUnitTestingDemo**: isso renomeia o nome da pasta do clone.
Ao criar o arquivo **first-test.spec.ts**, definir o nome **spec** é o que permite que a nossa ferramenta de teste unitário Karma saiba que este é um arquivo de teste. **Spec** é uma abreviação de **Specification**, é uma palavra comum usada ao escrever testes unitários, então precisamos ter certeza de que todos os nossos testes unitários terminam com **.spec.ts**.

* **Começamos com a describe function:** esta é uma função Jasmine que nos permite agrupar os testes.
  * **possui dois parâmetros:**
    * descrição que é uma string
    * e o segundo que é uma função callback que conterá nossos testes
* **beforeEach function:** configuração comum que será executada antes de cada teste. Isso irá redefinir o estado para que a cada teste não tenha nenhum efeito de um teste anterior que esteja atrasando e talvez poluindo o estado de testes futuros.
* **it function:** onde são escritos os testes
  * Existe uma estrutura de teste chamada AAA (Arrange, Act, Assert)
    * **Arrange:** é onde vamos organizar e criar
    * **Act:** precisamos tomar algum tipo de ação. Precisamos agir em nosso sistema em teste.
    * **Assert:** nossa afirmação, onde vamos usar expect que é uma função Jasmine.
      * Jasmine tem vários matchers como toBe, toBeLessThan, toBeGreaterThan etc.

Cada linha de teste mostrará um texto com o nome do describe mais o nome do it, por exemplo, my first test should be true if true.


### Writing Good Unit Tests
#### Structuring Tests
* Estruturação de testes seguem o padrão AAA
  * **Arrange:** organizamos todas as pré-condições e entradas necessárias
  * **Act:** agimos no objeto ou classe sob teste
  * **Assert:** afirmamos que os resultados esperados ocorreram

#### DAMP vs DRY
* **DRY (Don't Repeat Yourself):** não se repita, é um conceito comum usado em programação. Quantos estamos seguindo o princípio DRY, removemos a duplicação do nosso código, não queremos nenhuma duplicação de código em nosso aplicativo.

Bom testes, porém, operam sob o princípio diferente chamado princípio DAMP.
* **DAMP (Descriptive and Meaningful Phrases):**
  * Ainda queremos seguir o princípio DRY, mas nós repetiremos se necessário.

#### Tell the Story
Um bom teste contar uma história. A história é que começamos em um determinado lugar, fazemos uma mudança e verificamos que chegamos onde chegamos.
* Um teste deve ser uma história completa dentro da função it()
* Não devemos precisar muito para entender o teste ou para entender a história.
* Técnicas eficientes:
  * Devemos mover uma configuração menos interessante dentro do beforeEach(): se houver alguma configuração inicial ou estado inicial que preciser estar presente, mas não for crítico para o teste que estamos criando, podemos mover essa configuração para a função beforeEach.
  * A configuração crítica deve estar dentro da função it(): portanto, se tivermos dois testes diferentes que usam a mesma configuração, mas esa configuração é importante para a história do que é o teste, então duplicaremos essa configuração dentro do bloco, em vez de extraí-los no beforeEach, o que removeria a duplicação.
  * Queremos ter certeza de que incluímos o arrange, act e assert dentro do it()


## Isolated Unit Tests
### Testing a Pipe
* [StrengthPipe](./02/demos/Module2-StartingCode/src/app/strength/strength.pipe.ts)
  * é um componente simples de testar

### Testing a Service
* [MessageService](./02/demos/Module2-StartingCode/src/app/message.service.ts)
* Temos um pequeno problema, pois o arrange está dentro do beforeEach, caso em que estamos violando a regra da história
* Nesse caso, deveríamos deixar o service = new MessageService(); em cada teste, vamos duplicar alguns códigos, mas estamos deixando um pouco mais óbvio o que está acontecendo. Isso é bastante discutível, apenas porque é muito simples construir o serviço de mensagens, não requer dependências, não há nada complexo acontecendo lá, mas não pensaríamos muito se tivéssemos deixado essa chamada na inicialização no beforeEach(). Sim, o código está escondido de nós, mas uma vez que é uma linha de código tão simples e os testes são bastante óbvios em sua descrição sobre o que está acontecendo, que talvez não seja tão importante.

### Testing a Component
* [HeroesComponent](./02/demos/Module2-StartingCode/src/app/heroes/heroes.component.ts)
* Como estamos escrevendo um teste unitário, não queremos informar um HeroService de verdade, além disso, o HeroService getHeroes faz uma chamada HTTP e não queremos fazer uma chamada HTTP, portanto não queremos usar o HeroService de verdade. 
* E como é um teste unitário, não queremos testar duas unidades ao mesmo tempo.


### Mocking to Isolate Code
* Precisamos passar um objeto que se pareça com o HeroService
* Jasmine pode nos ajudar a criar um objeto mock e vamos usar jasmine.createSpyObj(), pois isso cria um objeto falso que podemos controlar, podendo dizer quais métodos ele possui, quais métodos devem retornar quando são chamados e podemos perguntar quais métodos foram chamados em um teste.
* 

### Testing Interactions
* A [linha 37](./02/demos/Module2-StartingCode/src/app/heroes/heroes.component.ts) executa this.heroService.deleteHero(hero).subscribe(); que é uma parte importante do componente. No teste [should remove the indicated hero from the heroes list](./02/demos/Module2-StartingCode/src/app/heroes/heroes.component.spec.ts), nós só testamos se o método funciona.
* Vamos escrever um teste que verifique se esse método está correto. Esse teste é diferente do teste "should remove the indicated hero from the heroes list", pois esse teste foi um teste baseado em estado, verificamos se o estado do componente foi alterado. Fizemos isso verificando o comprimento do array HEROES.
* O que precisamos fazer é verificar se deleteHero foi chamado com o parâmetro correto. Isso é chamado de **teste de interação**. Vamos verificar em nosso teste que uma certa interação aconteceu entre a classe que estamos testando e alguma outra classe, como neste caso o HeroService.
  * **toHaveBeenCalled:** com esse comando, certificamos que o próprio deleteHero foi chamado.
  * **xit:** Karma ignora o teste
  * **toHaveBeenCalledWith:** verificar se o serviço foi chamado com o parâmetro especificado


## Shallow Integration Tests
### Introduction
Testes de integração nos permitem não apenas testar um componente, mas também o modelo. Isso pode ser um grande benefício quando se trabalha para garantir que os componentes realmente façam o que devem fazer.

### Debugging Techniques with Angular and Karma
Bom olha o console do navegador

### The TestBed
* Apenas para o uso do curso, o arquivo será criado de forma diferente
  * [hero.component.shallow.spec.ts](./02/demos/Module2-StartingCode/src/app/hero/hero.component.shallow.spec.ts)
* vamos usar o **TestBed** dentro do beforeEach
  * O TestBed permite testar um componente e o templante rodando juntos. Então, vamos criar um módulo especial apenas para fins de teste
  * **configureTestingModule:** estamos criando um módulo específico para testes. Aqui só deveremos inserir apenas um quando estamos escrevendo testes unitários.
    * Nesse caso vamos nos importar apenas com o HeroComponent
  * Agora temos que criar o componente
    * **createComponent:** chamar essa função diz ao TestBed para usar o módulo de teste que foi criado na linha 7 e para construir o HeroComponent. Ele retorna um ComponentFixture
      * Um **ComponentFixture** é basicamente um wrapper para um componente que é usado em testes e possui algumas outras propriedades, mais do que apenas um componente em si
      * Podemos acessar a própria instância do componente, componentInstance que contém a propriedade HeroComponent real
  * **detectChanges:** ao inserir o detectChanges, precisamos inserir o RouterModule, pois no console exibiu um erro porque no HTMl tem o routerLink, mas resolveremos no Using NO_ERRORS_SCHEMA

### Using NO_ERRORS_SCHEMA
Vamos resolver o problema usando NO_ERRORS_SCHEMA
* **schemas:** podemos inserir schemas que informam ao Angular como processar o HTML que foi entregue.
  * **NO_ERRORS_SCHEMA:** diz ao Angular para não tentar validar o esquema, não tente validar o modelo pra os componentes que usamos.
    * Há algumas desvantagens nisso. Também não poderemos validar o esquema que normalmente teríamos em Angular, mas essa é uma técnica que podemos usar para corrigir o problema que estamos tendo.

### Testing Rendered HTML
* **nativeElement:** essa propriedade obtém um identificador para elemento DOM, que representa o contêiner do modelo.
  * Para capturar os dados devemos usar detectChanges primeiro. Isso informa ao componente para executar a detecção de alterações e atualizar quaisquer ligações que possam existir no componente. Nesse exemplo temos o id e o nome

### NativeElement vs. DebugElement
* **debugElement** é como o nativeElement, ele tem uma maneira de acessar o elemento raiz do nosso modelo, mas ao contrário do nativeElement, que está expondo a API do DOM subjacente, o debugElement é mais de um wrapper que possui um conjunto diferente de funcionalidade muito semelhante ao nativeElement.
* no debugElement temos acessos às **diretivas**, poderíamos acessar o routerLink, por exemplo
* Há outras coisas que o debugElement pode fazer. Além do nativeElement, podemos ter um identificador de componentInstance ao qual esse debugElement pertence. Em certas circunstâncias, isso poderia ser útl também. Geralmente, se queremos tratar de um componente, apenas solicitamos o fixture para o componentInstance, mas às vezes, se estamos trabalhando com vários componentes, precisamos conhecer o componente ao qual um determinado elemento pertence.

### More Complex Shallow Integration Tests
* [heroes.component.shallow.spec.ts](./02/demos/Module2-StartingCode/src/app/heroes/heroes.component.shallow.spec.ts)

### Mocking an Injected Service
* Antes do TestBed.configureTestingModule devemos criar um spy do Jasmine
* providers: [{ provide: HeroService, useValue: mockHeroService }],

### Mocking Child Componentes
* Vamos mockar um componente para não usar o NO_ERRORS_SCHEMA, pois ele tem efeitos colareis e ignora a renderização do HTML
* Então criamos um componente dentro do teste e colocamos no declarations

### Dealing with Lists of Elements
É o mesmo teste de verificar quantos itens tem no array, porém desta vez é ver quantos li têm no template.


## Deep Integration Tests
### Introduction
É uma maneira de testar nossos componentes com seus filhos vivos.

### Creating a Deep Integration Test
Desta vez colocamos o fixture.detectChanges(); no beforeEach, porque queremos que os ciclos de vida sejam engatilhados em todo início de teste

### Finding Elements by Directive
* No Angular, um componente é, na verdade, uma subclasse de uma diretiva. É um tipo de diretiva mais especializado. Normalmente pensamos em diretivas como sendo uma atributo, como routerLink, e componentes como sendo um elemento, como o que temos aqui, o app-hero é um elemento, mas no funcionamento interno do Angular uma diretiva é na verdade a classe pai para ambas a diretivas e componentes, como nosso HeroComponent.

### Integration Testing of Services
* longhand providers
* **HttpClientTestingModule:** cria um mock do HttpClient

### Using the Inject Helper Function
O HttpClientTestingModule não emitirá uma chamada real para o backend. Ele intercepta essa chamada e podemos ver o que acontece dentro do método getHero.

* Podemos ter um identificador para o HeroService pelo TestBed.inject, conforme o exemplo comentado
  * Há outra forma de fazer isso que é usando o inject no it, mas o TestBed é muito mais legível.

### Implementing a Test with Mocked HTTP
* Estamos avisando ao httpTestingController que haverá uma solicitação GET e queremos que ele espere que essa solicitação GET aconteça, e fazemos isso por meio do método expectOne.

* o método **flush** nos permite decidir quais dados enviar de volta quando a chamada for feita.
* o método **verify** verifica se foram apenas as solicitações que esperávamos e exatamente essas e nenhuma solicitação extra.

