/************************************************************************************
    AULA: Introdução ao Javascript

    1. Ambiente de desenvolvimento;
    2. Variáveis var, let, const, string, number e boolean;
    3. Operadores de atribuição, aritméticos, relacionais, lógicos e unários;
    4. Estruturas de decisão if/else, ternárias e switch;
    5. Estruturas de repetição while, do/while, for, for/in e for/of;
    6. Arrays e funções.
    7. Módulos.

    .code runner: ctrl + alt + n  para rodar o código
                  ctrl + alt + m  para interromper a execuação

 ***********************************************************************************/

// Variáveis var, let, const, string, number, boolean,
// operador de atribuição e aritméticos (=, +, -, *, /, %):
// operadores de atribuição aritméticos (=, *=, /=, +=, -=):
// relacionais (==, !=, <, >, <=, >=) e lógicos (!, &&, ||) e unários (++, --):
// (VARIÁVEIS) + (OPERADORES) + (ESTRUTURAS)
// Estruturas de decisão if/else, ternárias e switch:
// Estruturas de repetição while, do/while, for, for/in e for/of,  arrays.
// Funções convencionais e seta.
// Modulos.

/*var numero = 3;
var x = '5';

var resultado = numero * x;
console.log("O resultado é: " + resultado);*/

//console.log(somar(10, 5));
//console.log(somar(10, 5.5));

//(a,b)=>a+b;
//((a,b)=>a+b)(10,5);

const somaFunc = (a,b)=>a+b;

const v1 = [10,5,8,9,3];
const v2 = [13,4,7,1,0];

for(i in v1){
    console.log(somarFunc(v1[i], v2[i]));
}
