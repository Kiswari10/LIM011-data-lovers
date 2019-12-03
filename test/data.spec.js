/* eslint-disable object-curly-newline */
// importamos la función `example`
import { filter, order, searchPokemons, top10, calculateCandies } from '../src/data';

const firstInput = [
  { id: 1, name: 'Bulbasaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 2, name: 'Ivysaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 3, name: 'Venusaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 4, name: 'Charmander', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 5, name: 'Charmeleon', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
];
const secondInput = [
  { id: 2, name: 'Ivysaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 3, name: 'Venusaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 1, name: 'Bulbasaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 5, name: 'Charmeleon', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 4, name: 'Charmander', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
];
const firstOutput = [
  { id: 1, name: 'Bulbasaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 2, name: 'Ivysaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 3, name: 'Venusaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
];
const secondOutput = [
  { id: 4, name: 'Charmander', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 5, name: 'Charmeleon', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
];
const thirdOutput = [
  { id: 5, name: 'Charmeleon', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 4, name: 'Charmander', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 3, name: 'Venusaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 2, name: 'Ivysaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 1, name: 'Bulbasaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
];
const fourthOutput = [
  { id: 1, name: 'Bulbasaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 4, name: 'Charmander', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 5, name: 'Charmeleon', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 2, name: 'Ivysaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 3, name: 'Venusaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
];
const fifthOutput = [
  { id: 3, name: 'Venusaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 2, name: 'Ivysaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 5, name: 'Charmeleon', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 4, name: 'Charmander', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 1, name: 'Bulbasaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
];
const sixthOutput = [
  { id: 1, name: 'Bulbasaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 2, name: 'Ivysaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 3, name: 'Venusaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 4, name: 'Charmander', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 5, name: 'Charmeleon', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
];

describe('filter', () => {
  it('debería ser una función', () => {
    expect(typeof filter).toBe('function');
  });
  describe('filter', () => {
    it('debería retornar un array con los pokemones de tipo hierba', () => {
      expect(filter(firstInput, 'type', 'Grass')).toEqual(firstOutput);
    });
    it('debería retornar un array con los pokemones con debilidad agua', () => {
      expect(filter(firstInput, 'weaknesses', 'Water')).toEqual(secondOutput);
    });
  });
});
describe('order', () => {
  it('debería ser una función', () => {
    expect(typeof order).toBe('function');
  });
  describe('order', () => {
    it('debería retornar un array con los pokemones ordenados en forma descendente por id', () => {
      expect(order(secondInput, 'id', 'desc')).toEqual(thirdOutput);
    });
    it('debería retornar un array con los pokemones ordenados por nombre a-z', () => {
      expect(order(secondInput, 'name', 'a-z')).toEqual(fourthOutput);
    });
    it('debería retornar un array con los pokemones ordenados por nombre z-a', () => {
      expect(order(secondInput, 'name', 'z-a')).toEqual(fifthOutput);
    });
    it('debería retornar un array con los pokemones ordenados en forma ascendente por id', () => {
      expect(order(secondInput, 'id', 'asc')).toEqual(sixthOutput);
    });
  });
});
const searchInput = [
  { id: 3, name: 'Venusaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 2, name: 'Ivysaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 4, num: '004', name: 'Charmander', type: ['Fire'], height: '0.61 m', weight: '8.5 kg', weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 6, num: '006', name: 'Charizard', type: ['Fire', 'Flying'], height: '1.70 m', weight: '90.5 kg', weaknesses: ['Water', 'Electric', 'Rock'] },
];
const searchOutput = [
  { id: 4, num: '004', name: 'Charmander', type: ['Fire'], height: '0.61 m', weight: '8.5 kg', weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 6, num: '006', name: 'Charizard', type: ['Fire', 'Flying'], height: '1.70 m', weight: '90.5 kg', weaknesses: ['Water', 'Electric', 'Rock'] },
];
describe('searchPokemons', () => {
  it('debería retornar un array con los pokemones cuyo nombre empiecen con c', () => {
    expect(searchPokemons(searchInput, 'c')).toEqual(searchOutput);
  });
});
const spawnchanceInput = [
  { id: 4, name: 'Charmander', type: ['Fire'], avg_spawns: 25.3, weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 5, name: 'Charmeleon', type: ['Fire'], avg_spawns: 1.2, weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 41, num: '041', name: 'Zubat', type: ['Poison', 'Flying'], avg_spawns: 652, weaknesses: ['Electric', 'Ice', 'Psychic', 'Rock'] },
];
const spawnchanceOutput = [
  { id: 41, num: '041', name: 'Zubat', type: ['Poison', 'Flying'], avg_spawns: 652, weaknesses: ['Electric', 'Ice', 'Psychic', 'Rock'] },
];
describe('top10', () => {
  it('debería retornar un array con el pokemon mas frecuente segun propiedad avg_spawn', () => {
    expect(top10(spawnchanceInput, 1)).toEqual(spawnchanceOutput);
  });
});

const pokemonCandyTest = [
  { id: 4, name: 'Charmander', type: ['Fire'], candy_count: 25, weaknesses: ['Water', 'Ground', 'Rock'] },
];
describe('calcular cantidad de caramelos para evolucionar', () => {
  it('debería retornar un array con los pokemones ordenados por propiedad candy_count', () => {
    expect(calculateCandies(pokemonCandyTest, 'Charmander', 21)).toEqual(4);
  });
});
