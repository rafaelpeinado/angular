# Learning RxJS Operators by Example Playbook


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

