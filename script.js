function digitName() {
    const dado = prompt('Digite seu nome :)')
    document.querySelector('#text1').innerHTML = `E aí ${dado} você está deixando seu site dinâmico!`
}

let inc = 0

function incrementar() {
    inc ++
    document.querySelector('#contador').innerHTML= `O contador está com ${inc} cliques!`
}

function zerarContador(){
    inc = 0
    document.querySelector('#contador').innerHTML = ''
}