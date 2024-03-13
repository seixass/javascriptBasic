// const pessoa = {
//     saudacao: 'Ola, seus monstros',
//     falar(){
//         console.log(this.saudacao)
//     }
// }
// pessoa.falar()
// const falar = pessoa.falar
// falar()

//função bind
function pessoa(){
    this.idade = 0
    // setInterval(function(){
    //     console.log(this.idade++)
    // }/*.bind(this)*/, 1000)

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)

}
new pessoa

function pessoa2(){
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000);
}

new pessoa