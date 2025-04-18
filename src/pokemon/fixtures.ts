import Pokemon from "./Pokemon.js";

const plusle = new Pokemon(
  {
    pokeIndex: 311,
    name: "Plusle",
    imageUrl: "http://plusle.com/plusle.webp",
    isCaptured: false,
  },
  () => "plusleId",
);

const minun = new Pokemon(
  {
    pokeIndex: 312,
    name: "Minun",
    imageUrl: "http://minun.com/minun.webp",
    isCaptured: true,
  },
  () => "minunId",
);

export { plusle, minun };
