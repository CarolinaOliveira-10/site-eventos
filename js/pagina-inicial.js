//////////// Deixar o nome de funções claras
aoClicarParaMarcarEvento();

function aoClicarParaMarcarEvento() {
console.log('Evento marcado');
}


//////////// Falsy
// Valores que são considerados falsy (false, null, undefined, 0, NaN e '')
falsy();
function falsy(){
    console.log("Entrou na função");
    if (null) {
        console.log("Entrou no if");
    }
}


//////////// Verificação de igualdade e desigualdade de valores
// tipos iguais
console.log("1", 18 === 18);
console.log("2", 'carol' === 'carol');

// tipos diferentes
console.log("3",'0' ===  0);
console.log("4",0 === false);

//
console.log("5",'0' !==  0);
console.log("6",0 !== false);



//////////// Declarações de informações únicas em um mesmo contexto.
var numeros = [1,2,3];
for(var i = 0; i < numeros.length; i++) {
    const multiplicador = 2;
    const somaNumeroMaisPosicao = numeros[i] * multiplicador;
    console.log(somaNumeroMaisPosicao);
}


var numeros = [1,2,3];
const multiplicador = 2;
for(var i = 0; i < numeros.length; i++) {
    const somaNumeroMaisPosicao = numeros[i] * multiplicador;
    console.log(somaNumeroMaisPosicao);
}



//////////// Hoisting

exibirNomeONG();
function exibirNomeONG() {
    var nomeONG = 'WoMakersCode';
    console.log(nomeONG);
}

//
console.log(nome);
var nome = 'WoMakersCode';


// 
console.log(nome); 
var nome;
nome = 'WoMakersCode';


nome = 'WoMakersCode';
console.log(nome);
var nome;












/// JS
//Mais utilizável e elegante;
const array1 = [];

const array2 = new Array();

let a = 2;
a = 3;
console.log(a);

var b = 2;
b = 3;
console.log(b);