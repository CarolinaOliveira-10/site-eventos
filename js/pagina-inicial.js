// Deixar o nome de funções claras
aoClicarParaMarcarEvento();

function aoClicarParaMarcarEvento(){
console.log('evento marcado');
}


// Verificação de equidade de valores




// Declarações de informações únicas em um mesmo contexto.
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
