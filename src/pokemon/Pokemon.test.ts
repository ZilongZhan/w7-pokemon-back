import Pokemon from "./Pokemon.js";
import { PokemonStructure } from "./types.js";

describe("Given a Pikachu", () => {
  describe("When it is instanced as a Pokemon", () => {
    const pikachuStructure = {
      pokeIndex: 25,
      name: "Pikachu",
      imageUrl: "http://pikachu.com/pikachu.webp",
    } as Omit<PokemonStructure, "id" | "isCaptured">;

    test("Then it should be called 'Pikachu'", () => {
      const expectedName = "Pikachu";

      const pikachu = new Pokemon({
        pokeIndex: 0,
        name: pikachuStructure.name,
        imageUrl: "",
        isCaptured: false,
      });

      expect(pikachu.name).toBe(expectedName);
    });

    test("Then it should be pokemon number 25", () => {
      const expectedPokeIndex = 25;

      const pikachu = new Pokemon({
        pokeIndex: pikachuStructure.pokeIndex,
        name: "",
        imageUrl: "",
        isCaptured: false,
      });

      expect(pikachu.pokeIndex).toBe(expectedPokeIndex);
    });

    test("Then it should not be captured", () => {
      const pikachu = new Pokemon({
        pokeIndex: 0,
        name: "",
        imageUrl: "",
        isCaptured: false,
      });

      expect(pikachu.isCaptured).toBe(false);
    });
  });
});
