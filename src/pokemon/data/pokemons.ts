import Pokemon from "../Pokemon.js";

const shroomish = new Pokemon(
  285,
  "Shroomish",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png",
);

const snom = new Pokemon(
  872,
  "Snom",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png",
);

const joltik = new Pokemon(
  595,
  "Joltik",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png",
);

const escavalier = new Pokemon(
  589,
  "Escavalier",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png",
);

const pokemons: Pokemon[] = [shroomish, snom, joltik, escavalier];

export default pokemons;
