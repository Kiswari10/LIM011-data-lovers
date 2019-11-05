import POKEMON from './data/pokemon/pokemon.js';
import { filter } from './data.js';

const firstView = document.getElementById('first-view');
const secondView = document.getElementById('second-view');
const pokemonList = document.getElementById('pokemonList');
const btnStart = document.getElementById('btn-start');
const pokemonSection = document.getElementById('pokemonSection');

// Mostrar todos los pokemones
const mostrarPokemon = (arr) => {
  let showPokemon = '';
  arr.forEach((obj) => {
    showPokemon += ` 
<div class="wrap">
  <div class="tarjeta-wrap">
    <div class="tarjeta">
      <div class='box adelante'>
        <img class="img-styles" src='${obj.img}'/>
        <p><b>${obj.name}</b></p>
        <p>N° ${obj.num}</p>
      </div> 

      <div class='box atras' id='atras'> 
        <p><b>${obj.name}</b></p>
        <p>N° ${obj.num}</p>
        <p>Altura: ${obj.height}</p>
        <p>Peso: ${obj.weight}</p>
        <p>Tipo:${obj.type}</p>
        <p>Debilidades:${obj.weaknesses}</p>
      </div>

    </div>

  </div>
</div> `;
  });
  pokemonList.innerHTML = showPokemon;
};

// cambio de vista de pantalla de inicio a pokedex
btnStart.addEventListener('click', () => {
  firstView.classList.add('hide');
  secondView.classList.remove('hide');
  pokemonSection.classList.remove('hide');
  mostrarPokemon(POKEMON);
});
const filterList = document.getElementById('filterList');
const weaknessesList = document.getElementById('weaknessesList');

// cambio de vista a pokedex
const btnPokedex = document.getElementById('btn-pokedex');
btnPokedex.addEventListener('click', () => {
  firstView.classList.add('hide');
  filterList.classList.add('hide');
  weaknessesList.classList.add('hide');
  secondView.classList.remove('hide');
  pokemonSection.classList.remove('hide');
  mostrarPokemon(POKEMON);
});
// cambio de vista a tipos
const btnTypes = document.getElementById('btn-types');
btnTypes.addEventListener('click', () => {
  firstView.classList.add('hide');
  secondView.classList.remove('hide');
  filterList.classList.remove('hide');
  weaknessesList.classList.remove('hide');
  pokemonSection.classList.remove('hide');
  mostrarPokemon(POKEMON);
});
// Seleccion y filtrado de tipos de pokemon
const typeSelector = document.getElementById('typeselector');
typeSelector.addEventListener('change', () => {
  const select = typeSelector.value;
  mostrarPokemon(filter(POKEMON, select, 'type'));
});
// Seleccion y filtrado por debilidades
const weaknessesSelector = document.getElementById('weaknesses-selector');
weaknessesSelector.addEventListener('change', () => {
  const select1 = weaknessesSelector.value;
  mostrarPokemon(filter(POKEMON, select1, 'weaknesses'));
});
