const API = 'https://pokeapi.co/api/v2/pokemon/';

const content = null || document.getElementById('pokedex');

async function getPokemons() {
    const response = await fetch(`${API}`);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const pokemons = await getPokemons(API);
        const pokemon = await getPokemons(`${API}/${pokemons.results[0].name}`);

        let view = `
            ${pokemon.results.map(pokemon => `
            <ul>
                <li> ${pokemon.name} </li>
                <li> ${pokemon.url} </li>
            </ul>
            `).slice(0, 10).join('')}            
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();