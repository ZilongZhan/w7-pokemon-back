import { v4 as uuidv4 } from "uuid";
import { PokemonData, PokemonStructure } from "./types.js";

class Pokemon implements PokemonStructure {
  public id: string;
  public pokeIndex: number;
  public name: string;
  public imageUrl: string;
  public isCaptured: boolean;
  public description: string;
  public favoriteFood: string;
  public habitat: string;

  constructor(
    {
      pokeIndex,
      name,
      imageUrl,
      isCaptured,
      description,
      habitat,
      favoriteFood,
    }: PokemonData,
    generateId: () => string = uuidv4,
  ) {
    this.id = generateId();
    this.pokeIndex = pokeIndex;
    this.name = name;
    this.imageUrl = imageUrl;
    this.isCaptured = isCaptured;
    this.description = description;
    this.favoriteFood = favoriteFood;
    this.habitat = habitat;
  }
}

export default Pokemon;
