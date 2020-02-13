/* eslint-disable no-shadow */
/* eslint-disable import/extensions */

import POKEMON from './data/pokemon/pokemon.js';
import {
  filter, order, searchPokemons, calculateCandies, top10,
} from './data.js';

// Declaración de variables
const nextView = document.querySelector('#next');
const welcome = document.querySelector('#welcome');
const header = document.querySelector('#header');
const main = document.querySelector('#main');
const sidebar = document.querySelector('#sidebar');
const pokemonSection = document.querySelector('#pokemon-section');
// const footer = document.querySelector('footer');

// Mostrar todos los pokemones
const allPokemones = document.querySelector('#all-pokemones');
const showPokemons = (POKEMON) => {
  let infoPokemon = '';
  POKEMON.forEach((obj) => {
    const card = document.createElement('div');
    card.setAttribute('id', 'card');
    card.setAttribute('class', 'card');
    infoPokemon = `<img src='${obj.img}'/> 
                     <p class='letter1'><b>${obj.name}</b></p>
                     <p class='letter2'>N° ${obj.num}</p>
                     <span> <img src="img/pokeball.png"> </span>
                     <p><span class='letter2'>Tipo:</span> <br> ${obj.type.join(' & ')}</p>
      `;
    allPokemones.appendChild(card);
    card.innerHTML = infoPokemon;

    // MODAL DE CADA POKEMON
    const showModalPokemon = (obj) => {
      let infoModalPokemon = '';
      const cardModal = document.createElement('div');
      cardModal.setAttribute('id', 'card-modal');
      cardModal.setAttribute('class', 'card-modal');
      infoModalPokemon = `<div class='information'>
                            <span class="close" id="close">&times;</span>
                            <p class='letter1'><b>${obj.name}</b></p>
                            <p class='letter2'>N° ${obj.num}</p>
                            <div>
                              <img src='${obj.img}'/> 
                            </div>
                            <div class='information2'>
                              <div class='extrainfo2'>
                                <p class="letter1">${obj.height}</p> 
                                <span class='letter2'>Altura</span>
                              </div>
                              <div class='extrainfo2'>
                                <p class="letter1">${obj.weight}</p> 
                                <span class='letter2'>Peso</span>
                              </div>
                              <div class='extrainfo2'> 
                                <p class="letter1">${obj.candy_count}
                                <img src="img/caramelo.png"></p>
                                <span class='letter2'> Caramelos</span> 
                              </div>
                            </div>
                            <p><span>Tipo:</span> ${obj.type.join(' & ')}</p>
                            <p class=""> <span>Hora de aparicion:</span> ${obj.spawn_time}</p>
                            <p><span>Debilidades: </span>${obj.weaknesses.join(', ')}</p>
                          </div>
              `;
      document.querySelector('#modal-pokemon').appendChild(cardModal);
      cardModal.innerHTML = infoModalPokemon;

      const close = document.querySelector('#close');
      close.addEventListener('click', () => {
        document.querySelector('#modal-pokemon').removeChild(cardModal);
      });
    };
    card.addEventListener('click', () => {
      showModalPokemon(obj);
      document.querySelector('#modal-pokemon').classList.remove('hide');
    });
  });
};

// Cambio de vista de bienvenido a pantalla principal
nextView.addEventListener('click', () => {
  welcome.classList.add('hide');
  header.classList.remove('hide');
  main.classList.remove('hide');
  sidebar.classList.remove('hide');
  pokemonSection.classList.remove('hide');
  // footer.classList.remove('hide');
  showPokemons(POKEMON);
});

// Selección y filtrado de tipos de pokemon
const typeSelector = document.getElementById('typeselector');
typeSelector.addEventListener('change', () => {
  allPokemones.innerHTML = '';
  const select = typeSelector.value;
  showPokemons(filter(POKEMON, 'type', select));
});

// Seleccion y filtrado por debilidades
const weaknessesSelector = document.getElementById('weaknesses-selector');
weaknessesSelector.addEventListener('change', () => {
  allPokemones.innerHTML = '';
  const select1 = weaknessesSelector.value;
  showPokemons(filter(POKEMON, 'weaknesses', select1));
});

// Orden por identificador y nombre
const orderSelector = document.getElementById('orderselector');
orderSelector.addEventListener('change', () => {
  allPokemones.innerHTML = '';
  const select2 = orderSelector.value;
  if (select2 === 'asc' || select2 === 'desc') {
    return showPokemons(order(POKEMON, 'id', select2));
  }
  return showPokemons(order(POKEMON, 'name', select2));
});

// Top 10 pokemones mas frecuentes
const topTen = document.getElementById('top-10');
topTen.addEventListener('click', () => {
  allPokemones.innerHTML = '';
  showPokemons(top10(POKEMON, 10));
});

// Busqueda de pokemon por nombre
const searchPokemon = document.getElementById('search-pokemon');
searchPokemon.addEventListener('input', () => {
  allPokemones.innerHTML = '';
  showPokemons(searchPokemons(POKEMON, searchPokemon.value));
});

// Cambio de vista a pokedex
const pokedex = document.getElementById('pokedex');
const evolutionSection = document.getElementById('evolution-section');
pokedex.addEventListener('click', () => {
  evolutionSection.classList.add('hide');
  sidebar.classList.remove('hide');
  pokemonSection.classList.remove('hide');
  // footer.classList.remove('hide');
});

// Barra lateral
const toggleBtn = document.querySelector('.toggle-btn');
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Cambio de vista a caramelos y evolucion
const candiesAndEvolution = document.getElementById('evolution-candies');
candiesAndEvolution.addEventListener('click', () => {
  evolutionSection.classList.remove('hide');
  sidebar.classList.add('hide');
  pokemonSection.classList.add('hide');
});

// Calcular el numero de caramelos para la siguiente evolucion
const evolution = document.getElementById('evolution');
const btnCalculate = document.getElementById('btn-calculate');
const namePokemon = document.getElementById('name-pokemon');
const numberOfCandies = document.getElementById('number-of-candies');

btnCalculate.addEventListener('click', (event) => {
  event.preventDefault();
  const candy = calculateCandies(POKEMON, namePokemon.value, numberOfCandies.value);
  const wantedPokemon = POKEMON.filter((obj) => obj.name.toLowerCase() === namePokemon.value);
  const nextEvolution = POKEMON.filter(
    (obj) => obj.name.toLowerCase() === wantedPokemon[0].next_evolution[0].name.toLowerCase(),
  );
  let showEvolution;
  wantedPokemon.forEach((obj) => {
    showEvolution = ` 
      <div class="evolution-card">
          <div class="boxEvolution">
             <div><p class="letter2"> A tu ${namePokemon.value}</p> 
             <img class="img-styles" src='${obj.img}'/> 
             <p class="letter2"> le faltan ${candy} caramelos para evolucionar a: </p>
             <img class="img-styles" src='${nextEvolution[0].img}'/> 
             <p class="letter2"> ${obj.next_evolution[0].name}</p>
          </div>
          </div>
          </div> `;
  });
  evolution.innerHTML = showEvolution;
});
