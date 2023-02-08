const API = 'https://pokeapi.co/api/v2/pokemon/';

const content = null || document.getElementById('pokedex');

async function getPokemons(urlAPI) {
    const response = await fetch(urlAPI);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const pokemons = await getPokemons(API);
        const pokemon = await getPokemons(`${API}${pokemons.results[0].name}`);

        let view = `
            ${pokemons.results.map(pokemon => `
                <div class="card">
                    <p> ${pokemon.name} </p>
                </div>
            `).slice(0, 10).join('')}            
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();