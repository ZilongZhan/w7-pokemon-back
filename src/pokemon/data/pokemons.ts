import Pokemon from "../Pokemon.js";

const shroomish = new Pokemon({
  pokeIndex: 285,
  name: "Shroomish",
  imageUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png",
  isCaptured: true,
});

const snom = new Pokemon({
  pokeIndex: 872,
  name: "Snom",
  imageUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png",
  isCaptured: false,
});

const joltik = new Pokemon({
  pokeIndex: 595,
  name: "Joltik",
  imageUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png",
  isCaptured: false,
});

const escavalier = new Pokemon({
  pokeIndex: 589,
  name: "Escavalier",
  imageUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png",
  isCaptured: false,
});

const pokemons: Pokemon[] = [shroomish, snom, joltik, escavalier];

export default pokemons;
