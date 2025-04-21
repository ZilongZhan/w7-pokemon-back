import Pokemon from "../Pokemon.js";

const shroomish = new Pokemon({
  pokeIndex: 285,
  name: "Shroomish",
  imageUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png",
  isCaptured: true,
  description:
    "Shroomish live in damp soil in the forests. They feed on decomposing leaves.",
  favoriteFood: "Rotting leaves and compost",
  habitat: "Damp forest floors",
});

const snom = new Pokemon({
  pokeIndex: 872,
  name: "Snom",
  imageUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png",
  isCaptured: false,
  description:
    "It eats snow that piles up on the ground. The more snow it eats, the bigger and more impressive the spikes on its back grow.",
  favoriteFood: "Fresh, powdery snow",
  habitat: "Cold, snowy mountains",
});

const joltik = new Pokemon({
  pokeIndex: 595,
  name: "Joltik",
  imageUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png",
  isCaptured: false,
  description:
    "Joltik attaches itself to larger Pokémon and absorbs static electricity, which it stores in an electric pouch.",
  favoriteFood: "Static electricity",
  habitat: "Underground caves and grassy fields",
});

const escavalier = new Pokemon({
  pokeIndex: 589,
  name: "Escavalier",
  imageUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png",
  isCaptured: false,
  description:
    "It charges its enemies with its pointed lances, then slashes at them with both lances.",
  favoriteFood: "Sap and tree juices",
  habitat: "Forests and woodlands",
});

const pokemons: Pokemon[] = [shroomish, snom, joltik, escavalier];

export default pokemons;
