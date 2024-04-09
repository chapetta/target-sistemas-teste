// 1) Observe o trecho de código abaixo:

// int INDICE = 13, SOMA = 0, K = 0;

// enquanto K < INDICE faça

// {

// K = K + 1;

// SOMA = SOMA + K;

// }

// imprimir(SOMA);

const INDICE = 13
let SOMA = 0
let K = 0

while (K < INDICE ) {
  K += 1
  SOMA += K
}

console.log(SOMA) // resposta 91