
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
//Método fetch indo pegar o endpoint, quando ele pegar o endpoint vai trazer a resposta, enquando isso o código segue em frente.
fetch(url).then(function (response) {
    console.log(response)
})

var soma = 10 + 10
console.log(soma)