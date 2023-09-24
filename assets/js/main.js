const pokemonList = window.document.getElementById('pokemonlist')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 151
const limit = 10;
let offset = 0;
             

function loadPokemonsItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>
            `<li class="pokemon ${pokemon.type}" >
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
        
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`). join(' ')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
            </li>`).join('')

            pokemonList.innerHTML += newHtml
    })
}

loadPokemonsItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qntRecordNewPage = offset + limit

    if(qntRecordNewPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonsItems(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }
    else {
        loadPokemonsItems(offset, limit)
    }

})
