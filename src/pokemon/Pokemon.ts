import { v4 as uuidv4 } from "uuid";
import { PokemonStructure } from "./types.js";

class Pokemon implements PokemonStructure {
  id: string;
  isCaptured: boolean;

  constructor(
    public pokeIndex: number,
    public name: string,
    public imageUrl: string,
    generateId: () => string = uuidv4,
  ) {
    this.id = generateId();
    this.isCaptured = false;
  }
}

export default Pokemon;
