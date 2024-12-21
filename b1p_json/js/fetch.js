console.log('fetch loaded');

const container = document.querySelector('.container');

fetch('js/poke.json')
.then(data => data.json())
.then(objects => displayObjects(objects));

function displayObjects(pokemons){
    console.log(pokemons);

    pokemons.sort(function(a, b)
    {
        return a.id - b.id

    });

    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];

        container.innerHTML += displayPokemon(pokemon);
        
    }
}

function displayPokemon(pokemon){
    const htmlCode = `
        <div class="card">
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.imgShiny}">
        </div>
    
    `;
    return htmlCode;
}
