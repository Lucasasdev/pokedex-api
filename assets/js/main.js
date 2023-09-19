
function convertPokemonToTypes(pokemonTypes) {
    return pokemon.map((pokemonTypes) => pokemonTypes.types)
}

function convertPokemonToLi(pokemon) {

    return `<li class="pokemon">
    <span class="number">#${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
        </ol>

        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">

    </div>
</li>`
}

const pokemonList = window.document.getElementById('pokemonlist')

pokeApi.getPokemons().then((pokemons = []) => {
    
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml

})


