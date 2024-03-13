// 1º estrategia

function soma(x,y,z){
    x = x || 1
    y = y || 1
    z = z || 1
    return x + y + z
}
console.log (soma(), soma(2), soma(1,2,3), soma(0,0,0))

// 2º estrategia

function soma2(x,y,z){
    if(x == undefined){
        x = 1
    }
    if(y == undefined){
        y = 1
    }
    if(z == undefined){
        z = 1
    }
    return x + y + z
}
console.log (soma2(), soma2(2), soma2(1,2,3), soma2(0,0,0))

// 3º estrategia

function soma3 (x,y,z){

    x = x !== undefined ? x : 1 //Operador ternário
    y = 1 in arguments ? y : 1
    z = isNaN(z) ? 1 : z

    return x + y + z
}
console.log(soma3(), soma3(2), soma3(1,2,3), soma3(0,0,0))

//ECMAScript 6 -> JS 2015 - Valor Como Parâmetro
function soma4(x = 1, y = 1, z = 1){
    return x + y + z;
}
console.log(soma4(), soma4(2), soma4(1,2,3), soma4(0,0,0))