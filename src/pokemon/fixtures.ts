import Pokemon from "./Pokemon.js";

const plusle = new Pokemon(
  {
    pokeIndex: 311,
    name: "Plusle",
    imageUrl: "http://plusle.com/plusle.webp",
    isCaptured: false,
    description:
      "Plusle loves to cheer on its partners. Whenever it sees its partner in trouble, this Pokémon gives off a spark from its body.",
    favoriteFood: "Sweet berries full of electricity",
    habitat: "Grassy fields and open plains",
  },
  () => "plusleId",
);

const minun = new Pokemon(
  {
    pokeIndex: 312,
    name: "Minun",
    imageUrl: "http://minun.com/minun.webp",
    isCaptured: true,
    description:
      "Minun is more concerned about cheering on its teammates than about its own safety. It energizes its allies by creating showers of sparks.",
    favoriteFood: "Tangy berries rich in electrolytes",
    habitat: "Grassy fields and meadows",
  },
  () => "minunId",
);

export { plusle, minun };
