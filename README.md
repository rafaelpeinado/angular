# Learning RxJS Operators by Example Playbook
Marble Diagram

## Grouping Values
### Use Cases
Valores saindo de um observable são emitidos um de cada vez. No entando, às vezes precisamos trabalhar com esses valores em grupos.

### GroupBy
Organiza os valoers da fonte observable de acordo com uma predicate function que você fornece como um parâmetro. Emite um observable agrupado por grupo. É frequentemente usado em conjunto com algo, como reducer para calcular subtotais para elementos comuns em uma stream.
No primeiro exemplo, nós vamos usar o mergeMap e, essencialmente, converter cada agrupamento em um array. Em seguida, na linha 29, configuramos nossa variável de saído como uma array, demos subscribe na coleção de postagens e, à medida que obtermos cada uma, que será um array devido a esse mergeMap.


### Pairwise
Agrupa os valores em pares. Ele emite começando o segundo valor, então ele tem um par completo, o valor e o valor emitido imediatamente antes. Os valores são emitidos como array. Em geral, isso é útil quando precisamos fazer alguma comparação de valores à medida que são emitidos. 

### Partition
Ele pega de uma única fonte observable, mas emite uma matriz de dois observables. Os dois observables de saída consistem em uma que contém todos os itens da origem que fizeram com que o predicate function especificada seja true, e o outro false.

### SwitchAll
Só passa os valores de uma fonte se obtiver todos os valores dessa fonte antes que a próxima fonte emita. É importante observa que ele está realmente concluindo a fonte, não apenas quando ela pode emitir seu último valor, mas quando realmente emite um valor completo. 

### ToArray
Quando uma fonte observable emite, toArray coleta todos os valores, coloca-os em uma array e os transmite a todos os assinantes.

### ZipAll
Combina o enésimo elemento de cada fonte, então todos os primeiros elementos são emitidos juntos como um array. Cada grupo é emitido quando cada fonte tiver emitido seu elemento para esse agrupamento.


## Observable Transformation
### Use Cases
Pegam um observable, realizam alguma transformação e emitem um novo observable.

### Repeat
Reitera os valores da fonte observable um determinado número de vezes.

### RepeatWhen
É um pouco diferente em relação ao **repeat**. As duas diferenças são: 
1. Não especificamos o número de emissões desejado, como com repeat. Em vez disso, especificamos um parâmetro observable como um parâmetro e os valores de origem serão repetidos até que os observables fornecidos sejam concluídos ou com erro.
2. A verificação da repetição acontece depois que os valores da fonte foram emitidos uma vez. Então, se o observable interior for completado ou com erro imediatamente, ainda teremos a primeira emissão. 

### IgnoreElements
Ignora todos os valores emitidos de uma fonte e só sinaliza quando é concluído ou com erro.

### Finalize
É um pouco semelhante ao finally block em uma tentativa de captura, e finalmente construir.  Tudo funciona normalmente. Os valores virão da fonte e serão emitidos inalterados. Somente quando a fonte terminar, com sucesso ou com erro, o operador finalize será incrementado. Ele simplesmente chama a função que foi passada para o operador como um parâmetro. Essa função executará e fará o que for necessário e a sequência será concluída.


## Time, Duration & Scheduled
### AuditTime
Permite silenciar uma fonte observable por um número especificado de milissegundos. Ao especificar o parâmetro e quando a fonte começa a emitir valores, eles serão ignorados por esse período de tempo. Após isso, o valor mais recente da fonte é passado para os subscribers. Em seguida, os valores são ignorados novamente pelo tempo especificado e todo o processo é repetido até que a origem observable seja concluída ou tenha erros.

### SampleTime
É um pouco diferente do **auditTime**. Mas as diferenças são muito sutis. SampleTime pega o primeiro valor da origem e, em seguida, começa a ignorar os valores no tempo especificado. 
* Essa é a primeira diferença, a aceitação do primeiro valor. Uma vez além desse ponto, sampleTime e auditTime ignoram os valores até que o tempo especificado tenha passado.
* A segunda diferença é que sampleTime só emitirá um valor apóso tempo decorrido se a fonte tiver emitido um valor nesse intervalo de tempo. Se a fonte estiver em silêncio desde a última amostra, o sampleTime não emitirá nada.

### ObserveOn
Permite processar emissões de um observable em um agendador especificado. Não é um operador simples que apenas fica em cima do JavaScript e trabalha com os valores e subscriptions. O trabalho realmente chega ao JavaScript.
#### Detalhes REPL JavaScript
**Obs.:** Demonstração de um modelo conceitual e não um detalhamento exato de como fuciona o loop do REPL (Read-Eval-Print-Loop, ou, Ler, Avaliar e Imprimir o Loop) de JavaScript. Ignorando os web workers por enquanto, o JavaScript é de thread único, o que significa que só pode fazer uma coisa de cada vez. Se dermos várias tarefas ao JavaScript, ele as processará uma por vez, iniciando uma quando terminar a anterior. Porém, como é quase certo que o JavaScript pode receber mais tarefas do que pode processá-las, é necessário algum tipo de fila para armazenar as tarefas. Se não tiver uma fila, a web seria um lugar completamente diferente, porque teríamos que esperar que cada tarefa fosse processada antes que pudéssemos enviar outra tarefa. Toda vez que termina uma tarefa, o REPL pega o próximo e processa. Por outro lado, nosso código pode continuar adicionando coisas à fila, tão rápido quanto quisermos, e eles serão processados. Se fosse isso, as coisas certamente seriam melhores do que nenhuma fila, mas ainda haveria o problema de agendar ou priorizar tarefas. Com um único encadeamento e uma única fila, todas as tarefas seriam consideradas iguais e processadas em um modelo FIFO (First In, First Out). Felizmente, o JavaScript tem várias filas. Há muito mais filas, mas vamos usar 3, por exemplo: immediate, asap, async. Não são nomes reais da fila, mas transmitem o conceito. As tarefas na fila imediata são a prioridade mais alta e são sempre processadas antes de qualquer tarefa em outras filas. Tarefas imediatas são o padrão e podemos pensar nelas como apenas as linhas de código que colocamos em nosso programa. Eles são processados um após o outro na ordem em que são encontrados. Em seguida, é o asap (As Soon As Possible). Uma vez que o REPL tenha finalizado a fila immediate, ele processará o asap. As coisas são colocadas na fila asap através de construções como **setTimeOut**, **setInterval** e coisas assim. O REPL só captura as tarefas que já possuem a data de início e processa elas. Somente quando essas tarefas são processadas, o REPL é acionado e processa outras filas, como nossa fila async. A fila async é para coisas como HTTP request e callbacks. Essas tarefas ocorrem enquanto o REPL está ocupado cojm outras filas, mas não há um carimbo de data inicial nelas, como a fila asap. Quando o REPL começa a processa a fila assíncrona, ela é drenada, processando cada item antes de prosseguir. Isso pode soar realmente ineficiente e que corre o risco de algumas tarefas nunca serem processadas. Tecnicamente isso é verdade, e é uma razão pela qual os web workers existem e porque nós sempre temos que ter cuidado ao escrever JavaScript, para não inundar as filas, que irá quebrar a interface do usuário. No entantao, os mecanismo e navegadores JavaScript são realmente rápidos hoje em dia. Eles operam rápido o suficiente que pode dizer que estão processando milhões e milhões de operações por segundo. 
O que tudo isso tem a ver com o observeOn? Este operador permite especificar explicitamente em qual fila um observable será processado. Em outras palavras, nos permite especificar uma prioridade para os valores que saem de um observable. Fazemos isso simplesmente especificando o scheduler que queremos como parâmetro para o operador observeOn. Existem vários deles disponíveis e também podemos escrever os nossos próprios, embora não exista uma boa razão para tal.

### SubscribeOn
É semelhante ao **observeOn**. SubscribeOn altera o scheduler usado pela fonte observable. Isso é diferente de observeOn, que recebe os valores do observable em seu scheduler original ou padrão e, em seguida, faz reemissão em um novo scheduler.

#### observeOn vs subscribeOn
Os dois operadores são tão semelhantes e são tão confusos, pois não são usados com muita frequência, por isso não há muita informação sobre ele nas redes. 

**Default** asap queued -> asap emitted -> async queued -> async queued -> immediate emitted
Ou seja, foi exibido na mesma ordem que o código foi executado.

**observeOn** asap queued -> async queued -> immediate emitted -> asap emitted -> async emitted
Recebe cada valor da origem e o reemite em um novo scheduler. Agora a saída é diferente, mas a ordem de execução do código é a mesma. Aqui, a fonte ainda emite os valores na mesma ordem e tap é acionado, mostrando quando os dois primeiros valores são enfileirados como recebidos pelo tap, antes de serem reprogramados via observeOn. O immediate é emitido em seguida, porque não é reemitido. Esse é o valor vindo diretamente do código sem qualquer alteração do scheduler. Agora vemos seus valores saindo de seus novos schedulers. Primeiro o asap, depois o async.

**subscribeOn** immediate emitted -> asap queued -> asap emitted -> async queued -> async emitted
Altera o scheduler usado pela origem observable, em vez de receber os valores do observable no scheduler padrão e, em seguida, reemiti-los em um novo scheduler. Primeiro, vemos o immediate não programado sendo emitido. Nós não alteramos o scheduler em nosso código, por isso é processado imediatamente. Em seguida, vemos o asap emitido da fonte como registrado pelo tap e recebido pelos subscribers como registrado pelo nosso observer. Finalmente, vemos o async queued e emitted quando é processado pelo scheduler async, emitido da origem e processado pelo subscriber.

#### Available Schedulers
**AsapScheduler**, **AsyncScheduler** esses dois foram usados nos exemplos, mas existem outros como QueueScheduler, AnimationFrameScheduler, VirtualTimeScheduler, TestScheduler e podemos escrever nossos próprios.
Para saber mais: https://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/scheduling_and_concurrency.html

### Debounce
E um limitador de taxa que tem um observable como parâmetro. Ele monitora os valores emitidos da fonte e após cada valor ser emitido, ele se inscreve no parâmetro observable. Neste ponto, uma de duas coisas pode acontecer:
* O observable fornecido pode emitir ou concluir antes que mais valores sejam emitidos da fonte. 
* O observable interno é registrado quando um valor é emitido, mas antes de concluir ou emitir qualquer coisa, o próximo valor é emitido da origem. Nesse caso, o observable interno é anulado quando o próximo valor é emitido. 

### DebounceTime
É um operador de limitação de taxa como **debounce**, exceto que para debounceTime a definição de um lote de valores de origem é definida especificando o número de milissegundos como uma parâmetro passado ao operador. Se esse número de milissegundos passar sem valores adicionais da origem, o último valor emitido da origem será enviado aos assinantes. O cronômetro em batch inicia toda vez que um novo valor é emitido da origem e para quando um novo valor é emitido da fonte antes que o cronômetro seja concluído. 

### Delay
Faz com que o primeiro valor emitido da fonte observable seja retido pelo número de milissegundos especificado. Valores subsequentes não serão atrasados. Ou seja, o perído de tempo entre o valor enviado aos subscribers é o mesmo que a origem após o primeiro. A sequência inteira é retrocedida pelo tempo especificado.

### DelayWhen
Como **delay**, delayWhen também faz com que o primeiro valor emitido da fonte seja retido antes de ser emitido. Ao contrário do **delay**, a quantidade de tempo em que o valor é mantido não é fixa. DelayWhen também contém cada valor emitido subsequente. A quantidade de tempo que cada valor é atrasado é calculada pela factory function fornecida como um parâmetro para o operador. Essa factory function considera o valor emitido da fonte e deve retornar um valor observable. Quando esse observable é concluído ou emitido, o valor da fonte é enviado para os subscribers.

### ThrottleTime
Emite o primeiro valor recebido da fonte e depois fica em silêncio pelo número de milissegundos especificado como um parâmetro. Após esse período de tempo, ele permitirá que o próximo valor emitido pela fonte seja passado para os subscribers e, em seguida, ele ficará em silêncio novamente, repetindo esse processo até que a fonte seja concluída ou tenha erro.

### TimeInterval
Ao invés de emitir apenas o valor que veio da origem, timeInterval agrupa esse valor em um objeto que também inclui a quantidade de tempo decorrido desde quando a origem foi assinada até quando o valor foi emitido. 
{ **value:** (value), **interval:** (interval) }

### Timestamp
É semelhante ao **timeInterval**. Timestamp envolve todos os valores emitidos da fonte em um objeto que fornece o valor mais algumas informações adicionais. Para o timestamp, essa informação adicional é o timestamp de quando o valor foi emitido da fonte.
Ele pode ser usado se precisarmos rastrear quando os valores foram fornecidos para auditoria ou armazenamento em cache ou algo assim, esse operador fornecerá tanto o valor quanto as informações adicionais.
{ **value:** (value), **timestamp:** (timestamp) }


## Value Transformation
Cada operador desse módulo leva a saída de uma fonte observable e modifica ou substitui o valor antes de passá-los aos subscribers.

### ConcatMap
Pega cada valor de entrada e passa para a função fornecida ao operador como um parâmetro. O resultado da função é então passado para os assinantes e o próximo valor da origem observable é processado. 

### ConcatMapTo
A fonte observable atua como um sinalizador em vez de fornecer valores reais usados. Cada vez que a fonte observable emite, os valores dos obseravbles internos são emitidos. Então aqui vemos a fonte observable emitindo e o subscriber recebe os valores do observable interno.

### DefaultIfEmpty*
permite que especifiquemos um valor a ser emitido a partir de uma fonte, se ela for concluída sem emitir nenhum valor. 

### EndWith
Permite que especifiquemos valores que serão anexados ao final de quaisquer valores que sejam emitidos da origem. Como **defaultIfEmpty**, esse operador também permitiria que todos os seus subscribers recebessem algo. Mas esse também fornecerá os valores se a fonte fornecer alguma coisa.

### StartWith
Permite que especifiquemos valores que serão emitidos antes que quaisquer valores sejam emitidos da fonte. 

### ExhaustMap
Leva cada valor emitido da fonte e mapeia-o para uma factory function que deve retornar um valor observable. Em seguida, ele assina esse observable e emite todos os valoes dele para os subscribers. Se um desses observables criados ainda estiver emitindo quando os valores de um observable gerado subsequente começarem a ser emitidos, todos os valores desse observable subsequente serão descartados e nunca serão enviados para os subscribers.

### Expand
Emite cada valor da origem para os subscribers e, em seguida, passa cada valor para a factory function especificada como um parâmetro para o operador. Essa factory function deve retornar um observable. Expandir, em seguida, assina o observable e passa cada valor do observable gerado através da mesma factory function. Ele continua de forma recursiva até que cada um dos observables gerados seja concluído ou com erro. **O uso mais comum desse operador é implementar paginação de valores de uma fonte de dados, que não informa o número total de páginas de dados que está sendo fornecido.** 

### Map
Ele permite que obtenhamos todos os valores provenientes de uma fonte observable e execute-os por meio de uma função que fornecemos. E então o valor retornado dessa função é o que é enviado para os subscribers. Essa função pode ser tão simples ou tão complexa quanto precisarmos, embora se a fonte observable emitir muitos valores, o ideal é manter a função bem simples ou usar outros operadores na frente dele. Para fazer qualquer filtragem, podemos reduzir o número de vezes que a função é chamada.

### MapTo
Pega todos os valores emitidos da origem e os converte no mesmo valor constante que especificamos.

### Scan
Pega cada valor da fonte observable e passa-o para uma função que passamos como parâmetro. Essa função recebe dois valores cada vez que é chamada. O valor retornado da função na útlima vez em que foi chamado ou um valor inicial opcional para a primeira chamada e, em seguida, o valor atual emitido da origem. Cada valor retornado da função é passado para os subscribers. A ideia do scan é que cada chamada sucessiva para função constrói um valor, que é o resultado cumulativo de todas as chamadas para a função.

### MergeScan
É como o **scan**, exceto que a função passada como parâmetro retorna um valor observable em vez de apenas um único valor. Os valores emitidos a partir daquele observable gerado são enviados para os subscribers e, em seguida, o valor final é passado de volta para função como o valor acumulado para gerar um novo observable. 

### Pluck
Permite pegar objetos emitidos de uma fonte observable e extrair o valor de uma propriedade específicada. Então esse valor é enviado para os subscribers. 

### Reduce
É semelhante ao **scan**, exceto pelo fato de apenas emitir o valor acumulado final. Reduce pega cada valor de uma fonte observable e passa-o sequencialmente para uma função que fornecemos. Essa função também recebe o resultado cumulativo de todas as chamadads anteriores para a função. Em seguida, ele retorna um valor, que é usado como o resultado cumulativo para a próxima chamada para a função. O reduce não emite até que a fonte observable seja concluída, no ponto em que envia o valor acumulado final para os subscribers.

### SwitchMap / FlatMap
SwitchMap é um operador comum. Ele também é chamado de flatMap, pois flatMap é um alias de switchMap. É usado para assinar um novo observable toda vez que a nossa fonte emite. O novo observable que nós assinamos é gerado pela factory function que passamos para o switchMap/flatMap. O importante é que quando a fonte emite, nos inscrevemos no novo observable e cancelamos a assinatura do observable anterior.

### MergeMapTo
Pega cada valor emitido da origem e mapeia para o mesmo observable fornecido. Os valores desse observable são repassados para os subscribers. 

### SwitchMapTo
É semelhante ao **mergeMapTo** em que ele pega cada valor emitido da origem e o mapeia para o mesmo observable fornecido. A diferença é que, se um novo valor vem da fonte, enquanto o observable interno ainda está emitindo valores, o observable interno é anulado e depois o novo valor da origem é assinado novamente.

### Materialize
Pega tudo o que é emitido a partir de uma fonte observable, valores, erro e complete, e converte-o para um objeto de notificação. O objeto de notificação parece com: 
{ kind: 'N', value: < value >, error: undefined, hasValue: true } - quando tem valores
{ kind: 'C', value: undefined, error: undefined, hasValue: false } - para complete 
{ kind: 'E', value: undefined, error: < error contents >, hasValue: false } - para errors
Um exemplo de uso para eses operador, é quando não controlamos o código-fonte para um determinado observable ou, por algum outro motivo, não podemos ou não alteramos o observable. Precisamos controlar as emissões da fonte, talvez alterando o erro ou o tratamento complete, portanto, é necessário detectar error e completes antes que eles encapsulem a cadeia e lidem com eles de maneira diferente. 

### Dematerialize
É o oposto de **materialize**. Ele recebe um objeto de noitificação que se parece com: 
{ kind: 'N', value: < value >, error: undefined, hasValue: true } - quando tem valores
{ kind: 'C', value: undefined, error: undefined, hasValue: false } - para complete 
{ kind: 'E', value: undefined, error: < error contents >, hasValue: false } - para errors
e converte em uma emissão padrão para valores, complete e error.



